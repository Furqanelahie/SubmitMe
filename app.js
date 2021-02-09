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


const get_string7= mykey;

/*
const firebaseConfig = {
    apiKey: "AIzaSyAHKgDIS_phtBzaZg3u2VZqHuTN_QmMfJI",
    authDomain: "fir-chat-e85ad.firebaseapp.com",
    databaseURL: "https://fir-chat-e85ad.firebaseio.com",
    projectId: "fir-chat-e85ad",
    storageBucket: "fir-chat-e85ad.appspot.com",
    messagingSenderId: "266794827210",
    appId: "1:266794827210:web:125446662fa0b2c77be333",
    measurementId: "G-6GRRBM1H39"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
*/

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAwn63w4RUrCZmC4cxOQSNYQ78TtQTcKd4",
    authDomain: "project-8666.firebaseapp.com",
    databaseURL: "https://project-8666.firebaseio.com",
    projectId: "project-8666",
    storageBucket: "project-8666.appspot.com",
    messagingSenderId: "516690972979",
    appId: "1:516690972979:web:c013a5d41293d8d598ee46",
    measurementId: "G-4GX28ZZV4W"
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
firebase.database().ref(get_string7).on("child_added", (snapshot) => {
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

