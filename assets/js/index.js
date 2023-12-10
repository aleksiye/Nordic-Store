// DATA SECTION (json is taught on Web Programming 1)
// Not using it simplifes the project and reduces the time required to make it. Less JSON api calls means earlier completion and less debugging

const storeItems = [
    {id:"0", name: "Blue Mug with a Saucer",        price: 39.99,  category:"personal",  img: "mug-saucer"          },
    {id:"1", name: "Decorative Soviet Camera Lens", price: 91.12,  category:"decour",    img: "camera-lens"         },
    {id:"2", name: "Minimalist Molded Armchair",    price: 499.00, category:"furniture", img: "chair-minimalist",   },
    {id:"3", name: "Antique Typewriter",            price: 199.00, category:"decour",    img: "typewriter-antique"  },
    {id:"4", name: "Steel Cocktail Shaker",         price: 12.99,  category:"personal",  img: "cup-steel"           },
    {id:"5", name: "Coffee Mug with Wooden Base",   price: 19.99,  category:"personal",  img: "mug-coffee"          },
    {id:"6", name: "Jade Spinner",                  price: 75.99,  category:"decour",    img: "spinner-gyro"        },
    {id:"7", name: "Glass Dice",                    price: 9.99,   category:"misc",      img: "dice"                },
];

var numberOfItemsInCart = 0;

