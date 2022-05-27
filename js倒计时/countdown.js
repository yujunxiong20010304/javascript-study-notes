window.addEventListener('load',function(){
    // 获取页面中所有的小li
    let li = document.querySelectorAll('li');
    window.setInterval(function(){
        let time = new Date('2021-9-6 6:0:0');
        /*计算时间差(秒数)*/
        let time_difference = (time.valueOf()-Date.now())/1000;
        // 小时
        let h = parseInt(String(time_difference/60/60%24));
        // 分钟
        let m = parseInt(String(time_difference/60%60));
        // 秒数
        let s = parseInt(String(time_difference%60));
         // 判断是否加0
        h = h<10? "0"+h : h;
        m = m<10? "0"+m : m;
        s = s<10? "0"+s : s;
        // 赋值
        li[0].innerHTML = h;
        li[1].innerHTML = m;
        li[2].innerHTML = s;
    },1000)
})
