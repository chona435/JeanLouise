function Login(){
    var username = document.getElementById("username").value;
    var username = username.trim();
    if (username === ""){
        document.getElementById("errorName").innerHTML = "Please input your Username";
        document.getElementById("errorName").style.color = "red";
    }
    else{
        document.getElementById("errorName").innerHTML = "";
    }

    var password = document.getElementById("password").value;
    var password = password.trim();

    if (password === ""){
        document.getElementById("errorPass").innerHTML = "Please input your Password";
        document.getElementById("errorPass").style.color = "red";
    }
  
    else if(password.length < 6) {
        document.getElementById("errorPass").innerHTML = "Password must be atleast 6 characters";
        document.getElementById("errorPass").style.color = "red";
    }
    else{
        document.getElementById("errorPass").innerHTML = "";
    }

    if ((username == "Admin")&&(password == "admin1234")){
            alert ("Login Successful");
            window.location.href = "Home.html";
    }
    else{
            alert ("Invalid Username and Password");
    }

    return false;
}
   
