const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");
const reset = document.getElementById("reset");

const currentDogs = [];

function displayDogs(item){
    const dogImgDiv = document.createElement("div");
    dogImgDiv.classList.add("flex-item");
    dogImgDiv.innerHTML = `<img src=${item}>`;
    main.appendChild(dogImgDiv);
}

window.addEventListener("load", function(){

    //강아지 사진 뿌리기
   request1.open("get", apiRandomDogs);
   request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
        currentDogs.push(item);
        displayDogs(item);
    });

   });

   request1.send();


    //임팩트에 견종 정보 뿌리기
    request2.open("get", apiAllBreeds);
    request2.addEventListener("load", function(){
        const response = JSON.parse(request2.response);
        //데이터 타입을 대표하는 객체(Object)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option");
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        });
    });
    request2.send();
    
})


button.addEventListener("click", function(){
    main.innerHTML = "";
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1;
    });

    filteredDogs.forEach(function(item){
        displayDogs(item);
    });
});

select.addEventListener("change", function(){
    main.innerHTML = "";
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1;
    });

    filteredDogs.forEach(function(item){
        displayDogs(item);
    });
});

reset.addEventListener("click", function(){
    main.innerHTML = "";
    request1.open("get", apiRandomDogs);
   request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
        currentDogs.push(item);
        displayDogs(item);
    });

   });
   
   request1.send();


    //임팩트에 견종 정보 뿌리기
    request2.open("get", apiAllBreeds);
    request2.addEventListener("load", function(){
        const response = JSON.parse(request2.response);
        //데이터 타입을 대표하는 객체(Object)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option");
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        });
    });
    request2.send();

});

more.addEventListener("click", function(){
    request1.open("get", apiRandomDogs);
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response);
        response.message.forEach(function(item){
            currentDogs.push(item);
            displayDogs(item);
        });
    });
    request1.send()
});

tothetop.addEventListener("click", function(){
    //스크롤은 윈도우가 가지고 있음
    window.scrollTo({top: 0}) //위치에 대한 값을 객체 리터럴 형식으로 표현
})