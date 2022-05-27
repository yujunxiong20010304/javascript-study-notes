// 主体监听
$(function(){
    let number = $('.number'); // 数字按钮
    let show = $('.show');     // 输入框
    let output = $('.output');  // 输出框
    let character = $('.character'); // 运算符按钮
    let cursor = $('.cursor');
    // 控制输入框字体的大小
    function control_font(){
           if(parseFloat(show.width())>240&&show.css('font-size')==="45px"){
                show.css('font-size','38px')
           }else if(parseFloat(show.width())>250&&show.css('font-size')==="38px"){
               show.css('font-size','35px')
           }else if(parseFloat(show.width())>250&&show.css('font-size')==="35px"){
               show.css('font-size','32px')
           }
    }
    // 数字按钮监听
    number.each(function(i,dom){
       dom.addEventListener('click',function(){
           control_font()
           cursor.show();
           let input_array = show.text().split(/[+x\/%\-]/);
           let temporary_char = input_array[input_array.length-1];
           if(dom.innerHTML==="."){
               if(temporary_char!==""){  // 第一个字符不能是 .
                   if(temporary_char.indexOf(".")===-1){  // 有其他.的时候不能有 .
                       if(output.text()!=="错误"){
                           show.text(show.text()+dom.innerHTML);
                           output.text(show.text());
                       }
                   }
               }
           }else{
                if(output.text()!=="错误"){
                    show.text(show.text()+dom.innerHTML);
                    output.text(show.text());
                }
           }
            if(temporary_char==="0"){
                if(dom.innerHTML!=="."){
                    output.text("错误");
                }
            }

            let h = perfect()
            output.text(h)


       })
    })


    // 运算符按钮监听
    character.each(function(i,dom){
        dom.addEventListener('click',function(){
            cursor.show();
            control_font(); // 控制字体的大小

            // 对运算符进行规范

            let h = perfect()
            output.text(h)
            if(isNaN(h)){
                output.text("错误")
            }else{
                show.text(show.text()+dom.getAttribute('data-index'));
                /*output.text(show.text());*/
                output.text(h)
            }


        }




       )
    })



    // 删除监听
    $('.s').on("click",function(){
        let input_data = show.text();
        let result = input_data.substring(0,input_data.length-1)
        show.text(result);
        output.text(result);
    })

    // 清空监听
    $('.C').on("click",function(){
        show.text(" ");
        output.text(" ");
    })


})
