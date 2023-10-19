function signupvalidate() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (firstname === "" || lastname === "" || mobile === "" || email === "" || username === "" || password === "") {
      alert("Please fill in all the fields.");
    } else {
      alert("Signup successful!");
      window.location = "home.html";
    }
  }
  