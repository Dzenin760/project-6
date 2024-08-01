let .col = document.querySelector('.col')
let .box = document.querySelector('.box')



const kitchens = [
  {
    "name": "Барные стулья",
    "title": "Валенсия Beige",
    "price": "2 300",
    "active": false,
    "description": "description 1",
    "width": "43",
    "height": "50",
    "depth": "23",
    "img": "https://archidea.com.ua/i/10/74/62/6/1074626/image_main/42b44127a9150ab630ed393125e1d333-quality_80Xresize_crop_1Xallow_enlarge_0Xw_780Xh_478.jpg",
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
    "img": "https://www.prom.uz/_ipx/f_webp/https://devel.prom.uz/upload/reduced/products/2023/4/11/2/239.jpg",
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
    "img": "https://belokot.info/wp-content/uploads/amanta-kuhnya-mebel-1600x900-1.jpg",
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
    "img": "https://realmebel.pro/upload/iblock/c60/c601fd8a907c1c58eeff1b564c6f530d.jpg",
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
    "img": "https://fullhouse.uz/thumb/2/SlKs4bfef5DtIidBYqq_dQ/r/d/plyusy_i_minusy_akrilovoj_kuhni.jpg",
    "discount": "",
    "saved": false,
    "id": "5",
    "categoryId": "1"
  },
  {
    "name": "Барные стулья",
    "title": "Толикс-2 White Gloss",
    "price": "230",
    "active": true,
    "description": "",
    "width": "45",
    "height": "88",
    "depth": "79",
    "img": "https://st.inmebelstil.ru/8/2318/354/mebel_voronezh_katalog_kuhni1.jpg",
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
    "img": "https://grandmebel.uz/uploads/products/cashe/9fa007e6e9989f7047eac0ea49fd5f22_480_400.jpg",
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
    "img": "https://www.antarescompany.ru/images/tmb/product/kuhni/trend/trend_3200_mdf_arktik-mureno_388_291_crop.jpg",
    "discount": "",
    "saved": false,
    "id": "8",
    "categoryId": "1"
  }
]

kitchens.forEach(item => {
  box.innerHTML += `
    <div class="box">
        <img src="${item.img}" alt="">
        <h1 class="">${item.title}</h1>
        <p class="">${item.name}</p>
        <h1 class="">${item.price}</h1>
    </div>
  `



});