window.addEventListener('DOMContentLoaded', function(){
     let ul = document.querySelector('#box');
     let lis = ul.querySelectorAll("li");
     let span = document.querySelector('span');
     let location = 0;
     for(let i=0;i<lis.length;i++){
         lis[i].addEventListener('mouseenter',function(){
             animate(span,lis[i].offsetLeft)
         })
         lis[i].addEventListener('mouseleave',function(){
             animate(span,location)
             console.log(location,span.offsetLeft)
         })
         lis[i].addEventListener('click',function(){
             location = lis[i].offsetLeft;
         })
     }

})
