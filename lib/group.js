const fs = require('fs')

exports.groupResponse_Remove = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{
text: `โญโโโโโโโโโโโโโโโโโขเธด.โขเฎ
โ *๐Leave To ${metadata.subject}*    
โโฌโโโโโโโโโโโโโพโขเธด.โขโฝ
โโคSayonara๐ @${num.split("@")[0]}
โโ 
โโโโโโโโโโโโโโพโขเธด.โขโฝ`,
buttons: button,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `โญโโโโโโโโโโโโโโโโโขเธด.โขเฎ
โ *๐Welcome To ${metadata.subject}*    
โโฌโโโโโโโโโโโโโพโขเธด.โขโฝ
โโคHaii๐ @${num.split("@")[0]}
โโ 
โโโโ[ *ษชษดแดสแด* ]โโ
โโ ๐ษดแดแดแด:
โโ ๐แดแดแดส:
โโ โฝสแดสษช:
โโ ๐ขแดsแดแดแด: 
โโโโโโโโโโโโโโพโขเธด.โขโฝ`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan jadi admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}