/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.11
 *  CREATED: 11.25.2015
 *  PURPOSE: Register Northmen!
 */

"use strict";

class ProcessData {
    constructor(formData) {
        ProcessData.processFormData(formData);
    }

    static processFormData(formData) {
        for (let key in formData) {
            console.log(key + "," + formData[key]);
        }
    }
}

module.exports = ProcessData;