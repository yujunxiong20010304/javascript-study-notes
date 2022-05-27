// js动画效果
window.addEventListener('DOMContentLoaded', function () {
    // 封装动画函数
    let box = document.querySelector('.box');
    let photo_master = document.querySelector('.photo_master');
    let photo_master_lis = photo_master.querySelectorAll('li');
    let left_btn = document.querySelector('.left_btn');
    let right_btn = document.querySelector('.right_btn');
    let btn_master = document.querySelector('.btn_master');
    let btn_master_lis = btn_master.querySelectorAll('li');
    let judge = true;
    function timing(object,distance){
        if(judge){
            // 定起始位置
            let positioning = object.offsetLeft;
            object.timer = window.setInterval(function(){
                if(Math.abs(distance)===Math.abs(object.offsetLeft-positioning)){
                    window.clearInterval(object.timer)
                    judge = true;
                }
                if(distance!==Math.abs(distance)){
                    let step = (positioning-distance-object.offsetLeft)/10;
                    step = step>0? Math.ceil(step):Math.floor(step)
                    object.style.left = object.offsetLeft+step+"px";
                }else{
                    let step = (-positioning+distance+object.offsetLeft)/10;
                    step = step>0? Math.ceil(step):Math.floor(step)
                    object.style.left = object.offsetLeft-step+"px";
                }
            },5)
        }
    }


    right_btn.addEventListener('click', function () {
        // 无缝滚动
        if(photo_master.offsetLeft===(-photo_master_lis.length+1)*box.clientWidth){
            photo_master.style.left = 0;
            timing(photo_master,box.clientWidth);
            judge = false;
        }else{
            timing(photo_master,box.clientWidth);
            judge = false;
        }
        // 获取当前photo_master所处位置
        for(let i=0;i< btn_master_lis.length+1;i++){
            if(photo_master.offsetLeft===-i*box.clientWidth){
                for(let m=0;m<btn_master_lis.length;m++){
                btn_master_lis[m].style.backgroundColor = "#333"
                }
                if(i<5){
                    btn_master_lis[i+1].style.backgroundColor = "white";
                }
                if(i===5){
                    btn_master_lis[0].style.backgroundColor = "white";
                }
            }
        }

    })




    left_btn.addEventListener('click',function(){
        if(photo_master.offsetLeft===0){
            photo_master.style.left = (-photo_master_lis.length+1)*box.clientWidth+"px";
            timing(photo_master,-box.clientWidth);
            judge = false;
        }else{
            timing(photo_master,-box.clientWidth);
            judge = false;
        }

        for(let i=0;i< btn_master_lis.length+1;i++){
            if(photo_master.offsetLeft===-i*box.clientWidth){
                for(let m=0;m<btn_master_lis.length;m++){
                btn_master_lis[m].style.backgroundColor = "#333"
                }
                btn_master_lis[i-1].style.backgroundColor = "white";
            }
        }

    })

})
