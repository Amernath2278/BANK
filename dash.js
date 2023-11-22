

function logout(){

    
    let confm=confirm('Are you sure you want to logout? ')
    
    if(confm==true){
    window.location=`./index.html`
    }
   
}

let deposit=0;
let balance=0;
let totaldeposit=0;
let withdraw=0;
let totalwithdraw=0;



// DEPOSIT 
function  depositBtn(){

    deposit=depamnt.value;
    deposit=Math.floor(deposit)
    dpass=deppass.value
    // totaldeposit+=deposit
    // balance+=deposit

    


    if(dpass in localStorage) {                                                       

        accDetails=JSON.parse(localStorage.getItem(dpass))

    

        if(dpass==""){
            alert("Enter Password")
        }

       else if(dpass==accDetails.psw){

            if(deposit<=0 || deposit===""){
                alert("Invalid Amount")
                
            }else {

                alert("Amount added successfully")
                  // total deposit
                  depo.innerHTML=`<i class="fa-solid fa-indian-rupee-sign fa-2xl" style="color: #000000;"> ${totaldeposit+=deposit}</i>`
                 //  total balance
                 bal.innerHTML=`<i class="fa-solid fa-indian-rupee-sign fa-2xl" style="color: #000000;"> ${balance+=deposit}</i>  `
            }
        } 

    } else{
        alert("Incorrect Password")
    }

}

// WITHDRAW

function  withdrawBtn(){

    withdraw=withamnt.value;
    withdraw=Math.floor(withdraw);
    wpass=withpass.value;
    // totalwithdraw+=withdraw;
    // balance-=withdraw;


    if(wpass in localStorage){

        accDetails=JSON.parse(localStorage.getItem(wpass))

   if(wpass==""){
   alert("Enter Password")
   }

else if(wpass==accDetails.psw){

    if(withdraw<=balance ){
        alert("Withdrawal Successful")
        // total withdrawal amount
        document.getElementById("withdr").innerHTML=` <i class="fa-solid fa-indian-rupee-sign fa-2xl" style="color: #000000;"> ${ totalwithdraw+=withdraw}</i> `

         //  total balance
         document.getElementById("bal").innerHTML=`<i class="fa-solid fa-indian-rupee-sign fa-2xl" style="color: #000000;"> ${balance-=withdraw}</i> `


       
    } else if(withdraw<0 || withdraw==""){

        alert("Invalid amount")
        
    } else {
        alert("Oops ! Insufficient Balance")

    }
}

} else {
    alert("Incorrect Password")
}

    }


