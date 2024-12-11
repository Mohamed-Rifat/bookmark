var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var sites = [];

if (localStorage.getItem("sites") !== null ){
  sites = JSON.parse(localStorage.getItem("sites"));
  datasite();
}

submitBtn.addEventListener("click", function () {    
  if (validationName()==true){
  var bookmarksite = {
      siteName: siteName.value,
      siteURL: siteURL.value,
    };
    sites.push(bookmarksite);
    localStorage.setItem("sites", JSON.stringify(sites));
    datasite();
    clearData();
    siteName.classList.remove('is-valid')
    siteURL.classList.remove('is-valid')
  }else{
    var checkName =document.getElementById('msg-error')
    var checkUrl = document.getElementById('url-error')
    checkName.classList.remove('d-none')
    siteName.classList.remove('is-valid')
    siteURL.classList.remove('is-valid')
    checkUrl.classList.remove('d-none')
  }})
  function clearData() {
  siteName.value = null;
  siteURL.value = null;
}
function datasite() {
var displayInfo="";
for (var i = 0 ; i < sites.length ; i++) {
  displayInfo +=`<tr>
  <td>${i}</td>
  <td>${sites[i].siteName}</td>
  <td><button onclick="visitSite(${i})" class="btn btn-outline-success" data-index="${sites}">
                    Visit
                  </button></td>
                    <td>
                  <button onclick="deleteSite(${i})" class="btn btn-outline-danger pe-2" data-index="${sites}"> 
                    Delete
                  </button>
                </td>
  </tr>
  `
  document.getElementById("infosites").innerHTML=displayInfo;
}
}
function validationName(){
var regex = /^[A-Z][a-z]{1,8}$/
var check =document.getElementById('msg-error')
if(regex.test(siteName.value)){
  siteName.classList.add('is-valid')
  siteName.classList.remove('is-invalid')
  check.classList.add('d-none')
  return true;
}else{
  check.classList.remove('d-none')
  siteName.classList.add('is-invalid')
  siteName.classList.remove('is-valid')
  return false;
}
}
function validationUrl(){
  var regex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/
  var check = document.getElementById('url-error')
  if(regex.test(siteURL.value)){
    siteURL.classList.add('is-valid')
    siteURL.classList.remove('is-invalid')
    check.classList.add('d-none')
  }else{
    siteURL.classList.add('is-invalid')
    siteURL.classList.remove('is-valid')
    check.classList.remove('d-none')
  }
}
function deleteSite(index){
sites.splice(index,1)
datasite()
localStorage.setItem("sites", JSON.stringify(sites));
}
function visitSite(index){
  window.open(sites[index].siteURL,"_blank")
}


          
 

























































