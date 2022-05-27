// 计算切换
function perfect(){
     let show = $('.show');
     let end = 0;
     let main_content = show.text();
     let char_array = [];     // 真实的字符数组
     let prohibit_array = ['+','-','x','/','.'];
     let judge = prohibit_array.indexOf(main_content.charAt(main_content.length-1)) // 判断字符串最后一位是什么
     // 清洗字符数组中空白部分
     if(judge>-1){ // 说明结尾不是数字，那么就可以忽略它
        main_content = main_content.substring(0,main_content.length-1)  // 判断字符串最后一个是数字还是字符，删除
        let number_array = main_content.split(/[+x\/%\-]/);   // 数字数组
        let character_array = main_content.split(/[^+\-x\/%]/);   // 字符数组
        for(let x of character_array){
            if(x!==''){
                char_array[char_array.length] = x;
            }
        }

        if(number_array[0]===''||number_array[0]===' '){
            number_array[0]=0;
            /*console.log('结尾字符',number_array,char_array,main_content,end)*/
            return algorithm(char_array,number_array,end,main_content);

        }else{
            /*console.log('结尾字符',number_array,char_array,main_content,end)*/
            return algorithm(char_array,number_array,end,main_content);
        }




     }else{ // 说明结尾是数字，那么就要进行正常的运算
        let number_array = show.text().split(/[+x\/%\-]/);   // 数字数组
        let character_array = show.text().split(/[^+\-x\/%]/);   // 字符数组
        for(let x of character_array){
            if(x!==''){
                char_array[char_array.length] = x;
            }
        }


        if(number_array[0]===''||number_array[0]===' '){
            number_array[0]=0;
            /*console.log('结尾数字',number_array,char_array,main_content,end)*/
            return algorithm(char_array,number_array,end,main_content)
        }else{
            /*console.log('结尾数字',number_array,char_array,main_content,end)*/
            return algorithm(char_array,number_array,end,main_content)
        }




     }
}
