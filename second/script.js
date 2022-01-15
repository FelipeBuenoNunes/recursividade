const arr = [
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]],
    [[16, 17, 18],
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
    [28, 29, 30]],
    [[31, 32, 33],
    [34, 35, 36],
    [37, 38, 39],
    [40, 41, 42],
    [43, 44, 45]],
    [[46, 47, 48],
    [49, 50, 51],
    [52, 53, 54],
    [55, 56, 57],
    [58, 59, 60]],
    [[61, 62, 63],
    [64, 65, 66],
    [67, 68, 69],
    [70, 71, 72],
    [73, 74, 75]]
]
const maxArr = [
    [1,[2,[3,],4],5,[6,7,[8],9],10],
    11,
    [12,[13,[14],15],16,17,[18,[19],20],21],
    [22,[23,[24],24],26,[27,[28],29],30],
    [31,32,[33,34,35,36,[37,38,39,40],41],42]
];

//Primeiro feito, só funciona para array de array
function x(n1){
    if(n1.length === 0){
        return n1[0];
    }

    function y(n2){
        if(n2.length === 0){
            return n2[0];
        }
        console.log(n2.shift());
        y(n2);
    }

    y(n1.shift());
    return x(n1);
}

printArr(maxArr);
//Segundo feito, funciona para qualquer tipo de array
function printArr(n1){
    if(n1.some(elem => Array.isArray(elem))) n1 = n1.flat(Infinity);
    else if(n1.length === 1){
        console.log(n1[0]);
        return;
    }
    console.log(n1.shift());    
    printArr(n1);
}

//console.log(matriz[linha - 1][coluna - 1]);