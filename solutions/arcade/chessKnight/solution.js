function solution(cell) {    function createPos(cell){        cell = cell.split("");        cell[0] = cell[0].toUpperCase();        switch (cell[0]){            case "A" :                return [8-cell[1],0];            case "B" :                return [8-cell[1],1];            case "C" :                return [8-cell[1],2];            case "D" :                return [8-cell[1],3];            case "E" :                return [8-cell[1],4];            case "F" :                return [8-cell[1],5];            case "G" :                return [8-cell[1],6];            case "H" :                return [8-cell[1],7];        }    }        let coordinates = createPos(cell);    let counter = 0;        if ( coordinates[0] - 1 >= 0 && coordinates[1] - 2 >= 0 ) counter++;    if ( coordinates[0] - 1 >= 0 && coordinates[1] + 2 <= 7 ) counter++;        if ( coordinates[0] + 1 <= 7 && coordinates[1] - 2 