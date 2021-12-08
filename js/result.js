let btnResult = document.querySelector(".btn");
var showResult = document.querySelector(".result_none");

btnResult.onclick = function () {
  showResult.classList.toggle("result_none"); // блок результата
  var active = document.getElementsByName("active"); //  получение радиобатона активности
  let coefficient = 0; // коэф активности
  let sex = document.getElementsByName("example"); //получаем данные пола человека
  //переменные вывода результатов
  let maintainingWeight = document.querySelector(".maintaining-weight");
  let weightGain = document.querySelector(".weight-gain");
  let weightLoss = document.querySelector(".weight-loss");

  //Данные рост, вес, возраст
  human_old = Number(document.querySelector(".human_old").value);
  human_height = Number(document.querySelector(".human_height").value);
  human_weight = Number(document.querySelector(".human_weight").value);
  var man = document.querySelector(".man").value;
  var woman = document.querySelector(".woman").value;

  for (let j = 0; j < active.length; j++) {
    if (active[0].checked) {
      coefficient = 1.2;
    } else if (active[1].checked) {
      coefficient = 1.375;
    } else if (active[2].checked) {
      coefficient = 1.55;
    } else {
      coefficient = 1.7;
    }
  }
  console.log(coefficient);
  for (var i = 0; i < sex.length; i++) {
    if (sex[0].checked) {
      Mweight =
        (10 * human_weight + 6.25 * human_height - 5 * human_old + 5) *
        coefficient;
      Gweight =
        (9.99 * human_weight + 6.25 * human_height - 4.92 * human_old + 5) *
        coefficient;
    } else {
      Mweight =
        (10 * human_weight + 6.25 * human_height - 5 * human_old - 161) *
        coefficient;
      Gweight =
        (9.99 * human_weight + 6.25 * human_height - 4.92 * human_old - 161) *
        coefficient;
    }
  }

  maintainingWeight.innerHTML = Math.round(Mweight) + "ккал";
  weightGain.innerHTML = Math.round(Mweight) + 395 + "ккал";
  weightLoss.innerHTML = Math.round(Mweight) - 423 + "ккал";
};
