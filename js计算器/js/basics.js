// 光标控制
$(function(){
    // 设置光标跳动效果 // 手机时间切换
    let i = $('.cursor');
    let time = $('#time');
    window.setInterval(function(){
        let judge = i.css('display');
        if (judge==='block'){
            i.hide();
        }else{
            i.show();
        }
        let date = new Date();
        let hours = date.getHours()>9?date.getHours():'0'+date.getHours();
        let minutes = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
        time.text(hours+':'+minutes);
    },500)

})

