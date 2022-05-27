$(function(){
    // 等于按钮监听
    let show = $('.show');                                   // 输入框
    $('.equal').on('click',function(){
        let main_content = show.text();                      // 总字符串
        let number_array = show.text().split(/[+x\/%\-]/);   // 数字数组
        let character_array = show.text().split(/[^+\-x\/%]/);
        let char_array = [];                                 // 运算符数组
        let end;
        for(let x of character_array){
            if(x!==''){
                char_array[char_array.length] = x;
            }
        }
        if(number_array[0]===''||number_array[0]===' '){
            number_array[0]=0;
            algorithm(char_array,number_array,end,main_content)
        }else{
            algorithm(char_array,number_array,end,main_content)
        }

    })

    function algorithm(char_array,number_array,end,main_content){
        while(1){
            if (char_array.indexOf("x") !== -1 || char_array.indexOf("/") !== -1 || char_array.indexOf("%") !== -1) {
                for (let i = 0; i < main_content.length; i++) {
                    if(char_array[i]==='x'){
                        number_array[i] = parseFloat(number_array[i]) * parseFloat(number_array[i + 1]);
                        number_array.splice(i+1, 1)
                        char_array.splice(i,1)
                    }else if(char_array[i]==='/'){
                        number_array[i] = parseFloat(number_array[i]) / parseFloat(number_array[i + 1]);
                        number_array.splice(i+1, 1)
                        char_array.splice(i,1)
                    }else if(char_array[i]==='%'){
                        number_array[i] = parseFloat(number_array[i]) % parseFloat(number_array[i + 1]);
                        number_array.splice(i+1, 1)
                        char_array.splice(i,1)
                    }
                    if(number_array.length===1){
                        end = number_array[0]
                    }

                }
            }else if(char_array.indexOf('+') !==-1 || char_array.indexOf('-') !== -1){
                for(let i=0;i<char_array.length;i++){
                    if(char_array[i]==='+'){
                        number_array[i] = parseFloat(number_array[i]) + parseFloat(number_array[i + 1]);
                        number_array.splice(i+1, 1)
                        char_array.splice(i,1)
                    }else if(char_array[i]==='-'){
                        number_array[i] = parseFloat(number_array[i]) - parseFloat(number_array[i + 1]);
                        number_array.splice(i+1, 1)
                        char_array.splice(i,1)
                    }
                    if(number_array.length===1){
                        end = number_array[0]
                    }
                }
            }else{
                console.log(end);
                break;
            }
        }
    }


})
