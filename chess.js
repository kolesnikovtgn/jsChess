let figureCoord = {
    x: 6,
    y: 3
};

let findCoord = {
  x: 7,
  y: 5
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




let numb = [1, 2, 3, 4, 5, 6, 7, 8];
let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function f1(fig1, fig2) {
    let index1;
    let index2;
    for(let i=0; i<alph.length; i++) {
        if(fig1.charAt(0) == alph[i]) {
            index1 = i+1;
        }
        if(fig2.charAt(0) == alph[i]) {
            index2 = i+1;
        }
    }

    return (Math.abs(index1-index2) == Math.abs(fig1.charAt(1)-fig2.charAt(1)));
}

console.log(f1('c7', 'e7'));