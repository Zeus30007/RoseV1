const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoReading = true //auto recording (true to on, false to off)
global.autoTyping = false //auto tying (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ownernomer = "918618971837" //ur owner number2
global.ownername = "NATHAN♱" //ur owner name
global.ytname = "YT: " //ur yt chanel name
global.socialm = "GitHub: " //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "⨺⃝𝚁𝙾𝚂𝙴𓃦"
global.ownernumber = '918618971837'
global.ownername = '⨺⃝𝙼𝙸𝚁𝙰𝙽 𝙵𝙾𝚇𓃦'
global.ownerNumber = ["48699514053"]
global.ownerweb = ""
global.websitex = ""
global.wagc = ""
global.themeemoji = '☠️'
global.wm = "ᴍᴀɪᴋɪ Bot Inc."
global.botscript = 'https://github.com/Zeus30007/Mello' //script link
global.packname = "Hail ⨺⃝𝙼𝙸𝚁𝙰𝙽 𝙵𝙾𝚇𓃦"
global.author = "⨺⃝the supreme force"
global.creator = "918618971837"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
