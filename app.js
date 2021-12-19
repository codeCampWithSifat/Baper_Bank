
// login button event handler
const login = document.getElementById("login");
login.addEventListener("click" , function () {
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const transactionArea  = document.getElementById("transaction_area");
    transactionArea.style.display = "block";
})
// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click" , function () {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText ("currentBalance",depositNumber)

    document.querySelector("#depositAmount").value = "";
});
// withdraw button event handler 
const widthdrawBtn = document.getElementById("addWithdraw");
widthdrawBtn.addEventListener("click" , function () {
   const withdrawNumber = getInputNumber("withdrawAmount");
   document.getElementById("withdrawAmount").value = "";
   updateSpanText ("currentWithdraw" ,withdrawNumber);
   updateSpanText ("currentBalance" , withdrawNumber * -1)
})

function getInputNumber (id) {
    const amount = document.getElementById(id).value ;
    const amountNumber = Number(amount);
    return amountNumber
}

function updateSpanText (id ,depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = Number(current);
    const totalAmount = depositNumber + currentNumber ;
    document.getElementById(id).innerText = totalAmount ;
}