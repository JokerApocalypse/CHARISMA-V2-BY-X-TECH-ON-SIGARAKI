require("./database/module")

//GLOBAL PAYMENT
global.storename = "☬𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨☬"
global.dana = "233536224016"
global.qris = "gada qris gw anjg"


// GLOBAL SETTING
global.owner = "233536225016"
global.namabot = "【☬𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇 ☬】"
global.nomorbot = "2348054470353"
global.namaCreator = "【☬𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨☬】"
global.linkyt = ""
global.autoJoin = false
global.antilink = false
global.versisc = '1.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = ''
global.isLink = 'https://whatsapp.com/channel/0029VauerXp2f3ERPtUjBy0u'
global.packname = "【☬𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇 ☬】"
global.author = "【☬𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨☬】"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})