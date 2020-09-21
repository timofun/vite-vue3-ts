import storage from './storage'

const getKey = (key: string): string => `__PROJECT_ADMIN_${key.toUpperCase()}__`

// token 相关
const TOKEN_KEY: string = getKey('token')
export const getStorageToken = (): string => storage.get(TOKEN_KEY, '') as string
export const setStorageToken = (v: string): void => storage.set(TOKEN_KEY, v)
export const removeStorageToken = (): void => storage.remove(TOKEN_KEY)

// collapsed 相关
export const COLLAPSED_OPEN = '1'
export const COLLAPSED_CLOSE = '2'
const COLLAPSED_KEY: string = getKey('collapsed')
export const getStorageCollapsed = (): string => storage.get(COLLAPSED_KEY, COLLAPSED_OPEN) as string
export const setStorageCollapsed = (v: string): void => storage.set(COLLAPSED_KEY, v)

// theme 相关
export const THEME_LIGHT = '1'
export const THEME_DARK = '2'
const THEME_KEY: string = getKey('theme')
export const getStorageTheme = (): string => storage.get(THEME_KEY, THEME_LIGHT) as string
export const setStorageTheme = (v: string): void => storage.set(THEME_KEY, v)
