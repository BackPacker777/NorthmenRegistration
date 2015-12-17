/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.11
 *  CREATED: 11.25.2015
 *  PURPOSE: Register Northmen!
 */

"use strict";

const sendgrid = require('sendgrid')('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');

class MailData {
    constructor(filePath) {
        const email = new sendgrid.Email();
        MailData.sendMail(email, filePath);
    }

    static sendMail(email, filePath) {
        email.addTo("hbates@northmen.org");
        email.setFrom("NORTHMEN-REGISTRATION@PETOSKEYSCHOOLS.ORG");
        email.setSubject("Someone wants to be a Northmen!");
        email.setText('Please see attachment');
        email.addFile({
            path: filePath
        });
        sendgrid.send(email);
    }
}

module.exports = MailData;