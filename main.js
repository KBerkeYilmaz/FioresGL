
// // HERO CAROUSEL
// const buttons = $("[data-carousel-button]")

//   buttons.click(function heroCarousel(){
//     const offset = $(this).dataset.carouselButton === "next" ? 1 : -1
//     const slides = $(this)
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })







// const buttons = $("[data-carousel-button]")


// buttons.click(function heroCarousel(){
//     const offset = buttons.data("carousel-button") === "next" ? 1 : -1
//     const slides = buttons
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active



//   })






const heroSlides = document.querySelectorAll(".title-carrousel-list-item")
const miniBtn = $(".slide-buttons-item")


function buttonMaker() {
    for (let i = 0; i < heroSlides.length - 1; i++) {
        const newBtn = document.createElement("button")
        newBtn.classList.add("slide-buttons-item")
        miniBtn.after(newBtn)

    }
}

buttonMaker()

const allBtn = $(".slide-buttons").children()

allBtn.click((x) => {
    console.dir(x)


})





const buttons = document.querySelectorAll("[data-carousel-button]")


buttons.forEach(button => {
    button.addEventListener("click", function heroCarousel(){
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

    })
  })


















////////////////// Text Changer //////////////////

const aboutHeader = $(".about-article-heading")
const aboutText = $(".about-article-text")



aboutHeader.click((event) => {
    let buttonEventTrigger = event.target.textContent
    if (buttonEventTrigger === "Vision") {
        aboutText.text("To take a share from the world market in many sectors, to be a pioneer in innovation by finding problems and developing constructive solutions to them. To shift world trade to young people who are much more open to research and questioning, much more dynamic and much more knowledgeable in technology.")
    } else if(buttonEventTrigger === "Values") {
        aboutText.text("Respect for life and the human being, in all its expressions and stages freedom, cooperation, ethical entrepreneurship as a generator of global wealth, standardization and efficiency in obtaining and expenditure of common resources.")
    } else if (buttonEventTrigger === "Mission") {
        aboutText.text("To get a share from the market in different countries and different sectors by recruiting young minds who continue to develop themselves in their fields. To create a huge network of connections for young and dynamic minds where they can get maximum efficiency, where everyone can take each other forward and benefit from each other's connections. Generating new and constructive ideas and realizing them with the right investments and incentives instead of selling them to companies.")
    } else (
        aboutText.text("Fiores is a multinational development project that takes the incubation system as its mission. On the way started in Turkey, its main goal is to spread all over the world and to carry out international standart innovator organizations of all kinds (social, industrial, commercial, sports, cultural,...) Our international Headquarters will be located in Ankara, and all pilot projects will be tested, to later take them to other countries.")
    )
}
)

