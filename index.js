const { Client, GatewayIntentBits } = require("discord.js")
require("dotenv").config()

const client = new Client({
    intents:[
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
}) 

client.on("ready", () => {
    console.log("Discord "+client.user.username+" ready!")
})

const random_num = () => {
    return Math.floor(Math.random() * 10)
}

client.on("messageCreate", async(message) => {   
    let foods = ['ผัดไทย', 'แกงเขียวหวานไก่', 'ข้าวมันไก่', 'ข้าวผัดกะเพรา', 'ส้มตำ', 'ไก่ผัดเม็ดมะม่วงหิมพานต์', 'หมูสะเต๊ะ', 'ต้มยำกุ้ง', 'ปอเปี๊ยะทอด', 'ต้มข่าไก่']
    if (message.content == 'หิวข้าวจังกินอะไรดี') {
        message.reply(foods[random_num()]) 
    }

    if (message.content == 'status') {
        message.reply("ประเทศกำลังปิดพัฒนา")
    }

    if (message.content == 'ลิ้งเชิญเพื่อน') {
        message.reply("https://discord.gg/FuYtqtKZTX")
    }

    if (message.content == '') {
        message.reply("")
    }
})

client.login(process.env.token)