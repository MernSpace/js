


document.getElementById('add-money-btn').addEventListener('click',function(){
    const money = document.getElementById('add-money');
    const moneyValue = money.value;
    const moneyValueNumber = parseInt(moneyValue)
    const Deposit = document.getElementById('Deposit');
    const preveiosDeposit = parseInt(Deposit.innerText);
    

    const totalDeposit = moneyValueNumber + preveiosDeposit;


    Deposit.innerText = totalDeposit;

    const cash = document.getElementById('Cash');
    const cashValue = parseInt(cash.innerText);
    const totalMoney = cashValue + moneyValueNumber;
    cash.innerText = totalMoney;


    money.value = ''


  
})




//widthrow
