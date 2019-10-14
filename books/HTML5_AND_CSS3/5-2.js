/**
 * Created by Administrator on 2017/3/9.
 */
function draw(id){
    var canvas=document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle="#eeeeff";
    context.fillRect(0,0,400,300);
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.lineWidth = 1;
    context.fillRect(50,50,100,100);
    context.strokeRect(50,50,200,200);
    context.clearRect(100,100,100,100);

    var n=0;
    for(var i=0; i<10 ;i++){
        //context.beginPath();
        context.arc(i*25,i*25,i*10,0 ,Math.PI*2,true);
        //context.closePath();
        context.fillStyle= "rgba(255,0,0,0.25)";
        context.fill();
    }

}