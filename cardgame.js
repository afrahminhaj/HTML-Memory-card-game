var clist=[0,];
var a=0
var temp=1
var pairs=[];
while(clist.length<17)
{
    var rand_num=Math.floor(Math.random()*8+1);
    var count = 0;
    for(var i = 0; i < clist.length; ++i){
    if(clist[i] == rand_num)
        count++;
}
    if (count<2)
    {
    clist[i]=rand_num;}}


    function flip(){
        console.log(pairs)
    for(i=0;i<2;i++){
        q=document.querySelector("#c"+pairs[i]+" img");
        q.setAttribute("src","images/img0.png");
        
    
    }
    pairs.splice(0,2);
    a=1;
}
function set_card_pic(i){
    a++;
    pairs.push(i);
    var card_pic=document.querySelector("#c"+i+" img");
    card_pic.setAttribute("src","images/img"+clist[i]+".png");
    
    if(a==2){
       /* var card_pic=document.querySelector("#c"+i+" img");
        card_pic.setAttribute("src","images/img"+clist[i]+".png");*/
        
        p0=pairs[0];p1=pairs[1];
        if (clist[p0]===clist[p1]){
            
            /*alert("It's a pair!");*/
            pairs.pop();pairs.pop();}
        
       
    }
    if (a==3){
       /* var card_pic=document.querySelector("#c"+i+" img");
        card_pic.setAttribute("src","images/img"+clist[i]+".png");*/
        if(pairs.length==3){
        flip();}
        else{a=1;}


    }
    
    /*var card_pic=document.querySelector("#c"+i+" img");
    card_pic.setAttribute("src","images/img"+clist[i]+".png");*/
    
}

console.log(clist);
/*var card_pic=document.querySelector("#c"+i+" img");
    var card_pic=document.querySelector("#c"+i+" img");
    card_pic.addEventListener("click",function(){set_card_pic(i);});

}*/


/*for (i=1;i<17;i++){
    var card_pic=document.querySelector("#c"+i+" img");
card_pic.addEventListener("click",function(){
    
    
    
    });


}*/
var card_pic=document.querySelector("#c"+1+" img");
card_pic.addEventListener("click",function(){set_card_pic(1);});
var card_pic=document.querySelector("#c"+2+" img");
card_pic.addEventListener("click",function(){set_card_pic(2);});

var card_pic=document.querySelector("#c"+3+" img");
card_pic.addEventListener("click",function(){set_card_pic(3);});

var card_pic=document.querySelector("#c"+4+" img");
card_pic.addEventListener("click",function(){set_card_pic(4);});

var card_pic=document.querySelector("#c"+5+" img");
card_pic.addEventListener("click",function(){set_card_pic(5);});

var card_pic=document.querySelector("#c"+6+" img");
card_pic.addEventListener("click",function(){set_card_pic(6);});

var card_pic=document.querySelector("#c"+7+" img");
card_pic.addEventListener("click",function(){set_card_pic(7);});

var card_pic=document.querySelector("#c"+8+" img");
card_pic.addEventListener("click",function(){set_card_pic(8);});

var card_pic=document.querySelector("#c"+9+" img");
card_pic.addEventListener("click",function(){set_card_pic(9);});

var card_pic=document.querySelector("#c"+10+" img");
card_pic.addEventListener("click",function(){set_card_pic(10);});

var card_pic=document.querySelector("#c"+11+" img");
card_pic.addEventListener("click",function(){set_card_pic(11);});

var card_pic=document.querySelector("#c"+12+" img");
card_pic.addEventListener("click",function(){set_card_pic(12);});

var card_pic=document.querySelector("#c"+13+" img");
card_pic.addEventListener("click",function(){set_card_pic(13);});
var card_pic=document.querySelector("#c"+14+" img");
card_pic.addEventListener("click",function(){set_card_pic(14);});

var card_pic=document.querySelector("#c"+15+" img");
card_pic.addEventListener("click",function(){set_card_pic(15);});

var card_pic=document.querySelector("#c"+16+" img");
card_pic.addEventListener("click",function(){set_card_pic(16);});





