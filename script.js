//DOM elementy
const billValue = document.getElementById('form-bill');
const numberPeople = document.getElementById('form-people');
const buttonsTip = document.querySelectorAll('.tip-amount-wrapper button');
const customTip = document.getElementById('custom-tip');
const resetBtn = document.getElementById('resetBtn');
const zeroMsg = document.getElementById('zero-msg');
//inputy
let billAmount, peopleAmount;
//fce reset btn

function resetButton (){
    billValue.value = "";
    numberPeople.value = "";
    customTip.value = "";

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
    
});

numberPeople.addEventListener("change", ()=>{
    peopleAmount = Number(numberPeople.value);
    if(peopleAmount !==0){
        zeroMsg.style.display = "none";
    } else if (peopleAmount ===0){
        zeroMsg.style.display = "inline"
    }
    console.log(peopleAmount);
});


let tipAmount = document.getElementById('tipAmount').value; 


buttonsTip.forEach(function(item){
    item.addEventListener("click", function(){
        tip = item.value;
        console.log(tip);
    });
});
























resetButton = () =>{
    document.getElementById('form-bill').value = "";
    document.getElementById('form-people').value = "";
}

zeroCheck = () =>{
    if(numberPeople === 0){
        document.getElementById('zero-msg').setAttribute('display', 'block');
    }
}