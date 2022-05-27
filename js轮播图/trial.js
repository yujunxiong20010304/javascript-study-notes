// 建基本框架(布局)
window.addEventListener('DOMContentLoaded',function() {
    // 取需要修改的对象
    let box = document.querySelector('.box');
    let left_btn = document.querySelector('.left_btn');
    let right_btn = document.querySelector('.right_btn');
    let btn_master = document.querySelector('.btn_master')
    let photo_master = document.querySelector('.photo_master');
    let photo_master_lis = photo_master.querySelectorAll('li');

    // 修改鼠标样式的函数
    function finger(){
        this.style.cursor = "pointer";
    }
    // 显示按钮
    box.addEventListener('mouseover',function(){
        left_btn.style.display = "block";
        right_btn.style.display = "block";
        left_btn.addEventListener('mouseover',finger);
        right_btn.addEventListener('mouseover',finger);
    })
    // 隐藏按钮
    box.addEventListener('mouseout',function(){
        left_btn.style.display = "none";
        right_btn.style.display = "none";
    })
    // 获取图片的数量，并且生成下部按钮
    for(let i=0;i<photo_master_lis.length;i++){
        let li = document.createElement('li');
        btn_master.appendChild(li);
    }
    // 设置按钮
    let btn_master_lis = btn_master.querySelectorAll('li');
    for(let i=0;i< btn_master_lis.length;i++){
        btn_master_lis[i].addEventListener('click',function(){
            for(let i=0;i<btn_master_lis.length;i++){
                btn_master_lis[i].style.backgroundColor = "#333"
            }
            this.style.backgroundColor = "white";
        })
    }
    // 复制第一张图片
    let li =photo_master_lis[0].cloneNode(true);
    photo_master.appendChild(li);



})
