// Set width variable in CSS
setWidth();
window.addEventListener('resize', () => {
    setWidth();
})

function setWidth() {
    document.querySelector(':root').style.setProperty('--width', document.body.clientWidth + 'px');
    document.querySelector(':root').style.setProperty('--scroll-bar-width', (window.innerWidth - document.body.clientWidth) + 'px');
}

// Header Section
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

setNavBar();
document.addEventListener('scroll', () => {
    setNavBar();
});
function setNavBar() {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "var(--color-1)";
    } else {
        header.style.backgroundColor = 'transparent';
    }
}



// Skills Section Scroll Animation
const skillItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-skill-item');
        }
    });
});

const hiddenSkills = document.querySelectorAll('.hide-skill-item');
hiddenSkills.forEach((element) => skillItemObserver.observe(element));



// Projects Section Scroll Animation
const projectItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-project-item');
        }
    });
});

const hiddenProjects = document.querySelectorAll('.hide-project-item');
hiddenProjects.forEach((element) => projectItemObserver.observe(element));



// About Section Scroll Animation
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-about');
        }
    });
});

const hiddenAbout = document.querySelectorAll('.hide-about');
hiddenAbout.forEach((element) => aboutObserver.observe(element));



// Info Section Scroll Animation
const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-info-item');
        }
    });
});

const hiddenInfo = document.querySelectorAll('.hide-info-item');
hiddenInfo.forEach((element) => infoObserver.observe(element));