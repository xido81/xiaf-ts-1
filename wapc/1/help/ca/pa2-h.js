
             var i2 = 0;
setInterval(function() {
                  if(i2 < 10000) {
                 	  i2++;
                 	  //val1
                 	  var content = document.getElementById("hpt3dv1a1");  
             var contents = content.innerHTML;  
            /* var content1g2 = document.getElementById("hpt3dv1a1");  
             var contents1g2 = content1g2.innerHTML;  */
             var text = document.getElementById("varinp1");  
                
				 var  value = text.value; 
				 
				 var  value1g2 = "https"; 
				 
　　　　　　　　　　//以关键字将内容划分为数组，数组中不包含关键字 
                 var values = contents.split(value); 
                 
                 //var values1g2 = contents1g2.split(value);
　　　　　　　　　　//使用js中array的join方法，将带有样式的关键字作为拼接数组中所有元素 
                 content.innerHTML = values.join('<a style="color:#00e636;" id="hpt3dv1a1sp1">' + value + '</a>');  
                 //content1g2.innerHTML = values1g2.join('<a style="color:#00e636;" id="hpt3dv1a1sp1">' + value + '</a>');  
　　　　　　　　　　//val2
                 	  var content2 = document.getElementById("hpt3dv1a1");  
             var contents2 = content2.innerHTML;  
             var text2 = document.getElementById("varinp2");  
				 var  value2 = text2.value; 
                 var values2 = contents2.split(value2); 
                 content2.innerHTML = values2.join('<span style="color:#bfbfbf;">' + value2 + '</span>');  
                 //val3
                 	  /*var content3 = document.getElementById("hpt3dv1a1");  
             var contents3 = content3.innerHTML;
             var text3 = document.getElementById("varinp3");
				 var  value3 = text3.value; 
                 var values3 = contents3.split(value3);
                 content3.innerHTML = values3.join('<span style="color:#bfbfbf;">' + value3 + '</span>');*/
                 //val4
                 var content4 = document.getElementById("hpt3dv1a1");  
             var contents4 = content4.innerHTML;
             var text4 = document.getElementById("varinp4");
				 var  value4 = text4.value; 
                 var values4 = contents4.split(value4);
                 content4.innerHTML = values4.join('<span style="color:#ee070a;">' + value4 + '</span>');
                 
                  
                  };
},100);

/*var i2 = 0;
var content = document.getElementById
("hpt3dv1a1");
var contents = content.innerHTML
var text = "h"
setInterval(function() {
                  if(i2 < 10000) {
                 	  i2++;

                 	  
                 	  var value = "h";
				 var values = contents.split(value);
				 content.innerHTML = values.join('<span style="background:red;">' + value + '</span>');
                 /*var value = text;
                 
                 var value1g2 = "https";
　　　　　　　　　　//以关键字将内容划分为数组，数组中不包含关键字 
                 var values = contents.split(value); 　//使用js中array的join方法，将带有样式的关键字作为拼接数组中所有元素 
                 content.innerHTML=values.join('<span style="color:#00e636;font-size:50px;">' + value + '</span>');
                  };
},100);*/


