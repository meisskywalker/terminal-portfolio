export const historyStore = (set, get) => ({
  history: [],
  counter: 0,
  pustToHistory: (item) => {
    set((state) => ({
      history: [...state.history, item],
    }))
  },
  selectedHistory: () => {
    return get().history[(get().history.length - 1) - (get().counter - 1)]
  },
  increment: () => {
    set((state) => {
      if (state.history.length > 0) {
        const historyLength = state.history.length
        return {
          counter:
            historyLength - 1 === state.counter
              ? state.counter + 1
              : historyLength,
        }
      } else {
        return {
          counter: (state.counter = 0),
        }
      }
    })
  },
  decrement: () => {
    set((state) => ({
      counter: state.counter !== 0 ? state.counter - 1 : 0,
    }))
  },
})
