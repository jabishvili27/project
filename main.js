const jew = document.querySelector(".jew");
const elec = document.querySelector(".elec");
const men = document.querySelector(".men");
const women = document.querySelector(".women");
var dataj;
async function searchcat() {
    let data = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
    let dataa = await data.json();
    console.log(dataa[0]);

    jew.innerHTML = "";
    elec.innerHTML = "";
    men.innerHTML = "";
    women.innerHTML = "";
    dataj = dataa;

    dataa.map(item =>
        jew.innerHTML +=
        ` <div class='jew1'>
        <img class="jewpi" src="${item.image}">
        <div>${item.title}</div>
        <div>${item.category}</div>
        <div>${item.price}$</div>
        
        <button type="button" class="btnall" onclick="addcat(${item.id})">add to cart</button>
        
       
    </div>  `)


}


async function searchelec() {
    let data = await fetch(`https://fakestoreapi.com/products/category/electronics`)
    let dataa = await data.json();
    console.log(dataa[0]);
    jew.innerHTML = "";
    elec.innerHTML = "";
    men.innerHTML = "";
    women.innerHTML = "";
    dataj = dataa;


    dataa.map(item =>
        elec.innerHTML +=
        ` <div class='elec1'>
        <img class="elecpi" src="${item.image}">
        <div>${item.title}</div>
        <div>${item.category}</div>
        <div>${item.price}$</div>
        
        <button type="button" class="btnall"  onclick="addcat(${item.id})">add to cart</button>
        
       
    </div>  `)

}


async function searchmen() {
    let data = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
    let dataa = await data.json();
    console.log(dataa[0]);
    jew.innerHTML = "";
    elec.innerHTML = "";
    men.innerHTML = "";
    women.innerHTML = "";
    dataj = dataa;


    dataa.map(item =>
        men.innerHTML +=
        ` <div class='men1'>
        <img class="menpi" src="${item.image}">
        <div>${item.title}</div>
        <div>${item.category}</div>
        <div>${item.price}$</div>
        
        <button type="button" class="btnall"  onclick="addcat(${item.id})">add to cart</button>
        
       
    </div>  `)

}


async function searchwom() {
    let data = await fetch(`https://fakestoreapi.com/products/category/women's clothing`)
    let dataa = await data.json();
    console.log(dataa[0]);
    jew.innerHTML = "";
    elec.innerHTML = "";
    men.innerHTML = "";
    women.innerHTML = "";
    dataj = dataa;


    dataa.map(item =>
        women.innerHTML +=
        ` <div class='women1'>
        <img class="womenpi" src="${item.image}">
        <div>${item.title}</div>
        <div>${item.category}</div>
        <div>${item.price}$</div>
        
        <button type="button" class="btnall"  onclick="addcat(${item.id})">add to cart</button>
        
       
    </div>  `)

}
const icon2 = document.querySelector(".icon2");
const zero = document.querySelector(".zero");

let opena = false;

function openA() {

    opena = !opena;
    const popup = document.querySelector(".zindex0")
    if (opena) {
        popup.style.display = "flex"
    } else {
        popup.style.display = "none"
    }
    drawcart();

}

function openb() {

    opena = !opena;
    const popup = document.querySelector(".zindex0")
    if (opena) {
        popup.style.display = "flex"
    } else {
        popup.style.display = "none"
    }
    drawcart();

}

//------add to cart-----

const addscr = document.querySelector(".addscr");

const catbtn1 = document.querySelector(".catbtn1");
const catbtn2 = document.querySelector(".catbtn2");

function addcat(num) {

    for (var i = 0; i < dataj.length; i++) {
        const arr = JSON.parse(localStorage.getItem("data")) || [];
        if (dataj[i].id == num && arr.filter(item => item.id == num).length == 0) {
            const obj = {
                image: dataj[i].image,
                price: dataj[i].price,
                id: num,
                category: dataj[i].category,
                many: 1,

            }
            arr.push(obj);

            localStorage.setItem("data", JSON.stringify(arr));
        }


    }
    drawcart();
}

function drawcart() {

    const arr = JSON.parse(localStorage.getItem("data")) || [];
    const addscr = document.querySelector(".addscr");
    addscr.innerHTML = "";
    arr.map(item => {
        addscr.innerHTML += `
        <div class='addcat1'>
        <img class="addcatpi" src="${item.image}">
        
        <div>${item.category}</div>
        <div>${item.price}$</div>
        <button type="button" class="catbtn1" onclick="plus(${item.id})">+</button>
        <div class="carttxt" >${item.many}</div>
         
        <button type="button" class="catbtn2" onclick="minus(${item.id})">-</button>
        
        <button type="button" class="remove1" onclick="remove1(${item.id})">remove</button>
      </div>
      
        `
    })
    total();

}

function plus(id) {
    const arr = JSON.parse(localStorage.getItem("data")) || [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr[i].many += 1;

        }
    }
    localStorage.setItem("data", JSON.stringify(arr));

    drawcart();



}

function minus(id) {
    const arr = JSON.parse(localStorage.getItem("data")) || [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == id && arr[i].many > 1) {
            arr[i].many -= 1;


        }
    }
    localStorage.setItem("data", JSON.stringify(arr));

    drawcart();



}

function total() {
    const total = document.querySelector(".total");
    const arr = JSON.parse(localStorage.getItem("data")) || [];
    let tot = 0;
    for (var i = 0; i < arr.length; i++) {
        tot += arr[i].many * arr[i].price
    }
    total.innerHTML = "total:    " + tot + "  $";



}

function removeall() {

    localStorage.clear();
    drawcart();

}

function remove1(id) {
    let arr = JSON.parse(localStorage.getItem("data")) || [];
    arr = arr.filter(function (ele) {
        return ele.id != id;
    });
    console.log(arr)
    localStorage.setItem("data", JSON.stringify(arr));

    drawcart();

}