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
    const images = document.querySelectorAll('.plan-image img');

    let maxHeight = images[0].height;
    let minWidth = images[0].width;

    images.forEach(image => {
    console.log(image);
    if (image.height < maxHeight) {
        maxHeight = image.height;
    }
    if (image.width < minWidth) {
        minWidth = image.width;
    }
    });

    images.forEach(image => {
        image.style.height = `${maxHeight + 50}px`;
        image.style.width = `${minWidth + 100}px`;
    });
}

slider.addEventListener("input", (event) => {
    let value = event.target.value
    showContent(value)
})

ajustarImagenes()

    
function mostrarSwipper() {
    let swiper = document.querySelector('.swiper-wrapper');
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
    `;

    const images = document.querySelectorAll('.swiper-slide img');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.nextElementSibling.style.transition = 'opacity 0.3s ease';
            image.nextElementSibling.style.opacity = '1';
        });

        image.addEventListener('mouseout', () => {
            image.nextElementSibling.style.transition = 'opacity 0.3s ease';
            image.nextElementSibling.style.opacity = '0';
        });
    });
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
    });

    function showBuyCard(i){
        console.log(i);
        let content = document.getElementsByClassName('card-price')
        let title = document.getElementById('title')
        let price = document.getElementById('price')
        let description = document.getElementById('description')
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
        }
    }

    showBuyCard(1)