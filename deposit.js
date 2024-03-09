document.getElementById('Widthdrow').addEventListener('click',function(){
    const widthrowInput = document.getElementById('widthdrow-money');
    const widthdrowValue = widthrowInput.value;
    const widthdrowValueNumber = parseFloat(widthdrowValue)
    console.log(widthdrowValueNumber)

    const widthdrowMoney = document.getElementById('Withdrawal-money');
    const widthdrowMoneyString = widthdrowMoney.innerText
    const widthdrowMoneyNumber = parseFloat(widthdrowMoneyString);
    console.log(widthdrowMoneyNumber)


    const balance = document.getElementById('Cash')
    const balanceString = balance.innerText;
    const balanceNumber = parseFloat(balanceString);
    console.log(balanceNumber)


    if(widthdrowValueNumber > balanceNumber){
        alert('no enough money in the bank')
        return;
    }

    const totalWidthrow = widthdrowMoneyNumber + widthdrowValueNumber;
    widthdrowMoney.innerText = totalWidthrow;


    const totalCash = balanceNumber - widthdrowValueNumber;
    balance.innerText = totalCash
})