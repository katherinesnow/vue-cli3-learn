import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const chat = {
    namespaced: 'chat',
    state: {
        currentThreadID: null,
        threads: {
            /*
            id: {
              id,
              name,
              messages: [...ids],
              lastMessage
            }
            */
        },
        messages: {
            /*
            id: {
              id,
              threadId,
              threadName,
              authorName,
              text,
              timestamp,
              isRead
            }
            */
        },
    },
    mutations,
    actions,
    getters,
}
export default chat
