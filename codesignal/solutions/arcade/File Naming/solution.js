function solution(names) {       for ( var i = 0; i < names.length; i++){      for (var j = 0; j < i; j++ ){         if ( i != j ){            let counter = 1;            let addedNewName = false;            if ( names[i] == names[j] ) {               do{                  let newName = names[i] + "(" + counter + ")";                  let hasNewName = false;                  for ( var k = 0; k < i; k++){                     if (k != i){                        if ( newName === names[k] ) hasNewName = true;                     }                  }                  if ( !hasNewName ){                     names[i] = newName;                     addedNewName = true;                  }else{                     counter++;                  }               }while ( !addedNewName )            }                     }      }   }      