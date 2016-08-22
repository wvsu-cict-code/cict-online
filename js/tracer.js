// Initialize Firebase
var config = {
    apiKey: "AIzaSyAwlc8Z0hMT33uVRyJL76-Wd3imj9DuExQ",
    authDomain: "cict-tracer.firebaseapp.com",
    databaseURL: "https://cict-tracer.firebaseio.com",
    storageBucket: "cict-tracer.appspot.com",
};
var tracerApp = firebase.initializeApp(config);

function getIDVal(id){
  return document.querySelector(id).value
}

function getAttrVal(id,attr){
  return document.querySelector(id).getAttribute(attr)
}

function resetIDVal(id){
  document.querySelector(id).value = null
}

function resetAttrVal(id,attr){
  document.querySelector(id).setAttribute(attr,null)
}

function stripAttr(id,attr){
    document.querySelector(id).removeAttribute(attr)
}

var map;

function push(dest,map) {
  firebase.database().ref(dest).set(map);
}

function setAttributes(el, options) {
   Object.keys(options).forEach(function(attr) {
     el.setAttribute(attr, options[attr]);
   })
}

function notify(title,msg){
  var d = document.querySelector('dialog');
  var dTitle = d.children[0];
  var dMsg = d.children[1].children[0]
  dTitle.innerHTML = title;
  dMsg.innerHTML = msg;
  dialogPolyfill.registerDialog(d);
  d.showModal();
  d.querySelector('.close').addEventListener('click', function() {
      d.close();
  });
}

function submit(){
  map = {
  famName: getIDVal("#fam-name"),
  givName: getIDVal("#giv-name"),
  midName: getIDVal("#mid-name"),
  bday: [getAttrVal("#bday","day"),getAttrVal("#bday","month"), getAttrVal("#bday","year")],
  gender: getAttrVal("#gender","index"),
  maritalStat: getAttrVal("#marital-stat","index"),
  mobile: getIDVal("#mobile-num"),
  email: getIDVal("#email"),
  homeAdd: getIDVal("#home-add"),
  course: getAttrVal("#course","index"),
  terMajor: getIDVal("#ter-major"),
  terGradYr: getIDVal("#ter-grad-year"),
  secSchl: getIDVal("#secschl-name"),
  secGradYr: getIDVal("#sec-grad-year"),
  primSchl: getIDVal("#primschl-name"),
  primGradYr: getIDVal("#prim-grad-year"),
  msSchl: getIDVal("#msschl-name"),
  msMajor: getIDVal("#ms-major"),
  msGradYr: getIDVal("#ms-grad-year"),
  docSchl: getIDVal("#docschl-name"),
  docMajor: getIDVal("#doc-major"),
  docGradYr: getIDVal("#doc-grad-year"),
  employed: getAttrVal("#employed","select"),
  empLoc: getAttrVal("#emploc","selected"),
  emplvl: getAttrVal("#emplvl","selected"),
  employer: getIDVal("#employer"),
  empContact: getIDVal("#employer-contact"),
  unEmpStat0: getIDVal("#unemp-0"),
  unEmpStat1: getIDVal("#unemp-1"),
  unEmpStat2: getIDVal("#unemp-2"),
  unEmpStat3: getIDVal("#unemp-3"),
  unEmpStat4: getIDVal("#unemp-4"),
  unEmpStat5: getIDVal("#unemp-5"),
  unEmpStat6: getIDVal("#unemp-6")
  }
  var entryRef = (map.famName + map.givName + map.midName).replace(/ /g,'').toLowerCase();
  push(entryRef,map);

  notify("Thank you!","Your entry was successfully submitted!")
}

function reset(){
  resetIDVal("#fam-name");
  resetIDVal("#giv-name");
  resetIDVal("#mid-name");
  resetAttrVal("#bday","day");
  resetAttrVal("#bday","month");
  resetAttrVal("#bday","year");
  resetAttrVal("#gender","index");
  resetAttrVal("#marital-stat","index");
  resetIDVal("#mobile-num");
  resetIDVal("#email");
  resetIDVal("#home-add");
  resetAttrVal("#course","index");
  resetIDVal("#ter-major");
  resetIDVal("#ter-grad-year");
  resetIDVal("#secschl-name");
  resetIDVal("#sec-grad-year");
  resetIDVal("#primschl-name");
  resetIDVal("#prim-grad-year");
  resetIDVal("#msschl-name");
  resetIDVal("#ms-major");
  resetIDVal("#ms-grad-year");
  resetIDVal("#docschl-name");
  resetIDVal("#doc-major");
  resetIDVal("#doc-grad-year");
  resetAttrVal("#employed","select");
  resetAttrVal("#emploc","selected");
  resetAttrVal("#emplvl","selected");
  resetIDVal("#employer");
  resetIDVal("#employer-contact");
  stripAttr("#unemp-0","checked");
  stripAttr("#unemp-1","checked");
  stripAttr("#unemp-2","checked");
  stripAttr("#unemp-3","checked");
  stripAttr("#unemp-4","checked");
  stripAttr("#unemp-5","checked");
  stripAttr("#unemp-6","checked");
}
