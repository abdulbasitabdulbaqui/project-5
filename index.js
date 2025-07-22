let user = document.getElementById("user");
let pass = document.getElementById("pass");
let flag = 1

function validateForm() {
    if (user.value == "") {
        document.getElementById("user error").innerHTML = "please enter user name"
        flag = 0
    } else if (user.value.length < 3) {
        document.getElementById("user error").innerHTML = "please enter valid user name"
    } else {
        document.getElementById("user error").innerHTML = ""
        flag = 1
    }

    if (pass.value == "") {
        document.getElementById("pass error").innerHTML = "please enter valid password!!"
        flag = 0
    } else {
        document.getElementById("pass error").innerHTML = ""
        flag = 1
    }
    if (flag) {
        return true
    } else {
        return false
    }
}


