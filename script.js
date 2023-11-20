//DOM elementy
const billValue = document.getElementById('form-bill');
const numberPeople = document.getElementById('form-people');
const buttonsTip = document.querySelectorAll('.tip-amount-wrapper button');
const customTip = document.getElementById('custom-tip');
const resetBtn = document.getElementById('resetBtn');
const zeroMsg = document.getElementById('zero-msg');

const tipAmountForm = document.getElementById('tipAmount');
const tipTotalForm = document.getElementById('tipTotal');
//inputy
let billAmount, peopleAmount, customTipValue, procento, customProcento, tipTotal, tipPerson, totalPerson;
//fce reset btn

function resetButton (){
    billValue.value = "";
    numberPeople.value = "";
    customTip.value = "";
    tipAmountForm.innerHTML = "$0.00";
    tipTotalForm.innerHTML = "$0.00";
    resetBtn.setAttribute('disabled', '');
    buttonsTip.forEach((item)=>{
        item.classList.remove('focused-button');
    });
    procento = 0;
    console.clear();
}
//volani reset btn na klik
resetBtn.addEventListener("click", resetButton);


//hodnoty z inputu a msg check

billValue.addEventListener("change", ()=>{
    billAmount = Number(billValue.value);
    peopleAmount = Number(numberPeople.value);
    
    if(billAmount !==0){
        resetBtn.removeAttribute('disabled');
    }

    if(peopleAmount === 0){
        zeroMsg.style.display = "inline";
    }
    console.log(`Částka k zaplacení: ${billAmount}`);
});

numberPeople.addEventListener("change", ()=>{
    peopleAmount = Number(numberPeople.value);
    billAmount = Number(billValue.value);
    if(peopleAmount !==0){
        zeroMsg.style.display = "none";
        numberPeople.classList.remove('red-outline');
    } else if (peopleAmount ===0){
        zeroMsg.style.display = "inline";
        numberPeople.classList.add('red-outline');
        resetBtn.removeAttribute('disabled');
    }
    console.log(`Počet lidí: ${peopleAmount}`);
});


let tipAmount = document.getElementById('tipAmount').value; 


buttonsTip.forEach(function(item){
    item.addEventListener("click", function(){
        document.querySelector('.focused-button')?.classList.remove('focused-button');
        item.classList.add('focused-button');        
        procento = item.value;
        console.log(`Procent spropitného: ${procento}`);
    });
});

//vzorec

document.querySelectorAll("input").forEach((input)=>{
    input.addEventListener("change", ()=>{
        billAmount = Number(billValue.value);
        peopleAmount = Number(numberPeople.value);
        customProcento = Number(customTip.value);
            if(customProcento > 100){
                alert("mene nez 100!");
                resetButton();
            }
            if (procento ===0) procento = customProcento;

            if(billAmount !==0 && peopleAmount !==0 && procento !==0){
                tipTotal = billAmount * (procento/100);
                tipPerson = tipTotal / peopleAmount;
                totalPerson = (billAmount + tipTotal) / peopleAmount;

            tipAmountForm.innerHTML = "$" + tipPerson.toFixed(2);
            tipTotalForm.innerHTML = "$" + totalPerson.toFixed(2);
}
    });
});