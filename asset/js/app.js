


function validation() {
    let userNameTextField = document.getElementById("inputUsername").value;
    let emailTextField = document.getElementById("inputEmail").value;
    let passwordTextField = document.getElementById("inputPassword").value;
    let confirmPasswordTextField = document.getElementById("confirmPassword").value;
    let loginBtn = document.getElementById("login-btn");
    let registerbtn = document.getElementById("register-btn");

    if (userNameTextField == "") {
        document.getElementById("result").innerHTML = "Enter Username*"
        return false;
    } else if (emailTextField == "") {
        document.getElementById("result").innerHTML = "Enter your Email*"
        return false;
    }
    else if (passwordTextField == "") {
        document.getElementById("result").innerHTML = "Enter your Password*"
        return false;
    } else if (confirmPasswordTextField == "") {
        document.getElementById("result").innerHTML = "Enter confirm password*"
        return false;
    } else if (passwordTextField.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6-digits*"
        return false;
    }
    else if (passwordTextField != confirmPasswordTextField) {
        document.getElementById("result").innerHTML = "Password dosen't matched*"
        return false;
    }
    else if (confirmPasswordTextField == passwordTextField) {
        popup.classList.add("open-slide");
        return false;
    }

  


}
var popup = document.getElementById('popup');
function CloseSlide() {
    popup.classList.remove('open-slide');
}


function loginFunction() {
   

    if (document.getElementById("Username").value === "Damal" && document.getElementById("Password").value === "123") {
        console.log("Login successfully.");
        window.location.assign("../Views/HomePage.html");
    }
    
}









