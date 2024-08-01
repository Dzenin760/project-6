let card1 = document.querySelector('.card1-row')
let card2 = document.querySelector('.card2-row')
let card3 = document.querySelector('.card3-row')
let card4 = document.querySelector('.card4-row')

let cols = [
    {
        "name": "Барные стулья",
        "title": "Валенсия Beige",
        "price": "2 300",
        "active": false,
        "description": "description 1",
        "width": "43",
        "height": "50",
        "depth": "23",
        "img": "https://www.mrdoors.ru/upload/resize_cache/webp/iblock/21a/n6wg8eml3h2z8zl48116qg1ma14wl6ws/Lvr200_F1.webp",
        "discount": "",
        "saved": false,
        "id": "1",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Толикс-2 White Gloss",
        "price": "230",
        "active": false,
        "description": "",
        "width": "45",
        "height": "88",
        "depth": "79",
        "img": "https://yanamebel.ru/files/thumbnail/seriya-21-639c5d0d99daf-800x500.jpg",
        "discount": "",
        "saved": false,
        "id": "2",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Валенсия Beige",
        "price": "2 300",
        "active": false,
        "description": "description 1",
        "width": "43",
        "height": "50",
        "depth": "23",
        "img": "https://grandmebel.uz/uploads/products/cashe/39290688fea4153b1cb53dae0f6c0def_480_400.jpg",
        "discount": "",
        "saved": false,
        "id": "3",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Толикс-2 White Gloss",
        "price": "230",
        "active": false,
        "description": "",
        "width": "45",
        "height": "88",
        "depth": "79",
        "img": "https://maxmebel.uz/wp-content/uploads/2020/04/Persona-768x432.jpg",
        "discount": "",
        "saved": false,
        "id": "4",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Валенсия Beige",
        "price": "2 300",
        "active": false,
        "description": "description 1",
        "width": "43",
        "height": "50",
        "depth": "23",
        "img": "https://www.mcstyle.ru/upload/iblock/26a/h5z41wfqko6r2f24ewhzoottq1ylhyc5.jpg",
        "discount": "",
        "saved": false,
        "id": "5",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Толикс-2 White Gloss",
        "price": "230",
        "active": false,
        "description": "",
        "width": "45",
        "height": "88",
        "depth": "79",
        "img": "https://mebel-moskva.ru/upload/iblock/380/380c9d86c6fdda54d0746aec2d9dae4b.jpg",
        "discount": "",
        "saved": false,
        "id": "6",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Валенсия Beige",
        "price": "2 300",
        "active": false,
        "description": "description 1",
        "width": "43",
        "height": "50",
        "depth": "23",
        "img": "https://zovofficial.com/image/cache/catalog/products/korpusnaya-mebel/5-pemont/gostinaya/gostinaja-priv-513x410.jpg",
        "discount": "",
        "saved": false,
        "id": "7",
        "categoryId": "1"
    },
    {
        "name": "Барные стулья",
        "title": "Толикс-2 White Gloss",
        "price": "230",
        "active": false,
        "description": "",
        "width": "45",
        "height": "88",
        "depth": "79",
        "img": "https://arline.ru/upload/iblock/7eb/1g0rmvh0460tedxxraez5prag8o1ey7g.jpg",
        "discount": "",
        "saved": false,
        "id": "8",
        "categoryId": "1"
    }
]

cols.forEach(item => {
    card4.innerHTML += `
    <div class="card1">
                    
       
        <img class="card1-img" src="${item.img}" alt="">
        <h1 class="card1-text1">${item.title}</h1>
        <p class="card1-text2">${item.name}</p>
        <h1 class="card1-text3">${item.price}</h1>
         <button class="btn btn-danger" onclick="removeStudent(${element.id})">Delate</button>
   </div>
   
    
    `

});

function removeStudent(id) {
    fetch(`https://652553ed67cfb1e59ce71adc.mockapi.io/livingrooms/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => getStudents())
        .catch(error => console.log(error))
}