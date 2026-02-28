// 배너 관련 (index.html에만 있을 수 있으므로 null 체크)
const banner = document.getElementById('banner');
const closeButton = document.getElementById('closeButton');
const dismissButton = document.getElementById('dismissButton');

if (banner && closeButton && dismissButton) {
    // Show the banner if not dismissed for the day
    const isBannerDismissed = localStorage.getItem('dismissedBanner');
    const today = new Date().toISOString().split('T')[0];

    if (!isBannerDismissed || today !== isBannerDismissed) {
        banner.style.display = 'block';
    }

    // Close button (오늘 하루 보지 않기)
    closeButton.addEventListener('click', () => {
        localStorage.setItem('dismissedBanner', today);
        banner.style.display = 'none';
    });

    // Dismiss button (닫기)
    dismissButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

// 슬라이드 쇼
var slideIndex = 0;
var slideshortIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slidesshort = document.getElementsByClassName("mySlidesshort");

    // slides와 slidesshort가 비어있지 않은지 확인
    if (slides.length === 0 && slidesshort.length === 0) {
        return;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slidesshort.length; i++) {
        slidesshort[i].style.display = "none";
    }
    slideIndex++;
    slideshortIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideshortIndex > slidesshort.length) {
        slideshortIndex = 1;
    }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (slidesshort.length > 0) {
        slidesshort[slideshortIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 6000);
}

// DOMContentLoaded 이후에만 실행
document.addEventListener("DOMContentLoaded", function() {
    // 유튜브 썸네일/iframe
    const mainIframe = document.getElementById('mainIframe');
    if (mainIframe) {
        changeVideo("https://www.youtube.com/embed/ibtq7VNgY38");
    }

    // 썸네일 클릭 이벤트
    const small_thumbnail1 = document.querySelector('.small_videos_thumbnail1 img');
    const small_thumbnail2 = document.querySelector('.small_videos_thumbnail2 img');
    const small_thumbnail3 = document.querySelector('.small_videos_thumbnail3 img');
    const small_thumbnail4 = document.querySelector('.small_videos_thumbnail4 img');
    const small_thumbnail5 = document.querySelector('.small_videos_thumbnail5 img');
    const small_thumbnail6 = document.querySelector('.small_videos_thumbnail6 img');

    if (small_thumbnail1) small_thumbnail1.addEventListener('click', () => changeVideo(small_thumbnail1.dataset.video));
    if (small_thumbnail2) small_thumbnail2.addEventListener('click', () => changeVideo(small_thumbnail2.dataset.video));
    if (small_thumbnail3) small_thumbnail3.addEventListener('click', () => changeVideo(small_thumbnail3.dataset.video));
    if (small_thumbnail4) small_thumbnail4.addEventListener('click', () => changeVideo(small_thumbnail4.dataset.video));
    if (small_thumbnail5) small_thumbnail5.addEventListener('click', () => changeVideo(small_thumbnail5.dataset.video));
    if (small_thumbnail6) small_thumbnail6.addEventListener('click', () => changeVideo(small_thumbnail6.dataset.video));

    function changeVideo(videoUrl) {
        if (mainIframe) {
            mainIframe.setAttribute('src', videoUrl);
        }
    }

    // 플로팅 버튼/메뉴
    const floatingButton = document.getElementById("floating-button");
    const menuContainer = document.getElementById("menu-container");
    if (floatingButton && menuContainer) {
        const buttonText = floatingButton.querySelector('.button-text');
        floatingButton.addEventListener("click", function() {
            floatingButton.classList.toggle("active");
            menuContainer.classList.toggle("show");
            if (floatingButton.classList.contains("active")) {
                if (buttonText) buttonText.style.display = "none";
            } else {
                if (buttonText) buttonText.style.display = "block";
            }
        });
    }
});
