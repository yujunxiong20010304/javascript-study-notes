// 轮播图和li关联
window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');
    let photo_master = document.querySelector('.photo_master');
    let photo_master_lis = photo_master.querySelectorAll('li');
    let left_btn = document.querySelector('.left_btn');
    let right_btn = document.querySelector('.right_btn');
    let btn_master = document.querySelector('.btn_master');
    let btn_master_lis = btn_master.querySelectorAll('li');
    btn_master_lis[0].style.backgroundColor = "white";


    let judge = true;
    for(let i=0;i<btn_master_lis.length;i++){
        btn_master_lis[i].addEventListener('click',function(){
            if(judge){
                judge = false;
                // 起点
                let starting_point = photo_master.offsetLeft;
                // 终点
                let end = -i*box.clientWidth;
                // 位移距离
                let displacement = end-starting_point; // 负数

                let timing = window.setInterval(function(){
                    if(photo_master.offsetLeft===end){
                        window.clearInterval(timing)
                        judge = true;
                    }
                    // 步长
                    let step = Math.ceil(Math.abs((end-photo_master.offsetLeft)/10))
                    if(displacement>0){
                        photo_master.style.left = photo_master.offsetLeft+step+"px";
                    }else{
                        photo_master.style.left = photo_master.offsetLeft-step+"px";
                    }

                },5)
            }

        })

    }

})
