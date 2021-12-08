//button clear
clear = document.querySelector(".clear");
//input info human
var height = document.querySelector(".human_height");
var old = document.querySelector(".human_old");
var weight = document.querySelector(".human_weight");
//sex human
var sex = document.getElementsByName("example");
//active human
const active = document.getElementsByName("active");

var showResult = document.querySelector(".result_none");
clear.onclick = function () {
  showResult.classList.add("result_none");

  for (let i = 0; i < sex.length; i++) {
    sex[i].checked = false;
  }
  //clear radio activ

  for (let i = 0; i < active.length; i++) {
    active[i].checked = false;
  }
  weight.value = "";
  old.value = "";
  height.value = "";
};
