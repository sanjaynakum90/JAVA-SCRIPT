// when asynchronous function depend on more asynchronous (like in deeper) it goes

// so if our first async function failed then after that depend async  function will never execute

// and when async function goes deeper code will growing horizontally instead of vertically

// due to that code readability will decrease these are the main problem with call back hell
let balance = 5000;
function payment(amount, callback) {
    console.log(`payment of ${amount} initiated.`);

    setTimeout(() => {
        if (amount > 0) {
            console.log(`${amount} deducted`);
            callback(null, amount)
        } else {
            callback("invalid payment amount")
        }
    }, 1000);

}

function checkbalance(amount, callback) {
    console.log("Finelizing payment......");
    setTimeout(() => {
        if (amount <= balance) {
            console.log("Sufficient balance.");
            callback(null, "Balance verified.");
        } else {
            callback("Insufficient balance.");
        }
    }, 1000);

    setTimeout(() => {
        console.log(`your running balance is ${balance-amount}`);
        
    }, 2000);

}

function ifpaymentdone(amount, callback) {
    console.log("Finalizing payment...");
    setTimeout(() => {
        console.log(`Payment of ₹${amount} completed successfully.`);
        callback(null, "Payment done.");
    }, 1000);
}

// Demonstrating callback hell
payment(1500, (err, amount) => {
    if (err) {
        console.error(err);
    } else {
        checkbalance(amount, (err) => {
            if (err) {
                console.error(err);
            } else {
                ifpaymentdone(amount, (err, result) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(result);
                    }
                });
            }
        });
    }
});