console.log("helo");

const fitimgs = document.getElementsByClassName('fitimg');

const dragimg = document.querySelector(".dragimg");


dragimg.addEventListener("dragstart",(e)=>{

e.target.className += ' hold';

setTimeout(()=> {
e.target.className = 'hide';

},0);
console.log("drag start");

});


dragimg.addEventListener("dragend",(e)=>{
e.target.className = 'dragimg';
console.log("drag end");

});

for(fitimg of fitimgs){

fitimg.addEventListener("dragover",(e)=>{

e.preventDefault();
console.log("dragover is triggered");

});

fitimg.addEventListener("dragenter",(e)=>{

	e.target.className +=' dashed';


console.log("dragenter is triggered");

});

fitimg.addEventListener("dragleave",(e)=>{

	e.target.className = 'fitimg';
console.log("dragleave is triggered");

});


fitimg.addEventListener("drop",(e)=>{

	e.target.append(dragimg);
console.log("drop is triggered");

});



}