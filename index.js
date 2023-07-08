function processInput() {
    // window.open("https://imagekit.io/blog/how-to-resize-image-in-html/");
    var name = document.getElementById("name").value;
    var psw = document.getElementById("psw").value;
    // document.getElementById("result").innerHTML = "Hello, " + name + "!";
    if (name=="Bharath"&&psw=="1234"||name=="Nithin"&&psw=="1234"||name=="Vignesh Waran"&&psw=="1234") {
        window.open("Project4.html");
      } else {
        window.open("login.html");
      }
  }
  // ||name=="Nithin"||name=="Vignesh Waran"&&psw=="1234"