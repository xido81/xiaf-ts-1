
var xcctxv;
var xcxttv;
function xcctvalid() {
    xcctvalidg2();
    xcctxv = setTimeout(function(){
        $(".content").trigger("click");
        $(".dynamic-card_body h1").trigger("click");
        $(".dynamic-card_body p[xcarsys!='true']").trigger("click");
        setTimeout(function(){
            $(".content").off("click");
            $(".content h1").off("click");
            $(".content p").off("click");
        },600);
    },20);
}

function xcctvalidg2() {
    xcxttv = setTimeout(function(){
        $(".content").on("click",function(){
            var tt = $(this).text();
            
            //匹配词:sb
            var pattern1 = /[Ss]+[^SsBb]{0,10}[Bb]+/g ;
            var str1;
            str1 = pattern1.test(tt);
            var pattern2 = /[Ss]+[。]*[Bb]+/g ;
            var str2;
            str2 = pattern2.test(tt);
            if (str1) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str2) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:绿茶
            var pattern3 = /[绿]+[\s。.]*[茶]+/g ;
            var str3;
            str3 = pattern3.test(tt);
            var pattern4 = /[Gg]+[Rr]+[Ee]+[Ee]+[Nn]+[\s。.]*[Tt]+[Ee]+[Aa]+/g ;
            var str4;
            str4 = pattern4.test(tt);
            if (str3) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str4) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:。.!！
            var pattern5 = /[。.!！]{25,}/g ;
            var str5;
            str5 = pattern5.test(tt);
            if (str5) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:傻逼
            var pattern6  = /[傻]+[\s。.]*[逼]+/g ; ;
            var str6;
            str6 = pattern6.test(tt);
            if (str6) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:伞兵
            var pattern7  = /[伞]+[\s。.]*[兵]+/g ; ;
            var str7;
            str7 = pattern7.test(tt);
            if (str7) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:草
            var pattern8  = /[草]+|[槽]+|[操]+/g ; ;
            var str8;
            str8 = pattern8.test(tt);
            var pattern9  = /[Cc]+[\s。.]*[Aa]+[\s。.]*[Oo]+/g ; ;
            var str9;
            str9 = pattern9.test(tt);
            var pattern9g3  = /[Ww]+[\s。.]*[Cc]+/g ; ;
            var str9g3;
            str9g3 = pattern9g3.test(tt);
            if (str8) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str9) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str9g3) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:tm
            var pattern10 = /[Tt]+[^TtMm]{0,10}[Mm]+/g ;
            var str10;
            str10 = pattern10.test(tt);
            var pattern11 = /[Tt]+[。]*[Mm]+/g ;
            var str11;
            str11 = pattern11.test(tt);
            var pattern11g2 = /[他]+[\s。.]*[妈]+/g ;
            var str11g2;
            str11g2 = pattern11g2.test(tt);
            if (str10) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str11) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str11g2) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:靠
            var pattern12 = /^[\s。.]*[靠]+/g ;
            var str12;
            str12 = pattern12.test(tt);
            var pattern12g2 = /[我]+[\w^\W]{0,2}[\s。.]*[靠]+/g ;
            var str12g2;
            str12g2 = pattern12g2.test(tt);
            var pattern12g3  = /[Kk]+[\s。.]*[Aa]+[\s。.]*[Oo]+/g ; ;
            var str12g3;
            str12g3 = pattern12g3.test(tt);
            if (str12) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str12g2) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str12g3) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:nm
            var pattern13 = /[Nn]+[^NnMm]{0,10}[Mm]+/g ;
            var str13;
            str13 = pattern13.test(tt);
            var pattern13g2 = /[Nn]+[。]*[Mm]+/g ;
            var str13g2;
            str13g2 = pattern13g2.test(tt);
            var pattern13g3 = /[你]+[\s。.]*[妈]+/g ;
            var str13g3;
            str13g3 = pattern13g3.test(tt);
            if (str13) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str13g2) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str13g3) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:fuck
            var pattern14 = /[Ff]+[\s。.]*[Uu]+[\s。.]*[Cc]+[\s。.]*[Kk]+/g ;
            var str14;
            str14 = pattern14.test(tt);
            var pattern14g2 = /[Ff]+[\s。.]*[Kk]+/g ;
            var str14g2;
            str14g2 = pattern14g2.test(tt);
            if (str14) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str14g2) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
            //匹配词:md
            var pattern15 = /[妈]+[\s。.]*[的]+/g ;
            var str15;
            str15 = pattern15.test(tt);
            var pattern15g2 = /[Mm]+[\s。.]*[Dd]+/g ;
            var str15g2;
            str15g2 = pattern15g2.test(tt);
            if (str15) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            else if (str15g2) {
                $(this).html("<a style='color: #ff8020;'>*该评论因违规已被隐藏*</a>");
            }
            
        });
        $(".dynamic-card_body h1").on("click",function(){
            var tt = $(this).text();
            
            //匹配词:sb
            var pattern1 = /[Ss]+[^SsBb]{0,10}[Bb]+/g ;
            var str1;
            str1 = pattern1.test(tt);
            var pattern2 = /[Ss]+[。]*[Bb]+/g ;
            var str2;
            str2 = pattern2.test(tt);
            if (str1) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:绿茶
            var pattern3 = /[绿]+[\s。.]*[茶]+/g ;
            var str3;
            str3 = pattern3.test(tt);
            var pattern4 = /[Gg]+[Rr]+[Ee]+[Ee]+[Nn]+[\s。.]*[Tt]+[Ee]+[Aa]+/g ;
            var str4;
            str4 = pattern4.test(tt);
            if (str3) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str4) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:。.!！
            var pattern5 = /[。.!！]{25,}/g ;
            var str5;
            str5 = pattern5.test(tt);
            if (str5) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:傻逼
            var pattern6  = /[傻]+[\s。.]*[逼]+/g ; ;
            var str6;
            str6 = pattern6.test(tt);
            if (str6) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:伞兵
            var pattern7  = /[伞]+[\s。.]*[兵]+/g ; ;
            var str7;
            str7 = pattern7.test(tt);
            if (str7) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:草
            var pattern8  = /[草]+|[槽]+|[操]+/g ; ;
            var str8;
            str8 = pattern8.test(tt);
            var pattern9  = /[Cc]+[\s。.]*[Aa]+[\s。.]*[Oo]+/g ; ;
            var str9;
            str9 = pattern9.test(tt);
            var pattern9g3  = /[Ww]+[\s。.]*[Cc]+/g ; ;
            var str9g3;
            str9g3 = pattern9g3.test(tt);
            if (str8) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str9) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str9g3) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:tm
            var pattern10 = /[Tt]+[^TtMm]{0,10}[Mm]+/g ;
            var str10;
            str10 = pattern10.test(tt);
            var pattern11 = /[Tt]+[。]*[Mm]+/g ;
            var str11;
            str11 = pattern11.test(tt);
            var pattern11g2 = /[他]+[\s。.]*[妈]+/g ;
            var str11g2;
            str11g2 = pattern11g2.test(tt);
            if (str10) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str11) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str11g2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:靠
            var pattern12 = /^[\s。.]*[靠]+/g ;
            var str12;
            str12 = pattern12.test(tt);
            var pattern12g2 = /[我]+[\w^\W]{0,2}[\s。.]*[靠]+/g ;
            var str12g2;
            str12g2 = pattern12g2.test(tt);
            var pattern12g3  = /[Kk]+[\s。.]*[Aa]+[\s。.]*[Oo]+/g ; ;
            var str12g3;
            str12g3 = pattern12g3.test(tt);
            if (str12) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str12g2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str12g3) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:nm
            var pattern13 = /[Nn]+[^NnMm]{0,10}[Mm]+/g ;
            var str13;
            str13 = pattern13.test(tt);
            var pattern13g2 = /[Nn]+[。]*[Mm]+/g ;
            var str13g2;
            str13g2 = pattern13g2.test(tt);
            var pattern13g3 = /[你]+[\s。.]*[妈]+/g ;
            var str13g3;
            str13g3 = pattern13g3.test(tt);
            if (str13) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str13g2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str13g3) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:fuck
            var pattern14 = /[Ff]+[\s。.]*[Uu]+[\s。.]*[Cc]+[\s。.]*[Kk]+/g ;
            var str14;
            str14 = pattern14.test(tt);
            var pattern14g2 = /[Ff]+[\s。.]*[Kk]+/g ;
            var str14g2;
            str14g2 = pattern14g2.test(tt);
            if (str14) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str14g2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
            //匹配词:md
            var pattern15 = /[妈]+[\s。.]*[的]+/g ;
            var str15;
            str15 = pattern15.test(tt);
            var pattern15g2 = /[Mm]+[\s。.]*[Dd]+/g ;
            var str15g2;
            str15g2 = pattern15g2.test(tt);
            if (str15) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            else if (str15g2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子标题因违规已被隐藏*</a>");
            }
            
        });
        $(".dynamic-card_body p").on("click",function(){
            var tt = $(this).text();
            
            //匹配词:sb
            var pattern1 = /[Ss]+[^SsBb]{0,10}[Bb]+/g ;
            var str1;
            str1 = pattern1.test(tt);
            var pattern2 = /[Ss]+[。]*[Bb]+/g ;
            var str2;
            str2 = pattern2.test(tt);
            if (str1) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str2) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:绿茶
            var pattern3 = /[绿]+[\s。.]*[茶]+/g ;
            var str3;
            str3 = pattern3.test(tt);
            var pattern4 = /[Gg]+[Rr]+[Ee]+[Ee]+[Nn]+[\s。.]*[Tt]+[Ee]+[Aa]+/g ;
            var str4;
            str4 = pattern4.test(tt);
            if (str3) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str4) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:。.!！
            var pattern5 = /[。.!！]{25,}/g ;
            var str5;
            str5 = pattern5.test(tt);
            if (str5) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:傻逼
            var pattern6  = /[傻]+[\s。.]*[逼]+/g ; ;
            var str6;
            str6 = pattern6.test(tt);
            if (str6) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:伞兵
            var pattern7  = /[伞]+[\s。.]*[兵]+/g ; ;
            var str7;
            str7 = pattern7.test(tt);
            if (str7) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:草
            var pattern8  = /[草]+|[槽]+|[操]+/g ; ;
            var str8;
            str8 = pattern8.test(tt);
            var pattern9  = /[Cc]+[\s。.]*[Aa]+[\s。.]*[Oo]+/g ; ;
            var str9;
            str9 = pattern9.test(tt);
            var pattern9g3  = /[Ww]+[\s。.]*[Cc]+/g ; ;
            var str9g3;
            str9g3 = pattern9g3.test(tt);
            if (str8) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str9) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str9g3) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:tm
            var pattern10 = /[Tt]+[^TtMm]{0,10}[Mm]+/g ;
            var str10;
            str10 = pattern10.test(tt);
            var pattern11 = /[Tt]+[。]*[Mm]+/g ;
            var str11;
            str11 = pattern11.test(tt);
            var pattern11g2 = /[他]+[\s。.]*[妈]+/g ;
            var str11g2;
            str11g2 = pattern11g2.test(tt);
            if (str10) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str11) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str11g2) {
                $(this).html("<a style='color: #ebbaa0;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:靠
            var pattern12 = /^[\s。.]*[靠]+/g ;
            var str12;
            str12 = pattern12.test(tt);
            var pattern12g2 = /[我]+[\w^\W]{0,2}[\s。.]*[靠]+/g ;
            var str12g2;
            str12g2 = pattern12g2.test(tt);
            var pattern12g3  = /[Kk]+[\s。.]*[Aa]+[\s。.]*[Oo]+/g ; ;
            var str12g3;
            str12g3 = pattern12g3.test(tt);
            if (str12) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str12g2) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str12g3) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:nm
            var pattern13 = /[Nn]+[^NnMm]{0,10}[Mm]+/g ;
            var str13;
            str13 = pattern13.test(tt);
            var pattern13g2 = /[Nn]+[。]*[Mm]+/g ;
            var str13g2;
            str13g2 = pattern13g2.test(tt);
            var pattern13g3 = /[你]+[\s。.]*[妈]+/g ;
            var str13g3;
            str13g3 = pattern13g3.test(tt);
            if (str13) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str13g2) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str13g3) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:fuck
            var pattern14 = /[Ff]+[\s。.]*[Uu]+[\s。.]*[Cc]+[\s。.]*[Kk]+/g ;
            var str14;
            str14 = pattern14.test(tt);
            var pattern14g2 = /[Ff]+[\s。.]*[Kk]+/g ;
            var str14g2;
            str14g2 = pattern14g2.test(tt);
            if (str14) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str14g2) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
            //匹配词:md
            var pattern15 = /[妈]+[\s。.]*[的]+/g ;
            var str15;
            str15 = pattern15.test(tt);
            var pattern15g2 = /[Mm]+[\s。.]*[Dd]+/g ;
            var str15g2;
            str15g2 = pattern15g2.test(tt);
            if (str15) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            else if (str15g2) {
                $(this).html("<a style='color: #7e3000;'>*该帖子内容因违规已被隐藏*</a>");
            }
            
        });
    },10);
}
