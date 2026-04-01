function count(){
    let value = 0

    return function(){
        value++;
        console.log(value)
    };
}

const store = count();

store()
store()