$(function(){
    // 等于按钮监听
    let show = $('.show');                                   // 输入框
    $('.equal').on('click',function(){
        let main_content = show.text();                      // 总字符串
        let number_array = show.text().split(/[+x\/%\-]/);   // 数字数组
        let character_array = show.text().split(/[^+\-x\/%]/);
        let char_array = [];                                 // 运算符数组
        for(let x of character_array){
            if(x!==''){
                char_array[char_array.length] = x;
            }
        }

        if(number_array[0]===''){

        }else{
            let judge = true;
            while(judge){
                if (char_array.indexOf("x") !== -1 || char_array.indexOf("/") !== -1 || char_array.indexOf("%") !== -1) {
                    for (let i = 0; i < main_content.length; i++) {
                        if(char_array[i]==='x'){
                            number_array[i] = parseFloat(number_array[i]) * parseFloat(number_array[i + 1]);
                            number_array.splice(i+1, 1)
                            char_array.splice(i,1)
                            console.log(number_array)
                            console.log(char_array)
                        }else if(char_array[i]==='/'){
                            number_array[i] = parseFloat(number_array[i]) / parseFloat(number_array[i + 1]);
                            number_array.splice(i+1, 1)
                            char_array.splice(i,1)
                            console.log(number_array)
                        }else if(char_array[i]==='%'){
                            number_array[i] = parseFloat(number_array[i]) % parseFloat(number_array[i + 1]);
                            number_array.splice(i+1, 1)
                            char_array.splice(i,1)
                            console.log(number_array)
                        }

                    }


                }else if(char_array.indexOf('+') !==-1 || char_array.indexOf('-') !== -1){
                    for(let i=0;i<char_array.length;i++){
                        if(char_array[i]==='+'){
                            number_array[i] = parseFloat(number_array[i]) + parseFloat(number_array[i + 1]);
                            number_array.splice(i+1, 1)
                            char_array.splice(i,1)
                            console.log(number_array)
                            console.log(char_array)
                        }else if(char_array[i]==='-'){
                            number_array[i] = parseFloat(number_array[i]) - parseFloat(number_array[i + 1]);
                            number_array.splice(i+1, 1)
                            char_array.splice(i,1)
                            console.log(number_array)
                            console.log(char_array)
                        }
                    }
                }else{
                    break;
                }
            }






        }


    })
})
