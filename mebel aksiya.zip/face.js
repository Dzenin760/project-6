let card1row = document.querySelector('.card1row')
window.addEventListener('load', () => {
  getkitchens();
})


function getkitchens() {
  card1row.innerHTML = "";
  fetch("https://652553ed67cfb1e59ce71adc.mockapi.io/hallways", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => innerkitchens(data))
    .catch((error) => console.log(error));
}

function innerkitchens(data) {
  data.forEach((item) => {
    card1row.innerHTML += `
            <div class="card1">     
        <img class="card1-img" src="${item.img}" alt="">
        <h1 class="card1-text1">${item.title}</h1>
        <p class="card1-text2">${item.name}</p>         
        <h1 class="card1-text3">${item.price}</h1>
       <div class="flex">
                <div class="razmer2">
                    <h1 class="razmer-2">ширина</h1>
                    <h1 class="razmer-2">глубина</h1>
                    <h1 class="razmer-2">высота</h1>
                 </div>
                <div class="razmer">
                    <h1 class="razmer-1">${item.width}</h1>
                    <h1 class="razmer-1">${item.height}</h1>
                    <h1 class="razmer-1">${item.depth}</h1>
                    
                 </div>
            </div>
            <button class="btn1" onclick="removekitchens(${item.id})">
        <span class="button_top"> Dalete
        </span>
    </button>
    </div>

     <div class="card1">     
        <img class="card1-img" src="${item.img}" alt="">
        <h1 class="card1-text1">${item.title}</h1>
        <p class="card1-text2">${item.name}</p>         
        <h1 class="card1-text3">${item.price}</h1>
       <div class="flex">
                <div class="razmer2">
                    <h1 class="razmer-2">ширина</h1>
                    <h1 class="razmer-2">глубина</h1>
                    <h1 class="razmer-2">высота</h1>
                 </div>
                <div class="razmer">
                    <h1 class="razmer-1">${item.width}</h1>
                    <h1 class="razmer-1">${item.height}</h1>
                    <h1 class="razmer-1">${item.depth}</h1>
                    
                 </div>
            </div>
            <button class="btn1" onclick="removekitchens(${item.id})">
        <span class="button_top"> Dalete
        </span>
    </button>
    </div>

      <div class="card1">     
        <img class="card1-img" src="${item.img}" alt="">
        <h1 class="card1-text1">${item.title}</h1>
        <p class="card1-text2">${item.name}</p>         
        <h1 class="card1-text3">${item.price}</h1>
       <div class="flex">
                <div class="razmer2">
                    <h1 class="razmer-2">ширина</h1>
                    <h1 class="razmer-2">глубина</h1>
                    <h1 class="razmer-2">высота</h1>
                 </div>
                <div class="razmer">
                    <h1 class="razmer-1">${item.width}</h1>
                    <h1 class="razmer-1">${item.height}</h1>
                    <h1 class="razmer-1">${item.depth}</h1>
                    
                 </div>
            </div>
            <button class="btn1" onclick="removekitchens(${item.id})">
        <span class="button_top"> Dalete
        </span>
    </button>
    </div>

      <div class="card1">     
        <img class="card1-img" src="${item.img}" alt="">
        <h1 class="card1-text1">${item.title}</h1>
        <p class="card1-text2">${item.name}</p>         
        <h1 class="card1-text3">${item.price}</h1>
       <div class="flex">
                <div class="razmer2">
                    <h1 class="razmer-2">ширина</h1>
                    <h1 class="razmer-2">глубина</h1>
                    <h1 class="razmer-2">высота</h1>
                 </div>
                <div class="razmer">
                    <h1 class="razmer-1">${item.width}</h1>
                    <h1 class="razmer-1">${item.height}</h1>
                    <h1 class="razmer-1">${item.depth}</h1>
                    
                 </div>
            </div>
            <button class="btn1" onclick="removekitchens(${item.id})">
        <span class="button_top"> Dalete
        </span>
    </button>
    </div>
    `;
  });
}





function removekitchens(id) {
  fetch(`https://652553ed67cfb1e59ce71adc.mockapi.io/hallways/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(res => res.json())
    .then(data => getkitchens())
    .catch((error) => console.log(error));
}

