var attempt = 3;

var userPasswordDictionary = {
    "sai": "Sai@123",
    "vinay": "Vinay@536"
};

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (userPasswordDictionary[username] === password) {
        alert("Login successfully");
        window.location = "home.html";
        return false;
    } 
    else if (username === "" || password === "") {
        attempt--;
        if (username === "" && password === "") {
            alert("Enter username and password !! You have left " + attempt + " attempt;");
        } 
        else {
            alert("Enter username or password !! You have left " + attempt + " attempt;");
        }
    } 
    else {
        attempt--;
        alert("Incorrect Username or Password !! You have left " + attempt + " attempt;");
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}
