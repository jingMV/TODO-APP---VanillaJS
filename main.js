//date
const myDate = document.getElementById("myDate")
let dateOption = {weekday: "long", month: "short", day: "numeric"}
let date = new Date()
myDate.innerHTML = date.toLocaleDateString("en-us", dateOption);
//add style on span when it clicks
const myUl = document.getElementById("myUl");
myUl.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
})
//btn function
var submit = document.getElementById("submit");
submit.addEventListener('click', function() {
    const li = document.createElement("LI");
    const myTodo = document.getElementById("myTodo").value;
    const txt = document.createTextNode(myTodo);
    li.appendChild(txt);
    //textbox without a value
    if (myTodo === '') {
        alert("WRITE SOMETHING")
    }
    //get parent element and add the child element li
    else {
        document.getElementById("myUl").appendChild(li);
    }
    //create a SPAN element, add child element TXT and ADD TO PARENT ELEMENT LI
    const span = document.createElement("SPAN");
    span.appendChild(txt);
    li.appendChild(span);
    // clear the textbox after adding it
    document.getElementById("myTodo").value = ""
})


