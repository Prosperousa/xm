/*
* @Author: Dell
* @Date:   2018-09-03 15:13:15
* @Last Modified by:   Dell
* @Last Modified time: 2018-09-17 10:00:10
*/
window.onload=function(){
    // 轮播图
 let imgs=document.querySelectorAll(".box .imgs img");               /*获取元素*/
    let dots=document.querySelectorAll(".box .dot li");
    let banner=document.querySelectorAll(".banner")[0];
    let leftbtn=document.querySelectorAll(".leftbtn")[0];
    let rightbtn=document.querySelectorAll(".rightbtn")[0];
    // console.log(imgs,dots,banner,leftbtn,rightbtn);
    let widths=parseInt(getComputedStyle(imgs[0],null).width);

    // banner_lr(imgs,dots,banner,leftbtn,rightbtn,widths,"active",2000);

// // 2.初始值
    imgs[0].style.left=0;
    dots[0].classList.add("active");
    let now=0;
    let next=0;

    // 开关：控制快速点击时图片会快速轮播的现象
    // 默认开关是打开的，flag=true,
    let flag=true;


    let t=setInterval(move,2500);
    function move() {
        next++;
        if (next==imgs.length){
            next=0;
        }
        //下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    function moveL() {
        next--;
        if (next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }

    leftbtn.onclick=function () {
        // 判断开关是否开启
        // 如果开关开启，则!flag=false,不执行return,执行flag=false和move,move执行完flag=true;
        // 开关关闭的时候，不要点击
        // flag=false      !flag=true;     执行return     结束函数
        if (!flag){
            return;
        }
        flag=false;
        moveL();
      
    }
    rightbtn.onclick=function () {
        if (!flag){
            return;
        }
        flag=false;
        move();
    }
    banner.onmouseover=function () {
         clearInterval(t);
     }
    banner.onmouseout=function () {
         t=setInterval(move,2500);
    }


    for (let i=0;i<dots.length;i++){
        dots[i].onmouseenter=function () {
            if (flag){
                for (let j=0;j<dots.length;j++){
                    dots[j].classList.remove("active");
                    imgs[j].style.left=widths+"px";
                }
                dots[i].classList.add("active");
                imgs[i].style.left=0;
            }
            now=i;
            next=i;
        }
    }

// 窗口失去焦点时，停止时间间隔函数
    window.onblur=function () {
        clearInterval(t);
    }
    // 窗口获得焦点时，继续时间间隔函数
    window.focus=function () {
        t=setInterval(move,2000);
    }
        // 选项卡2
     let lis=document.querySelectorAll(".banner .text li ");
    let son=document.querySelectorAll(".banner .text li .shade");
    console.log(lis,son);
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseenter=function(){
            for (let j= 0; j < son.length; j++) {
                son[j].style.display="none";
            }
            son[i].style.display="block";
        }
        lis[i].onmouseleave=function(){
            son[i].style.display="none";
        }

    }
    // 小米闪购
     let buttom1=document.querySelectorAll(".xiaomishangou .jt .zuo");
    let milist1=document.querySelectorAll(".neirong .lists")[0];
    // console.log(buttom1,milist1);
    let w1=parseInt(getComputedStyle(milist1,null).width)/2;
    // console.log(w1);
    let times1=0;
    buttom1[0].onclick=function(){
        times1++;
        if (times1==2) {
            times1=1;
        }
        milist1.style.transform=`translate(${(-w1*times1)}px)`;
    }
     buttom1[1].onclick=function(){
        times1--;
        if (times1==-1) {
            times1=0;
        }
        milist1.style.transform=`translate(${(-w1*times1)}px)`;
    }
    // 配件
     let lis1=document.querySelectorAll(".box-pj .top .lis1 a");
    let son1=document.querySelectorAll(".box-pj .list");
    // let active2=document.querySelectorAll(".box-pj .lis1 a");
    console.log(lis1);
    // console.log(lis1,son1);
    for (let i = 0; i < lis1.length; i++) {
        lis1[i].onmouseenter=function(){
            for (let j= 0; j < son1.length; j++) {
                son1[j].style.display="none";
                lis1[j].classList.remove("active2");
                
            }
            son1[i].style.display="block";
            lis1[i].classList.add("active2");
        }
}

// 图书轮播
    let oneimgs = document.querySelectorAll(".content .content-list .one .banner .master");
    let onedots = document.querySelectorAll(".content .content-list .one .dot li");
    let oneleftbtn=document.querySelectorAll(".content .content-list .one .leftbtn")[0];
    let onerightbtn=document.querySelectorAll(".content .content-list .one .rightbtn")[0];
    let onewidths = parseInt(getComputedStyle(oneimgs[0], null).width);
    let onenow = 0;
    let onenext = 0;
    let oneflag=true;
    for (let i = 0; i < onedots.length; i++) {
        onedots[i].onclick = function () {
            for (let j = 0; j < onedots.length; j++) {
                onedots[j].classList.remove("active");
                oneimgs[j].style.left = onewidths + "px";
            }
            onedots[i].classList.add("active");
            oneimgs[i].style.left = "0";
            onenow = onenext;
        }
    }
    oneimgs[0].style.left="0";
    onedots[0].classList.add("active");
    function onemove() {
        onenext++;
        if (onenext==onedots.length){
            onenext=0;
        }
        oneimgs[onenext].style.left=onewidths+"px";
        animate(oneimgs[onenow],{left:-onewidths});
        animate(oneimgs[onenext],{left:0},function () {
            oneflag=true;
        });
        onedots[onenow].classList.remove("active");
        onedots[onenext].classList.add(("active"));
        onenow=onenext;
    }
    onerightbtn.onclick=function(){
        if (!oneflag){
            return;
        }
     
        oneflag=false;
        onemove();
    }
    function onemoveL(){
        onenext--;
        if (onenext<0){
            onenext=onedots.length-1;
        }
        oneimgs[onenext].style.left=-onewidths+"px";
        animate(oneimgs[onenow],{left:onewidths});
        animate(oneimgs[onenext],{left:0},function () {
            oneflag=true;
        });
        onedots[onenow].classList.remove("active");
        onedots[onenext].classList.add(("active"));
        onenow=onenext;
    }
    oneleftbtn.onclick=function(){
        if (!oneflag){
            return;
        }
        oneflag=false;
        onemoveL();
    }
     let senimgs = document.querySelectorAll(".content .content-list .sen .banner .master");
    let sendots = document.querySelectorAll(".content .content-list .sen .dot li");
    let senleftbtn=document.querySelectorAll(".content .content-list .sen .leftbtn")[0];
    let senrightbtn=document.querySelectorAll(".content .content-list .sen .rightbtn")[0];
    let senwidths = parseInt(getComputedStyle(senimgs[0], null).width);
    let sennow = 0;
    let sennext = 0;
    let senflag=true;
    for (let i = 0; i < sendots.length; i++) {
        sendots[i].onclick = function () {
            for (let j = 0; j < sendots.length; j++) {
                sendots[j].classList.remove("active");
                senimgs[j].style.left = senwidths + "px";
            }
            sendots[i].classList.add("active");
            senimgs[i].style.left = "0";
            sennow = sennext;
        }
    }
    senimgs[0].style.left="0";
    sendots[0].classList.add("active");
    function senmove() {
        sennext++;
        if (sennext==sendots.length){
            sennext=0;
        }
        senimgs[sennext].style.left=senwidths+"px";
        animate(senimgs[sennow],{left:-senwidths});
        animate(senimgs[sennext],{left:0},function () {
            senflag=true;
        });
        sendots[sennow].classList.remove("active");
        sendots[sennext].classList.add(("active"));
        sennow=sennext;
    }
    senrightbtn.onclick=function(){
        if (!senflag){
            return;
        }
        senflag=false;
        senmove();
    }
    function senmoveL(){
        sennext--;
        if (sennext<0){
            sennext=sendots.length-1;
        }
        senimgs[sennext].style.left=-senwidths+"px";
        animate(senimgs[sennow],{left:senwidths});
        animate(senimgs[sennext],{left:0},function () {
            senflag=true;
        });
        sendots[sennow].classList.remove("active");
        sendots[sennext].classList.add(("active"));
        sennow=sennext;
    }
    senleftbtn.onclick=function(){
        if (!senflag){
            return;
        }
        senflag=false;
        senmoveL();
    }



    let sanimgs = document.querySelectorAll(".content .content-list .san .banner .master");
    let sandots = document.querySelectorAll(".content .content-list .san .dot li");
    let sanleftbtn=document.querySelectorAll(".content .content-list .san .leftbtn")[0];
    let sanrightbtn=document.querySelectorAll(".content .content-list .san .rightbtn")[0];
    let sanwidths = parseInt(getComputedStyle(sanimgs[0], null).width);
    let sannow = 0;
    let sannext = 0;
    let sanflag=true;
    for (let i = 0; i < sandots.length; i++) {
        sandots[i].onclick = function () {
            for (let j = 0; j < sandots.length; j++) {
                sandots[j].classList.remove("active");
                sanimgs[j].style.left = sanwidths + "px";
            }
            sandots[i].classList.add("active");
            sanimgs[i].style.left = "0";
            sannow = sannext;
        }
    }
    sanimgs[0].style.left="0";
    sandots[0].classList.add("active");
    function sanmove() {
        sannext++;
        if (sannext==sandots.length){
            sannext=0;
        }
        sanimgs[sannext].style.left=sanwidths+"px";
        animate(sanimgs[sannow],{left:-sanwidths});
        animate(sanimgs[sannext],{left:0},function () {
            sanflag=true;
        });
        sandots[sannow].classList.remove("active");
        sandots[sannext].classList.add(("active"));
        sannow=sannext;
    }
    sanrightbtn.onclick=function(){
        if (!sanflag){
            return;
        }
        sanflag=false;
        sanmove();
    }
    function sanmoveL(){
        sannext--;
        if (sannext<0){
            sannext=sandots.length-1;
        }
        sanimgs[sannext].style.left=-sanwidths+"px";
        animate(sanimgs[sannow],{left:sanwidths});
        animate(sanimgs[sannext],{left:0},function () {
            sanflag=true;
        });
        sandots[sannow].classList.remove("active");
        sandots[sannext].classList.add(("active"));
        sannow=sannext;
    }
    sanleftbtn.onclick=function(){
        if (!sanflag){
            return;
        }
        sanflag=false;
        sanmoveL();
    }


    // 内容轮播4
    let forimgs = document.querySelectorAll(".content .content-list .for .banner .master");
    let fordots = document.querySelectorAll(".content .content-list .for .dot li");
    let forleftbtn=document.querySelectorAll(".content .content-list .for .leftbtn")[0];
    let forrightbtn=document.querySelectorAll(".content .content-list .for .rightbtn")[0];
    let forwidths = parseInt(getComputedStyle(forimgs[0], null).width);
    let fornow = 0;
    let fornext = 0;
    let forflag=true;
    for (let i = 0; i < fordots.length; i++) {
        fordots[i].onclick = function () {
            for (let j = 0; j < fordots.length; j++) {
                fordots[j].classList.remove("active");
                forimgs[j].style.left = forwidths + "px";
            }
            fordots[i].classList.add("active");
            forimgs[i].style.left = "0";
            fornow = fornext;
        }
    }
    forimgs[0].style.left="0";
    fordots[0].classList.add("active");
    function formove() {
        fornext++;
        if (fornext==fordots.length){
            fornext=0;
        }
        forimgs[fornext].style.left=forwidths+"px";
        animate(forimgs[fornow],{left:-forwidths});
        animate(forimgs[fornext],{left:0},function () {
            forflag=true;
        });
        fordots[fornow].classList.remove("active");
        fordots[fornext].classList.add(("active"));
        fornow=fornext;
    }
    forrightbtn.onclick=function(){
        if (!forflag){
            return;
        }
        forflag=false;
        formove();
    }
    function formoveL(){
        fornext--;
        if (fornext<0){
            fornext=fordots.length-1;
        }
        forimgs[fornext].style.left=-forwidths+"px";
        animate(forimgs[fornow],{left:forwidths});
        animate(forimgs[fornext],{left:0},function () {
            forflag=true;
        });
        fordots[fornow].classList.remove("active");
        fordots[fornext].classList.add(("active"));
        fornow=fornext;
    }
    forleftbtn.onclick=function(){
        if (!forflag){
            return;
        }
        forflag=false;
        formoveL();
    }



    // 为你推荐
    let button=document.querySelectorAll(".box-tj .top .jt .zuo ");
    let milist=document.querySelectorAll(".box-tj .list")[0];
    // console.log(button,milist);
    let w=parseInt(getComputedStyle(milist,null).width)/2;
    // console.log(w);
    let times=0;

    button[0].onclick=function(){
         times++;
        if (times==2) {
            times=1;
        }
        milist.style.transform=`translate(${(-w*times)}px)`;
    }

    button[1].onclick=function(){
    times--;
    if (times==-1) {
        times=0;
    }
    milist.style.transform=`translate(${(-w*times)}px)`;
    }

    //置顶
     let back=document.querySelector(".zhiding");
    back.onclick=function () {
        animate(document.body,{scrollTop:0},500);
        animate(document.documentElement,{scrollTop:0},500)
    }

}


