//indexOF polyfill
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = +fromIndex || 0;
    if (Math.abs(n) === Infinity) {
      n = 0;
    }
    if (n >= len) {
      return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwlc8Z0hMT33uVRyJL76-Wd3imj9DuExQ",
  authDomain: "cict-tracer.firebaseapp.com",
  databaseURL: "https://cict-tracer.firebaseio.com",
  storageBucket: "cict-tracer.appspot.com",
};
var tracerApp = firebase.initializeApp(config);
var masterPage = document.querySelector("#master-page");
var controls = document.querySelector("#form-controls");
var logoutButton = document.querySelector(".logout");

function login(){
  // Auth removed for now
  masterPage.setAttribute("selected","1"); 
  controls.setAttribute("selected","1");
  logoutButton.className = "logout";
}

function logout(){
  masterPage.setAttribute("selected","0"); 
  controls.setAttribute("selected","0");    
  logoutButton.className = "logout hidden";
}

function getIDVal(id) {
  return document.querySelector(id).value
}

function getAttrVal(id, attr) {
  return document.querySelector(id).getAttribute(attr)
}

function resetIDVal(id) {
  document.querySelector(id).value = null
}

function resetAttrVal(id, attr) {
  document.querySelector(id).setAttribute(attr, null)
}

function stripAttr(id, attr) {
  document.querySelector(id).removeAttribute(attr)
}

var map;

function push(dest, map) {
  firebase.database().ref(dest).set(map);
}

function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  })
}

