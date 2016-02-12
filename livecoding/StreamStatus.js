'use strict';

const cheerio = require('cheerio');
const request = require('request');


const StreamStatus = class {
    constructor() {
        // Empty.
    }

    requestStream(url) {
        var self = this;

        request(url, function(error, response, html) {
            if (!error) {
                self.getStreamStatus(html);

            } else {
                console.log('ERROR: ' + error);
            }
        });
    }

    getStreamStatus(html) {
        var stream = {isLive: null};
        var liveStatus;
        var $ = cheerio.load(html);

        $('#video-streaming-status-label').filter(function() {
            var data = $(this);
            liveStatus = data.children().first();

            if (!liveStatus.hasClass('status-hide')) {
                stream.isLive = true;
                console.log('Stream is LIVE!');

            } else {
                stream.isLive = false;
                console.log('Stream is NOT live.');
            }
        });
    }

};

module.exports = StreamStatus;