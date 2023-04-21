import { DataProducts } from "./data.js";
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
console.log(DataProducts);
// =================================== Render Start ========================================
const renderMnCart = (data) => {
  let cartList = $(".inner-cart-items");
  cartList.innerHTML = "";
  //   cartList.innerHTML = "";
  let arr = data
    .map((elm) => {
      return `
            <div class="inner-items">
            <div>
                <a href="thongtinsanpham.html?id=${elm.Id}">
                    <img src="${elm.pd_image[0]}" alt="">
                </a>
            </div>
            <div>
                <h4>${elm.name}
                    <a href="thongtinsanpham.html?id=${elm.Id}"></a>
                </h4>
                <strong>${elm.price}</strong> VNĐ
            </div>
            <div>
                <i data-id="${elm.Id}" class="fa-solid fa-trash remove-item"></i>
            </div>
        </div>
    `;
    })
    .join(" ");
  cartList.innerHTML = arr;
};
// =================================== Render End ========================================

// =============================
const renderAmount = () => {
  let span = $(".navbar-right .cart span");
  span.innerHTML = "";
  let sum = 0;
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    if (key.length == 3 && key.startsWith("0")) {
      sum++;
    }
  }
  span.innerHTML = sum;
};
renderAmount();
// =============================

const addLocalStorage = (id) => {
  let data = DataProducts.filter((elm) => {
    if (elm.Id == id) {
      return elm;
    }
  });
  let dataOb = data[0];
  localStorage.setItem(data[0].Id, JSON.stringify(dataOb));
};

const getDataLc = () => {
  let arr = [];
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    if (key.length == 3 && key.startsWith("0")) {
      arr.push(JSON.parse(localStorage.getItem(key)));
    }
  }
  console.log(arr);
  return arr;
};

// =================
const initLS = () => {
  renderMnCart(getDataLc());
};
initLS();
// ==================

let btn = $("body");
btn.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-sm")) {
    addLocalStorage(e.target.dataset.id);
    renderMnCart(getDataLc());
    renderAmount();
  }
});

// ==================== Remove Cart Item Start =====================================
const removeCartItem = () => {
  let remove = $(".inner-cart-items");
  remove.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      localStorage.removeItem(e.target.dataset.id);
      renderMnCart(getDataLc());
      renderAmount();
    }
  });
};
removeCartItem();
// ==================== Remove Cart Item End =====================================
