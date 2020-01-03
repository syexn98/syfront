function login_validate(){
    let id = get.ElementById("txt_userid");
    let pw = get.ElementById("txt_userpw");

    if(id.value=='' || !(id.value.length>=3&&id.value.length<=12)){
        alert("아이디를 입력하세요.");
    }

}