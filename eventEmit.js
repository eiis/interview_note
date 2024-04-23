class EventEmitter {
  constructor() {
    // 维护事件及监听者
    this.listeners = {};
  }

  /**
   * 注册事件监听者
   * @param {String} type 事件类型
   * @param {Function} cb 回调函数
   */
  on(type, cb) {
    if (!this.listeners[type]) this.listeners[type] = [];

    this.listeners[type].push(cb);
  }

  /**
   * 发布事件
   * @param {String} type 事件类型
   * @param  {...any} args 参数列表，把emit传递的参数赋给回调函数
   */
  emit(type, ...args) {
    if (this.listeners[type]) {
      this.listeners[type].forEach((cb) => {
        cb(...args);
      });
    }
  }

  /**
   * 移除某个事件的一个监听者
   * @param {String} type 事件类型
   * @param {Function} cb 回调函数
   */
  off(type, cb) {
    if (this.listeners[type]) {
      const targetIndex = this.listeners[type].findIndex((item) => item === cb);
      if (targetIndex !== -1) this.listeners[type].splice(targetIndex, 1);

      if (this.listeners[type].length === 0) delete this.listeners[type];
    }
  }
}
// 创建事件管理器实例
const ee = new EventEmitter();
// 注册事件监听者
ee.on(
  "设计模式",
  (fn1 = function (price) {
    console.log(`HearLing订阅设计模式这本书的价格是:${price}`);
  })
);
ee.on("你不知道JavaScript", (price) => {
  console.log(`HearLing订阅你不知道JavaScript这本书的价格是:${price}`);
});
ee.emit("设计模式", 100); // 输出HearLing订阅设计模式这本书的价格是:100

ee.off("设计模式", fn1);
ee.emit("设计模式"); // 此时事件监听已经被移除，没有console.log
