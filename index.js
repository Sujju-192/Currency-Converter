const link = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr  .json";

const dropdowns = document.querySelectorAll(".Currency select");
const btn = document.querySelector(".btn")

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

for(let select of dropdowns){
    for(curr in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = curr;
        newOption.value=curr;
        if(select.className === "from" && curr === "USD"){
            newOption.selected = "selected";
        }
        else if(select.className === "to" && curr === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    } 
    select.addEventListener("change" , (evt)=>{
        updateFlag(evt.target);
    })
}


