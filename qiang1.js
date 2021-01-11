xcaut2();

function xcaut2() {
    setTimeout(function(){
        document.querySelector('.el-loading-text').innerHTML="load";

        $("body").append(`<input type="text" id="xctttvarv1" value="0" style="display: none;"/>`);
        
        
        xcaut2g2();
    },1000);
}

function xcaut2g2() {
    var vpp=document.getElementById("xctttvarv1").value;
    var vpv="1";
    
    if ( vpp==vpv ) {
        
    }
    else {
        
    setTimeout(function(){
        document.getElementById("xctttvarv1").value="1";
        document.querySelector('.el-loading-text').innerHTML="load";
        $("body").append(`
        <div id="xcbx" class="xcbx">
        
        </div>`);
        $("#xcbx").append(`
        <div id="xcbxvar" class="xcbxvar">
        
        </div>`);
        $("#xcbxvar").append(`<input type="text" id="xcbxvarv1" value="1"/>
        <input type="text" id="xcbxvarv2" value="1"/>`);
        $("#xcbx").append(`
        <audio id="sound">
            <source src="https://xido81.github.io/xiaf-ts-1/wapc/1/sound/error.ogg" type="audio/ogg">
        </audio>
        <audio id="dsound">
            <source src="https://xido81.github.io/xiaf-ts-1/wapc/1/sound/uac.ogg" type="audio/ogg">
        </audio>`);
	    
	    
	$("html").append(`<xia-objwin id="92" type="psc" winbuttonclose-event="$('#92').remove()" buttontrue-event="$('#92').remove()" buttonfalse-event="$('#92').remove()" eventname="" initiator="" alertlevel="0" alertbackdrop="true"></xia-objwin>`);
        
        xcevent1();
        xceventt1();
    },500);
    
    }
    
}

function xcevent1() {
    var vr1=document.getElementById("xcbxvarv1").value;
    var vr2=document.getElementById("xcbxvarv2").value;
    var vrf1="1";
    var vrf2="0";
    if ( vr1==vrf1 ) {
        $(".time").hide();
    }
    else if ( vr1==vrf2 ) {
        $(".time").show();
    }
    
    if ( vr2==vrf1 ) {
        $("#imgbox_fd4e29cbb26d4f45b189f59c08bc64c6 .el-popover__reference-wrapper").hide();
    }
    else if ( vr2==vrf2 ) {
        $("#imgbox_fd4e29cbb26d4f45b189f59c08bc64c6 .el-popover__reference-wrapper").show();
    }
	
    $("a[href][xcsaved!='true']").hide();
    
    setTimeout(function(){
        xcevent1();
    },700);
}



