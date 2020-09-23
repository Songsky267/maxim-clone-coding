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
        $(function(){
            $(".ft_family").click(function(){
                $(".ft_btn").slideToggle();

            });

        });

        //메인슬라이더 
        var $slide_wrap = $(".slider");
        var $slide_container = $(".slide_container");
        var $slide_list = $(".slider");
        var $slide_count = $(".slide_container");
        var $slide_prve = $(".slider");
        var $slide_next = $(".slide_container");
        var $current_idx = 0;

        //슬라이드 나열 
        $slide_list.each(function(){
            $(this).css("left",i * + "%");
            i +=0;
        });
        //슬라이드 이동 함수  
        function moveSlide(idx){
            $slide_container.css("left",-100 * idx + "%");
        }      
        //버튼 눌렀을때 할일
        $btn_next.on("click", function(){
            if($current_idx == $slide_count -1){
                moveSlide(0);
            }else{moveSlide($current_idx +1);
        

        }
    }); 
    $btn_prev.on("click", function(){
        if($current_idx == 0){
            moveSlide($slide_count -1);
        }else{
    

    }
}); 
            

       

    
});