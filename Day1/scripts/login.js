function login(){
    let userName = $("#txtUserName").val();
    let password=$("#txtPassword").val();
    console.log(userName,password);
    let userList=readUsers();

    let flag=false;

    for(let i=0; i<userList.length; i++){ //traveling the array
        let user=userList[i];
        if(user.email===userName && user.password===password){
            console.log ("you are logged in");
            window.location="users.html";
            flag=true;

        }
    }//end of traveling the array
    if(!flag){  //invalid credential
        console.log("Invalid Credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addclass("hide");
        },3000);
    }
}

function init(){
    console.log("Home Page");
    $("#btnLogin").click(login);
}
window.onload=init;