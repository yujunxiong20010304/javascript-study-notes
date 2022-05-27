function animate(object,displacement){
    window.clearTimeout(object.timing)
    object.timing = window.setInterval(function(){
        if(object.offsetLeft === displacement){
            window.clearTimeout(object.timing)
        }
        let step = (displacement-object.offsetLeft)/10;
        step = step>0? Math.ceil(step):Math.floor(step);
        object.style.left = object.offsetLeft+step+"px";
    },15)

}
