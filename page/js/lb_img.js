var index = 1;

function lunbo(){
    var img = document.getElementById("lunbo_img");
    index ++ ;
    if(index > 4){
        index = 1;
    }
    img.src = "./img/img"+index+".jpg";
}
setInterval(lunbo,4000);