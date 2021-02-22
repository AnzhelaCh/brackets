module.exports = function check(str, bracketsConfig) {
    let count = 0;
    let item = 1;
    while(item == 1){
        item = 0;
        for( let j=0; j < bracketsConfig.length;j++){
            let arr = str.split(bracketsConfig[j][0]+bracketsConfig[j][1]);
            if(arr.length > 1){
                count++
                item = 1;
                str = arr.join('');
            }
        }
    }
    let result = false;
    if(str == ''){
        result = true;
    }
    return result;
}
