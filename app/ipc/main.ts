import { ipcMain } from "electron"
import { CalleeProxy } from "./proxy"
const registerServices = {}



const calleeProxy = new CalleeProxy(ipcMain)
export function register(services: any, name = "main") {
  calleeProxy.register(name, services)
}
