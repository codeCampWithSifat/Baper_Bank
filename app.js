const login = document.getElementById("login");
login.addEventListener("click" , function () {
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const transactionArea  = document.getElementById("transaction_area");
    transactionArea.style.display = "block";
})