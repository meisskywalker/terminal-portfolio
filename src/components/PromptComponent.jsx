import { useCallback, useEffect, useState } from "react"

import { commandExists } from "../services"

import { useHistoryStore } from "../stores"

export const Prompt = () => {
  const pushToHistory = useHistoryStore((state) => state.pustToHistory)
  const selectedHistory = useHistoryStore((state) => state.selectedHistory)
  const increment = useHistoryStore((state) => state.increment)
  const decrement = useHistoryStore((state) => state.decrement)

  const [hostname, setHostname] = useState("")
  const [command, setCommand] = useState("")
  const [isExist, setIsExist] = useState(false)

  const username = "guest"

  useEffect(() => {
    setHostname(location.hostname)
  }, [])

  useEffect(() => {
    const firstCommand = command.split(" ")[0]
    setIsExist(commandExists(firstCommand))
  }, [command])

  const handleInput = useCallback((event) => {
    setCommand(event.target.value)
  }, [])

  const handleRun = useCallback(
    (event) => {
      event.preventDefault()
      pushToHistory(command)
      setCommand("")
    },
    [command]
  )

  const handleKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 38) {
        increment()
        setCommand(selectedHistory() ? selectedHistory() : "")
      } else if (event.keyCode === 40) {
        decrement()
        setCommand(selectedHistory() ? selectedHistory() : "")
      }
    },
    [selectedHistory, command]
  )

  return (
    <div className='text-monokai-fg font-ubuntu-mono text-lg flex items-center'>
      <div className='inline-block'>
        <span className='text-monokai-orange'>{username}</span>@
        <span className='text-monokai-green'>{hostname}</span>:~$
      </div>
      <form className='ml-3 f-full' onSubmit={(event) => handleRun(event)}>
        <input
          className={`bg-transparent border-none outline-none w-full ${isExist ? "text-monokai-green" : ""
            }`}
          type='text'
          autoFocus={true}
          autoComplete='off'
          autoCapitalize='false'
          spellCheck='false'
          value={command}
          onChange={(event) => handleInput(event)}
          onKeyDown={(event) => handleKeyPress(event)}
        />
        <button className='d-none' type='submit'></button>
      </form>
    </div>
  )
}
