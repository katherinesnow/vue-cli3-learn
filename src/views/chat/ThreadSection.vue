<template>
    <div class="thread-section">
        <div class="thread-count">
            <span v-show="unreadCount">
                Unread threads: {{ unreadCount }}
            </span>
        </div>
        <!-- 联系人用户列表 -->
        <ul class="thread-list">
            <Thread
                v-for="thread in threads"
                :key="thread.id"
                :thread="thread"
                :active="thread.id === currentThread.id"
                @switch-thread='switchThread'
            ></Thread>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Thread from './Thread.vue'

export default {
    name: 'ThreadSection',
    components: {
        Thread,
    },
    computed: mapGetters('chat', ['threads', 'currentThread', 'unreadCount']),
    methods: mapActions('chat', ['switchThread', 'getAllMessages']),
    created() {
        this.getAllMessages()
    },
}
</script>
