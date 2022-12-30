const date=document.querySelector("#dateofbirth");
const luckyNumber=document.querySelector("#luckynumber");
const checkBtn=document.querySelector("#check");
const outPut=document.querySelector("#output");

 checkBtn.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky(){
    let Date = date.value.replaceAll("-","")
    let sum=0;

   for(let char of Date){
    sum += +char;
   }
      if (sum%luckyNumber.value==0){
    outPut.innerText = "Your birthday is lucky.😃";
}else{
    outPut.innerText= "Your birthday is Not lucky.😔";
}
}
