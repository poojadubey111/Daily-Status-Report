function freqChar(str){
    let obj = {};
    let arr = [];
    let str1 = str.toLowerCase();

    // Step 1: Count frequency
    for(let i = 0; i < str1.length; i++){
        if(obj[str1[i]]){
            obj[str1[i]]++;
        } else {
            obj[str1[i]] = 1;
        }
    }

    // Step 2: Convert object → array of [key, value]
    for(let key in obj){
        arr[arr.length] = [key, obj[key]];
    }

    // Step 3: Manual Bubble Sort (Descending by frequency)
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j][1] < arr[j+1][1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    // Step 4: Print in required format
    let result = "";
    for(let i = 0; i < arr.length; i++){
        result += arr[i][0] + arr[i][1];
    }

    console.log(result);
}

freqChar("Enginnnneer");