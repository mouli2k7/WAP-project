let newPromise = new Promise((resolve, reject)=>{
    let a=5;
    let b=6;

    if(a===b){
        resolve('Promise are fullfiled...')
    }else{
        reject('Promise are not fulllfiled...')
    }
})

console.log(newPromise)

newPromise
        .then((data)=>{
            console.log('Received data:', data)
        })
        .catch((error)=>{
            console.log('Error msg:', error)
        })
        .finally(()=>{
            console.log('Promise is done or not')
        })
const flipCoin = new Promise((resolve, reject)=>{
    const isHead = Math.random() > 0.5;
    
    if(isHead){
        resolve('it‘s Heads! You Win! 🏆');
    }else{
        reject('it‘s Tails! You Lose.❌');
    }
})
console.log()

flipCoin
    .then((successMessage)=>{
        console.log('Success', successMessage)
    })
    .catch((errorMessage)=>{
        console.log('Error:', errorMessage)
    })
    .finally(()=>{
        console.log('3. Game Over.');
    })














