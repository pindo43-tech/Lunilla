// Almacenamiento cifrado local (AES-GCM + PBKDF2), patrón inspirado en youperiod.app (MIT, Kyle Simpson).
const KEY = 'ciclo.vault.v1';
const enc = new TextEncoder(), dec = new TextDecoder();
const b64 = u => { const a = new Uint8Array(u); let s = ''; for (let i = 0; i < a.length; i += 0x8000) s += String.fromCharCode.apply(null, a.subarray(i, i + 0x8000)); return btoa(s); }; // sin spread: evita stack overflow con historiales grandes
const ub64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function derive(pin, salt) {
  const base = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 250000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
export const Vault = {
  exists: () => !!localStorage.getItem(KEY),
  key: null, salt: null,
  async open(pin) {
    const raw = localStorage.getItem(KEY);
    if (!raw) { this.salt = crypto.getRandomValues(new Uint8Array(16)); this.key = await derive(pin, this.salt); return { days: {} }; }
    const o = JSON.parse(raw); this.salt = ub64(o.s); this.key = await derive(pin, this.salt);
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ub64(o.iv) }, this.key, ub64(o.d)); // lanza si PIN incorrecto
    return JSON.parse(dec.decode(pt));
  },
  async save(data) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, this.key, enc.encode(JSON.stringify(data)));
    localStorage.setItem(KEY, JSON.stringify({ s: b64(this.salt), iv: b64(iv), d: b64(ct) }));
  },
  wipe() { localStorage.removeItem(KEY); },
};
