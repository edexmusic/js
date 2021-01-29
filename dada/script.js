function start(name) {
    alert("Hello " + name);
}
// start("Taras");
// start("Some")

function sum(a=0, b=0, c=0) {
    const result=a+b+c;
    console.log("a:" + a)
    console.log("b:" + b)
    console.log("c:" + c)
    console.log("result: " + result)
}
// sum(100, 100, 200)

function sq(a=0) {
    const result=a*a;
    console.log("a:" + a)
    console.log("result: ", result)
}
// sq(4)

function ura() {
    console.log("succesfull authentificatio")
}
function auth(pass="") {
    const origin = "qwerty";
    if (pass==origin){
        ura()
        alert("Authentifacated Succesfully")
    }
    else {
        alert("Wrong Password")
    }
}
// auth("qwerty")

// function da(x) {

// }
// da()

function sum2() {
    const x = document.querySelector('#x');
    const y = document.querySelector('#y');


    const result = +x.value*+x.value + 2*(+x.value*+y.value) + +y.value;
    console.log("result: ", result)
}