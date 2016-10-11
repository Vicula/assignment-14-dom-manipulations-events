// GO!

// TASK 1 -- Show/Hide Nav

var navMenuBut = document.querySelector('#hide-nav button')
var navMenuBox = document.querySelector('.answer-box .nav-menu')

var navMenHide = function(){


   if (navMenuBox.className === 'nav-menu-hidden'){
      navMenuBox.className = 'nav-menu'
   } else {
      navMenuBox.className = 'nav-menu-hidden'
   }


}

navMenuBut.addEventListener('click', navMenHide)

// TASK 2 -- Select an Icon
var selectedDiv = document.getElementsByClassName('option')
// var chckSlct =

var addRmvClass = function(){

   console.log(this)

   if(this.className === 'option selected'){
      this.className = 'option'
   } else {
      this.className += ' selected'
   }



}

// selectedDiv.addEventListener('click', addRmvClass())
for (var i =0; i<selectedDiv.length; i++){
   selectedDiv[i].addEventListener('click', addRmvClass)
}


// TASK 3 -- Move Item From List to List

var allOfTheNames = document.querySelectorAll('#list-2-list li')
var goodStanding = document.querySelector('.good-standing-list')
var porbList = document.querySelector('.probation-list')

var changeSidesFun = function(){

   var crntSelection = this.parentElement
   console.log(this)

   if(crntSelection.className === 'good-standing-list'){
      porbList.appendChild(this)
      goodStanding.removeChild(this)

   } else {
      goodStanding.appendChild(this)
      porbList.removeChild(this)

   }

}




for (var i =0; i < allOfTheNames.length; i++){
   allOfTheNames[i].addEventListener('click', changeSidesFun)
}

// TASK 4 -- Add Guest to List


var inputStr = document.querySelector('#add-guest input')
var guestList = document.querySelector('#add-guest .guest-list li')
var guestListHldr = document.querySelector('#add-guest .guest-list')



var addToList = function(event){
   // console.log(event)
   var emptyEntry = '<li class="guest">'+ inputStr.value + '</li>'

   if (event.keyCode === 13){
      // var entryValue =
      guestListHldr.innerHTML += emptyEntry
      console.log(guestListHldr.innerHTML)
      inputStr.value = ''

   } else {

   }
}

inputStr.addEventListener('keypress', addToList)

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

var inputStrB = document.querySelector('#add-guest-bonus input')
var guestListB = document.querySelector('#add-guest-bonus .guest-list li')
var guestListHldrB = document.querySelector('#add-guest-bonus .guest-list')
// var guestListXB = document.querySelectorAll('#add-guest-bonus .remove')
var buttonHldr = []



var addToListB = function(event){
   // console.log(event)
   // var guestListXB = document.querySelectorAll('#add-guest-bonus .remove')
   var emptyEntryB = '<li class="guest">'+ inputStrB.value + '<button class="remove">X</button></li>'

   if (event.keyCode === 13){
      // var entryValue =
      guestListHldrB.innerHTML += emptyEntryB
      console.log(guestListHldrB.innerHTML)
      inputStrB.value = ''
      var buttonThing = document.querySelectorAll('#add-guest-bonus .remove')
      buttonHldr = buttonThing
   } else {

   }
   console.log(buttonHldr)

}

var remvThis = function(){
   var currntThing = this.parentElement
   guestListHldrB.appendChild(currntThing)
   console.log(currntThing)
}

console.log(buttonHldr)
inputStrB.addEventListener('keypress', addToListB)

for (var i =0; i < buttonHldr.length; i++){
   buttonHldr[i].addEventListener('click', remvThis)
}
