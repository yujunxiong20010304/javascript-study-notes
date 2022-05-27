$(function(){
         // 保存监听
        let value = []
        let show = $('.show');
        $('#cun').on('click', function(){
            if(show.text()!==""){
                console.log(value)
                if(value.length===0){
                    value[value.length] = show.text();
                    console.log(value[0])
                    window.sessionStorage.setItem("value",JSON.stringify(value))
                }
                else if(eval(window.sessionStorage.getItem("value")).indexOf(show.text())===-1){
                    value[value.length] = show.text();
                    console.log(value[0])
                    window.sessionStorage.setItem("value",JSON.stringify(value))
                }
            }
        })
        // 上翻监听
        let i = 0;
        $('#top').on('click', function(){
            value = eval(window.sessionStorage.getItem("value"))
            i = i-1
            if(typeof(value[i])==="undefined"){
                i=value.length-1
            }
            $('.show').text(value[i])
        })
        // 下翻监听
        $('#down').on('click',function(){
            value = eval(window.sessionStorage.getItem("value"))
            i = i+1
            if(typeof(value[i])==="undefined"){
                i=0
            }
            $('.show').text(value[i])
        })
        // 删除监听
        $('#shanchu').on('click',function(){
            value.splice(i,1)
            window.sessionStorage.setItem("value",JSON.stringify(value))
        })
})
