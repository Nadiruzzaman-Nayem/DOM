//eliment find by id
var myId=document.getElementById('box1');
console.log(myId)
var myId2=document.querySelector('#box2');
console.log(myId2)

//eliment find byClassName
var box=document.getElementsByClassName('box') ;//html collection
console.log(box)
//html collection to array
 var htmlToArray= Array.prototype.slice.call(box) //arrray
 console.log(htmlToArray)

var boxs=document.querySelectorAll('.box') ;//nodlist
console.log(boxs)
//nodlist to array
var boxArray=Array.prototype.slice.call(boxs) 
boxArray.forEach(element => {
    console.log(element)
})
console.log(boxArray);
//eliment find by children with pseudo-class
var findByPeudoClass=document.querySelector('li:first-child');
console.log(findByPeudoClass);

//eliment slect by children
 var chilDren=myId2.children[1].children; //html collection
// var chilDren=myId.childNodes;

 console.log(chilDren) 
//eliment find by child to parent
var child=document.querySelector('.child');
console.log(child)
var parentEliment=child.parentNode;
console.log(parentEliment)
//eliment find by 