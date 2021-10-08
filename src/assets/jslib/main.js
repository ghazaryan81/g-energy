var scrollbar = Scrollbar.init(document.body, { speed: 0.75 })

$(document).ready(function () {
 // Show element
 function fadeShowElement(el, t = 250) {
  el.css({ display: 'block' }).stop().animate({ opacity: 1 }, t)
 }

 // Hide Element
 function fadeHideElement(el, t = 250) {
  el.stop().animate({ opacity: 0 }, t, function () {
   $(this).css({ display: 'none' })
  })
 }

 // begin -> down and up language switcher
 const mouseActiveElement = '.lang-cell'
 const dynamicElement = '.drop-down-top-bar'

 $('body').on('mouseenter', mouseActiveElement, function () {
  fadeShowElement($(this).find(dynamicElement))
 })

 $('body').on('mouseleave', mouseActiveElement, function () {
  fadeHideElement($(this).find(dynamicElement))
 })
 // end -> down and up language switcher

 // begin -> down and up main nav menu
 $('body').on('click', '.js-hamburger-menu-link', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const showHideElement = $('.for-drop-down')
  const showSelector = 'show-block'
  if (showHideElement.hasClass(showSelector)) {
   showHideElement.removeClass(showSelector)
   fadeHideElement(showHideElement)
  } else {
   showHideElement.addClass(showSelector)
   fadeShowElement(showHideElement)
  }
 })
 // end -> down and up main nav menu
})

/* function Calculator() {
 this.read = () => {
  console.log('this.read - ')
  this.num1 = +prompt('введите число')
  this.num2 = +prompt('введите еще одно число')
  this.subsum()
 }

 this.sum = () =>
  console.log(
   'this.sum - ',
   this.num1 && this.num2 ? this.subsum() : this.read()
  )
 this.subsum = () => console.log('this.subsum - ', this.num1 + this.num2)
 this.mul = () => console.log('this.mul - ', this.num1 * this.num2)
}

const myCalc = new Calculator()

myCalc.mul() */

function MakeUser(name, age) {
 return {
  name: name,
  age: age,
 }
}
const user = MakeUser('John', 30)

console.log(user)

// console.log(myCalc.sum())
// console.log(myCalc.nmul())

/* function C() {
 this.c = 'c'
}
const c = new C()

function A() {
 return c
}
function B() {
 return c
}

let a = new A()
let b = new B()

console.log(a === b) */

// alert() // true

/* function User(name) {
 // this.name = name
 // this.name = name
 // this.isAdmin = false
this.s = get a(){
}
}

console.log(new User('aa')) */

/*
$("body").on("click", ".js-for-drop-down", function(e) {
 e.preventDefault();
 e.stopPropagation();
});

// js-for-drop-down
$("body").click(function() {
 fadeHideElement($(".for-drop-down"));
}); */
