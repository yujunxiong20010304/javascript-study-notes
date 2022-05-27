$(function(){
    // 等于按钮监听
    let show = $('.show');                                   // 获取输入框
    $('.equal').on('click',function(){
        let main_content = show.text();                      // 总字符串
        let number_array = show.text().split(/[+x\/%\-]/);   // 数字数组
        let character_array = show.text().split(/[^+\-x\/%]/);
        let char_array = [];                                 // 运算符数组
        let end=0;
        for(let x of character_array){
            if(x!==''){
                char_array[char_array.length] = x;
            }
        }
        // 调用算式
        if(number_array[0]===''||number_array[0]===' '){
            number_array[0]=0;
            let result = algorithm(char_array,number_array,end,main_content).toFixed(2)
            showResult(result)
        }else{
            let result = algorithm(char_array,number_array,end,main_content).toFixed(2);
            showResult(result)
        }

    })

})
