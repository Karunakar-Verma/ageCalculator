const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const appendHere = document.querySelector('#showResult');



button.addEventListener('click',()=>{
    const inputValue = input.value;

    const oldDate = new Date(inputValue);
    const date = new Date();

    const yeardiff =date.getFullYear() - oldDate.getFullYear();
    const monthdiff =date.getMonth() - oldDate.getMonth();
    let daydiff = date.getDate() - oldDate.getDate();

    if(monthdiff < 0 || oldDate.getMonth() > date.getMonth())
    {
        yeardiff--;
        monthdiff += 12;
    }

    if (daydiff < 0) {
        const lastMonth = new Date(date.getFullYear(), date.getMonth(), 0);
        daydiff += lastMonth.getDate(); // Get the last month's days
        monthdiff--; // Decrease month by one since we're borrowing days from the last month
    }

    appendHere.innerText = `Your age is ${yeardiff}yrs ${monthdiff} months and ${daydiff} days`;
})