
    class objwin extends HTMLElement {
        constructor() {
            super();
            
            var type;
            type = this.getAttribute('type');
            var typec0 = "alert";
            var typec1 = "testnone";
            var typec2 = "psc";
            
            /*if (this.hasAttribute('type')) {
                type = this.getAttribute('type');
            } else {
                type = 'alert';
            }*/
            
            if ( type == typec1 ) {
                
            }
            else if ( type == typec2 ){
            
            var vvoid = "";
            var vvr1 = "Xiajaf";
            var vvr2 = "System";
            var vvo
            var vvot = "true";
            var veve = this.getAttribute('eventname');
            var vini = this.getAttribute('initiator');
            if ( this.hasAttribute('initiator') ) {
                
            }
            else {
                vvo = "true";
            }
            var type,typec0,typec1;
            type = this.getAttribute('alertlevel');
            typec0= "0";
            typec1= "1";
            
            /*if ( veve == vvoid ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            //text.setAttribute('class', 'obwint4');
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许来自未知发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #ffed00;
}

.obwintrbacte {
    position: absolute;
    top: 23px;
    left: 47px;
    right: 5px;
    font-size: 15px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            
            //script.innerHTML = scripti;
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.set
            dsound.load();
            dsound.play();
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            else*/ 
            if ( vini == vvoid ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            //text.setAttribute('class', 'obwint4');
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许来自未知发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #ffed00;
}

.obwintrbacte {
    position: absolute;
    top: 23px;
    left: 47px;
    right: 5px;
    font-size: 15px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            
            //script.innerHTML = scripti;
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.set
            dsound.load();
            dsound.play();
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            else if ( vvo == vvot ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            //text.setAttribute('class', 'obwint4');
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许来自未知发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #ffed00;
}

.obwintrbacte {
    position: absolute;
    top: 23px;
    left: 47px;
    right: 5px;
    font-size: 15px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            
            //script.innerHTML = scripti;
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.set
            dsound.load();
            dsound.play();
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            else if ( vini == vvr1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许此发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "已验证的发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-question-circle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    
    color: #0063b9;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #00a0fc;
}

.obwintrbacte {
    position: absolute;
    top: 34px;
    left: 47px;
    right: 5px;
    font-size: 15px;
    color: white;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.setAttribute("onclick", "alert('5');";
            //var sound = "error.mp3";
            //var sound = new Audio(audio);
            dsound.load();
            dsound.play();
            //alert("5");
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            else if ( vini == vvr2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许此发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "已验证的发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-question-circle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    
    color: #0063b9;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #00a0fc;
}

.obwintrbacte {
    position: absolute;
    top: 34px;
    left: 47px;
    right: 5px;
    font-size: 15px;
    color: white;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.setAttribute("onclick", "alert('5');";
            //var sound = "error.mp3";
            //var sound = new Audio(audio);
            dsound.load();
            dsound.play();
            //alert("5");
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            else if ( type == typec1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            //text.setAttribute('class', 'obwint4');
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许此发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "已验证的发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-question-circle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    
    color: #0063b9;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #00a0fc;
}

.obwintrbacte {
    position: absolute;
    top: 34px;
    left: 47px;
    right: 5px;
    font-size: 15px;
    color: white;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            /*var sound = document.createElement('audio');
            sound.setAttribute('id', 'dsound');
            var soundds = document.createElement('source');
            soundds.setAttribute('src', 'sound/uac.wav');*/
            
            
            /*var script = document.createElement('script');
            script.innerHTML = 
            `
            alert("5");
            //document.getElementById("dsound").load();
            //document.getElementById("dsound").play();
            dsound.play();
            alert("6");
            `*/
            /*var winto
            var scripti
            scripti = 
            `
            alert("5");
            //document.getElementById("dsound").load();
            //document.getElementById("dsound").play();
            dsound.play();
            alert("6");
            `
            /*winto = this.getAttribute('windowtimeout');
            var wintot = "disabled";
            if ( winto == wintot ) {
                
            }
            else if ( this.hasAttribute('windowtimeout') ) {
                
            }
            else {
                scripti = 
            `
            setTimeout(function(){
            alert("1");
            $(this).remove;
            //document.getElementById("soco-wuac").load();
            },800);
            `
            }*/
            //script.innerHTML = scripti;
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.setAttribute("onclick", "alert('5');";
            //var sound = "error.mp3";
            //var sound = new Audio(audio);
            dsound.load();
            dsound.play();
            //alert("5");
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            else {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            var text3 = document.createElement('span');
            var text4 = document.createElement('a');
            var text5 = document.createElement('a');
            var text6 = document.createElement('span');
            var texti;
            //text.setAttribute('class', 'obwint4');
            var texti6;
            text2.textContent = "页面设置控制";
            text3.textContent = "您要允许来自未知发起者的操作修改页面设置?";
            text4.textContent = "操作事件名称:";
            text5.textContent = "发起者:";
            
            
            
            if ( veve == vvoid ) {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else if ( this.hasAttribute('eventname') ) {
                texti =  this.getAttribute('eventname');
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            else {
                texti = "未知";
                if ( vini == vvoid ) {
                    texti6 = "未知";
                }
                else if ( this.hasAttribute('initiator') ) {
                    texti6 = this.getAttribute('initiator');
                }
                else {
                    texti6 = "未知";
                }
            }
            text.textContent = texti;
            text6.textContent = texti6;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));8
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbaci2bac = document.createElement('div');
            wbaci2bac.setAttribute('class', 'obwintrbac');
            var wbacbc = document.createElement('div');
            var wcbc = this.getAttribute('alertbackdrop');
            var wcbc2 = "true";
            
            if ( wcbc == wcbc2 ) {
                wbacbc.setAttribute('class', 'obwinbac');
            }
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbactdg2 = document.createElement('div');
            wbactdg2.setAttribute('class', 'obwint-2');
            var wbactd2 = document.createElement('div');
            wbactd2.setAttribute('class', 'obwintrbacte');
            var wbactd3 = document.createElement('div');
            wbactd3.setAttribute('class', 'obwint3');
            var wbactd3g2 = document.createElement('div');
            wbactd3g2.setAttribute('class', 'obwint3-2');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                * {
                    font-family: "Microsoft YaHei";
                }
                .obwinbac {
                    position: fixed;
                    top: -10000px;
                    left: -10000px;
                    width: 60000px;
                    height: 60000px;
                    background: rgba(0,0,0,0.65);
                    z-index: 8000000000;
                }
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
    z-index: 8000000001;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 30px;
    left: 10px;
}

.obwintrbac {
    margin-top: 20px;
    width: 100%;
    height: 53px;
    background: #ffed00;
}

.obwintrbacte {
    position: absolute;
    top: 23px;
    left: 47px;
    right: 5px;
    font-size: 15px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 30px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwint3 {
    background: none;
    margin-right: 10px;
    margin-top: 15px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwint3-2 {
    margin-left: 20px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    display: inline;
    background: none;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 159px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 320px;
}
            `
            /*var sound = document.createElement('audio');
            sound.setAttribute('id', 'dsound');
            var soundds = document.createElement('source');
            soundds.setAttribute('src', 'sound/uac.wav');*/
            
            
            /*var script = document.createElement('script');
            script.innerHTML = 
            `
            alert("5");
            //document.getElementById("dsound").load();
            //document.getElementById("dsound").play();
            dsound.play();
            alert("6");
            `*/
            /*var winto
            var scripti
            scripti = 
            `
            alert("5");
            //document.getElementById("dsound").load();
            //document.getElementById("dsound").play();
            dsound.play();
            alert("6");
            `
            /*winto = this.getAttribute('windowtimeout');
            var wintot = "disabled";
            if ( winto == wintot ) {
                
            }
            else if ( this.hasAttribute('windowtimeout') ) {
                
            }
            else {
                scripti = 
            `
            setTimeout(function(){
            alert("1");
            $(this).remove;
            //document.getElementById("soco-wuac").load();
            },800);
            `
            }*/
            //script.innerHTML = scripti;
            var script = document.createElement('script');
            script.textContent = 
            `
            //this.setAttribute("onclick", "alert('5');";
            //var sound = "error.mp3";
            //var sound = new Audio(audio);
            dsound.load();
            dsound.play();
            //alert("5");
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbacbc);
            shadow.appendChild(wbac);
            //shadow.appendChild(sound);
            //sound.appendChild(soundds);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbaci2bac);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbactd3);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text4);
            wbactd3.appendChild(text5);
            wbactd.appendChild(wbactdg2);
            wbactd3.appendChild(wbactd3g2);
            wbactdg2.appendChild(text);
            wbactd3g2.appendChild(text6);
            wbacttd2.appendChild(text2);
            wbaci2bac.appendChild(wbactd2);
            wbactd2.appendChild(text3);
            
            }
            
            }
            else {
            
            var type,typec0,typec1,typec2,typec3,typec4,typec5;
            type = this.getAttribute('alerttype');
            typec0= "Warning";
            typec1= "Exclamation";
            typec2= "Error";
            typec3= "None";
            typec4= "Question";
            typec5= "Information";
            
            if ( type == typec1 ) {
            var alb = this.getAttribute('alertbutton');
            var alb0 = "0";
            var alb1 = "1";
            var alb2 = "2";
            if ( alb == alb1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else if ( alb == alb2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '取消');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 179px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            }
            else if ( type == typec2 ) {
            var alb = this.getAttribute('alertbutton');
            var alb0 = "0";
            var alb1 = "1";
            var alb2 = "2";
            if ( alb == alb1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-times-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #ff2e2e;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var script = document.createElement('script');
            script.textContent = 
            `
            //var sound = "error.mp3";
            //var sound = new Audio(audio);
            sound.play();
            //alert("5");
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2);
            shadow.appendChild(script);
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else if ( alb == alb2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-times-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '取消');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #ff2e2e;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            var script = document.createElement('script');
            script.textContent = 
            `
            sound.play();
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(script);
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-times-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #ff2e2e;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 179px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            var script = document.createElement('script');
            script.textContent = 
            `
            sound.play();
            
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(script);
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            }
            else if ( type == typec3 ) {
            var alb = this.getAttribute('alertbutton');
            var alb0 = "0";
            var alb1 = "1";
            var alb2 = "2";
            if ( alb == alb1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 10px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else if ( alb == alb2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '取消');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 10px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 10px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 179px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            }
            else if ( type == typec4 ) {
            var alb = this.getAttribute('alertbutton');
            var alb0 = "0";
            var alb1 = "1";
            var alb2 = "2";
            if ( alb == alb1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-question-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #0063b9;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else if ( alb == alb2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-question-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '取消');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #0063b9;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-question-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #0063b9;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 179px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            }
            else if ( type == typec5 ) {
            var alb = this.getAttribute('alertbutton');
            var alb0 = "0";
            var alb1 = "1";
            var alb2 = "2";
            if ( alb == alb1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-info-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #0063b9;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else if ( alb == alb2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-info-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '取消');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #0063b9;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-info-circle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #0063b9;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 179px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            }
            else {
            var alb = this.getAttribute('alertbutton');
            var alb0 = "0";
            var alb1 = "1";
            var alb2 = "2";
            if ( alb == alb1 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '是');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else if ( alb == alb2 ) {
                
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '取消');
            wbacbyn2.setAttribute('onclick', (wbabn2));
            
            var style = document.createElement('style');
            style.textContent = 
            `
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 32px;
    left: 13px;
}

.obwinti {
    
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 99px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            var shadow = this.attachShadow({ mode: 'open' });
            
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
            shadow.appendChild(style);
            shadow.appendChild(style2)
            shadow.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            }
            else {
                
            // 创建文本框
            var text = document.createElement('span');
            var text2 = document.createElement('a');
            text2.setAttribute('class', 'obwinti');
            //text.setAttribute('class', '');
            // 获取自定义标签的text属性
            var texti = this.getAttribute('text');
            text.textContent = texti;
            
            var texti2 = this.getAttribute('wintitle');
            text2.innerHTML = texti2;
            
            //
            var wbac = document.createElement('div');
            wbac.setAttribute('class', 'obwin settlob');
            //wbac.setAttribute('id', 'zindexwin');
            var wbaci = document.createElement('i');
            var wcl = this.getAttribute('winbuttonclose-event');
            //var h = this.getAttribute('id');
            /*var wcl2 = 
            `
            h = this.getAttribute('id');
            $("#"+h).remove();
            `*/
            //"$('#'+(h)).remove()";
            //this.getAttribute('id');
            wbaci.setAttribute('class', 'fa fa-window-close obwincl');
            wbaci.setAttribute('onclick', (wcl));
            //wbaci.setAttribute('onclick', (wcl2));
            //wbaci.setAttribute('id', 'wabcic');
            
            var wbaci2 = document.createElement('i');
            wbaci2.setAttribute('class', 'fa fa-exclamation-triangle fa-2x obwintr');
            var wbactd = document.createElement('div');
            wbactd.setAttribute('class', 'obwint');
            var wbacttd = document.createElement('div');
            wbacttd.setAttribute('class', 'obwintid');
            var wbacttd2 = document.createElement('div');
            wbacttd2.setAttribute('class', 'obwintid2');
            var wbaczx = document.createElement('div');
            wbaczx.setAttribute('class', 'obwinzx');
            var wbacbynb = document.createElement('div');
            wbacbynb.setAttribute('class', 'obwinbynb');
            var wbacbyn = document.createElement('input');
            var wbabn = this.getAttribute('buttontrue-event');
            wbacbyn.setAttribute('class', 'obwinbyn');
            wbacbyn.setAttribute('type', 'button');
            wbacbyn.setAttribute('value', '确定');
            wbacbyn.setAttribute('onclick', (wbabn));
            /*var wbacbyn2 = document.createElement('input');
            var wbabn2 = this.getAttribute('buttonfalse-event');
            wbacbyn2.setAttribute('class', 'obwinbyn');
            wbacbyn2.setAttribute('type', 'button');
            wbacbyn2.setAttribute('value', '否');
            wbacbyn2.setAttribute('onclick', (wbabn2));*/
            
            // 创建图片元素
            /*var imgUrl;
            if (this.hasAttribute('img')) {
                imgUrl = this.getAttribute('img');
            } else {
                imgUrl = 'img/default.png';
            }
            var img = document.createElement('img');
            img.src = imgUrl;*/
 
            /*var icon = document.createElement('span');
            icon.setAttribute('class', 'icon');
            icon.appendChild(img);*/
 
            // 创建css样式
            var style = document.createElement('style');
            style.textContent = 
            `
            .info {
                    font-size: 0.8rem;
                    width: 200px;
                    display: inline-block;
                    border: 1px solid black;
                    padding: 10px;
                    background: white;
                    border-radius: 10px;
                    opacity: 1;
                    transition: 0.6s all;
                    position: absolute;
                    bottom: 20px;
                    left: 10px;
                    z-index: 3;
                }
                
                .obwin {
    border-radius: 2px;
    background-color: #a4d0d9;
}

.obwincl {
    float: right;
    color: red;
    margin-right: 3px;
    margin-top: 1px;
}

.obwintr {
    position: absolute;
    color: #eec826;
    top: 32px;
    left: 13px;
}

.obwinti {
    /*width: 2px
    overflow: hidden;
	text-overflow: ellipsis;
	white-space:nowrap;*/
}

.obwintid {
    position: absolute;
    top: 1.5px;
    left: 8px;
    font-size: 10px;
    background: none;
}

.obwintid2 {
    width: 190px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    font-size: 10px;
}

.obwint {
    
    background: none;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 50px;
    white-space:normal;word-break:break-all;word-wrap:break-word;
    color: white;
    font-size: 70%;
}

.obwinzx {
    margin-top: 25px;
    background-color: #65969f;
    width: 100%;
    height: 1.5px;
}

.obwinbynb {
    margin-top: 1.5px;
    margin-bottom: 1px;
    margin-left: 179px;
}

.obwinbyn {
    margin-top: 0.5px;
    padding: 1.5px;
    color: white;
    background: none;
    width: 80px;
    height: 27px;
    border: 3px solid white;
    border-radius: 15px;
    outline: none;
}

.obwinbyn:active {
    background: white;
    color: #a4d0d9;
}

.settlob {
    position: absolute;
    width: 260px;
    /*height: 200px;*/
}
            `
            
            var style2 = document.createElement('link');
            style2.setAttribute('rel', 'stylesheet');
            style2.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
            //style2.textContent = ;
            
            // 创建根元素，作用其实是将分离的css和html聚合起来
            var shadow = this.attachShadow({ mode: 'open' });
            //shadow.setAttribute('id','indexwin');
            // 创建一个span标签包裹内容
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'wrapper');
            var wra = document.createElement('div');
            wra.setAttribute('class', 'obwint settlob');
            
 
            // 将创建的style节点追加到影子节点中
            shadow.appendChild(style);
            shadow.appendChild(style2);
            // 依次将html按照层级关系添加
            //shadow.appendChild(wrapper);
            shadow.appendChild(wbac);
            //shadow.appendChild(wba);
            //wrapper.appendChild(icon);
            //wrapper.appendChild(wbac);
            wbac.appendChild(wbaci);
            wbac.appendChild(wbaci2);
            wbac.appendChild(wbactd);
            wbac.appendChild(wbacttd);
            wbacttd.appendChild(wbacttd2);
            wbac.appendChild(wbaczx);
            wbac.appendChild(wbacbynb);
            wbacbynb.appendChild(wbacbyn);
            //wbacbynb.appendChild(wbacbyn2);
            wbactd.appendChild(text);
            wbacttd2.appendChild(text2);
            
            /*document.querySelector("#wabcic").addEventListener("click", function() {
                
                alert("1");
            }, false);*/
            }
            }
            
            }
        }
    }
 
    // 定义组件
    customElements.define('xia-objwin', objwin);
    
    function wabccl() {
        alert("5");
        
    }
 
