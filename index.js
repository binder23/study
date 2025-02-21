document.getElementById("contact").addEventListener("submit", function(event){

let email=document.getElementById("email").value;
let subject=document.getElementById("subject").value;
let lesson=document.getElementById("lesson").value;
let tutoring=document.getElementById("tutoring").value;
let question=document.getElementById("question").value;
let other=document.getElementById("other").value;
let comment=document.getElementById("comment").value;

console.log("Email:", email);
console.log("Subject:", subject);
console.log("Lesson:", lesson);
console.log("Tutoring?", tutoring);
console.log("Question?", question);
console.log("Other?", other);
console.log("Comment:", comment);

})