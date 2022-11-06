/*
document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#userlogin");
    const createAccountForm = document.querySelector("#CreateAcc");

    document.querySelector("#linkCreateAcc").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("subframe--hidden");
        createAccountForm.classList.remove("subframe--hidden");
        return;
    });

    document.querySelector("#linkuserlogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("subframe--hidden");
        createAccountForm.classList.add("subframe--hidden");
        return;
    });

});

*/

var dictOfUsers = [
    //{email: "raghav4", password:"yellow"},
    //{email: "Hetang2", password:"blue"},
    {email: "", password: ""}
]

//returning user
function beginLogin() {
    //get info. from user
    let inputEmail = document.getElementById("getEmail").value;
    let inputPassword = document.getElementById("getPassword").value;

    for (let i = 0; i <= dictOfUsers.length; i++){
        //going to check whether or not the email exists in the dictOfUsers variable
        if(inputEmail == dictOfUsers[i].email && inputPassword == dictOfUsers[i].password){
            //ID is found
            console.log("YOU'RE ID EXISTS IN THE SYSTEM");
            return;
        } else if(inputEmail == dictOfUsers[i].email && inputPassword != dictOfUsers[i].password){
            console.log("your account exists, but your password is wrong.");
            return;
        }
    }

}

function registerUser(){
    let registerEmail = document.getElementById("getNewEmail").value;
    let registerPassword = document.getElementById("getNewPassword").value;

    if (registerEmail in dictOfUsers){
        alert("email already is use, pick another.");
        return;
    }else{
        dictOfUsers.push({email: registerEmail, password: registerPassword});
        localStorage(em)
        console.log(dictOfUsers);
        return;
    }
    /*
    for (let i=0; i <= dictOfUsers.length; i++){
        if(registerEmail == dictOfUsers[i].email){
            alert("email already is use, pick another.");
            return;
        }
        else{
            dictOfUsers.push({email: registerEmail, password: registerPassword});
            console.log(dictOfUsers);
            return;
        }
    }
    */

}



document.getElementById('inputCreator').addEventListener('click', function() {

    let input = document.getElementById('numemail').value;
    let container = document.getElementById('container');
    container.innerHTML = "";
    let fso = CreateObject("Scripting.FileSystemObject");
    let s = fso.CreateTextFile("Pawggers/Dog Classifier'/PawMailer/PawMailer/bin/Debug/net6.0/everything.txt",True);
    for (let i = 0; i < input; i++) {
      let newInput = document.createElement('input');
      container.appendChild(newInput);
      s.writeline(document.passform.input[i].value + "\n")
    }
    s.close();
    
    
  });


//var allFactors = [{
//    Age:"", Gender: "", Activity:"", Size:""
//}]
userMessage = []
document.getElementById("userTraceback").innerHTML = userMessage


function lgb1(){
    userMessage.push("0-10");
}
function lgb2(){
    userMessage.push("10-20");
}
function lgb3(){
    userMessage.push("20-30");
}
function lgb4(){
    userMessage.push("MALE");
}
function lgb5(){
    userMessage.push("FEMALE");
}
function lgb6(){
    userMessage.push("small");
}
function lgb7(){
    userMessage.push("medium");
}
function lgb8(){
    userMessage.push("large");
}
function lgb9(){
    userMessage.push("LOW");
}
function lgb10(){
    userMessage.push("MEDIUM");
}
function lgb11(){
    userMessage.push("HIGH");
}
