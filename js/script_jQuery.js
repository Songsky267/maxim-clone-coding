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
        $(function() {
            $(".ft_family").click(function(){
              $(".ft_btn").slideToggle();
            });
        });

    //메인 슬라이더

    var $slide_wrap = $(".slider");//전체영역
    var $slide_container = $(".slide_container");//이미지 리스트를 감싸고 있는 여역
    var $slide_list = $(".slide_list");//이미지 리스트
    var $slide_count = $slide_list.length//슬라이드 이미지 리스트개수
    var $btn_prev = $("#prev");// 슬라이드의 이전버튼
    var $btn_next = $("#next");//슬라이드의 이후버튼
    var $current_idx = 0;//현재 슬라이드의 위치(순서)
    
    //슬라이더 나열
    $slide_list.each(function(i){
        $(this).css("left",i * 100 + "%");
        i +=0;
    });
    //슬라이드 이동 함수
    function moveSlide(idx){
        $slide_container.css("left",-100 * idx + "%");
        $current_idx = idx;
    }

    //버튼 눌렀을때 할일 
    $btn_next.on("click", function(){

        if($current_idx == $slide_count -1){//마지막일때
            moveSlide(0);
        }else{//마지막이 아니면 
            moveSlide($current_idx +1);
        }

    });
    $btn_prev.on("click", function(){
     
        if($current_idx ==0){//처음일때는
            moveSlide($slide_count -1);
            
        }else{//마지막이 아니면 
            
        }


    });
          

       

    
});