import Dexie, { type Table } from 'dexie'

export interface InstallRecord {
  id: 'install'
  salt: string
  iterations: number
  canaryIv: string
  canaryCt: string
  createdAt: string
}

export interface VaultRecord {
  id: 'vault'
  iv: string
  ciphertext: string
  updatedAt: string
}

class MareaDB extends Dexie {
  install!: Table<InstallRecord, string>
  vault!: Table<VaultRecord, string>

  constructor() {
    super('marea')
    this.version(1).stores({
      install: 'id',
      vault: 'id',
    })
  }
}

let current = new MareaDB()

export function database(): MareaDB {
  return current
}

export async function eraseDatabase(): Promise<void> {
  await current.delete()
  current = new MareaDB()
}
