const requestForm = document.getElementById('request');

const arrowUp = document.getElementById('arrowUp');
const down = document.getElementById('down');

window.addEventListener('scroll', () => {
    if (window.scrollY < 1000) {
        arrowUp.style.display = 'none';
        down.style.background = "rgb(255, 0, 0)";
        down.style.margin = "10px 40px";
    }else{
        arrowUp.style.display = 'block';
        down.style.background = "white";
        down.style.margin = "0";
    }
});

// const head = document.getElementById("head");

// window.addEventListener("scroll", () => {
//     if(window.scrollY > 10){
//       head.style.position = "fixed";
//         // head.style.background = "g 
//         head.style.width ="95%";
//         head.style.height ="200px"
//         head.style.borderRadius = "25px";
//         head.style.marginLeft = "20px";
//         head.style.marginRight = "20px";
//         head.style.top ="0px"
//     }else{
//         // head.style.background = "white"
//         head.style.width ="100%";
//         head.style.height ="700px"
//         head.style.borderRadius = "0px";
//         head.style.marginLeft = "0px";
//         head.style.marginRight = "0px";
//         head.style.top ="60px"
//     }
// });


document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.newsletter-form form');
    const emailInput = document.querySelector('.newsletter-form input');
    const subscribeBtn = document.querySelector('.subscribe-btn');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const email = emailInput.value.trim();
  
      if (email !== '') {
        console.log('Подписка на email:', email);
  
        emailInput.value = '';
  
        alert('Спасибо за подписку на нашу рассылку!');
      } else {
        alert('Пожалуйста, введите email.');
      }
    });
  });
  

  const newProducts = [
    {
    image: 'https://avatars.mds.yandex.net/i?id=04477659d9b3a2138a6b1ed8d25a1c1e80503693-6301299-images-thumbs&n=13',
    name: 'Wine Bottle',
    price: 155,
    oldPrice: 168,
    },
    {
    image: 'https://avatars.mds.yandex.net/i?id=2a0000017a0cc27f9b02cf4c0befea6ad2b4-4120592-images-thumbs&n=13;',
    name: 'Santa Bag',
    price: 155,
    oldPrice: 168,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://avatars.mds.yandex.net/i?id=6128838c2433ab56da4b5ba9afefaedfb27cfc51-12538948-images-thumbs&n=13',
    name: 'Foot Golves',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://avatars.mds.yandex.net/i?id=7770bf99085e593bcd861c8d045daf708082d9c4-12719024-images-thumbs&n=13',
    name: 'Door dec',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://avatars.mds.yandex.net/i?id=4e21576ce8868fa4ae8b7659a0470cb95759421c-9601198-images-thumbs&n=13',
    name: 'Tree candle',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://thumbs.dreamstime.com/b/vector-shovel-pile-snow-isolated-white-background-vector-shovel-pile-snow-isolated-white-background-134549196.jpg',
    name: 'shovel',
    price: 120,
    oldPrice: 138,
    },
    {
    image: '',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    ];
    
    const featured = [
    {
    image: 'https://cdn.media.amplience.net/i/partycity/178012?$large$&fmt=auto&qlt=default&#39;',
    name: 'FEATURED',
    price: 155,
    oldPrice: 168,
    },
    {
    image: 'https://cdn.media.amplience.net/i/partycity/178012?$large$&fmt=auto&qlt=default&#39;',
    name: 'Santa Bag',
    price: 155,
    oldPrice: 168,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    ];
    
    const best = [
    {
    image: 'https://cdn.media.amplience.net/i/partycity/178012?$large$&fmt=auto&qlt=default&#39;',
    name: 'BEST',
    price: 155,
    oldPrice: 168,
    },
    {
    image: 'https://cdn.media.amplience.net/i/partycity/178012?$large$&fmt=auto&qlt=default&#39;',
    name: 'Santa Bag',
    price: 155,
    oldPrice: 168,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39;',
    name: 'Santa Cap',
    price: 120,
    oldPrice: 138,
    },
    ];
    
    let data = best;
    
    const newProd = document.getElementById('new');
    const feat = document.getElementById('feat');
    const bestProd = document.getElementById('best');
    
    newProd.addEventListener('click', () => {
    renderCards(newProducts);
    });
    
    // feat.addEventListener('click', () => {
    // renderCards(featured);
    // });
    
    // bestProd.addEventListener('click', () => {
    // renderCards(best);
    // });
    
    const cardsContainer = document.getElementById('cards-container');
    
    function renderCards(data) {
    cardsContainer.innerHTML = '';
    data.forEach((item) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardName = document.createElement('h2');
    const price = document.createElement('span');
    const oldPrice = document.createElement('span');
    
    card.classList.add('card');
    
    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(price);
    card.appendChild(oldPrice);
    cardsContainer.appendChild(card);
    
    cardImage.src = item.image;
    cardName.textContent = item.name;
    price.textContent = item.price + ' $';
    oldPrice.textContent = item.oldPrice + ' $';
    });
    }

    document.addEventListener('DOMContentLoaded', () => {
      // Установите конечную дату
      const deadline = new Date('2024-12-31T23:59:59');
      
      // Найдите элементы DOM
      const elDays = document.querySelector('.timer__days');
      const elHours = document.querySelector('.timer__hours');
      const elMinutes = document.querySelector('.timer__minutes');
      const elSeconds = document.querySelector('.timer__seconds');
      
      // Функция склонения числительных
      const declensionNum = (num, words) => {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
      };
    
      // Функция обновления таймера
      const updateTimer = () => {
    
        const now = new Date();
        const diff = Math.max(0, deadline - now);
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
    
        elDays.textContent = String(days).padStart(2, '0');
        elHours.textContent = String(hours).padStart(2, '0');
        elMinutes.textContent = String(minutes).padStart(2, '0');
        elSeconds.textContent = String(seconds).padStart(2, '0');
    
        elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    
        if (diff === 0) {
          clearInterval(timerId);
        }
      };
    
      // Запустите таймер
      updateTimer();
      const timerId = setInterval(updateTimer, 1000);
    });
    

    document.addEventListener("DOMContentLoaded", function () {
      const backToTop = document.getElementById("back-to-top");
     
      window.addEventListener("scroll", function () {
        if (window.pageYOffset && 300) {
          backToTop.style.display = "block";
        }else {
          backToTop.style.display = "none";
        }
      });

      backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');



const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// setInterval(animate, 15);
animate()

const roulette = document.getElementById('roulette');
let currentIndex = 0;
const totalImages = roulette.children.length;

function spinRoulette() {
    currentIndex = Math.floor(Math.random() * totalImages);
    const offset = -currentIndex * 100;
    roulette.style.transform = `translateX(${offset}%)`;
}
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() !== '') {
        const task = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteButton = document.createElement('button');

        task.classList.add('task');
    
        taskName.textContent = taskInput.value;
        deleteButton.textContent = 'Oshiru';
    
        task.appendChild(taskName);
        task.appendChild(deleteButton);

        task.addEventListener('dblclick', () => {
            const changeName = document.createElement('input');
            changeName.placeholder = 'Tapsyrma atyn ozgert';

            task.replaceChild(changeName, taskName);

            changeName.addEventListener('blur', () => {
                task.textContent = changeName.value;

                task.replaceChild(taskName, changeName);
            });
        });

        taskList.appendChild(task);
        taskInput.value = '';
    
        deleteButton.addEventListener('click', () => {
            task.remove();
        })
    }    
   
});

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();

    const search = document.getElementById('search');

    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        if (!task.textContent.includes(search.value) ){
            task.style.display = 'none';
        }else {
            task.style.display = 'flex';
        }
    });
});