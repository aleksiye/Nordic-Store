// DATA SECTION (json is taught on Web Programming 1)
// Not using it simplifes the project and reduces the time required to make it. Less JSON api calls means earlier completion and less debugging

const storeItems = [
    {id:"0", name: "Blue Mug with a Saucer",        price: 39.99,  category:"personal",  imgSm: "mug-saucer.avif"},
    {id:"1", name: "Decorative Soviet Camera Lens", price: 91.12,  category:"decour",    imgSm: "camera-lens-old.avif"},
    {id:"2", name: "Minimalist Molded Armchair",    price: 499.00, category:"furniture", imgSm: "chair-minimalist.avif"},
    {id:"3", name: "Antique Typewriter",            price: 199.00, category:"decour",    imgSm: "typewriter-antique.avif"},
    {id:"4", name: "Steel Cocktail Shaker",         price: 12.99,  category:"personal",  imgSm: "cup-steel.avif"},
    {id:"5", name: "Coffee Mug with Wooden Base",   price: 19.99,  category:"personal",  imgSm: "mug-coffee.avif"},
    {id:"6", name: "Jade Spinner",                  price: 75.99,  category:"decour",    imgSm: "spinner-gyro.avif"},
    {id:"7", name: "Glass Dice",                    price: 9.99,   category:"misc",      imgSm: "dice.avif"},
];
function printStoreData(data){
    const store = document.getElementById("store");
    let html="";
    for(item of data){
        html += `<div id="product-${item.id}" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" data-category="${item.category}" data-price="${item.price}">
        <img class="hover:grow hover:shadow-lg" src="./assets/img/${item.imgSm}">
        <div class="pt-3 flex items-center justify-between">
            <p class="">${item.name}</p>
            <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
        </div>
        <p class="pt-1 text-gray-900">${item.price}€</p>
    </div>`;
    }
    store.insertAdjacentHTML("beforeend",html);
}

window.addEventListener('load',function(){
    console.log(storeItems)
    printStoreData(storeItems);
})