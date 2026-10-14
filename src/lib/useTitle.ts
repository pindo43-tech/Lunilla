import { useEffect } from 'react'
import { brandName, useDiscreet } from './discreet.ts'

export function useTitle(title: string): void {
  useEffect(() => {
    document.title = title
  }, [title])
}

export function useBrandTitle(page?: string): void {
  const brand = brandName(useDiscreet())
  useTitle(page ? `${page} · ${brand}` : brand)
}
