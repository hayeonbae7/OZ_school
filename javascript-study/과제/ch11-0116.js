//제출 이벤트를 받는다. 이벤트 헨들링
const form = document.getElementById("form")

//익명함수
form.addEventListener("submit", function(event){
    event.preventDefault()//기존 기능 차단

    //form.id와 같음
    let userId = event.target.id.value
    let userpw1 = event.target.pw1.value
    let userpw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    //입력값에 문제가 있는 경우 이를 감지한다
    if (userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요")
        return
    }
    
    if(userpw1 !== userpw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    //가입 환영 인사(body안에 있는 html 코드 불러와서 초기화)
    document.body.innerHTML =  ""
    document.write(
        `<p>${userId}님 환영합니다.<br>
        회원가입 시 입력하신 내역은 다음과 같습니다.<br>
        아이디:${userId}<br>
        이름:${userName}<br>
        전화번호:${userPhone}<br>
        원하는 직무:${userPosition}
    `)

})

