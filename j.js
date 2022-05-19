var postermain = document.getElementById("postermain")
var textele = document.getElementById("maintextele")
var sendbutton = document.getElementById("send")
var textform = document.getElementById("textform")
var socials = document.getElementsByClassName("social")
console.log(postermain)
var mainSettings = { // not hard coding is the key
    "circlecolors":[
        "rgb(42, 98, 201)",
        "rgb(10, 54, 134)"
    ],
    "postermaincolors": [
        "#172959",
        "#031750"
    ]
}

if (postermain !== null) { // ofc im checking if items exist here because this is being linked to every site, so only the websites that have this element will run the code
    console.log("the j")
    var a = 1
    setInterval(() => {
        postermain.style.backgroundColor = mainSettings["postermaincolors"][a]
        a = (a == 0 && 1) || 0
    }, 2000);
}
function addcircle(){
    textelebound = textele.getBoundingClientRect() // i get this every time to update the new position
    var n = Math.round(Math.random()) // 0 or 1 the choice is yours
    var circle = document.createElement("div") // create garbage div and assign properties
    circle.className = "circle" // refer to circle class in css
    var x = textelebound.left+textelebound.width/2 // this goes to the middle of the element
    var y = textelebound.top+textelebound.height/2
    circle.style.backgroundColor = mainSettings["circlecolors"][n]
    document.body.appendChild(circle)
    circle.style.left = x+'px'
    circle.style.top = y+'px'
    setTimeout(() => { // i dont really know how to effectively to wait functions so i just nested them since i am low on time, i know its bad but i couldnt find a better way
        circle.style.opacity = "100%"
        circle.style.left= x + ((Math.random()*2-1)*400)+"px"
        circle.style.top= y + ((Math.random()*2-1)*200)+"px"
        setTimeout(() => {
            circle.style.opacity = "0%"
            setTimeout(()=>{
                circle.remove()
            },1000);
        }, 1000)
    }, 10);
}
if(textele !== null){
    addcircle()
    setInterval(addcircle, 50);
}
if(sendbutton !== null){
    sendbutton.addEventListener("mousedown",function(){ // the event
        textform.value = "Thank you for contacting us!"
        setTimeout(() => {
            textform.value = ""
        }, 2000);
    })
}
console.log(socials)
for(let v of socials){
    console.log(v)
    v.addEventListener("mouseover",function(){
        v.style.width = "4rem"
        v.style.height = "4rem"
    })
    v.addEventListener("mouseout",function(){
        v.style.width = "3rem"
        v.style.height = "3rem"
    })
}
