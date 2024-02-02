const todaySpan = document.querySelector("#today");
const numberDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

let lottoNumbers = [];

function printNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachnum")
    eachNumDiv.textContent = number
    numberDiv.append(eachNumDiv)
}

drawButton.addEventListener("click", function(){
    while (lottoNumbers.length <6){
        let rn = Math.floor(Math.random() *45) +1
        if (lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)
            printNumber(rn)

        }
    }
})

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0, 6)
    numberDiv.innerHTML=""

})