import { commands } from "../utils/api.js"

export const commandExists = (command) => {
  const isExist = commands.find((elm) => elm.command === command)

  return !!isExist
}

export const executeCommand = (command) => { }
