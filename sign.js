function regbtn(){
    window.location=`./reg.html`
}
// function login(){
   

//     loginacc=logacc.value
//     loginpass=logpsw.value

//     if(loginacc in localStorage){
//         details=JSON.parse(localStorage.getItem(loginacc));

//         if(loginpass===details.pass){
//             alert("login successfull");
//             window.location=`./dash.html`
//         } else{
//             alert("Incorrect password")
//         }
//     }
// }


function login(){

    laccno=logacc.value;
    lpsw=logpsw.value

if(laccno in localStorage){

    accDetails=JSON.parse(localStorage.getItem(laccno))

    if(laccno=="" || lpsw==""){
            alert("Enter Account Number / Password ")
        }

    else if(lpsw==accDetails.psw && laccno==accDetails.accno){
        alert("Login Successfull");
        window.location=`./dash.html`
    }  else{
        alert("Incorrect Account Number / Password")
    }

}  else{
    alert("Incorrect Account Number / Password")
}
}