function Info(kim, jum, ju){
  console.log(
    "Hi", "I'm", kim, "I'm", jum, "years old.,", "I like", ju
  )
}

console.log("june",22,"films")
Info("june",22,"films")


function thank(name, day){
  console.log(`thanks ${name}. your lecture is great. Today is the ${day} of class`);
} //undefined를 없애려면 thank를 반환해 줘야 한다.

//return `thanks ${name}. your lecture is great. Today is the ${day} of class`;

const thankNicolas = thank("Nicolas", "second day")
console.log(thankNicolas)





const calculator = {
  plus: function(a, b){
    return a+b;}
  }

const calculator1 = {
   minus: function(a, b){
    return a-b;}
}

const calculator2 = {
   multiply: function(a, b){
    return a*b;}
}
// 아래 처럼 묶어서 간편하게 표현하자!!
const plus = calculator.plus(5,5)
console.log(plus)
const minus = calculator1.minus(6,5)
console.log(minus)
const multiply = calculator2.multiply(3,2)
console.log(multiply)


const calculator3 = {
  plus1: function(a, b){
    return a+b;},
  minus1: function(a, b){
    return a-b;},
  multiply1: function(a, b){
    return a*b;}
}

const plus1 = calculator3.plus1(5,5)
console.log(plus1)
const minus1 = calculator3.minus1(6,5)
console.log(minus1)
const multiply1 = calculator3.multiply1(3,2)
console.log(multiply1)
