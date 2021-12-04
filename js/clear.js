clear = document.querySelector(".clear");
var height = document.querySelector(".human_height");
var old = document.querySelector(".human_old");
var weight = document.querySelector(".human_weight");

var sex = document.getElementsByName("example");
const active = document.getElementsByName("active");

clear.onclick = function () {
  //clear radio sex

  for (let i = 0; i < sex.length; i++) {
    sex[i].checked = false;
  }
  //clear radio activ

  for (let i = 0; i < active.length; i++) {
    active[i].checked = false;
  }
  weight.value = '';
  old.value = '';
  height.value = '';
};
