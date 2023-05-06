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

  infoProduct = infoProduct
    .map((cart) => {
      return `
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
    })
    .join(" ");
  shop_products_bottom.innerHTML = infoProduct;
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
  let dataCart = getDataTypeProducts();
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

const inputCheckbox = () => {
  let inputCB = $$("input]");
  console.log(inputCB);
};
// inputCheckbox();

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

// =========================== Remove Checked =====================================
const removeChecked = () => {
  let input = $$(".shop-input-type input");
  for (let x of input) {
    x.checked = false;
  }
};
// =========================== Remove Checked =====================================

// ========================= Custom Range Input Start ===================================
const customRangeInput = () => {
  let rangeMax = $$(".range-max");
  let rangeMin = $$(".range-min");
  let outputRangeMin = $$(".output-price-left");
  let outputRangeMax = $$(".output-price-right");

  outputRangeMin[0].innerHTML = rangeMin[0].value;
  outputRangeMax[0].innerHTML = rangeMax[0].value;

  outputRangeMin[1].innerHTML = rangeMin[1].value;
  outputRangeMax[1].innerHTML = rangeMax[1].value;

  rangeMin.forEach((elm, index) => {
    elm.addEventListener("input", function () {
      rangeMin[0].value = elm.value;
      rangeMin[1].value = elm.value;
      outputRangeMin[0].innerHTML = elm.value;
      outputRangeMin[1].innerHTML = elm.value;
    });
  });
  rangeMax.forEach((elm, index) => {
    elm.addEventListener("input", function () {
      rangeMax[0].value = elm.value;
      rangeMax[1].value = elm.value;
      outputRangeMax[0].innerHTML = elm.value;
      outputRangeMax[1].innerHTML = elm.value;
    });
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
  const obj = {
    type: [],
    price: [],
    sex: [],
  };
  let rangeMax = $(".range-min");
  let rangeMin = $(".range-max");
  obj["price"].push(rangeMax.value);
  obj["price"].push(rangeMin.value);
  let input = $$(".shop-input-type input");
  for (let x of input) {
    if (x.checked) {
      if (
        x.value == "pants" ||
        x.value == "hat" ||
        x.value == "t-shirt" ||
        x.value == "shoe"
      ) {
        obj["type"].push(x.value);
      } else {
        obj["sex"].push(x.value);
      }
    }
  }
  return obj;
};
// ================================= Checkbox Search End =====================================

// ====================================
const clearFilterTags = () => {
  $(".filter-apply").innerHTML = "";
};

// =============================== Render Filter Tag Start ==============
const renderfilterTag = (dataFilter) => {
  let filterApply = $(".filter-apply");
  let data = [...dataFilter["type"], ...dataFilter["sex"]];
  data = data.map((elm) => {
    if (elm == "pants") return "Quần";
    else if (elm == "t-shirt") return "Áo";
    else if (elm == "hat") return "Nón";
    else if (elm == "shoe") return "Giày";
    else if (elm == "male") return "Nam";
    else return "Nữ";
  });
  data = data
    .map((e) => {
      return `<div class="filter-apply-tag">
                <span>${e}</span>
            </div>
    `;
    })
    .join(" ");
  filterApply.innerHTML += data;
};

//<i class="fa-solid fa-xmark"></i>

// =============================== Render Filter Tag End ==============

const sortPrice = (priceCurrent, min, max) => {
  min = parseInt(min, 10);
  max = parseInt(max, 10);
  priceCurrent = priceCurrent.filter((elm) => {
    if (elm.price >= min && elm.price < max) return elm;
  });
  return priceCurrent;
};

// ============================== Render Filer Sort Start ==============
const renderFilterSort = (dataFilter) => {
  let data = getDataTypeProducts();
  if (dataFilter["type"].length != 0) {
    let arrFilter = [];
    data.forEach((elm, index) => {
      dataFilter["type"].forEach((elm_1, index_1) => {
        for (let x of Object.values(elm)) {
          if (x == elm_1) {
            arrFilter.push(elm);
            break;
          }
        }
      });
    });

    if (dataFilter["sex"].length != 0) {
      arrFilter = arrFilter.filter((elm, index) => {
        if (elm.sex == dataFilter["sex"][0] || elm.sex == dataFilter["sex"][1])
          return elm;
      });
      return sortPrice(
        arrFilter,
        dataFilter["price"][0],
        dataFilter["price"][1]
      );
    } else {
      return sortPrice(
        arrFilter,
        dataFilter["price"][0],
        dataFilter["price"][1]
      );
    }
  } else {
    if (dataFilter["sex"].length != 0) {
      data = data.filter((elm) => {
        if (elm.sex == dataFilter["sex"][0] || elm.sex == dataFilter["sex"][1])
          return elm;
      });
      return sortPrice(data, dataFilter["price"][0], dataFilter["price"][1]);
    } else {
      return sortPrice(data, dataFilter["price"][0], dataFilter["price"][1]);
    }
  }
};
// ============================== Render Filer Sort Start ==============

// ========================================= Filter Submit Start ===========================
const filterSubmit = () => {
  let btnSubmit = $$(".apply-filters button.btn.btn-m");
  for (let i = 0; i < btnSubmit.length; i++) {
    btnSubmit[i].addEventListener("click", function () {
      clearFilterTags();
      let dataFilter = checkboxSearch();
      renderfilterTag(dataFilter);
      clearELMProducts();
      renderCart(renderFilterSort(dataFilter));
      removeChecked();
      let sl = $$(".filter-sort-right select option");
      sl[0].selected = true;
      // remove open filter
      let filter_tm = $(".filter-tm");
      filter_tm.classList.remove("open");
    });
  }
};
filterSubmit();
// ========================================= Filter Submit End ==========================
