'use strict';

const StreamStatus = require('./StreamStatus.js');
const StreamChat = require('./StreamChat.js');


const LiveCodingAPI = class LiveCodingAPI {
    constructor() {
        this.streamStatus = new StreamStatus();
        this.streamChat = new StreamChat();
    }

    isStreamLive(url) {
        this.streamStatus.requestStream(url);
    }

    getChatMessages(url) {
        this.streamChat.loginToLiveCoding();
    }

};

module.exports = LiveCodingAPI;