//Event listner

for(var i=0; i<26;i++){
    document.querySelectorAll("#myButton")[i].addEventListener("click",function(){
           var text=this.innerHTML;
          
       audioPlay(text);    
 });
 }
 
 
 function audioPlay(text){
   
  var myimageId=document.querySelector("#myImage")
  myimageId.classList.add("img")
 var myVar= document.querySelector("h2");
     switch (text) {
             case "A":
             
   
   
   
                   myimageId.src="img/apple.jpeg" 
                  
                   myVar.innerHTML=(text+" "+"For Apple")
                     var audio=new Audio('aud/SHEBLU003.mp3')
                     audio.play();
                     break;
     
                     case "B":
                         myimageId.src="img/ball.jpeg" 
                           
                           myVar.innerHTML=(text+" "+"For Ball")
                           var audio=new Audio('aud/SHEBLU004.mp3')
                           audio.play();
                           break;
                           case "C":
                               myimageId.src="img/cat.jpeg"
                               myVar.innerHTML=(text+" "+"For Cat")
                     var audio=new Audio('aud/SHEBLU005.mp3')
                     audio.play();
                     break;
                     case "D":
                         myimageId.src="img/doll.jpeg"
                         myVar.innerHTML=(text+" "+"For Doll")
                     var audio=new Audio('aud/SHEBLU006.mp3')
                     audio.play();
                     break;
                     case "E":
                         myimageId.src="img/egg.jpeg"
                         myVar.innerHTML=(text+" "+"For Egg")
                     var audio=new Audio('aud/SHEBLU007.mp3')
                     audio.play();
                     break;
     
                     case "F":
                         myimageId.src="img/fish.jpeg"
                         myVar.innerHTML=(text+" "+"For Fish")
                           var audio=new Audio('aud/SHEBLU008.mp3')
                           audio.play();
                           break;
                           case "G":
                               myimageId.src="img/goat.jpeg"
                               myVar.innerHTML=(text+" "+"For Goat")
                     var audio=new Audio('aud/SHEBLU009.mp3')
                     audio.play();
                     break;
                     case "H":
                         myimageId.src="img/hen.jpeg"
                         myVar.innerHTML=(text+" "+"For Hen")
                     var audio=new Audio('aud/SHEBLU010.mp3')
                     audio.play();
                     break;
                     case "I":
                         myimageId.src="img/ink.jpeg"
                         myVar.innerHTML=(text+" "+"For Ink")
                     var audio=new Audio('aud/SHEBLU011.mp3')
                     audio.play();
                     break;
                     case "J":
                         myimageId.src="img/jug.jpeg"
                         myVar.innerHTML=(text+" "+"For Jug")
                     var audio=new Audio('aud/SHEBLU012.mp3')
                     audio.play();
                     break;
     
                     case "K":
                         myimageId.src="img/kite.jpeg"
                         myVar.innerHTML=(text+" "+"For Kite")
                           var audio=new Audio('aud/SHEBLU013.mp3')
                           audio.play();
                           break;
                           case "L":
                               myimageId.src="img/lamp.jpeg"
                               myVar.innerHTML=(text+" "+"For Lamp")
                     var audio=new Audio('aud/SHEBLU014.mp3')
                     audio.play();
                     break;
                     case "M":
                         myimageId.src="img/mango.jpeg"
                         myVar.innerHTML=(text+" "+"For Mango")
                     var audio=new Audio('aud/SHEBLU015.mp3')
                     audio.play();
                     break;
                     case "N":
                         myimageId.src="img/nest.jpeg"
                         myVar.innerHTML=(text+" "+"For Nest")
                     var audio=new Audio('aud/SHEBLU016.mp3')
                     audio.play();
                     break;
                     case "O":
                         myimageId.src="img/ox.jpeg"
                         myVar.innerHTML=(text+" "+"For Ox")
                     var audio=new Audio('aud/SHEBLU017.mp3')
                     audio.play();
                     break;
     
                     case "P":
                         myimageId.src="img/pet.jpeg"
                         myVar.innerHTML=(text+" "+"For Pet")
                           var audio=new Audio('aud/SHEBLU018.mp3')
                           audio.play();
                           break;
                           case "Q":
                               myimageId.src="img/queen.jpeg"
                               myVar.innerHTML=(text+" "+"For Queen")
                     var audio=new Audio('aud/SHEBLU019.mp3')
                     audio.play();
                     break;
                     case "R":
                         myimageId.src="img/rat.png"
                         myVar.innerHTML=(text+" "+"For Rat")
                     var audio=new Audio('aud/SHEBLU020.mp3')
                     audio.play();
                     break;
                     case "S":
                         myimageId.src="img/sun.jpeg"
                         myVar.innerHTML=(text+" "+"For Sun")
                     var audio=new Audio('aud/SHEBLU021.mp3')
                     audio.play();
                     break;
                     case "T":
                         myimageId.src="img/tree.jpeg"
                         myVar.innerHTML=(text+" "+"For Tree")
                     var audio=new Audio('aud/SHEBLU022.mp3')
                     audio.play();
                     break;
     
                     case "U":
                         myimageId.src="img/umbrella.jpeg"
                         myVar.innerHTML=(text+" "+"For Umbrella")
                           var audio=new Audio('aud/SHEBLU023.mp3')
                           audio.play();
                           break;
                           case "V":
                               myimageId.src="img/van.jpeg"
                               myVar.innerHTML=(text+" "+"For van")
                     var audio=new Audio('aud/SHEBLU024.mp3')
                     audio.play();
                     break;
                     case "W":
                         myimageId.src="img/window.jpeg"
                         myVar.innerHTML=(text+" "+"For Window")
                     var audio=new Audio('aud/SHEBLU025.mp3')
                     audio.play();
                     break;
                     case "X":
                         myimageId.src="img/xray.jpeg"
                         myVar.innerHTML=(text+" "+"For X-ray")
                           var audio=new Audio('aud/SHEBLU026.mp3')
                           audio.play();
                           break;
                           case "Y":
                               myimageId.src="img/yellow.jpeg"
                               myVar.innerHTML=(text+" "+"For Yellow")
                     var audio=new Audio('aud/SHEBLU027.mp3')
                     audio.play();
                     break;
                     case "Z":
                         myimageId.src="zebra.jpeg"
                         myVar.innerHTML=(text+" "+"For Zebra")
                     var audio=new Audio('SHEBLU028.mp3')
                     audio.play();
                    
                     default:
                         
     }
 
 }
   
 
 
 //number
 
   for (var i=0;i<20;i++){
 document.querySelectorAll("#number")[i].addEventListener("click",function(){
 var text1=this.innerHTML;
 audioPlays(text1);
 });
 
 }
 
 
 
 
 
 
 function audioPlays(text1){
 var myVar1=document.querySelector("h2")
 switch(text1){
 case "1":
   myVar1.innerHTML=(text1+"="+"One");
   var audio=new Audio('aud/SHEBLU029.mp3');
   audio.play();
   break;
   case "2":
   myVar1.innerHTML=(text1+"="+"Two");
   var audio1=new Audio('aud/SHEBLU030.mp3');
   audio1.play();
   break;
   case "3":
   myVar1.innerHTML=(text1+"="+"Three");
   var audio1=new Audio('aud/SHEBLU031.mp3')
   audio1.play();
   break;
   case "4":
   myVar1.innerHTML=(text1+"="+"Four");
   var audio1=new Audio('aud/SHEBLU032.mp3')
   audio1.play();
   break;
   case "5":
     myVar1.innerHTML=(text1+"="+"Five");
     var audio1=new Audio('aud/SHEBLU033.mp3')
     audio1.play();
     break;
     case "6":
     myVar1.innerHTML=(text1+"="+"Six");
     var audio=new Audio('aud/SHEBLU035.mp3')
     audio.play();
     break;
     case "7":
     myVar1.innerHTML=(text1+"="+"Seven");
     var audio=new Audio('aud/SHEBLU034.mp3')
     audio.play();
     break;
     case "8":
   myVar1.innerHTML=(text1+"="+"Eight");
   var audio=new Audio('aud/SHEBLU036.mp3')
   audio.play();
   break;
   case "9":
   myVar1.innerHTML=(text1+"="+"Nine");
   var audio=new Audio('aud/SHEBLU037.mp3')
   audio.play();
   break;
   case "10":
   myVar1.innerHTML=(text1+"="+"Ten");
   var audio=new Audio('aud/SHEBLU038.mp3')
   audio.play();
   break;
   case "11":
   myVar1.innerHTML=(text1+"="+"Eleven");
   var audio=new Audio('aud/SHEBLU039.mp3')
   audio.play();
   break;
   case "12":
   myVar1.innerHTML=(text1+"="+"Twelve");
   var audio=new Audio('aud/SHEBLU040.mp3')
   audio.play();
   break;
   case "13":
   myVar1.innerHTML=(text1+"="+"Thirteen");
   var audio=new Audio('aud/SHEBLU041.mp3')
   audio.play();
   break;
 
   case "14":
     myVar1.innerHTML=(text1+"="+"Fourteen");
     var audio=new Audio('aud/SHEBLU042.mp3')
     audio.play();
     break;
     case "15":
     myVar1.innerHTML=(text1+"="+"Fifteen");
     var audio=new Audio('aud/SHEBLU043.mp3')
     audio.play();
     break;
     case "16":
     myVar1.innerHTML=(text1+"="+"Sixteen");
     var audio=new Audio('aud/SHEBLU044.mp3')
     audio.play();
     break;
     case "17":
   myVar1.innerHTML=(text1+"="+"Seventeen");
   var audio=new Audio('aud/SHEBLU045.mp3')
   audio.play();
   break;
   case "18":
   myVar1.innerHTML=(text1+"="+"Eighteen");
   var audio=new Audio('aud/SHEBLU046.mp3')
   audio.play();
   break;
   case "19":
   myVar1.innerHTML=(text1+"="+"Nineteen");
   var audio=new Audio('aud/SHEBLU047.mp3')
   audio.play();
   break;
   case "20":
   myVar1.innerHTML=(text1+"="+"Twenty");
   var audio=new Audio('aud/SHEBLU048.mp3')
   audio.play();
   break;
 
 }
 
 }
 