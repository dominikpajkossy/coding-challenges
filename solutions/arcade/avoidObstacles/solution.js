function solution(inputArray) {    let field = [];    //Init field    for ( var i = 0; i < 41; i++){        field.push(0);    }    //Add obstacles    for ( var i = 0; i < inputArray.length; i++){        field[inputArray[i]] = 1;    }    //Jump through field    let jumpLength = 1;       for ( var i = 0; i < 100; i++){       for ( var j = 1; j < field.length; j++){           if ( field[jumpLength*j] === 1) break;           if ( jumpLength*j > field.length ) return jumpLength;       }       jumpLength++;   }        }