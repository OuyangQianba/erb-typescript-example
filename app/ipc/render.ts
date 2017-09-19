import { remote } from 'electron'
const { ipcMain } = remote
import { CallerProxy } from "./proxy"

const callerProxy = new CallerProxy(ipcMain)

export class IPCProxy {
  constructor() {

  }
  active() {
    console.log("call active @main_process")
    return callerProxy.invoke("active")
  }
}