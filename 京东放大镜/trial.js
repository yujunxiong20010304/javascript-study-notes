window.addEventListener('DOMContentLoaded',function(){
    //起点
    let box = document.querySelector('.box');
    let move = document.querySelector('.move');
    let master = document.querySelector('.master');
    let box_two = document.querySelector('.box_two');
    let img = document.querySelector('.img');
    console.log(box)
    box.addEventListener('mouseover',function(e){
        move.style.display = 'block';
        box_two.style.display = "block";
    })
    box.addEventListener('mouseout', function(e){
        move.style.display = "none";
        box_two.style.display = "none";
    })
    box.addEventListener('mousemove',function(e){
        let mouseX = e.pageX-box.offsetLeft;
        let mouseY = e.pageY-box.offsetTop;
        move.style.left = mouseX-move.offsetWidth/2+"px";
        move.style.top = mouseY-move.offsetHeight/2+"px";
        if(move.offsetLeft <0){
            move.style.left= "0";
        }else if(move.offsetLeft>box.offsetWidth-move.offsetWidth){
            move.style.left = box.offsetWidth-move.offsetWidth+"px";
        }
        if(move.offsetTop<0){
            move.style.top= "0";
        }else if(move.offsetTop>box.offsetHeight-move.offsetHeight){
            move.style.top= box.offsetHeight-move.offsetHeight+"px";
        }
        img.style.left = -move.offsetLeft*2.5+"px";
        img.style.top = -move.offsetTop*2.5+"px";

    })
    box_two.addEventListener('mousemove',function(e){
        box_two.style.display = "none";
    })


    //终点
    
})

