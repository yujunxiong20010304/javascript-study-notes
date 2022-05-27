window.addEventListener('DOMContentLoaded',function(){
    //起点
    let master = document.querySelector('.master')
    let lis = document.querySelectorAll('li')
    for(let li of lis){
        li.style.backgroundImage = "url('img/一拳超人壁纸【40】.jpg')"
    }
    lis[0].style.display='none';
    lis[2].style.display='none';
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>200){
            master.style.top = window.pageYOffset+100+"px";
        }else if(window.pageYOffset === 0){
            master.style.top = "300px";
        }
    })
    master.addEventListener('mouseover',function(event){
        lis[0].style.display='block';
        lis[2].style.display='block';
        if(window.pageYOffset>200){
            master.style.top = window.pageYOffset+50+"px";
        }else if(window.pageYOffset === 0){
            master.style.top = "250px";
        }


    })
    master.addEventListener('mouseout',function(event){
        lis[0].style.display='none';
        lis[2].style.display='none';
        if(window.pageYOffset>200){
            master.style.top = window.pageYOffset+100+"px";
        }else if(window.pageYOffset === 0){
            master.style.top = "300px";
        }
    })


    //终点
    
})

