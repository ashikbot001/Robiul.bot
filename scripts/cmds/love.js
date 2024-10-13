module.exports = {
config: {
name: "love",
version: "1.0",
author: "ARYAN",
role: 0,
category: "fun",
guide: {

vi: "FUN",
en: "FUN"

		} 

	},
onStart: async function ({ api, event }) {
const data = ["এই সব প্রেম ভালোবাসা করতে চাইলে রবিউল বসের ইন বক্সে নক দে🫤🥰"];
return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);

	}

};
