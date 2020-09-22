$(function(){
    var $nav_btn = $("#nav_btn"); // 네비 버튼
    var $navi = $(".navi"); // 네비

    $nav_btn.on("click",function(){
        var $has_on_nav = $navi.hasClass("on_nav");

        if(!$has_on_nav) {
            $navi.slideDown();
            $navi.addClass("on_nav");
            // on_nav라는 클래스명추가;
        }else {
            $navi.slideUp();
            $navi.removeClass("on_nav");
            // on_nav라는 클래스명삭제;
        }
        // $navi.toggleClass("on_nav");
    });

    // 헤더 스크롤
    var $header = $("#header"),
        $logo_org = $(".logo_orgin"),
        $logo_white = $(".logo_white"),
        $doc = $("html,body");

        $(window).scroll(function(){ // 윈도우에서 스크롤 이벤트가 발생했을 때
            var sclTop = $(window).scrollTop(); // 스크롤바가 내려온 값
            
            if(sclTop > 0){ // 스크롤바가 내려올 때
                $header.addClass("scroll_on"); // 헤더에 scroll_on이라는 클래스명을 추가
                $logo_white.removeClass("visible"); // 이미지화이트에 visible이라는 클래스명을 삭제
                $logo_org.addClass("visible"); // 이미지오리진에 visible이라는 클래스명을 추가
            }else{ // 스크롤바가 0일 때
                $header.removeClass("scroll_on");  // 헤더에 scroll_on이라는 클래스명을 삭제
                $logo_org.removeClass("visible"); // 로고오리진에 visible이라는 클래스명을 삭제
                $logo_white.addClass("visible"); // 로고화이트에 visible이라는 클래스명을 추가
            }
        });
        
        

});