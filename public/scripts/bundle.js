/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.10
	 *  CREATED: 11.25.2015
	 *  PURPOSE: Register Northmen!
	 */

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _LoadDataClass = __webpack_require__(1);

	var _LoadDataClass2 = _interopRequireDefault(_LoadDataClass);

	var _FadeStuffClass = __webpack_require__(2);

	var _FadeStuffClass2 = _interopRequireDefault(_FadeStuffClass);

	var _AddDivClass = __webpack_require__(3);

	var _AddDivClass2 = _interopRequireDefault(_AddDivClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main(counter) {
	        _classCallCheck(this, main);

	        document.getElementById("studentZip").addEventListener("change", function () {
	            main.loadZipData("student");
	        }, false); //http://stackoverflow.com/questions/2373995/javascript-addeventlistener-event-fires-on-page-load
	        document.getElementById("momZip").addEventListener("input", function () {
	            main.loadZipData("mom");
	        }, false);
	        document.getElementById("dadZip").addEventListener("input", function () {
	            main.loadZipData("dad");
	        }, false);
	        document.getElementById("guardianZip").addEventListener("input", function () {
	            main.loadZipData("guardian");
	        }, false);
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
	        document.getElementById("addSibling").addEventListener("click", function () {
	            main.counter++;
	            main.fadeSibling(main.counter);
	        });
	        document.getElementById("completed").addEventListener("click", main.docsAlert);
	    }

	    _createClass(main, null, [{
	        key: 'setDate',
	        value: function setDate() {
	            var date = new Date();
	            var month = date.getMonth() + 1;
	            var day = date.getDate();
	            var year = date.getFullYear();
	            //let weekDay = date.getDay(); //For future use!
	            return month + "/" + day + "/" + year;
	        }
	    }, {
	        key: 'loadZipData',
	        value: function loadZipData(whichPerson) {
	            var zipData = new _LoadDataClass2.default();
	            zipData.loadData("../data/ZipCodeDatabase.csv", function (finalData) {
	                var zip = document.getElementById(whichPerson + "Zip").value;
	                for (var i = 0; i < finalData.length; i++) {
	                    if (zip == finalData[i][0]) {
	                        document.getElementById(whichPerson + "City").value = finalData[i][1];
	                        document.getElementById(whichPerson + "State").value = finalData[i][2];
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'fade',
	        value: function fade(direction, fadeWhat) {
	            new _FadeStuffClass2.default(direction, fadeWhat).doFade();
	        }
	    }, {
	        key: 'fadeHousing',
	        value: function fadeHousing() {
	            var livesWith = document.getElementById("livesWith");
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
	    }, {
	        key: 'fadeHomeless',
	        value: function fadeHomeless() {
	            var homeLess = document.getElementById("homeless");
	            if (!homeLess.checked) {
	                main.fade("out", "homelessResidence");
	            } else if (homeLess.checked) {
	                main.fade("in", "homelessResidence");
	            }
	        }
	    }, {
	        key: 'fadeEllHelp',
	        value: function fadeEllHelp() {
	            var ell = document.getElementById("ell");
	            if (!ell.checked) {
	                main.fade("out", "ellSupport");
	            } else if (ell.checked) {
	                main.fade("in", "ellSupport");
	            }
	        }
	    }, {
	        key: 'fadeSibling',
	        value: function fadeSibling(counter) {
	            new _AddDivClass2.default("sibling").addDiv(counter);
	            main.fade("in", "sibRow" + counter);
	        }
	    }, {
	        key: 'docsAlert',
	        value: function docsAlert() {
	            alert('Additional documentation is required. Original or certified copy of birth certificate, ' + 'immunizations must be up to date or we must have a waiver from the Health Department, and we require Proof of Residency.');
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main(0);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0
	 *  CREATED: 11.25.2015
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadDataClass = function () {
	    function LoadDataClass() {
	        _classCallCheck(this, LoadDataClass);
	    }

	    _createClass(LoadDataClass, [{
	        key: "loadData",
	        value: function loadData(filePath, callback) {
	            var request = new XMLHttpRequest();
	            request.open("GET", filePath, true);
	            request.send();
	            request.onload = function () {
	                var COLUMNS = 3;
	                var data = undefined,
	                    middleData = undefined,
	                    finalData = [];
	                if (request.readyState === 4 && request.status === 200) {
	                    data = request.responseText.split(/\n/);
	                }
	                for (var i = 0; i < data.length; i++) {
	                    middleData = data[i].split(/,/);
	                    finalData[i] = []; //makes it an MD array
	                    for (var j = 0; j < COLUMNS; j++) {
	                        finalData[i][j] = middleData[j];
	                    }
	                }
	                callback(finalData);
	            };
	        }
	    }]);

	    return LoadDataClass;
	}();

	exports.default = LoadDataClass;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0
	 *  CREATED: 12.01.2015
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FadeStuffClass = function () {
	    function FadeStuffClass(direction, fadeWhat) {
	        _classCallCheck(this, FadeStuffClass);

	        this.direction = direction;
	        this.fadeWhat = fadeWhat;
	    }

	    _createClass(FadeStuffClass, [{
	        key: "doFade",
	        value: function doFade() {
	            //http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
	            var div = document.getElementById(this.fadeWhat);
	            if (this.direction == "in") {
	                div.style.opacity = 0;
	                div.style.display = "block";
	                (function fade() {
	                    var val = parseFloat(div.style.opacity);
	                    if (!((val += .01) >= 1)) {
	                        div.style.opacity = val;
	                        requestAnimationFrame(fade);
	                    }
	                })();
	            } else if (this.direction == "out") {
	                div.style.opacity = 1;
	                (function fade() {
	                    if ((div.style.opacity -= .01) <= 0) {
	                        div.style.display = "none";
	                    } else {
	                        requestAnimationFrame(fade);
	                    }
	                })();
	            }
	        }
	    }]);

	    return FadeStuffClass;
	}();

	exports.default = FadeStuffClass;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0
	 *  CREATED: 12.01.2015
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddDivClass = function () {
	    function AddDivClass(whichDiv) {
	        _classCallCheck(this, AddDivClass);

	        this.whichDiv = whichDiv;
	    }

	    _createClass(AddDivClass, [{
	        key: "addDiv",
	        value: function addDiv(counter) {
	            if (this.whichDiv == "sibling") {
	                var newSibRow = document.createElement("div");
	                newSibRow.className = "row";
	                newSibRow.id = "sibRow" + counter;
	                newSibRow.innerHTML = '<div class="small-2 columns">' + '<span class="label">Last Name</span><br>' + '<input name="sibLastName' + counter + '" id="sibLastName' + counter + '" placeholder="Last Name" type="text">' + '</div>' + '<div class="small-2 columns">' + '<span class="label">First Name</span><br>' + '<input name="sibFirstName' + counter + '" id="sibFirstName' + counter + '" placeholder="First Name" type="text">' + '</div>' + '<div class="small-2 columns">' + '<span class="label">DoB</span><br>' + '<input name="sibDob' + counter + '" id="sibDob' + counter + '" type="date">' + '</div>' + '<div class="small-1 columns">' + '<span class="label">Grade</span><br>' + '<input name="sibGrade' + counter + '" id="sibGrade' + counter + '" placeholder="Grade" type="number">' + '</div>' + '<div class="small-2 columns end">' + '<span class="label">School</span><br>' + '<select name="sibSchool' + counter + '" id="sibSchool' + counter + '" required>' + '<option>Choose</option>' + '<option value="1">Central</option>' + '<option value="2">Lincoln</option>' + '<option value="3">Ottawa</option>' + '<option value="4">Sheridan</option>' + '<option value="5">Middle School</option>' + '<option value="6">High School</option>' + '<option value="7">Montessori</option>' + '</select>' + '</div>';
	                document.getElementById("siblings").appendChild(newSibRow).style.display = 'none';
	            }
	        }
	    }]);

	    return AddDivClass;
	}();

	exports.default = AddDivClass;

/***/ }
/******/ ]);