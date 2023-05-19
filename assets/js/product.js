import { DataProducts } from "./modules/cpm.js";
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// =========================== Find URL Start ==================================
const findProduct = () => {
  let arr;
  let urlID = new URLSearchParams(location.search);
  if (!urlID) return;
  for (let x of urlID.values()) {
    arr = DataProducts.find((text) => {
      if (text.Id == x) return text;
    });
  }
  return arr;
};
// =========================== Find URL Start ==================================
const renderTag = (data, className, type) => {
  let listSize = $(`.product-info-right .${className}`);
  let arr = data[`${type}`]
    .map((elm) => {
      return `<span>${elm}</span>`;
    })
    .join(" ");
  listSize.innerHTML = arr;
};

const renderGallery = (data, element) => {
  let listImgs = $(".img-gallary");
  let arr = data.pd_image
    .map((elm, index) => {
      if (index != 0) {
        return `<div>
                 <img src="${elm}" alt="image">
              </div>`;
      }
    })
    .join(" ");
  listImgs.innerHTML += arr;
};
const renderProducts = (datas, data, className, cd1, cd2) => {
  let products = $(`.${className} > .container > .row`);
  let count = 1;
  let arr = datas
    .filter((elm, index) => {
      if (
        elm[`${cd1}`] === data[`${cd1}`] &&
        elm[`${cd2}`] != data[`${cd2}`] &&
        count <= 4
      ) {
        count++;
        return elm;
      }
    })
    .map((elm) => {
      return `
      <div class="col-xl-3 col-bg-3 col-md-4 col-6">
        <div class="shop-products-card">
            <div class="products-card-thumb">
                <img src="${elm.pd_image[0]}" alt="">
            </div>
            <div class="products-card-content">
                <h4 class="provide">${elm.provide}</h4>
                <h5 class="name">${elm.name}</h5>
                <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="price">
                    <strong>${elm.price}</strong>
                    VNĐ
                </span>
                <div class="add-to-cart">
                    <button data-id="${elm.Id}" class="btn btn-sm">Thêm vào giỏ hàng</button>
                </div>
                <a href="thongtinsanpham.html?id=${elm.Id}"></a>
            </div>
          </div>
      </div>
  `;
    })
    .join(" ");
  products.innerHTML += arr;
  if (arr) products.classList.add("active");
};
const renderInfoProduct = () => {
  let data = findProduct();
  console.log(data);
  let productImgs = $(".product-info-page .product-info-left");
  let productContent = $(".product-info-page .product-info-right");
  productImgs.innerHTML = `
    <div>
      <img class="img-top" src="${data.pd_image[0]}" alt="">
    </div>
    <div class="img-gallary">
      <div>
          <img class="active" src="${data.pd_image[0]}" alt="image">
      </div>
      
    </div>
  `;
  renderGallery(data);
  productContent.innerHTML = `
    <h3 class="name">${data.name}</h3>
    <strong class="price">${data.price} <span>VNĐ</span></strong>
    <div class="ratings">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <p class="pd-info">
        ${data.pd_info}
    </p>
    <div class="size">
        <strong>Size:</strong>
        <div class="size-list">
        </div>
    </div>
    <div class="color">
        <strong>Màu sắc:</strong>
        <div class="color-list">
            <span>xanh</span>
            <span>đỏ</span>
            <span>vàng</span>
        </div>
    </div>
    <div class="couter">
        <strong>Số lượng: </strong>
        <div class="couter-product">
            <div class="couter-product-minus">
                <i class="fa-solid fa-minus"></i>
            </div>
            <div>
                <strong data-value="1">1</strong>
            </div>
            <div class="couter-product-plug">
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>

    <div class="btn-list">
        <button data-id="${data.Id}" class="btn btn-sm">Thêm vào giỏ hàng</button>
        <button class="btn btn-m">Mua hàng
          <a href="gio-hang.html"></a>
        </button>
    </div>
  `;
  renderTag(data, "size-list", "size");
  renderTag(data, "color-list", "color");
  renderProducts(DataProducts, data, "products-provide", "provide", "Id");
  renderProducts(DataProducts, data, "products-relate", "type", "provide");
};
renderInfoProduct();

const checkPdNull = () => {
  let productsTitle = $$(".products-margin > .container > .row");
  for (let i = 0; i < productsTitle.length; i++) {
    if (!productsTitle[i].classList.contains("active")) {
      productsTitle[i].innerHTML = `
      <p>Không có sản phẩm
        <i class="fa-solid fa-circle-exclamation"></i>
      </p>
      `;
    }
  }
};
checkPdNull();
// ============================== Tabs content Start ================================
const tabsContent = () => {
  let tabs = $(".tabs-title-top ul");
  let tabsLi = $$(".tabs-title-top ul li");
  let tabActive = $$(".tabs-title-bottom > div");
  for (let i = 0; i < tabsLi.length; i++) {
    tabsLi[i].addEventListener("click", function (e) {
      if (!e.target.classList.contains("active")) {
        tabsLi.forEach((element) => {
          if (element.classList.contains("active")) {
            {
              element.classList.remove("active");
              tabActive.forEach((elm) => {
                if (elm.classList.contains("active"))
                  elm.classList.remove("active");
              });
            }
          }
        });
        tabActive[i].classList.add("active");
        e.target.classList.add("active");
      }
    });
  }
};
tabsContent();
// ============================== Tabs content End ================================
const handleGallary = () => {
  let imgTop = $(".product-info-left .img-top");
  let gallaryImgs = $$(".img-gallary img");
  gallaryImgs.forEach((elm, index) => {
    elm.addEventListener("click", function (e) {
      if (!this.classList.contains("active")) {
        gallaryImgs.forEach((elm) => {
          if (elm.classList.contains("active")) elm.classList.remove("active");
        });
        this.classList.add("active");
        imgTop.src = this.src;
      }
    });
  });
};
handleGallary();

const handleSize = () => {
  let sizeList = $$(".size .size-list span");
  sizeList.forEach((elm) => {
    elm.addEventListener("click", function (e) {
      if (!this.classList.contains("active")) {
        sizeList.forEach((e) => {
          if (e.classList.contains("active")) e.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });
};
handleSize();

const handleColor = () => {
  let colorList = $$(".color .color-list span");
  colorList.forEach((elm) => {
    elm.addEventListener("click", function (e) {
      if (!this.classList.contains("active")) {
        colorList.forEach((e) => {
          if (e.classList.contains("active")) e.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });
};
handleColor();

const couterProduct = () => {
  let decrease = $(".couter-product-minus");
  let increase = $(".couter-product-plug");
  let innerValue = $(".product-info-right .couter .couter-product strong");

  let couter = 1;
  decrease.addEventListener("click", function () {
    if (innerValue.innerHTML == "1") return;
    innerValue.innerHTML = --couter;
    innerValue.dataset.value = couter;
  });
  increase.addEventListener("click", function () {
    innerValue.innerHTML = ++couter;
    innerValue.dataset.value = couter;
  });
};
couterProduct();
