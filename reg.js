function regButton(){
   
    // variable
uname=regname.value;
accno=regacc.value;
psw=regpsw.value;

// object
accDetails={
    uname,
    accno,
    psw
}

if(accno in localStorage){
  

    if(uname==="" || accno==="" || psw===""){
        alert("Enter valid data")
    } else {
        alert("Account already registered")
    }

} else{
    localStorage.setItem(accno,JSON.stringify(accDetails))
    alert("Account registered successfully")
    window.location=`./sign.html`
}

}  

function signbtn(){
    window.location=`./sign.html`
}