this.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Gojo",
  description: "Cách liên lạc với admin",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
  usePrefix: 'false',
  images: []
};

this.run = async ({ api: { shareContact }, event: { threadID, messageReply, senderID, mentions, type }, args }) => {
  let id = Object.keys(mentions).length > 0 ? Object.keys(mentions)[0].replace(/\&mibextid=ZbWKwL/g, '') : args[0] !== undefined ? isNaN(args[0]) ? await global.utils.getUID(args[0]) : args[0] : senderID;
  if (type === "message_reply") id = messageReply.senderID;
  shareContact("Liên hệ Admin !", 100050076122346, threadID);
};
