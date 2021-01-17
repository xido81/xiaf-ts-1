
var Head = document.getElementsByTagName('head').item(0);
//创建组件标签
var cop1 = document.createElement("script");
var cop2 = document.createElement("link");
var cop3 = document.createElement("link");
var cop4 = document.createElement("script");
var cop5 = document.createElement("script");
var cop6 = document.createElement("link");
var cop7 = document.createElement("script");
var cop8 = document.createElement("link");
var cop9 = document.createElement("script");
//设置属性
cop1.type="text/javascript";
cop1.src="https://cdn.staticfile.org/jquery/2.2.1/jquery.min.js";

cop2.setAttribute("rel","stylesheet");
cop2.type="text/css";
cop2.href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css";

cop3.setAttribute("rel","stylesheet");
cop3.type="text/css";
cop3.href="https://xido81.github.io/xiaf-ts-1/wapc/1/theme1.css";

cop4.type="text/javascript";
cop4.src="https://xido81.github.io/xiaf-ts-1/wapc/1/theme1.js";

cop5.type="text/javascript";
cop5.src="https://xido81.github.io/xiaf-ts-1/wapc/1/script/xc/xcobwin-1.0.0.js";

cop6.setAttribute("rel","stylesheet");
cop6.type="text/css";
cop6.href="https://xido81.github.io/xiaf-ts-1/wapc/1/script/xc/xcbbstyle-1.0.0.css";

cop7.type="text/javascript";
cop7.src="https://xido81.github.io/xiaf-ts-1/qiang1.js";

cop8.setAttribute("rel","stylesheet");
cop8.type="text/css";
cop8.href="https://xido81.github.io/xiaf-ts-1/qiang1.css";

cop9.type="text/javascript";
cop9.src="https://xido81.github.io/xiaf-ts-1/qiangt1.js";

//将标签添加到head中
Head.appendChild(cop1);
Head.appendChild(cop2);
Head.appendChild(cop3);
Head.appendChild(cop4);
Head.appendChild(cop5);
Head.appendChild(cop6);
Head.appendChild(cop7);
Head.appendChild(cop8);
Head.appendChild(cop9);
