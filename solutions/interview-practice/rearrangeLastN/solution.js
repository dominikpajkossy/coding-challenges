// Definition for singly-linked list:// function ListNode(x) {//   this.value = x;//   this.next = null;// }//function solution(l, n) {    let listArr = [];    let list = l;        while ( l != null ){        listArr.push(l);        l = l.next;    }        if ( listArr.length > 0 && n > 0 && n !== listArr.length ){        var start = listArr[listArr.length - n];        listArr[listArr.length-1].next = listArr[0];        listArr[listArr.length-1 -n].next = null;        return start;    }else{        return list;    }    }
