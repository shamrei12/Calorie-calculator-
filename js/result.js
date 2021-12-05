let btnResult = document.querySelector('.btn');
var showResult = document.querySelector('.result_none');

btnResult.onclick = function() {
    showResult.classList.toggle('result_none');
    //Данные рост, вес, возраст
    human_old = Number(document.querySelector('.human_old').value);
    human_height = Number(document.querySelector('.human_height').value);
    human_weight = Number(document.querySelector('.human_weight').value);


    if (human_old.value == 0 || human_weight == 0 || human_height == 0) {
        alert("Введите значени рост, вес, возраст");
        btnResult.checked = false;
    } else((human_old.value !== 0 && human_weight !== 0 && human_height == !0)) {
        //Поддержание веса (мужчины)
        let maintainingWeight = document.querySelector('.maintaining-weight');
        Mweight = 10 * human_height + 6.25 * human_height - 5 * human_old + 5;
        maintainingWeight.innerHTML = Mweight;
    }


};