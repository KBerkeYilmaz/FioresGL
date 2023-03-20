const heroSlides = document.querySelectorAll(".title-carrousel-list-item")
const miniBtn = $(".slide-buttons-item")
let timeoutId;

function buttonMaker() {
    for (let i = 0; i < heroSlides.length - 1; i++) {
        const newBtn = document.createElement("button")
        newBtn.classList.add("slide-buttons-item")
        newBtn.dataset.index = i
        miniBtn.after(newBtn)
    }
}

buttonMaker()

const allBtn = $(".slide-buttons").children()

function updateActiveButton(index) {
    allBtn.removeAttr("data-active-btn")
    allBtn.eq(index).attr("data-active-btn", true)
}


function moveNext() {
    const slides = $(".title-carrousel-list-item");
    const activeSlide = $(".title-carrousel-list-item[data-active]");
    let newIndex = (activeSlide.index() + 1) % slides.length;
    activeSlide.removeAttr("data-active");
    slides.eq(newIndex).attr("data-active", true);
    updateActiveButton(newIndex);
}

let intervalId = setInterval(moveNext, 6000);



allBtn.click((button) => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    const newIndex = $(button.target).index();
    const slides = $(".title-carrousel-list-item");
    const activeSlide = $(".title-carrousel-list-item[data-active]");
    activeSlide.removeAttr("data-active");
    slides.eq(newIndex).attr("data-active", true);

    allBtn.removeAttr("data-active-btn");
    allBtn.eq(newIndex).attr("data-active-btn", true);

    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    buttonIndex = newIndex;
    buttons[buttonIndex].classList.add("active");
    timeoutId = setTimeout(() => {
        intervalId = setInterval(moveNext, 6000);
    }, 10000);
});






const buttons = document.querySelectorAll("[data-carousel-button]")


buttons.forEach(button => {
    button.addEventListener("click", function heroCarousel() {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        const offset = button.dataset.carouselButton === "next" ? 1 : -1


        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")


        const activeSlide = slides.querySelector("[data-active]")


        let newIndex = [...slides.children].indexOf(activeSlide) + offset



        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active



        updateActiveButton(newIndex)
        timeoutId = setTimeout(() => {
            intervalId = setInterval(moveNext, 6000);
        }, 10000);

    })
})




//   $(window).on('scroll', function(event) {
//     if (event.originalEvent.deltaY > 0) {
//       // scrolling down
//       var currentSection = $('.active-section');
//       var nextSection = currentSection.next();
//       if (nextSection.length) {
//         // if there is a next section, scroll to it
//         $('html, body').animate({
//           scrollLeft: nextSection.offset().left
//         }, 1000);
//         currentSection.removeClass('active-section');
//         nextSection.addClass('active-section');
//       }
//     }
//   });

// const playBtn = $(".play-button");

// playBtn.click(() => {
//   const icon = playBtn.children();

//   icon.toggleClass("fa-play fa-pause");

//   if (icon.hasClass("fa-play")) {
//     clearInterval(intervalId);
//   } else {
//     intervalId = setInterval(moveNext, 3000);
//   }
// });









////////////////// Text Changer //////////////////

const aboutHeader = $(".about-article-heading")
const aboutText = $(".about-article-text")



aboutHeader.click((event) => {
    let buttonEventTrigger = event.target.textContent
    if (buttonEventTrigger === "Vision") {
        aboutText.text("To take a share from the world market in many sectors, to be a pioneer in innovation by finding problems and developing constructive solutions to them. To shift world trade to young people who are much more open to research and questioning, much more dynamic and much more knowledgeable in technology.")
    } else if (buttonEventTrigger === "Values") {
        aboutText.text("Respect for life and the human being, in all its expressions and stages freedom, cooperation, ethical entrepreneurship as a generator of global wealth, standardization and efficiency in obtaining and expenditure of common resources.")
    } else if (buttonEventTrigger === "Mission") {
        aboutText.text("To get a share from the market in different countries and different sectors by recruiting young minds who continue to develop themselves in their fields. To create a huge network of connections for young and dynamic minds where they can get maximum efficiency, where everyone can take each other forward and benefit from each other's connections. Generating new and constructive ideas and realizing them with the right investments and incentives instead of selling them to companies.")
    } else(
        aboutText.text("Fiores is a multinational development project that takes the incubation system as its mission. On the way started in Turkey, its main goal is to spread all over the world and to carry out international standart innovator organizations of all kinds (social, industrial, commercial, sports, cultural,...) Our international Headquarters will be located in Ankara, and all pilot projects will be tested, to later take them to other countries.")
    )
})

// //////////////////// NAVBAR ADJUSTER // //////////////////// 


$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 300) {
        $(".main-navbar").slideUp()
    } else {
        $(".main-navbar").slideDown()
    }
});

let navbarDown = false;

$(document).on("mousemove", function(e) {
    const scrollTop = $(window).scrollTop();
    if(scrollTop >= 400 && e.clientY <= 80) {
        $(".main-navbar").slideDown();
        navbarDown = true;
    } else {
        navbarDown = false;
    }
});

$(".main-navbar").on("mouseleave", function() {
    const scrollTop = $(window).scrollTop();
    if(scrollTop > 300 && navbarDown) {
        $(".main-navbar").slideUp();
        navbarDown = false;
    }
});