function notify(title, msg) {
  var d = document.querySelector('#default');
  var dTitle = d.children[0];
  var dMsg = d.children[1].children[0]
  dTitle.innerHTML = title;
  dMsg.innerHTML = msg;
  dialogPolyfill.registerDialog(d);
  d.showModal();
  d.querySelector('.close').addEventListener('click', function () {
    d.close();
  });
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


var profExamList = [];

function appendToProfExams() {
  var c = document.querySelector("#prof-exam-container");
  var children = c.childNodes;
  var array = Array.from(children);
  array.forEach(function(child){
    // console.log(child)
    var i = child.querySelector("input").getAttribute("value");
    profExamList.push(JSON.parse(i));
  });
}

function removeChip(id, obj) {
  var node = document.getElementById(id);
  node.remove();
}

function resetProfExamList(){
    document.querySelector("#prof-exam-container").innerHTML = null;
    profExamList = []
}

function addProfExam() {
  var err = document.getElementById("prof-exam-error");
  var d = document.querySelector('#prof-exam');
  var et = document.querySelector("#exam-title");
  var ed = document.querySelector("#exam-date");
  var er = document.querySelector("#exam-rating");
  dialogPolyfill.registerDialog(d);
  d.showModal();
  et.value = null;
  ed.value = null;
  er.value = null;
  err.innerHTML = ""
  d.querySelector('.cancel').addEventListener('click', function () {
    d.close();
  });
  d.querySelector('.save').addEventListener('click', function () {
    //clear entries
    if (et.value != null && ed.value != null) {
      var chipID = guid();
      var chip = document.createElement('span');
      var chipText = document.createElement('span');
      var chipAction = document.createElement('button');
      var chipActionIcon = document.createElement('i');
      var title = et.value;
      var text = document.createTextNode(title);
      var icon = document.createTextNode('cancel');
      var obj = {
        title: et.value,
        date: ed.value,
        rating: er.value
      };
      var input = document.createElement('input');
      input.setAttribute("type", "hidden");
      input.setAttribute("value", JSON.stringify(obj));

      chip.setAttribute("id", chipID);
      chipText.appendChild(text);
      chipActionIcon.appendChild(icon);
      chipAction.appendChild(chipActionIcon);
      chipAction.setAttribute('onclick', 'removeChip("' + chipID + '")')
      chip.appendChild(chipText);
      chip.appendChild(chipAction);
      chip.className = 'mdl-chip mdl-chip--deletable';
      chipText.className = 'mdl-chip__text';
      chipAction.className = 'mdl-chip__action';
      chipActionIcon.className = 'material-icons';
      componentHandler.upgradeElement(chip);
      componentHandler.upgradeElement(chipText);
      componentHandler.upgradeElement(chipAction);
      chip.appendChild(input);
      var c = document.querySelector("#prof-exam-container");
      c.appendChild(chip);

      d.close();
      //reset values
      et.value = null;
      ed.value = null;
      er.value = null;
      err.innerHTML = null
    } else {
      err.innerHTML = "Examination name or date is empty. Please do not leave it blank.";
    }
  });

}

function submit() {
  appendToProfExams();
  map = {
    famName: getIDVal("#fam-name"),
    givName: getIDVal("#giv-name"),
    midName: getIDVal("#mid-name"),
    bday: [getAttrVal("#bday", "day"), getAttrVal("#bday", "month"), getAttrVal("#bday", "year")],
    gender: getAttrVal("#gender", "index"),
    maritalStat: getAttrVal("#marital-stat", "index"),
    mobile: getIDVal("#contact-num"),
    email: getIDVal("#email"),
    homeAdd: getIDVal("#home-add"),
    currAdd: getIDVal("#curr-add"),
    course: getAttrVal("#course", "index"),
    terMajor: getIDVal("#ter-major"),
    terGradYr: getIDVal("#ter-grad-year"),
    withHonor: getAttrVal("#with-honors", "select"),
    msSchl: getIDVal("#msschl-name"),
    msMajor: getIDVal("#ms-major"),
    msGradYr: getIDVal("#ms-grad-year"),
    docSchl: getIDVal("#docschl-name"),
    docMajor: getIDVal("#doc-major"),
    docGradYr: getIDVal("#doc-grad-year"),
    profExams: profExamList,
    employed: getAttrVal("#employed", "select"),
    empLoc: getAttrVal("#emploc", "selected"),
    empLocOthers: getIDVal("#emploc-others"),
    emplvl: getAttrVal("#emplvl", "selected"),
    employer: getIDVal("#employer"),
    empContact: getIDVal("#employer-contact"),
    compDur: getIDVal("#comp-dur"),
    desigDur: getIDVal("#desig-dur"),
    unEmpStat0: getIDVal("#unemp-0"),
    unEmpStat1: getIDVal("#unemp-1"),
    unEmpStat2: getIDVal("#unemp-2"),
    unEmpStat3: getIDVal("#unemp-3"),
    unEmpStat4: getIDVal("#unemp-4"),
    unEmpStat5: getIDVal("#unemp-5"),
    unEmpStat6: getIDVal("#unemp-6")
  }
  var entryRef = (map.famName + map.givName + map.midName).replace(/ /g, '').toLowerCase();
  push(entryRef, map);

  notify("Thank you!", "Your entry was successfully submitted!")

  var page = document.querySelector("#form-controls");
  page.setAttribute("selected","2")
}

function reset() {
  resetIDVal("#fam-name");
  resetIDVal("#giv-name");
  resetIDVal("#mid-name");
  resetAttrVal("#bday", "day");
  resetAttrVal("#bday", "month");
  resetAttrVal("#bday", "year");
  resetAttrVal("#gender", "index");
  resetAttrVal("#marital-stat", "index");
  resetIDVal("#contact-num");
  resetIDVal("#email");
  resetIDVal("#home-add");
  resetIDVal("#curr-add");
  resetAttrVal("#course", "index");
  resetIDVal("#ter-major");
  resetIDVal("#ter-grad-year");
  resetAttrVal("#with-honors", "select");
  resetIDVal("#msschl-name");
  resetIDVal("#ms-major");
  resetIDVal("#ms-grad-year");
  resetIDVal("#docschl-name");
  resetIDVal("#doc-major");
  resetIDVal("#doc-grad-year");
  resetProfExamList();
  resetAttrVal("#employed", "select");
  resetAttrVal("#emploc", "selected");
  resetIDVal("#emploc-others");
  resetAttrVal("#emplvl", "selected");
  resetIDVal("#employer");
  resetIDVal("#employer-contact");
  resetIDVal("#comp-dur");
  resetIDVal("#desig-dur");
  stripAttr("#unemp-0", "checked");
  stripAttr("#unemp-1", "checked");
  stripAttr("#unemp-2", "checked");
  stripAttr("#unemp-3", "checked");
  stripAttr("#unemp-4", "checked");
  stripAttr("#unemp-5", "checked");
  stripAttr("#unemp-6", "checked");
}

function about(){
  notify("Alumni Tracer Form", "Multi-platform Alumni Tracer App of the College of Information and Communications Technology")
}
