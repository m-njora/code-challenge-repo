//Challenge 1: Student Grade Generator (Toy Problem)
let grade = 85;
function calculateGrade(grade){
if(grade >= 79 ){
return ("A");
}
else if(grade>=60){
return ("B");
}
else if(grade>=59){
return ("C");
}
else if(grade>=40){

return("D");
}
else{
return ("E");
}
}
console.log (calculateGrade(grade))

