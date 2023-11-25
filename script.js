//DOM elements left side

const billValue = document.getElementById('form-bill');
const numberPeople = document.getElementById('form-people');
const buttonsTip = document.querySelectorAll('.tip-amount-wrapper button');
const customTip = document.getElementById('custom-tip');
const resetBtn = document.getElementById('resetBtn');
const zeroMsg = document.getElementById('zero-msg');

//DOM elements right side

const tipAmountForm = document.getElementById('tipAmount');
const tipTotalForm = document.getElementById('tipTotal');

//used variabless

let billAmount, peopleAmount, customTipValue, procento, customProcento, tipTotal, tipPerson, totalPerson;

//function for resetting button

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
    zeroMsg.style.display = "none";
    numberPeople.classList.remove('red-outline');
    procento = 0;
    console.clear();
}

//calling the resetButton function on click

resetBtn.addEventListener("click", resetButton);

// storing and controlling input values from 'Bill input'

billValue.addEventListener("change", ()=>{
    billAmount = Number(billValue.value);
    peopleAmount = Number(numberPeople.value);

        if(billAmount !==0){
            resetBtn.removeAttribute('disabled');
        }
        if(peopleAmount === 0){
            zeroMsg.style.display = "inline";
        }

    console.log(`Bill amount: ${billAmount}`);
});

// storing and controlling input values from 'Number of people'

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
    // adding and removing error message + outline style    
    console.log(`Number of people: ${peopleAmount}`);
});

//storing % value from buttons 5, 10, 15, 25 and 50

buttonsTip.forEach(function(item){
    item.addEventListener("click", function(){
        document.querySelector('.focused-button')?.classList.remove('focused-button');
        item.classList.add('focused-button');        
        procento = item.value;
        console.log(`Selected tip %: ${procento}`);
    });
});


//computing the tip amount and total cost

document.querySelectorAll("input").forEach((input)=>{
    input.addEventListener("change", ()=>{
        billAmount = Number(billValue.value);
        peopleAmount = Number(numberPeople.value);
        customProcento = Number(customTip.value);
        
        if(customProcento > 100){
            alert("Wrong values! Maybe too much vine? :)");
            resetButton();
        }
        
        if (procento ===0){
            procento = customProcento;
            console.log(`Custom %: ${customProcento}`);
                
            } 

            if(billAmount !==0 && peopleAmount !==0 && procento !==0){
                tipTotal = billAmount * (procento/100);
                tipPerson = tipTotal / peopleAmount;
                totalPerson = (billAmount + tipTotal) / peopleAmount;

            tipAmountForm.innerHTML = "$" + tipPerson.toFixed(2);
            tipTotalForm.innerHTML = "$" + totalPerson.toFixed(2);
}
    });
});