xcaut2()

function xcaut2() {
    setTimeout(function(){
        document.querySelector('.el-loading-text').innerHTML="load";
        $("body").append(`
        <div id="xcbx" class="xcbx">
        
        </div>`);
        $("#xcbx").append(`
        <div id="xcbxvar" class="xcbxvar">
        
        </div>`);
        $("#xcbxvar").append(`<input type="text" id="xcbxvarv1" value="1"/>`);
        $("#xcbx").append(`
        <audio id="sound">
            <source src="https://xido81.github.io/xiaf-ts-1/wapc/1/sound/error.ogg" type="audio/ogg">
        </audio>
        <audio id="dsound">
            <source src="https://xido81.github.io/xiaf-ts-1/wapc/1/sound/uac.ogg" type="audio/ogg">
        </audio>`);
        
        xcevent1();
    },1000);
    /*setTimeout(function(){
        alert("qiang");
    },5000);*/
    
}

function xcevent1() {
    var vr1=document.getElementById("xcbxvarv1").value;
    var vrf1="1";
    var vrf2="0";
    if ( vr1==vrf1 ) {
        $(".time").hide();
    }
    else if ( vr1==vrf2 ) {
        $(".time").show();
    }
    setTimeout(function(){
        xcevent1();
    },700);
}
