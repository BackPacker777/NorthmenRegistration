/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.10
 *  CREATED: 11.25.2015
 *  PURPOSE: Register Northmen!
 */

"use strict";

import LoadDataClass from './LoadDataClass';
import FadeStuffClass from './FadeStuffClass';
import AddDivClass from './AddDivClass';

class main {
    constructor(counter) {
        document.getElementById("studentZip").addEventListener("change", function() {main.loadZipData("student")}, false); //http://stackoverflow.com/questions/2373995/javascript-addeventlistener-event-fires-on-page-load
        document.getElementById("momZip").addEventListener("input", function() {main.loadZipData("mom")}, false);
        document.getElementById("dadZip").addEventListener("input", function() {main.loadZipData("dad")}, false);
        document.getElementById("guardianZip").addEventListener("input", function() {main.loadZipData("guardian")}, false);
        document.getElementById("date").innerText = main.setDate();
        main.counter = counter;
        main.fade("in", "date");
        main.fade("in", "ppsLogo");
        main.fadeHousing();
        main.fadeHomeless();
        main.fadeEllHelp();
        document.getElementById("livesWith").addEventListener("change", main.fadeHousing);
        document.getElementById("homeless").addEventListener("click", main.fadeHomeless);
        document.getElementById("ell").addEventListener("click", main.fadeEllHelp);
        document.getElementById("addSibling").addEventListener("click", function() {
            main.counter++;
            main.fadeSibling(main.counter);
        });
        document.getElementById("completed").addEventListener("click", main.docsAlert);
    }

    static setDate() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        //let weekDay = date.getDay(); //For future use!
        return month + "/" + day + "/" + year;
    }

    static loadZipData(whichPerson) {
        let zipData = new LoadDataClass();
        zipData.loadData("../data/ZipCodeDatabase.csv", function(finalData) {
            let zip = document.getElementById(whichPerson + "Zip").value;
            for (let i = 0; i < finalData.length; i++) {
                if (zip == finalData[i][0]) {
                    document.getElementById(whichPerson + "City").value = finalData[i][1];
                    document.getElementById(whichPerson + "State").value = finalData[i][2];
                }
            }
        console.log(document.getElementById(whichPerson + "City").value);
        });
    }

    static fade(direction, fadeWhat) {
        new FadeStuffClass(direction, fadeWhat).doFade();
    }

    static fadeHousing() {
        let livesWith = document.getElementById("livesWith");
        if (livesWith.options[livesWith.selectedIndex].value == 0 || livesWith.options[livesWith.selectedIndex].value == 1) {
            main.fade("out", "dadAddress");
            main.fade("out", "momAddress");
            main.fade("out", "guardianInfo");
            main.fade("out", "guardianAddress");
        } else if (livesWith.options[livesWith.selectedIndex].value == 2 || livesWith.options[livesWith.selectedIndex].value == 4) {
            main.fade("in", "dadAddress");
            main.fade("out", "momAddress");
            main.fade("out", "guardianInfo");
            main.fade("out", "guardianAddress");
        } else if (livesWith.options[livesWith.selectedIndex].value == 3 || livesWith.options[livesWith.selectedIndex].value == 5) {
            main.fade("out", "dadAddress");
            main.fade("in", "momAddress");
            main.fade("out", "guardianInfo");
            main.fade("out", "guardianAddress");
        } else if (livesWith.options[livesWith.selectedIndex].value == 6) {
            main.fade("out", "dadAddress");
            main.fade("out", "momAddress");
            main.fade("in", "guardianInfo");
            main.fade("in", "guardianAddress");
        }
    }

    static fadeHomeless() {
        let homeLess = document.getElementById("homeless");
        if (!(homeLess.checked)) {
            main.fade("out", "homelessResidence");
        } else if (homeLess.checked) {
            main.fade("in", "homelessResidence");
        }
    }

    static fadeEllHelp() {
        let ell = document.getElementById("ell");
        if (!(ell.checked)) {
            main.fade("out", "ellSupport");
        } else if (ell.checked) {
            main.fade("in", "ellSupport");
        }
    }

    static fadeSibling(counter) {
        new AddDivClass("sibling").addDiv(counter);
        main.fade("in", "sibRow" + counter);
    }

    static docsAlert() {
        alert('Additional documentation is required. Original or certified copy of birth certificate, ' +
            'immunizations must be up to date or we must have a waiver from the Health Department, and we require Proof of Residency.');
    }
}

window.onload = function () {
    new main(0);
};