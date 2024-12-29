require("./global")

const mess = {
   wait: "`[ # ] Tunggu Lagi Proses Kontol`",
   success: "`[ # ] Sukses Full Veri-veri good`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "`[ # ] Teks Nya Mana Kak?`",
       link: "`[ # ] Link Nya Mana Kak?`",
   },
   error: {
       fitur: "`[ # ] sorry errors processing commands contact Developer Bot Agar Bi`",
   },
   only: {
       group: "`[ # ] Fitur is only for Group`",
       private: "`[ # ] Fitur Ini Cuma Bisa Di Akses Di Privat Chat`",
       owner: "`[ # ] This is only for my owner `",
       admin: "`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Aetmin`",
       badmin: "`[ # ] Feature can only be used when bot is admin or by ☠︎︎༒︎~𝑇𝛥𝛫𝛥༒︎☠`",
       premium: "`[ # ] Feature can only be used by premium Members or ☠︎︎༒︎~𝑇𝛥𝛫𝛥༒︎☠︎`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})