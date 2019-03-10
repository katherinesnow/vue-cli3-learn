// 这里的初始化数据就可以当作是消息数据库
module.exports = [
    {
        id: 'm_1',
        threadID: 't_1', // 联系人用户ID
        threadName: 'Catherine', // 联系人用户昵称
        authorName: 'Catherine', // 聊天记录作者昵称
        text: 'Hi, welcome, How many?', // 聊天内容
        timestamp: Date.now() - 99999,
    },
    {
        id: 'm_2',
        threadID: 't_1',
        threadName: 'Catherine',
        authorName: 'duoduo',
        text: 'Two please.',
        timestamp: Date.now() - 89999,
    },
    {
        id: 'm_3',
        threadID: 't_1',
        threadName: 'Catherine',
        authorName: 'Catherine',
        text: 'This way. Here is your menu. Can I take your order or do you need a few more minutes?',
        timestamp: Date.now() - 79999,
    },
    {
        id: 'm_4',
        threadID: 't_2',
        threadName: 'duoduo',
        authorName: 'Bill',
        text: 'Hey Dave, want to get a beer after the conference?',
        timestamp: Date.now() - 69999,
    },
    {
        id: 'm_5',
        threadID: 't_2',
        threadName: 'duoduo',
        authorName: 'Bill',
        text: 'Totally!  Meet you at the hotel bar.',
        timestamp: Date.now() - 59999,
    },
    {
        id: 'm_6',
        threadID: 't_3',
        threadName: 'snow',
        authorName: 'Dead',
        text: 'Totally!  Meet you at the hotel bar.',
        timestamp: Date.now() - 49999,
    },
]
