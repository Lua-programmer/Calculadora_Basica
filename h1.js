var message = "Hello World! || I'm Alex";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.getElementById("messageLabel");

function textFunc() {
   messageLabel.innerHTML = message.substring(0, msgCount);
   
   if (msgCount == message.length) {
      clearInterval(timer1);
      
      timer2 = setInterval("blinkFunc()", 200);
      
   } else {
      msgCount++;
   }
}

function blinkFunc() {
   
   if (blinkCount < 6) {
      if(blinkFlg == 0) {
         messageLabel.innerHTML = message;
         blinkFlg = 1;
         blinkCount++;
      } else {
         messageLabel.innerHTML = "";
         blinkFlg = 0;
      }
   } else {
      clearInterval(timer2);
   }
}


timer1 = setInterval("textFunc()", 150);