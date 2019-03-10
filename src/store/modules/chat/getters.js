// export const currentThread = (state) => {
//     return state.currentThreadID ? state.threads[state.currentThreadID] : {}
// }

// export {
//     /**
//      * [threads 返回联系人用户数据,保存再state.threads]
//      * @param  {[type]} state [description]
//      * @return {[type]}       [description]
//      */
//     threads(state) {
//         return state.threads
//     },
//     /**
//      * [currentThread 返回当前选择的聊天用户]
//      * @param  {[type]} state [description]
//      * @return {[type]}       [description]
//      */
//     currentThread(state) {
//         return state.currentThreadID ? state.threads[state.currentThreadID] : {}
//     },
//     *
//      * [unreadCount 返回消息未读数量]
//      * @param  {[type]} options.threads [description]
//      * @return {[type]}                 [description]

//     unreadCount({ threads }) {
//         return Object.keys(threads).reduce((count, id) => {
//             // TODO: ESLint config
//             console.log(222)
//             return threads[id].lastMessage.isRead ? count : count + 1
//         }, 0)
//     },
//     currentMessages(state) {
//         // ES6 模块，顶层的this 关键字返回undefined, 不指向window，也就是在ES6模块顶层使用this 是无意义的.
//         这个区别于CommonJs, CommonJS的顶层作用域的this指向当前模块.
//         以上是ES6模块和CommonJS模块的区别的关键点之一.
//         所以此处不能使用this，访问公用的ES6 export 方法. 因此全部注释采用了下面的方法，是可以获取到内部的变量使用的呢~
//         const thread = this.currentThread(state)
//         return thread.messages
//             ? thread.messages.map(id => state.message[id])
//             : []
//     },
//     sortedMessages(state, getters) {
//         const messages = getters.currentMessages
//         return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
//     },
// }
export const threads = state => state.threads

export const currentThread = (state) => {
  return state.currentThreadID
    ? state.threads[state.currentThreadID]
    : {}
}

export const currentMessages = (state) => {
  const thread = currentThread(state)
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : []
}

export const unreadCount = (state) => {
  // TODO param as { threads } cause eslint error:upper scope has be defined
  return Object.keys(state.threads).reduce((count, id) => {
    // TODO: ESLint config
    console.log('ESLint config')
    return state.threads[id].lastMessage.isRead ? count : count + 1
  }, 0)
}

export const sortedMessages = (state, getters) => {
  const messages = getters.currentMessages
  // console.log(messages, '222222222222222222222')
  return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
}
