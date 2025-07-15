// blocking / syncronouse programming / single threaded

function message() {
    for (let i = 0; i < 10000000000; i++) { }
    console.log("hello Second")
}

// first()
// message()
// thrid()


function first() {
    console.log("hello first")
}

function second() {
    setTimeout(function () {
        console.log("hello Second")
    }, 1000)
}
function thrid() {
    console.log("hello Thrid")
}
function fourth() {
    setTimeout(function () {
        console.log("hello fourth")
    }, 4000)

}
function fifth() {
    console.log("hello fifth")
}
function sixth() {
    console.log("hello sixth")
}
function seventh() {
    setTimeout(function () {
        console.log("hello Seventh")
    }, 2000)
}
function Eight() {
    console.log("hello Eight")
}



first()
second() //
thrid()
fourth() //
fifth()
sixth()
seventh() //
Eight()
