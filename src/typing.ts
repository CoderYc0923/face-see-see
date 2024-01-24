export interface MenuItem {
  label: string,
  value: string
}

export type Menu = MenuItem[]

export type BaseMap<K extends string | number | symbol, V> = {
  [key in K]: V
}