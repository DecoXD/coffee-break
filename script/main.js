const carousel= (function (){
   
    let count =0
    let slide_input=document.getElementsByClassName('switch-carousel-input')
    let slide_item=document.getElementsByClassName('c-coffee-products-carousel-item')
    
    slide_input[0].checked=true


    return function slide_switch(position){
        let reverse_order=slide_input.length-1
        count+=position
   
        if(count<0){
            count=slide_input.length-1
        }
        if(count>slide_input.length-1){
            count=0
            slide_input[0]=slide_input[2]
        }

        slide_input[count].checked=true
        for(let pos=0;pos<slide_input.length;pos++){
            slide_input[pos].style.order=reverse_order
            reverse_order--
                    }


    }

}())

setInterval(carousel,7000,1)