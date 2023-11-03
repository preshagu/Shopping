const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./airblack.png",
            },
            {
                code: "white",
                img: "./airwhite.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./jordanblack.png",
            },
            {
                code: "blue",
                img: "./jordanblue.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 99,
        colors: [
            {
                code: "tomato",
                img: "./blazered.png",
            },
            {
                code: "yellow",
                img: "./blazeryellow.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 110,
        colors: [
            {
                code: "lightblue",
                img: "./crateblue.png",
            },
            {
                code: "white",
                img: "./cratewhite.png",
            }
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 97,
        colors: [
            {
                code: "gray",
                img: "./hippegray.png"
            },
            {
                code: "lightblue",
                img: "./hippieblue.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=> {
    item.addEventListener("click",()=> {
        // change the current slide 
        wrapper.style.transform=`translateX(${-100* index}vw)`;

        // change the choosen product
        choosenProduct = products[index];

        // change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assign new color
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white";
            size.style.color= "black";  
        });
        size.style.backgroundColor= "black";
        size.style.color= "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})