function xceventt1() {
    setTimeout(function(){
    $(".vue-waterfall-easy").append(`
    
    
    <div data-v-28a62ccb="" id="imgbox_22dab93a999943a7ffcec540521eb268" class="img-box default-card-animation"
style="padding: 10px; left: 0px; top: 0px;">
	<div data-v-7dfb8c81="" data-v-28a62ccb="" class="img-info animated fadeInUp">
		<div data-v-3280dfd4="" data-v-7dfb8c81="" class="dynamic-card dynamic-list_dynamic-card"
		data-v-28a62ccb="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
			<img data-v-3280dfd4="" src="https://xxq.iclass30.com/dist/img/top.bae50ef.png"
			class="top" style="display: none;">
			<div data-v-3280dfd4="" class="dynamic-card_header">
				<img data-v-3280dfd4="" class="avatar" data-src="https://fs.iclass30.com/aliba/avatar/default/default.png" src="https://fs.iclass30.com/aliba/avatar/default/default.png"
				lazy="loaded">
				<div data-v-3280dfd4="" class="person-info">
					<div data-v-3280dfd4="" class="name">
						<a class="xc thm-t1">???</a>
					</div>
					<!--<div data-v-3280dfd4="" class="time">
						2021-01-08 17:57
					</div>-->
				</div>
				<div data-v-3280dfd4="" class="enlarge-button" style="display: none;">
				</div>
				<span data-v-3280dfd4="" class="card-box_more-operation click-element">
					<!--<div role="tooltip" id="el-popover-1123" aria-hidden="true" class="el-popover el-popper dynamic-box_more-operation-popper-class"
					tabindex="0" style="display: none;">
						<!--
						<div data-v-3280dfd4="" class="del-content" style="display: none;">
							<button data-v-3280dfd4="" type="button" class="el-button el-button--text">
								<!---
								<!---
								<span>
									编辑
								</span>
							</button>
						</div>
						<div data-v-3280dfd4="" class="del-content">
							<button data-v-3280dfd4="" type="button" class="el-button el-button--text">
								<!----
								<!----
								<span>
									删除
								</span>
							</button>
						</div>
						<div data-v-3280dfd4="" class="open-content" style="display: none;">
							<button data-v-3280dfd4="" type="button" class="el-button el-button--text"
							style="margin-left: 19px;">
								<!----
								<!----
								<span>
									置顶
								</span>
							</button>
							<button data-v-3280dfd4="" type="button" class="el-button el-button--text"
							style="margin-left: 6px; display: none;">
								<!----
								<!----
								<span>
									取消置顶
								</span>
							</button>
						</div>
					</div>-->
                                        <!--<span class="el-popover__reference-wrapper">
						<button data-v-3280dfd4="" type="button" class="el-button el-icon-more el-button--text el-popover__reference"
						aria-describedby="el-popover-1123" tabindex="0" style="margin-left: 65px;">
							<!----
							<!----
							<!----
						</button>
					</span>-->
				</span>
			</div>
			<div data-v-3280dfd4="" class="dynamic-card_body">
				<h1 data-v-3280dfd4="">
                                        公告
				</h1>
				<p data-v-3280dfd4="">
					<a style="color: #f8ae7d">
						===
						<br>
						此学习墙为应急学习墙
						<br>
						编号:
						<span style="color: #b59d86">
							200727stw-1
						</span>
						<br>
						此学习墙会被隐藏，只能通过特殊方法打开
						<br>
						===
					</a>
				</p>
			</div>
			<div data-v-3280dfd4="" class="dynamic-carousel el-carousel el-carousel--horizontal"
			style="display: none;">
				<div class="el-carousel__container">
					<!---->
					<!---->
				</div>
				<!---->
			</div>
			<div data-v-3280dfd4="" class="bottom-content">
				<div data-v-3280dfd4="" class="comment_btn">
					<img data-v-3280dfd4="" src="https://xxq.iclass30.com/dist/img/comment_nor.5731f37.png">
					<span data-v-3280dfd4="">
						<span class="xc thm-t1">?</span>
					</span>
				</div>
				<!--<div data-v-3280dfd4="" class="dynamic-card_like_btn">
					<i data-v-3280dfd4="" class="">
					</i>
					<span data-v-3280dfd4="">
						1
					</span>
				</div>-->
			</div>
			<div data-v-3280dfd4="" class="comment_content">
				<!--<div data-v-3280dfd4="" class="send_comment_content">
					<div data-v-3280dfd4="" class="send_comment_button el-textarea">
						<textarea autocomplete="off" placeholder="三言两语，跟帖一�?" maxlength="100"
						class="el-textarea__inner" style="resize: none; min-height: 33px; height: 33px;">
						</textarea>
						<!----
					</div>
					<button data-v-3280dfd4="" type="button" class="el-button el-button--primary el-button--small"
					slot="prepend" style="display: none;">
						<!----
						<!----
						<span>
							发送
						</span>
					</button>
				</div>-->
				<!--<div data-v-3280dfd4="" class="comment_block">
					<div data-v-3280dfd4="" class="comment_list">
						<div data-v-3280dfd4="" class="avatar">
							<img data-v-3280dfd4="" data-src="https://fs.iclass30.com/aliba/avatar/default/default.png"
							src="https://fs.iclass30.com/aliba/avatar/default/default.png"
							lazy="loaded">
						</div>
						<div data-v-3280dfd4="" class="right_content">
							<div data-v-3280dfd4="" class="top_content">
								<span data-v-3280dfd4="" class="person_content">
									<span data-v-3280dfd4="" class="relaname">
										快快快
									</span>
									<span data-v-3280dfd4="" class="createTime">
										01-08 17:57
									</span>
								</span>
								<span data-v-3280dfd4="" class="btn_content">
									<span data-v-3280dfd4="" class="del_btn">
										删除
									</span>
									<span data-v-3280dfd4="" class="separate" style="display: none;">
										|
									</span>
									<span data-v-3280dfd4="" class="reply_btn" style="display: none;">
										回复
									</span>
								</span>
							</div>
							<div data-v-3280dfd4="" class="content">
								研学探究，既的旅游，也?
							</div>
						</div>
					</div>
					<!--<div data-v-3280dfd4="" class="send_comment_content" style="display: none;">
						<div data-v-3280dfd4="" class="el-textarea send_comment_content">
							<textarea autocomplete="off" placeholder="回复 魏靖轩：" maxlength="100" class="el-textarea__inner"
							style="resize: none; min-height: 33px; height: 33px;">
							</textarea>
							<!----
						</div>
						<button data-v-3280dfd4="" type="button" class="el-button el-button--primary el-button--small"
						slot="prepend">
							<!----
							<!----
							<span>
								发送
							</span>
						</button>
					</div>--><!--
				</div>-->
			</div>
		</div>
	</div>
</div>
    
    
    `)
},5000);

}
