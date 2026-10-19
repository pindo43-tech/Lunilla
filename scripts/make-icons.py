#!/usr/bin/env python3
"""Draw the Lunilla icon: a rose crescent on cream. No third-party image library."""

import struct
import zlib
from pathlib import Path


def chunk(tag: bytes, data: bytes) -> bytes:
    crc = zlib.crc32(tag + data) & 0xFFFFFFFF
    return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", crc)


def save_png(path: Path, size: int, pixels: bytes) -> None:
    raw = bytearray()
    stride = size * 4
    for y in range(size):
        raw.append(0)
        raw.extend(pixels[y * stride : (y + 1) * stride])
    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(bytes(raw), 9))
    png += chunk(b"IEND", b"")
    path.write_bytes(png)


def render(size: int, maskable: bool) -> bytes:
    pixels = bytearray(size * size * 4)
    cx = (size - 1) / 2
    cy = (size - 1) / 2
    limit = size * (0.5 if maskable else 0.48)
    moon_r = size * (0.20 if maskable else 0.23)
    moon_cx = cx - size * 0.02
    cut_cx = moon_cx + moon_r * 0.62
    cut_r = moon_r * 0.78
    dot_x = cx + size * 0.22
    dot_y = cy - size * 0.22
    dot_r = size * 0.035
    for y in range(size):
        for x in range(size):
            dx = x - cx
            dy = y - cy
            inside = (dx * dx + dy * dy) <= limit * limit
            if maskable:
                color = (246, 213, 222, 255)
            elif inside:
                color = (251, 246, 240, 255)
            else:
                color = (0, 0, 0, 0)
            in_moon = (x - moon_cx) ** 2 + (y - cy) ** 2 <= moon_r * moon_r
            in_cut = (x - cut_cx) ** 2 + (y - cy) ** 2 <= cut_r * cut_r
            if in_moon and not in_cut and (maskable or inside):
                color = (143, 61, 86, 255)
            if (x - dot_x) ** 2 + (y - dot_y) ** 2 <= dot_r * dot_r and (maskable or inside):
                color = (47, 106, 80, 255)
            offset = (y * size + x) * 4
            pixels[offset : offset + 4] = bytes(color)
    return bytes(pixels)


def main() -> None:
    root = Path(__file__).resolve().parents[1] / "public" / "icons"
    root.mkdir(parents=True, exist_ok=True)
    save_png(root / "icon-192.png", 192, render(192, False))
    save_png(root / "icon-512.png", 512, render(512, False))
    save_png(root / "icon-512-maskable.png", 512, render(512, True))
    save_png(root / "apple-touch-icon.png", 180, render(180, True))


if __name__ == "__main__":
    main()
