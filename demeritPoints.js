
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) console.log('Okay');
    else {
        const points = Math.floor((speed - speedLmit) / kmPerPoint);
        if (points >= 12) console.log('License suspended');
        else console.log(points, ' points');
    }
}
