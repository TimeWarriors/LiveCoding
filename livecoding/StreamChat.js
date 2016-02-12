'use strict';

const cheerio = require('cheerio');
const request = require('request');
const csrfLogin = require('csrf-login');


const StreamChat = class {
    constructor() {
        // Empty.
    }

    loginToLiveCoding() {
        console.log('Lets login to Livecoding! ...');

        csrfLogin({
            username: 'wk222as@student.lnu.se',
            password: "one4one2"

        }).then(function(result) {
            console.log('You are now logged in.');
            console.log(result.jar._jar.store.idx['livecoding.tv']['/']);

            info.request('/chat/udm/', function (error, response, body) {

                var $ = cheerio.load(body);
                $('.message-pane').filter(function() {

                    var data = $(this);
                    console.log(data.children().first());
                });

            });

        }).then(function(data) {
           console.log(data);

        }).catch(function (onError) {
            console.log('ERROR: ' + onError);
        });
    }

    getChatMessages() {
        console.log('Lets check amount of messages!');
        var chatURL = 'https://www.livecoding.tv/chat/udm';

        request(chatURL, function(error, response, html) {

            if (!error) {
                var $ = cheerio.load(html);
                var amount;
                var chat = {messages: 0};

                $('.message-pane').filter(function () {
                    var data = $(this);
                    amount = data.children().length;

                    if (amount > chat.messages) {
                        chat.messages = amount;
                        console.log('At least one new message has been posted!');

                    } else {
                        console.log('No new messages.');
                    }
                });
            }
        });
    }

};

module.exports = StreamChat;