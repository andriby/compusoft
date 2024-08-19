const slider = document.querySelector("#price-range")
let plan = document.getElementById("plan")
let planArr = [
    `
        <span class="price">300$</span>
        <h3>Basico</h3>
    `,
    `
        <span class="price">600$</span>
        <h3>Standard</h3>
    `,
    `
        <span class="price">900$</span>
        <h3>Premium</h3>
    `
]

showContent(0)

function showContent(value){
    if(value == 0){
        plan.innerHTML = planArr[0]
    }
    if(value == 1){
        plan.innerHTML = planArr[1]
    }
    if(value == 2){
        plan.innerHTML = planArr[2]
    }
}

function ajustarImagenes(){
    const images = document.querySelectorAll('.plan-image img')

    let maxHeight = images[0].height
    let minWidth = images[0].width

    images.forEach(image => {
    if (image.height < maxHeight) {
        maxHeight = image.height
    }
    if (image.width < minWidth) {
        minWidth = image.width
    }
    })

    images.forEach(image => {
        image.style.height = `${maxHeight + 50}px`
        image.style.width = `${minWidth + 100}px`
    })
}

slider.addEventListener("input", (event) => {
    let value = event.target.value
    showContent(value)
})

ajustarImagenes()


function mostrarSwipper() {
    let swiper = document.querySelector('.swiper-wrapper')
    swiper.innerHTML = `
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript logo"  />
            <p>JavaScript</p>
        </div>
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript logo"  />
            <p>TypeScript</p>
        </div>
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs logo"  />
            <p>NodeJS</p>
        </div>
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angularjs logo"  />
            <p>Angular</p>
        </div>
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql logo"  />
            <p>PostgreSQL</p>
        </div>
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb logo"  />
            <p>MongoDB</p>
        </div>
        <div class="swiper-slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php logo"  />
            <p>PHP</p>
        </div>
    `

    const images = document.querySelectorAll('.swiper-slide img')
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.nextElementSibling.style.transition = 'opacity 0.3s ease'
            image.nextElementSibling.style.opacity = '1'
        })

        image.addEventListener('mouseout', () => {
            image.nextElementSibling.style.transition = 'opacity 0.3s ease'
            image.nextElementSibling.style.opacity = '0'
        })
    })
}

mostrarSwipper()

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25
        },
    }
})

function showBuyCard(i){
    let title = document.getElementById('title')
    let price = document.getElementById('price')
    let description = document.getElementById('description')

    let title2 = document.getElementById('title2')
    let price2 = document.getElementById('price2')
    let description2 = document.getElementById('description2')

    let title3 = document.getElementById('title3')
    let price3 = document.getElementById('price3')
    let description3 = document.getElementById('description3')

    switch(i){
        case 1:
            title.innerHTML = "Basico"
            price.innerHTML = "300$"
            description.innerHTML = "Plan básico con características esenciales"
            break
        case 2:
            title.innerHTML = "Standart"
            price.innerHTML = "600$"
            description.innerHTML = "Plan estándar con características adicionales"            
            break
        case 3:
            title.innerHTML = "Premium"
            price.innerHTML = "900$"
            description.innerHTML = "Plan premium con todas las características y beneficios"
            break
        case 4:
            title2.innerHTML = "Basico"
            price2.innerHTML = "300$"
            description2.innerHTML = "Plan básico con características esenciales"
            break
        case 5:
            title2.innerHTML = "Standart"
            price2.innerHTML = "600$"
            description2.innerHTML = "Plan estándar con características adicionales"
            break
        case 6:
            title2.innerHTML = "Premium"
            price2.innerHTML = "900$"
            description2.innerHTML = "Plan premium con todas las características y beneficios"
            break
        case 7:
            title3.innerHTML = "Basico"
            price3.innerHTML = "300$"
            description3.innerHTML = "Plan básico con características esenciales"
            break
        case 8:
            title3.innerHTML = "Standart"
            price3.innerHTML = "600$"
            description3.innerHTML = "Plan estándar con características adicionales"
            break
        case 9:
            title3.innerHTML = "Premium"
            price3.innerHTML = "900$"
            description3.innerHTML = "Plan premium con todas las características y beneficios"
            break
    }
}

// Menu
function toggleMenu(){
    let button = document.getElementById('menu-toggle')
    let menu = document.querySelector('.menu-responsive')
    menu.classList.toggle('active')    
    if (button.innerHTML == `☰`) {        
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 6.29289C6.31658 5.90237 5.68342 5.90237 5.29289 6.29289C4.90237 6.68342 4.90237 7.31658 5.29289 7.70711L10.5858 13L5.29289 18.2929C4.90237 18.6834 4.90237 19.3166 5.29289 19.7071C5.68342 20.0976 6.31658 20.0976 6.70711 19.7071L12 14.4142L17.2929 19.7071C17.6834 20.0976 18.3166 20.0976 18.7071 19.7071C19.0976 19.3166 19.0976 18.6834 18.7071 18.2929L13.4142 13L18.7071 7.70711C19.0976 7.31658 19.0976 6.68342 18.7071 6.29289C18.3166 5.90237 17.6834 5.90237 17.2929 6.29289L12 11.5858L6.70711 6.29289Z" fill="black"/>
            </svg>
        `
    } else {
        button.innerHTML = `☰`
        
    }
}