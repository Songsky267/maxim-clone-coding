// 헤더 네비 토글 버튼 설정
var nav_btn = document.getElementById("nav_btn"); // 네비 버튼
var navi = document.getElementsByClassName("navi")[0]; // 네비
var $header = document.querySelector("#header"),
    $logo_org = document.querySelector(".logo_orgin"),
    $logo_white = document.querySelector(".logo_white");

nav_btn.addEventListener("click",function(){
    var has_on_nav = navi.classList.contains("on_nav");
    // navi라는 변수에 클래스명 중에 "on_nav"라는 클래스명이 존재하는지 확인함

    if(!has_on_nav) { // 존재여부에 대해 부정문으로 변경
        navi.classList.add("on_nav");
        navi.classList.remove("off_nav");
        $header.classList.add("scroll_on");
        $logo_white.classList.remove("visible");
        $logo_org.classList.add("visible");
        // navi라는 클래스명을 가진 요소한테 on_nav라는 클래스명을 추가시켜줘
    }else {
        navi.classList.remove("on_nav");
        navi.classList.add("off_nav");
        $header.classList.remove("scroll_on");
        $logo_org.classList.remove("visible");
        $logo_white.classList.add("visible");
        // navi라는 클래스명을 가진 요소한테 on_nav라는 클래스명을 삭제시켜줘
    }

});

// 메인 슬라이드 영역

var slide_wrap = document.querySelector(".slider"); // 전체영역
var slide_container = document.querySelector(".slide_container"); // 이미지 리스트를 깜싸고 있는 영역
var slide_list = document.querySelectorAll(".slide_list"); // 이미지 리스트
var slide_count = slide_list.length; // 슬라이드 이미지 리스트의 개수
var btn_prev = document.querySelector("#prev"); // 슬라이드의 이전 버튼
var btn_next = document.querySelector("#next"); // 슬라이드의 이후 버튼
var current_idx = 0; // 현재 슬라이드의 위치(순서)

// 슬라이드를 가로로 나열
for(var i = 0; i < slide_count; i++) {
    slide_list[i].style.left = i * 100 + "%";
}

// 슬라이드(ul)이 이동하는 함수
function moveSlide(idx){
    slide_container.style.left = -100 * idx + "%";
    current_idx = idx;
}

// 처음일 때, 이전 버튼이 안보이게 하는 함수
function prevDisabled(){
    if(current_idx == 0) {
        btn_prev.classList.add("disabled");
    }
}
prevDisabled();

// 버튼을 클릭했을 때 할 일
btn_prev.addEventListener("click", function(){
    moveSlide(current_idx - 1);

    if(current_idx == 0) { // 현재 슬라이드 순서가 첫 번째(0)일 때
        btn_prev.classList.add("disabled"); // 처음이면 버튼이 보이지 않게
    }else {
        btn_prev.classList.remove("disabled"); // 처음이 아니면 버튼을 다시 보이게
    }

    if(current_idx != slide_count - 1){
        btn_next.classList.remove("disabled");
    }
});
btn_next.addEventListener("click", function(){
    moveSlide(current_idx + 1);

    if(current_idx == slide_count - 1) { // 현재 슬라이드 순서가 마지막일 때
        btn_next.classList.add("disabled"); // 마지막이면 버튼이 보이지 않게;
    }else {
        btn_next.classList.remove("disabled"); // 마지막이 아니라면 다시 버튼이 보이게;
    }
    if(current_idx != 0){
        btn_prev.classList.remove("disabled");
    }
});

