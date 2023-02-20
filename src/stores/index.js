import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { historyStore } from "./modules/history"

const historyStoreDev = devtools(historyStore)

export const useHistoryStore = create(historyStoreDev)
