// count lowercase and uppercase
// input = &quot;Hello world!&quot;
// output = uppercase = 1, lowercase = 9

function countCase(str){
    let upperCase = 0;
    let lowerCase = 0;
    for(let i=0;i<=str.length;i++){
        let ch = str[i];
        if(ch>='A' && ch<='Z'){
            upperCase++;
        }else if(ch>='a' && ch <= 'z'){
            lowerCase++;
        }
    }
    console.log(`Uppercase : ${upperCase} and lowerCase: ${lowerCase}`);
}

countCase("Hello World");