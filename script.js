
// -------------Random number generate------------------

document.getElementById('GeneratePinBtn').addEventListener('click' , function(){
    
   var numNewCount = Math.floor(Math.random() * 8000+2000);
   document.getElementById('DisplayRandomNumber').value = numNewCount;

   var submitHide = document.getElementById('DisplayRandomNumber').value
    if (submitHide == "") {
        document.getElementById('sub-mit').disabled = true
        
    } else {
        document.getElementById('sub-mit').disabled = false 
    }
   
})


// -------------------- calculator part--------------------

// number displayed

function display(num){
   var output =  document.getElementById('DisplayInputNumber').value ;
   var perNum = output.length
   if (perNum < 4) {
    output = output + num;
    document.getElementById('DisplayInputNumber').value = output;

   }
   
}

// all clear parit

function C(){
    document.getElementById('DisplayInputNumber').value = ''
}

// sequentially clear

function CE(){
    var text = document.getElementById('DisplayInputNumber').value;
    text = text.slice(0,-1);
    document.getElementById('DisplayInputNumber').value = text;
}

//  Right and Wrong Message displayed

function myfunction(){
   var num1 = document.getElementById('DisplayRandomNumber').value;
   var num2 = document.getElementById('DisplayInputNumber').value;

   if (num1 == num2) {
      
     var output = document.getElementById('correct')
     output.style.display = "block"
     document.getElementById('inCorrect').style.display = "none"

   }
   else{
    var result = document.getElementById('inCorrect')
    result.style.display = "block"
    document.getElementById('correct').style.display = "none"

    // 

    let leftAlert = document.getElementById('wrong-info');
        leftAlert.style.display ="block";
    let convertNumber = parseFloat(leftAlert.innerHTML);
    let totalNumber = convertNumber - 1;
        leftAlert.innerHTML = totalNumber + ' try left';

    if (totalNumber == 0){
        let throwMessage  = "Your chance is over !"
        leftAlert.innerHTML = throwMessage;
        
        }    

   }

}

