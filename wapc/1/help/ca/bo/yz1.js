 var show_num = [];
 draw(show_num);
function dj(){
 draw(show_num);   
 }
function sublim(){
var val=document.getElementById("yz").value;  
            var num = show_num.join("");
            if(val==''){
                document.getElementById("yz").focus();
                document.getElementById("er1").innerHTML="请输入验证码";
            }else if(val == num){
                location.href="javascript:yztrue2()";
                document.getElementById("er1").innerHTML="";
                document.getElementById("cok1").value="1";
                document.getElementById(".input-val").val('');
                draw(show_num);
                
            }else{
                document.getElementById("yz").focus();
                document.getElementById("er1").innerHTML="验证码错误";
                document.getElementById("yz").value='';
                draw(show_num);
            }
        
       
		
          }
function draw(show_num) {
        var canvas_width=document.getElementById('canvas').clientWidth;
        var canvas_height=document.getElementById('canvas').clientHeight;
        var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度
			
        for (var i = 0; i <= 3; i++) {
            var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
            var deg = Math.random() * 60 * Math.PI / 180;//产生0~60之间的随机弧度
            var txt = aCode[j];//得到随机的一个内容
            show_num[i] = txt;
            var x = 10 + i * 20;//文字在canvas上的x坐标
            var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";

            context.translate(x, y);
            context.rotate(deg);

            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (var i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
    }
function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    
    /*****/
    
    function yztrue2() {
            se2.style.top = "0%";
            se2.style.height = "0%"; 
            var mag3 = 0;
  var ise3 = setInterval(frame3, 9);
  function frame3() {
    if (mag3 >= 100) {
      clearInterval(ise3);
    } else {
      mag3++; 
      se2.style.height = mag3 + '%'; 
    }
  }
  setTimeout(function(){
            document.getElementById("nd1").style.display="none";
            document.getElementById("nd2").style.display="block";
            
            var mag4 = 0;
  var ise4 = setInterval(frame4, 9);
  function frame4() {
    if (mag4 >= 100) {
      clearInterval(ise4);
    } else {
      mag4++; 
      se2.style.top = mag4 + '%'; 
    }
  }
  l1.style.top = "0%";
  l1.style.height = "0%"; 
  setTimeout(function(){
      document.getElementById("nd2").style.display="none";
            var mag5 = 0;
  var ise5 = setInterval(frame5, 9);
  function frame5() {
    if (mag5 >= 100) {
      clearInterval(ise5);
    } else {
      mag5++; 
      l1.style.height = mag5 + '%'; 
    }
  }
  setTimeout(function(){
            document.getElementById("se1").style.display="none";
            document.getElementById("se2").style.display="none";
            setTimeout(function(){
                document.getElementById("nd3").style.display="block";
                document.getElementById("nd3xa1").style.display="block";
            setTimeout(function(){
                document.getElementById("nd3").style.display="none";
                document.getElementById("nd3xa1").style.display="none";
            },3800);
        },1600);
        },900);
        },2500);
        },900);
    }