function printStoreData(data){
    const store = document.getElementById("store");
    let html="";
    for(item of data){
        html += `<div id="product-${item.id}" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" data-category="${item.category}" data-price="${item.price}">
        <button id="product-wrapper-${item.id}" class="product-wrapper relative" type="button">
        <div id="card-banner-${item.id}" class="hidden relative w-{0.5} flex justify-center left-{0.5} top-5 z-10 h-0"><p class="text-center">Add to cart</p></div>
        <img class="hover:grow hover:shadow-lg" src="./assets/img/${item.img}.avif" data-purchaseable="true">
        </button>
        <div class="pt-3 flex items-center justify-between">
            <p class="">${item.name}</p>
            <button type="button" id="like-button-${item.id}" data-is-alternate="false"><svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
        </svg></button>
        </div>
        <p class="relative pt-1 text-gray-900">${item.price}€ <a id="view-product-${item.id}" class="absolute right-0 bottom-0 text-sm inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="./product.html">view product</a> </p>
    </div>`;
    }
    store.insertAdjacentHTML("beforeend",html);
}
function attachLikeEvent(data){
    for(item of data){
        $(`#like-button-${item.id}`).on("click",function (){
            if(!$(this).data("is-alternate")){
                $(this).html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          `);
          $(this).data("is-alternate", true);
          //Call "like" state change handler here, probably log it into cookies or db
            }
            else{
                $(this).html(`<svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>`);
            $(this).data("is-alternate", false);
            //Call "like" state change handler here, probably log it into cookies or db
            }
        })
    }
}
function viewProductHandler(event){
    event.preventDefault();
    localStorage.setItem("storeItem", JSON.stringify(storeItems[this.id.match(/\d+/)]));
    window.open("../../product.html","_self");

}
function attachViewProductEvent(data){
    for(item of data){
        const element = document.getElementById(`view-product-${item.id}`);
        element.addEventListener('click',viewProductHandler);
    }
}

function increaseTotal(ammount){
    let priceLocation = document.getElementById("price-sum");
    let priceSumValue = parseFloat(priceLocation.textContent.match(/\d+[.]\d\d/));
    priceSumValue += ammount;
    priceLocation.textContent = String(parseFloat(priceSumValue).toFixed(2))+"€";
}
function decreaseTotal(ammount){
    let priceLocation = document.getElementById("price-sum");
    let priceSumValue = +priceLocation.textContent.match(/\d+[.]\d\d/);
    priceSumValue -= ammount;
    priceLocation.textContent = String(parseFloat(priceSumValue).toFixed(2))+"€";
}


function increaseQuantity(){
    let element = this.previousSibling;
    let value = +element.textContent.match(/\d+/);
    value++;
    element.textContent = "Qty " + value;
    increaseTotal($(this).data("price"));
}
function decreaseQuantity(){
    let element = this.nextSibling;
    let value = +element.textContent.match(/\d+/);
    if(value > 1){
        value--;
        element.textContent = "Qty " + value;
        decreaseTotal($(this).data("price"));
    }
}
function successfullyRemoved(id){
    $(`#card-banner-${id}`).text("Add to cart");
    $(`#card-banner-${id}`).removeClass(["text-green-500", "font-semibold", "underline"]);
    numberOfItemsInCart--
    if(numberOfItemsInCart == 0){
        toggleCartPing();
    }
}
function removeItem(callingElement){
    let id = callingElement.id.match(/\d+/);
    const elementToRemove = document.getElementById(`cart-product-${id}`)
    const quantityOfElement = document.getElementById(`cart-item-${id}-quantity`).textContent.match(/\d+/);
    decreaseTotal($(callingElement).data("price") * quantityOfElement);
    elementToRemove.remove();
    successfullyRemoved(id)
}
function toggleCartPing(){
    const cartPing = document.getElementById("cart-ping");
    if(!cartPing){
        document.getElementById("cart-toggle").insertAdjacentHTML("afterbegin",`<span id="cart-ping" class="absolute -top-0.5 -right-1 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>`);
    }
    else{
        cartPing.remove();
    }

}
function successfullyAdded(id){
    $(`#card-banner-${id}`).text("Successfully added to cart");
    $(`#card-banner-${id}`).addClass(["text-green-500", "font-semibold", "underline"]);
    if(numberOfItemsInCart == 0){
        toggleCartPing();
    }
    numberOfItemsInCart++
}
function addToCart(id){
    item = storeItems[id];
    if(!document.getElementById(`cart-product-${id}`)){
    document.getElementById("cart-content").insertAdjacentHTML("beforeend",`
    <li id="cart-product-${item.id}"class="flex py-6">
    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src="./assets/img/${item.img}.avif" alt="${item.name}" class="h-full w-full object-cover object-center">
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">${item.name}</a>
          </h3>
          <p class="ml-4">${item.price}€</p>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
      <button type="button" id="decrease-item-${item.id}" data-price="${item.price}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg></button><p id="cart-item-${item.id}-quantity" class="text-gray-500">Qty 1</p><button type="button" id="increase-item-${item.id}" data-price="${item.price}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>                                          
  </button>
        <div class="flex">
          <button type="button" id="remove-item-${item.id}" data-price="${item.price}" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
        </div>
      </div>
    </div>
  </li>`);
    increaseTotal(item.price);
    $(`#increase-item-${item.id}`).on("click",increaseQuantity);
    $(`#decrease-item-${item.id}`).on("click",decreaseQuantity);
    $(`#remove-item-${item.id}`).on("click",function(){
        removeItem(this);
    });
    successfullyAdded(item.id);
    }
}
var passwordOK = false;
var emailOK = false;
function isBothTrue(){
    if(emailOK && passwordOK){
        const login = document.getElementById("login")
        login.removeAttribute("disabled");
        login.classList.remove("bg-blue-500");
        login.classList.add("bg-blue-700")
    }
    return false;
}

function validatePassword(element){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[`!@#$%^&*()-=_+\[\]\{\}\\|,.<>\/?]).{8,255}$/;
    const noJSRegex = /\b(?:eval|alert|prompt|confirm|setTimeout|setInterval|XMLHttpRequest|document\.write)\b/g;
    const noSqlRegex = /\b(?:SELECT|INSERT|UPDATE|DELETE|DROP|UNION|CREATE|ALTER|EXEC|INTO|FROM|WHERE)\b/gi;
    let isPassword = passwordRegex.test(element.value);
    let isSql = noSqlRegex.test(element.value);
    let isJS = noJSRegex.test(element.value);
    const passwordInputLabel = element.previousElementSibling;
    if(isPassword && !isSql && !isJS){
        passwordInputLabel.textContent = "Your Password is valid.";
        passwordInputLabel.classList.remove("text-gray-900");
        passwordInputLabel.classList.remove("text-red-500");
        passwordInputLabel.classList.add("text-green-500");
        isBothTrue();
        return true;
    }
    else if (!isPassword){
        passwordInputLabel.textContent = "Your Password must contain at least one small letter, one capital letter, one number and one special character";
        passwordInputLabel.classList.remove("text-gray-900");
        passwordInputLabel.classList.remove("text-green-500");
        passwordInputLabel.classList.add("text-red-500");
        return false;
    }
    else if (isSql){
        passwordInputLabel.textContent = "Your Password musut not contain SQL.";
        passwordInputLabel.classList.remove("text-gray-900");
        passwordInputLabel.classList.remove("text-green-500");
        passwordInputLabel.classList.add("text-red-500");
        return false;
    }
    else if (isJS){
        passwordInputLabel.textContent = "Your Password musut not contain JavaScript.";
        passwordInputLabel.classList.remove("text-gray-900");
        passwordInputLabel.classList.remove("text-green-500");
        passwordInputLabel.classList.add("text-red-500");
        return false;
    }
}

function validateEmail(element){
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const noJSRegex = /\b(?:eval|alert|prompt|confirm|setTimeout|setInterval|XMLHttpRequest|document\.write)\b/g;
    const noSqlRegex = /\b(?:SELECT|INSERT|UPDATE|DELETE|DROP|UNION|CREATE|ALTER|EXEC|INTO|FROM|WHERE)\b/gi;
    let isEmail = emailRegex.test(element.value);
    let isSql = noSqlRegex.test(element.value);
    let isJS = noJSRegex.test(element.value);
    const emailInputLabel = element.previousElementSibling;
    console.log(emailInputLabel);
    if(isEmail && !isSql && !isJS){
        emailInputLabel.textContent = "Your Email is valid.";
        emailInputLabel.classList.remove("text-gray-900");
        emailInputLabel.classList.remove("text-red-500");
        emailInputLabel.classList.add("text-green-500");
        isBothTrue();
        return true;
    }
    else if (!isEmail){
        emailInputLabel.textContent = "Your Email is not a valid email address.";
        emailInputLabel.classList.remove("text-gray-900");
        emailInputLabel.classList.remove("text-green-500");
        emailInputLabel.classList.add("text-red-500");
        return false;
    }
    else if (isSql){
        emailInputLabel.textContent = "Your Email musut not contain SQL.";
        emailInputLabel.classList.remove("text-gray-900");
        emailInputLabel.classList.add("text-red-500");
        return false;
    }
    else if (isJS){
        emailInputLabel.textContent = "Your Email musut not contain JavaScript.";
        emailInputLabel.classList.remove("text-gray-900");
        emailInputLabel.classList.remove("text-green-500");
        emailInputLabel.classList.add("text-red-500");
        return false;
    }
}
var usernameOK = false;
function validateUsername(element){
    const usernameRegex = /^[a-zA-Z0-9_]{3,255}$/g
    const noJSRegex = /\b(?:eval|alert|prompt|confirm|setTimeout|setInterval|XMLHttpRequest|document\.write)\b/g;
    const noSqlRegex = /\b(?:SELECT|INSERT|UPDATE|DELETE|DROP|UNION|CREATE|ALTER|EXEC|INTO|FROM|WHERE)\b/gi;
    let isUsername = usernameRegex.test(element.value);
    let isSql = noSqlRegex.test(element.value);
    let isJS = noJSRegex.test(element.value);
    const usernameInputLabel = element.previousElementSibling;
    if (isUsername && !isSql && !isJS){
        usernameInputLabel.textContent = "Your username is valid.";
        usernameInputLabel.classList.remove("text-gray-900");
        usernameInputLabel.classList.remove("text-red-500");
        usernameInputLabel.classList.add("text-green-500");
        isAllTrue();
        return true;
    }
    else if (!isUsername){
        usernameInputLabel.textContent = "Your username can only contain aplhanumeric characters and underscore ";
        usernameInputLabel.classList.remove("text-gray-900");
        usernameInputLabel.classList.remove("text-green-500");
        usernameInputLabel.classList.add("text-red-500");
        return false;
    }
    else if (isSql){
        usernameInputLabel.textContent = "Your username musut not contain SQL.";
        usernameInputLabel.classList.remove("text-gray-900");
        usernameInputLabel.classList.add("text-red-500");
        return false;
    }
    else if (isJS){
        usernameInputLabel.textContent = "Your usuername musut not contain JavaScript.";
        usernameInputLabel.classList.remove("text-gray-900");
        usernameInputLabel.classList.remove("text-green-500");
        usernameInputLabel.classList.add("text-red-500");
        return false;
    }
}

function togglePasswordVisibility(){
    const passField = document.getElementById("password");
    this.checked ? passField.setAttribute("type","text") : passField.setAttribute("type","password")
}

function storeItemMouseInHandler (){
    $(`#card-banner-${this.id.match(/\d+/)}`).fadeIn(200);
}
function storeItemMouseOutHandler (){
    $(`#card-banner-${this.id.match(/\d+/)}`).fadeOut(100);
}

window.addEventListener('load',function(){
    printStoreData(storeItems);
    attachLikeEvent(storeItems);
    attachViewProductEvent(storeItems);
    $(`.product-wrapper`).on( "mouseenter", storeItemMouseInHandler).on( "mouseleave", storeItemMouseOutHandler);
    $('.product-wrapper').on("click",function(){
        addToCart(this.id.match(/\d+/));
    })
    $(".cart-toggle").on("click", function(){
        $('#cart-wrapper').toggleClass("opacity-0 opacity-100 ");
        $('#cart-wrapper').children().toggleClass("end-full inset-0");
        $($('#cart-wrapper').children()[1]).children().toggleClass("end-full inset-0");
        $('#cart').toggleClass("translate-x-full translate-x-0");
    });
    $("#login-toggle").on("click", function(){
        $("#login-modal").slideToggle(300);
    })
    $('#close-login').on('click', function(){
        $("#login-modal").slideToggle(300);
    })
    this.document.querySelector("#email").addEventListener('change',function(){emailOK=validateEmail(this)});
    this.document.querySelector("#password").addEventListener('change',function(){passwordOK=validatePassword(this)});
    this.document.querySelector("#show-password").addEventListener('change', togglePasswordVisibility);
    $("#register-toggle").on('click', function(event){
        event.preventDefault();
        document.getElementById("login-toggle").click();
        $('#register-modal').slideToggle(300);
    })
    $('#close-register').on("click", function(){
        $('#register-modal').slideToggle(300);
    })
    $("#two-in-one").on("click", function(e){
        e.preventDefault();
        window.open("./assets/docs/dokumentacija.md");
        window.open("./assets/docs/dokumentacija.pdf");
    })
})