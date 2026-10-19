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

class LunillaDB extends Dexie {
  install!: Table<InstallRecord, string>
  vault!: Table<VaultRecord, string>

  constructor() {
    super('lunilla')
    this.version(1).stores({
      install: 'id',
      vault: 'id',
    })
  }
}

let current = new LunillaDB()

export function database(): LunillaDB {
  return current
}

export async function eraseDatabase(): Promise<void> {
  await current.delete()
  current = new LunillaDB()
}
