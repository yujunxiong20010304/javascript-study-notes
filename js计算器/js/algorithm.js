// 传入值的核心算法
function algorithm(char_array,number_array,end,main_content){
    while(1){
        if(char_array.length===0){
            end = number_array[0]
            break;
        }

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

            break;
        }
    }
    return end;

}


// 按等于按钮切换效果
function showResult(result){
     $('.show').slideUp(100,function(){
        $(this).slideDown(100)
        $(this).text(result)
     });
     $('.output').slideUp(500,function(){
        $(this).slideDown(200)
        $(this).text("")
     });
}
