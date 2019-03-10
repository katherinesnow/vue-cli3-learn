import * as api from '../../../api/chat'

export default {
    getAllMessages({ commit }) {
        // 模拟异步请求数据方法：api.getAllMessages
        api.getAllMessages((messages) => {
            commit('receiveAll', messages)
        })
    },
    /**
     * [switchThread 切换聊天用户]
     * @param  {[type]} options.commit [description]
     * @param  {[type]} payload        [description]
     * @return {[type]}                [description]
     */
    switchThread({ commit }, payload) {
        commit('switchThread', payload)
    },
    sendMessage({ commit }, payload) {
        api.createMessage(payload, (message) => {
            commit('receiveMessage', message)
        })
    },
}
