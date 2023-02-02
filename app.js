// Parallax Section Start
// document.addEventListener('DOMContentLoaded', function () {
//     backgroundParallax();
// });

// window.addEventListener('scroll', function () {
//     backgroundParallax();
// });

// window.addEventListener('resize', function () {
//     backgroundParallax();
// });

// function backgroundParallax() {
//     var backgroundImage = new Image();
//     backgroundImage.src = 'img/Background.png';
//     var backgroundAspectRatio = backgroundImage.height / backgroundImage.width;

//     var visibleAspectRatio = document.documentElement.clientHeight / document.documentElement.clientWidth;
//     var hiddenHeight = getHiddenHeight(backgroundAspectRatio, visibleAspectRatio);

//     var scrollPercent = getScrollPercent();
//     var yOffset = -0.01 * scrollPercent * hiddenHeight;
//     document.querySelector('.parallax-background').style.backgroundPosition = 'center ' + yOffset + 'px';
// }

// function getScrollPercent() {
//     var docElement = document.documentElement
//     var docBody = document.body;
//     var scrollTop = docElement['scrollTop'] || docBody['scrollTop'];
//     var scrollHeight = docElement['scrollHeight'] || docBody['scrollHeight'];
//     return (scrollTop) / ((scrollHeight) - docElement.clientHeight) * 100;
// }

// function getHiddenHeight(backgroundAspectRatio, visibleAspectRatio) {
//     if (visibleAspectRatio >= backgroundAspectRatio) {
//         return 0;
//     }
//     visibleWidth = document.documentElement.clientWidth;
//     visibleHeight = document.documentElement.clientHeight;
//     return backgroundAspectRatio * visibleWidth - visibleHeight;
// }
// Parallax Section End

// Header Section Start
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

mobile_menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "var(--color-1)";
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
// Header Section End

// Skills Section Scroll Animation Start
const skillItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-skill-item');
        }
    });
});

const hiddenSkills = document.querySelectorAll('.hide-skill-item');
hiddenSkills.forEach((element) => skillItemObserver.observe(element));
// Skills Section Scroll Animation End

// Projects Section Scroll Animation Start
const projectItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-project-item');
        }
    });
});

const hiddenProjects = document.querySelectorAll('.hide-project-item');
hiddenProjects.forEach((element) => projectItemObserver.observe(element));
// Projects Section Scroll Animation End

// About Section Scroll Animation Start
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-about');
        }
    });
});

const hiddenAbout = document.querySelectorAll('.hide-about');
hiddenAbout.forEach((element) => aboutObserver.observe(element));
// About Section Scroll Animation End

// Info Section Scroll Animation Start
const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-info-item');
        }
    });
});

const hiddenInfo = document.querySelectorAll('.hide-info-item');
hiddenInfo.forEach((element) => infoObserver.observe(element));
// Info Section Scroll Animation End