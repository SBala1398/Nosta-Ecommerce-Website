import { products } from "./product.js";


var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.querySelector(".navbar-menu-icon")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})
document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

var container = document.querySelector(".products");
products.forEach((product) => {
    var createItem = document.createElement("div");
    createItem.classList.add("product");
    createItem.innerHTML = `
        <img style="width: 20vw;" src="img/${product.src}">
        <h1>${product.name}</h1>
        <p>₹${product.price}</p>
        <div class="tags" style="visibility:hidden;">${product.tags.join(', ')}</div>`;
    container.append(createItem);
});



var filterList =[];
var tags = document.querySelectorAll("input[name='tags']");
console.log(tags);

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }
    })
})

var filterList = [];
var tags = document.querySelectorAll("input[name='tags']"); // Use querySelectorAll to get all elements with the name 'tags'
console.log(tags);

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value);
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
    }
    update();
  });
});

function update() {
  var productList = document.querySelectorAll(".product");
  productList.forEach((product) => {
    var check = false;
    var temp = product.querySelector(".tags").innerHTML; // Use .tags instead of tags
    const tempFilterArray = temp.split(', ');

    filterList.forEach((j) => {
      tempFilterArray.forEach((i) => {
        if (j === i.trim()) { // Trim whitespaces around tag values
          check = true;
        }
      });
    });

    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}