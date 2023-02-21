export const historyStore = (set, get) => ({
  history: [],
  counter: 0,
  pustToHistory: (item) => {
    set((state) => ({
      history: [item, ...state.history],
    }))
  },
  selectedHistory: () => {
    return get().history[get().counter - 1]
  },
  increment: () => {
    set((state) => {
      if (state.history.length > 0) {
        const historyLength = state.history.length
        return {
          counter:
            historyLength === state.counter
              ? historyLength
              : state.counter + 1,
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
