


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


document.getElementById('Widthdrow').addEventListener('click',function(){
    const widthrowMoney = document.getElementById('widthdrow-money');
    const widthdrowValue = widthrowMoney.value;
    const widthrowMoneyNumber =parseInt(widthdrowValue);

    const cash = document.getElementById('Cash');
    const cashValue = parseInt(cash.innerText);

    if(widthrowMoneyNumber > cashValue){
        alert("no Enough Money")
        return;
    }

    const WithdrawalMoney = document.getElementById('Withdrawal-money');

    const WithdrawalMoneyNumber = parseInt(WithdrawalMoney.innerText);
    const totalWithdrow = widthrowMoneyNumber + WithdrawalMoneyNumber;
    WithdrawalMoney.innerText =totalWithdrow

    widthrowMoney.value = ''
    const totalCash = cashValue - totalWithdrow;
    cash.innerText = totalCash
})