import type { Menu } from "@/typing"
import getMockData from "../configs/mock"

/**
 * 判断模式的核心类
 */
class UseCore {
  arModel: string
  menuData: Menu
  actionClass: any
  constructor(arModel: string) {
    this.arModel = arModel
    this.init()
  }

  init() {
    this.getCurrentDataMenu()
    this.getCurrentActionClass()
  }

  /**
   * 获取当前模式下的菜单数据
   */
  getCurrentDataMenu() {
    this.menuData = getMockData(this.arModel)
  }

  /**
   * 获取当前模式下的操作逻辑
   */
  getCurrentActionClass() {

  }
}

export default UseCore