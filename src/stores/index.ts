import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'index',
  persist: true,
  state: () => ({
    // light || dark
    mode: 'dark',
    arModel: '',
    showMenu: false
  }),
})
