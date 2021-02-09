//localStorage.setItem("osmkey", "messages");
// Retrieve
var mykey = localStorage.getItem("osmkey");
//alert(mykey)
if(mykey===null){
  document.body.style.display="none"
  window.open("./send.html")
}
/*
var browsed_url = window.location.href;
var urlimp = new URL(browsed_url);
var imp_string = urlimp.searchParams.get("c");
console.log(imp_string);
if (imp_string === null) {
  alert("Sorry Not Found ")
//window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAOSh8-1Xjv5_dYmI03cJLMo43fAkov4ibQ&usqp=CAU")

 // document.body.style.display="none"
  //document.body.innerHTML="Not Found "
}else{
  alert("Found")
  
  
}*/


const get_string= mykey;


const firebaseConfig = {
    const firebaseConfig = { apiKey: "AIzaSyBJLunaVFMT0OKJBEBM3exOgUCl7WuKl00", authDomain: "hurtless-33668.firebaseapp.com", projectId: "hurtless-33668", storageBucket: "hurtless-33668.appspot.com", messagingSenderId: "1037111034293", appId: "1:1037111034293:web:2b22b203d4f55884f019fc", measurementId: "G-MN87Y7MHNN" 

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


name = "User"

function sendMessage () {
    // function to send a message into the database
    let message = document.querySelector(".message").value;
    while(message.indexOf("<")!=-1){
        message = message.replace("<", "[Invalid Character]");
    }
    while(message.indexOf(">")!=-1){
        message = message.replace(">", "[Invalid Character]");
    }
    while(message.indexOf("/")!=-1){
        message = message.replace("/", "[Invalid Character]");
    }
    while(message.indexOf("eval")!=-1){
        message = message.replace("eval", "[Invalid Expression]");
    }
    while(message.indexOf("img")!=-1){
        message = message.replace("img", "[Invalid Expression]");
    }
    


    
        firebase.database().ref(get_string).push().set({
            "sender":name,
            "message":message

        })
    document.querySelector(".message").value = "";    

    return false;
}
/*
function login () {
    //console.log("function")
    name = document.querySelector(".login-form").value;
    
    while(name.indexOf("<")!=-1){
        name = name.replace("<", "[Invalid Character]");
    }
    while(name.indexOf(">")!=-1){
        name = name.replace(">", "[Invalid Character]");
    }
    while(name.indexOf("/")!=-1){
        name = name.replace("/", "[Invalid Character]");
    }
    while(name.indexOf("eval")!=-1){
        name = name.replace("eval", "[Invalid Expression]");
    }
    while(name.indexOf("img")!=-1){
        name = name.replace("img", "[Invalid Expression]");
    }

    
    if (name.length > 20){
        name = name.slice(0, 20)
    }
    document.querySelector(".username").textContent = name;
    document.querySelector(".login").classList.add("slide-up");
    return false; 
}
*/
firebase.database().ref(get_string).on("child_added", (snapshot) => {
    let html = document.querySelector(".messages").innerHTML;
    
    
    
    while(html.indexOf("eval")!=-1){
        html = html.replace("eval", "[Invalid Expression]");
    }
    while(html.indexOf("img")!=-1){
        html = html.replace("img", "[Invalid Expression]");
    }
    

    
    const classes = ["color_one", "color_two", "color_3", "color_4", "color_5", "color_6", "color_7", "color_8" ,"color_9" , "color_10"];
    const random = Math.floor(Math.random() * classes.length);
    var color_design = classes[random];
    /*
   var topbaar= document.querySelector(".top-bar");
    
    topbaar.classList.add(color_design);
    */
    document.querySelector(".messages").innerHTML = `<div class="message-' + ${color_design} + '  t h br25px mar"><span class="sp">SomeOne</span><div class="boxes"><p class="q">How much you like furqan</p><p class="a">${snapshot.val().sender}</p><p class="q">Say something </p><p  class="a m4">${snapshot.val().message}</p><br></div></div>` + html;
})

