import { create } from "zustand"
import { persist } from "zustand/middleware"

type Account = {
    id: string
    type: string
    token: string
}

type AccountContex = {
    account: Account | null
    login: (data: Account) => void
    logout: () => void
}


export const authContex = create<AccountContex>()(
    persist(
        (set) => (
            {
                account: null,
                login: (data) => set({account: data}),
                logout: () => set({account: null}),
            }
        ),
        {
            name: 'auth'
        }
))
