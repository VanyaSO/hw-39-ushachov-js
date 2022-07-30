'use strict';

void function (){


    const arrMap = new Map();
    const arr = [];

    function cash (num){
        if(arrMap.size >= 10){
            arrMap.delete(arr[0]);
            arr.shift();
        }
        arr.push(num);
        arr.forEach(item => {
            arrMap.set(item, item);
        })

    }


    cash(1);
    cash(2);
    cash(3);
    cash(4);
    cash(5);
    cash(6);
    cash(7);
    cash(8);
    cash(9);
    cash(10);
    cash(11);
    cash(12);
    cash(13);
    cash(14);

    console.log(arr);
    console.log(arrMap);
}()


