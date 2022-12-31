const date = document.querySelector("#dateofbirth");
const luckyNumber = document.querySelector("#luckynumber");
const checkBtn = document.querySelector("#check");
const outPut = document.querySelector("#output");

checkBtn.addEventListener("click", checkBirthDateIsLucky);


function calSum() {
    let Date = date.value.replaceAll("-", "")
    let sum = 0;

    for (let char of Date) {
        sum += +char;
    }
    return sum;
}



function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
      outPut.innerText="Your birthday is lucky";
    }else {
      outPut.innerText="Your birthday is not lucky";
    }
  }
  
  function checkBirthDateIsLucky(){
    const dob =date.value;
    const sum = calSum(dob);
    if(sum&&dob){
    compareValues(sum,luckyNumber.value)
    }else{ 
    outPut.innerText="Please enter both the fields";
  }
}

