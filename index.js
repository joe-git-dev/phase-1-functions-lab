// Code your solution in this file!

function distanceFromHqInBlocks(num1){
    if (num1 >= 42) {
        return num1 - 42;
    }
   
 else if (num1 < 42) {
     return 42 - num1;
 }
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(num1){
    return distanceFromHqInBlocks(num1) * 264;
}

distanceFromHqInFeet(num1);

function distanceTravelledInFeet(start, destination){
    if (start >= destination) {
        return (start - destination) * 264;
    }

   else if (start < destination) {
        return (destination - start) * 264;
    }
}
distanceTravelledInFeet(start, destination);

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    }

    else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    }

    else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }

    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
        }
    }
calculatesFarePrice(start, destination);