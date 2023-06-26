let billValue = Number(document.getElementById('form-bill').value);
let customTip = document.getElementById('custom-tip').value;
let numberPeople = Number(document.getElementById('form-people').value);
let tip = 0;

const buttonsTip = document.querySelectorAll('.tip-amount-wrapper button');

buttonsTip.forEach(function(item){
    item.addEventListener("click", function(e){
        console.log(item.value);
    });
});
