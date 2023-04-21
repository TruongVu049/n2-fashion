import { DataProducts } from "./data.js";
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// ============================ input Range Start ====================================
// const inputRange = () => {
//   let inputMin = $(".range-input .range-min");
//   let inputMax = $(".range-input .range-max");
//   inputMin.addEventListener("input", (event) => {
//     console.log(event.target.value);
//   });
// };
// inputRange();
// ============================ input Range End ====================================

// ========================== Clear ELM Products Start ======================
const clearELMProducts = () => {
  let shop_products_bottom = $(".shop-products-bottom .row");
  shop_products_bottom.innerHTML = "";
};
// ========================== Clear ELM Products End ======================

// ====================== Render Cart Start ==============================
const renderCart = (infoProduct) => {
  let shop_products_bottom = $(".shop-products-bottom .row");
  if (!shop_products_bottom) return;
  for (let cart of infoProduct) {
    shop_products_bottom.innerHTML += `
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="shop-products-card">
            <div class="products-card-thumb">
                <img src="${cart.pd_image[0]}" alt="">
            </div>
            <div class="products-card-content">
                <h4 class="provide">${cart.provide}</h4>
                <h5 class="name">${cart.name}</h5>
                <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="price">
                    <strong>${cart.price}</strong>
                    VNĐ
                </span>
                <div class="add-to-cart">
                    <button data-id="${cart.Id}" class="btn btn-sm">Thêm vào giỏ hàng</button>
                </div>
                <a href="thongtinsanpham.html?id=${cart.Id}"></a>
            </div>
        </div>
    </div>
  `;
  }
};
// ====================== Render Cart End ==============================

// ========================== Check Page Render Start =======================
const checkPageRender = () => {
  const urlParams = location.pathname;
  if (urlParams.includes("sanpham-nam.html")) {
    return "male";
  } else if (urlParams.includes("sanpham-nu.html")) {
    return "female";
  } else {
    return "all";
  }
};
// ========================== Check Page Render End =======================

// ========================== Get Data Type Products Start ============================
const getDataTypeProducts = () => {
  const dataCart = DataProducts.slice();
  let typePage = checkPageRender();
  console.log(typePage);
  if (typePage == "female") {
    const dataPage = dataCart.filter((elm) => {
      return elm.sex == "female";
    });
    return dataPage;
  } else if (typePage == "male") {
    const dataPage = dataCart.filter((elm) => {
      return elm.sex == "male";
    });
    return dataPage;
  } else {
    return dataCart;
  }
};

// ========================== Get Data Type Products End ============================

// ====================== Init Render Cart Start ===================================
const initRenderCart = () => {
  renderCart(getDataTypeProducts());
};
initRenderCart();
// ====================== Init Render Cart End ===================================

// ================================ Reset Select Sort Start =====================================

const resetSelectSort = () => {
  let select = $(".filter-sort-right select");
  select.innerHTML = "";
  select.innerHTML += `
    <option selected value="defaul">Mặc định</option>
    <option check="check" value="low-hight">Giá thấp tới cao
    </option>
    <option value="hight-low">Giá cao tới thấp</option>
  `;
};
// ================================ Reset Select Sort End =====================================

// ========================= Select Sort Start ===================================
const selectSort = (typeSort) => {
  clearELMProducts();
  let dataCart = getDataTypeProducts().slice();

  if (typeSort == "low-hight") {
    renderCart(
      dataCart.sort((x, y) => {
        return x.price - y.price;
      })
    );
  } else if (typeSort == "hight-low") {
    renderCart(
      dataCart.sort((x, y) => {
        return y.price - x.price;
      })
    );
  } else {
    renderCart(dataCart);
  }
};
// ========================= Select Sort End ===================================

// =============================== Type Sort Start ==============================
const typeSort = () => {
  let select = $(".filter-sort-right select");
  if (!select) return;
  select.addEventListener("change", function () {
    console.log(select.value);
    selectSort(select.value);
  });
};
typeSort();
// =============================== Type Sort End ==============================

// ========================= Custom Range Input Start ===================================
const customRangeInput = () => {
  let rangeMax = $(".range-max");
  let rangeMin = $(".range-min");
  let outputRangeMin = $(".output-price-left");
  let outputRangeMax = $(".output-price-right");
  outputRangeMin.innerHTML = rangeMin.value;
  outputRangeMax.innerHTML = rangeMax.value;
  rangeMin.addEventListener("input", function () {
    // if((rangeMin.value + 10000) >= rangeMax.value)
    // {
    //   rangeMax.value += 100;
    // }
    outputRangeMin.innerHTML = rangeMin.value;
  });
  rangeMax.addEventListener("input", function () {
    outputRangeMax.innerHTML = rangeMax.value;
  });
};
customRangeInput();

// ========================= Custom Range Input End ===================================

// =============================== Range Input Start ============================
// const rangeInput  =()=> {

//   let outputRangeMin = $(".output-price-left");
//   let outputRangeMax = $(".output-price-right");
//   rangeMin.addEventListener('input', function(){
//     console.log(rangeMin.value);
//   })
// }
// rangeInput();
// =============================== Range Input End ============================

// ================================= Checkbox Search Start =====================================
const checkboxSearch = () => {
  let arr = [];
  let input = $$(".shop-input-type input");
  for (let x of input) {
    if (x.checked) {
      arr.push(x.value);
      x.checked = false;
    }
  }
  let rangeMax = $(".range-min");
  let rangeMin = $(".range-max");
  arr.push(rangeMax.value);
  arr.push(rangeMin.value);
  return arr;
};
checkboxSearch();
// ================================= Checkbox Search End =====================================

// =============================== Render Filter Tag Start ==============
const renderfilterTag = (dataFilter) => {
  let filterApply = $(".filter-apply");
  // dataFilter.splice(dataFilter.length - 2, 2);
  let data = dataFilter.map((e) => {
    return `<div class="filter-apply-tag">
                <span>${e}</span>
                <i class="fa-solid fa-xmark"></i>
            </div>
    `;
  });
  data.join("");
  filterApply.innerHTML += data;
};
// =============================== Render Filter Tag End ==============

// ============================== Render Filer Sort Start ==============
const renderFilterSort = (dataFilter) => {
  const data = getDataTypeProducts();
  for (let x of dataFilter) {
    console.log(x);
  }
};

// ============================== Render Filer Sort Start ==============

// ========================================= Filter Submit Start ===========================
const filterSubmit = () => {
  let btnSubmit = $$(".apply-filters button.btn.btn-m");
  for (let i = 0; i < btnSubmit.length; i++) {
    btnSubmit[i].addEventListener("click", function () {
      let dataFilter = checkboxSearch();
      renderfilterTag(dataFilter);
      renderFilterSort(dataFilter);
      // remove open filter
      let filter_tm = $(".filter-tm");
      filter_tm.classList.remove("open");
    });
  }
};
filterSubmit();
// ========================================= Filter Submit End ==========================
