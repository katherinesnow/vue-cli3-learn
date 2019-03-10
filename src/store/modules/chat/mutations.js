import Vue from 'vue'

function setCurrentThread(state, id) {
    state.currentThreadID = id
    if (!state.threads[id]) {
        debugger
    }

    // mark thread as read
    state.threads[id].lastMessage.isRead = true
}

/**
 * [addMessage 给每个用户线程threads添加属性messages数据]
 * @param {[type]} state   [description]
 * @param {[type]} message [description]
 */
function addMessage(state, message) {
    message.isRead = message.threadID === state.currentThreadID
    const thread = state.threads[message.threadID]
    if (!thread.messages.some(id => id === message.id)) {
        thread.messages.push(message.id)
        thread.lastMessage = message
    }
    Vue.set(state.messages, message.id, message)
}

function createThread(state, id, name) {
    Vue.set(state.threads, id, {
        id,
        name,
        messages: [],
        lastMessage: null,
    })
}
export default {
    switchThread(state, id) {
        setCurrentThread(state, id)
    },
    /**
     * [receiveAll 初始化获取所有联系人和聊天数据]
     * @param  {[type]} state   [description]
     * @param  {[type]} message [description]
     * @return {[type]}         [description]
     */
    receiveAll(state, messages) {
        let latestMessage
        messages.forEach((message) => {
            // create new thread if the thread doesn't exist
            if (!state.threads[message.threadID]) {
                createThread(state, message.threadID, message.threadName)
            }

            // mark the latest message
            // 如有没有最新消息，将message 赋值给最新消息
            // 如果有最新消息，但是有更新的消息的时间戳> 原来标记的最新时间戳,并重新赋值最新消息对象
            if (!latestMessage || message.timestamp > latestMessage.timestamp) {
                latestMessage = message
            }

            addMessage(state, message)
        })
        setCurrentThread(state, latestMessage.threadID)
    },
    receiveMessage(state, message) {
        addMessage(state, message)
    },
}
