function createRow(users){
    //travel the array
    for(let i=0; i<users.length;i++){
    
   
    //get each one of the users
    
    //display the user
    
    let tmp=`<tr>
                <td>${users[i].fname}</td>
                <td>${users[i].lname}</td>
                <td>${users[i].email}</td>
                <td>${users[i].age}</td>
                <td>${users[i].phone}</td>
                <td>${users[i].address}</td>
                
           </tr>`;
           console.log(tmp);
           //append the tmp to the table
        //    let userDiv=document.getElementById("usersTable");
        //    userDiv.innerHTML+=tmp;
        $("#usersTable").append(tmp);
        }
}
function init(){
    console.log("Listing users")
    var users=readUsers(); // fn is on the storeManager
    createRow(users);

    console.log(users);
}

window.onload=init;  //wait for the whole page to load first
