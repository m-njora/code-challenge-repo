//Challenge 2: Speed Detector (Toy Problem)
let speed = 200
function speedDetector(speed){
    
if(speed < 70){
return("Ok");
}

else {
    let points = ((speed-70)/5)
        return("Points:"+points);
    if (points >= 12){
        return('License suspended');
    }
    }
}
console.log(speedDetector(speed));
