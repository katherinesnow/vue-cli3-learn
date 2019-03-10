<template>
    <div class="message-action">
        <h3 class="message-thread-heading">{{ thread.name }}</h3>
        <ul class="message-list" ref="list">
            <Message
                v-for="message in messages"
                :key="message.id"
                :message="message"
            ></Message>
        </ul>
        <textarea
            class="message-composer"
            v-model="text"
            @keyup.enter="sendMessage"
        ></textarea>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Message from './Message.vue'

export default {
    name: 'MessageSection',
    components: {
        Message,
    },
    data() {
        return {
            text: '',
        }
    },
    computed: {
        ...mapGetters('chat', {
            thread: 'currentThread',
            messages: 'sortedMessages',
        }),
    },
    methods: {
        ...mapActions('chat', {
            sendMessage(dispatch) {
                const { text, thread } = this
                if (text.trim()) {
                    dispatch('sendMessage', {
                        text,
                        thread,
                    })
                    this.text = ''
                }
            },
        }),
    },
}
</script>
