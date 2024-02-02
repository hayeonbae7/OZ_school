const target = Math.floor(Math.random()*100);

function submit(){
    const inputnum = document.getElementById("num");
    const num = Number(inputnum.value);
    const box = document.createElement("p")

    if (isNaN(num)){
        return alert("숫자만 입력하세요.")
    }
    if (num < target){
        return box.append("힌트: 숫자가 작습니다. 좀 더 큰 숫자를 입력헤세요.");
    } else if (num > target){
        return box.append("힌트: 숫자가 큽니다. 좀 더 작은 숫자를 입력헤세요.");;
    } else{
        return alert("정답입니다.")
    }
}