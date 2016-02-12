'use strict';

const LiveCodingAPI = require('./livecoding/LiveCodingAPI');


const LiveCodingAPITest = new LiveCodingAPI();
LiveCodingAPITest.isStreamLive('https://www.livecoding.tv/udm/');
//LiveCodingAPITest.getChatMessages('https://www.livecoding.tv/accounts/login/');