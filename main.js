"use strict";
class Calculator{
    constructor(){
        this.button = document.querySelector(".calculate__button");
        this.resetButton = document.querySelector(".calc__button-reset");
        this.medicalExpenses = document.querySelector("#medical-expenses");
        this.propertyDamages = document.querySelector("#property-damages");
        this.lostIncom = document.querySelector("#lost-income");
        this.futureMedicalExpenses = document.querySelector("#future-medical-expenses");
        this.multiplier = document.querySelector("#multiplier");
        this.economicDamages = document.querySelector("#economic-damages");
        this.nonEconomicDamage = document.querySelector("#non-economic-damage");
        this.total = document.querySelector("#total");
        this.economicDamage = document.querySelector("#economic-damage");
    }

    calculate(){
         let totalSum = (((Number(this.medicalExpenses.value) + Number(this.propertyDamages.value) + Number(this.lostIncom.value) + Number(this.futureMedicalExpenses.value))) * Number(this.multiplier.value)) + 1000;
         let economicDamageSum = ((Number(this.medicalExpenses.value) + Number(this.propertyDamages.value) + Number(this.lostIncom.value) + Number(this.futureMedicalExpenses.value)));
         let nonEconomicDamagesSum = Number(this.medicalExpenses.value) * Number(this.multiplier.value) + 1000;
         if(!isNaN(totalSum)){
             this.total.value = totalSum;
             this.economicDamage.value = economicDamageSum;
             this.nonEconomicDamage.value = nonEconomicDamagesSum;
         }else{
             console.log("test")
             this.total.value = "There was an error";
         }     
    }

    addDecimalIfNeeded(){        
        const currentValues = document.querySelectorAll(".current-value");
        currentValues.forEach(currentValue => {
            let current = parseFloat(currentValue.value);
            if (current > 100) {
                currentValue.value = current.toFixed(2)  + "$"; 
            }else {
                currentValue.value += "$";
            }
        })
    }

    reset(){
        const inputs = document.querySelectorAll(".calc input");    
        inputs.forEach(input => {
            input.value = '';
        })
    }

    init(){
        
        this.resetButton.addEventListener("click", this.reset);
        this.button.addEventListener("click", () => {
            calc.calculate();
            calc.addDecimalIfNeeded();
            calc.showTextArea();           
        })
    }
    showTextArea(){
        const select = document.querySelector("select.calc-item__input");
        if(select.value == "other-accident"){
            console.log("done")
        }
    }
}

const calc = new Calculator;

calc.init();



function showTextArea() {
    const selects = document.querySelectorAll("select");

    selects.forEach(select => {
        select.addEventListener("change", () => {
            if(select.value == "other-accident" || select.value == "Other"){
                if(select.nextElementSibling){
                    select.nextElementSibling.style = "display: block";
                }                
            }else{
                if(select.nextElementSibling){
                    select.nextElementSibling.style = "display: none";
                }
                
            }
        })
    })
}
showTextArea()

function validateNumberInput(event) {
    const input = event.target;
    const inputValue = input.value.trim();
    
    
    if (inputValue === '') {
        return;
    }
   
    if (isNaN(inputValue)) {        
        input.classList.add("error");
        return;
    }  
    input.classList.remove("error");
    
}