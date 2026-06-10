import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initial: T): [T, (v: T | ((p: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initial
    try {
      const raw = window.localStorage.getItem(key)
      if (raw == null) return initial
      return JSON.parse(raw) as T
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore quota / private mode
    }
  }, [key, value])

  return [value, setValue]
}

export function maybeResetAll() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.has('reset')) {
    Object.keys(window.localStorage)
      .filter(k => k.startsWith('we:'))
      .forEach(k => window.localStorage.removeItem(k))
    params.delete('reset')
    const search = params.toString()
    const url = window.location.pathname + (search ? '?' + search : '') + window.location.hash
    window.history.replaceState({}, '', url)
  }
}
