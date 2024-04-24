import { create } from 'zustand'

type AppStore = {
  drawer: boolean
  toggleDrawer: (toggle: boolean) => void
}

const useAppStore = create<AppStore>()((set) => ({
  drawer: false,
  toggleDrawer: (toggle: boolean) => set(() => ({ drawer: toggle })),
}))

export default useAppStore
