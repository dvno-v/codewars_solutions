function dirReduc(arr){
    let a;
    while(true){
        let a = (function(arr){
            for (let i = 0; i < arr.length - 1; i++) {
                let temp = (arr[i] + arr[i + 1]).toLowerCase();
                if(temp === "northsouth" || temp ==="southnorth" || temp === "westeast" || temp === "eastwest"){
                    return i;
                }
            }
            return -1;
        })(arr);
        if(a === -1) break;
        arr = arr.filter((el, i, arr) => {
            if(i === a || i === (a + 1)){
                return false;
            }
            return true;
        })
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));