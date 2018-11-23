let figureCoord = {
    x: 6,
    y: 3
};

let findCoord = {
  x: 7,
  y: 2
};

function f(figureCoord, findCoord) {

    let status;

    if(Math.abs(figureCoord.x - findCoord.x) == Math.abs(figureCoord.y - findCoord.y)) {
        status = true;
    } else {
        status = false;
    }
    return status;
};

console.log( f(figureCoord, findCoord) );