
const TelegramBot = require('node-telegram-bot-api');
const token = '5147084829:AAEZDfGwowM64JLXi4a6BmzkgQYiO4h5wCw';

const bot = new TelegramBot(token, {
    polling: true,
    can_invite_users : true
});

bot.on('message', function(msg){
    // console.log('Received a message');
    // const res = `Hi ${msg.from.first_name}! I recieved your message: ${msg.text}`;
    // bot.sendMessage(msg.chat.id, res);
    console.log(msg.from.username);
    // New Members Welcome Message
    if(msg.new_chat_members){
        msg.new_chat_members.forEach( key => {
            if(key.username !== 'dao_announcement_bot')
            {
                bot.sendMessage(msg.chat.id, `Welcome ${key.first_name}`);
            }
        });
    }

    if(msg.text === '/support'){
        bot.sendMessage(msg.chat.id, `Create custom message by using this command\n /setannouncement - set a message that will be sent to groups \n /deleteannouncement - delete announcement message`);
    }

    if(msg.text === '/start'){
        bot.sendMessage(msg.chat.id, `Welcome to DAO Announcement Bot\nIt is created to create announcement \nand other custom message. \nFor other information, search CODEV PH`);
    }
});
