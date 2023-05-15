import { DataProducts } from "./data.js";

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

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

const getURLSearch = () => {
  let urlParams = new URLSearchParams(location.search);
  let arr = {};
  for (const [key, value] of urlParams) {
    {
      arr[key] = value;
    }
  }
  return arr;
};

// ========================== Check Page Render Start =======================
const checkPageRender = () => {
  let objURLSearch = getURLSearch();
  if (objURLSearch.page == "male") {
    return "male";
  } else if (objURLSearch.page == "female") {
    return "female";
  } else if (objURLSearch.page == "all") {
    return "all";
  } else {
    return "search";
  }
};
// ========================== Check Page Render End =======================
const filterSearch = (value, dataCart) => {
  let arr = [];
  dataCart.forEach((elm, index) => {
    if (elm["name"].toLowerCase().indexOf(value) > -1) {
      arr.push(elm);
    }
  });
  return arr;
};

// ========================== Get Data Type Products Start ============================
const getDataTypeProducts = () => {
  const dataCart = DataProducts.slice();
  let typePage = checkPageRender();
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
  } else if (typePage == "all") {
    return dataCart;
  } else {
    const objURLSearch = getURLSearch();
    return filterSearch(objURLSearch.res, dataCart);
  }
};

// ========================== Get Data Type Products End ============================

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
  // sessionStorage.setItem("filtertag", JSON.stringify(obj));
  return obj;
};
// ================================= Checkbox Search End =====================================

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
  let data = getDataTypeProducts("filtertag");
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
  let typePage = checkPageRender();
  for (let i = 0; i < btnSubmit.length; i++) {
    btnSubmit[i].addEventListener("click", function () {
      let dataFilter = checkboxSearch();
      let dataPB = renderFilterSort(dataFilter);
      clearELMProducts();
      setSessionProducts(dataPB);
      // let listA = $$(".pv-container-items > div > a");
      location.href = `sanpham.html?page=${typePage}&indexstart=0&indexend=6&currentpage=1`;
    });
  }
};
filterSubmit();
// ========================================= Filter Submit End ==========================
const checkPageFilter = () => {
  let checkType = checkPageRender();
  if (checkType == "male" || checkType == "female") {
    let filterSex = $$(".row-filters.shop-filters-sex.shop-input-type");
    filterSex[0].innerHTML = "";
    filterSex[1].innerHTML = "";
  }
  if (checkType == "male") $(".breadcrumb-area h2").innerHTML += " Nam";
  else if (checkType == "female") $(".breadcrumb-area h2").innerHTML += " Nữ";
};
checkPageFilter();

// ============================== Pavination Start ================================

const setSessionProducts = (listproduct) => {
  sessionStorage.setItem("listproduct", JSON.stringify(listproduct));
};

const getSessionProducts = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

const removeSessionProducts = (name) => {
  sessionStorage.removeItem(name);
};
const devideProduct = (listproduct) => {
  let arr = [];
  let rows = 6;
  let start, end;

  let pages = Math.ceil(listproduct.length / rows);
  for (let i = 0; i < pages; i++) {
    start = rows * i;
    end = rows * (i + 1);
    if (end > listproduct.length) {
      end = listproduct.length;
    }
    let obj = {
      start: start,
      end: end,
    };
    arr.push(obj);
  }
  return arr;
};

const renderTagAPavination = (obj) => {
  let pavinationTagA = $(".pv-container-items");
  obj = obj
    .map((elm, index) => {
      return `
      <div>
          <a class="" href="sanpham.html?page=${checkPageRender()}&indexstart=${
        elm.start
      }&indexend=${elm.end}&currentpage=${index + 1}" data-start="${
        elm.start
      }" data-end="${elm.end}">${index + 1}</a>
      </div>
    `;
    })
    .join("");
  pavinationTagA.innerHTML = obj;
};
const getProductOnePage = () => {
  let objURLSearch = getURLSearch();
  let listProduct = getSessionProducts("listproduct");
  if (!objURLSearch.indexstart) {
    return listProduct.splice(0, 6);
  } else {
    return listProduct.splice(parseInt(objURLSearch.indexstart), 6);
  }
};
const checkCurrentPageActive = () => {
  let listA = $$(".pv-container-items > div > a");

  let objURLSearch = getURLSearch();
  if (!objURLSearch.currentpage) listA[0].classList.add("active");
  else {
    // if (!listA[objURLSearch.currentpage - 1]) return;
    // listA[objURLSearch.currentpage - 1].classList.add("active");
    try {
      listA[objURLSearch.currentpage - 1].classList.add("active");
      throw "error";
    } catch (err) {
      console.log("null");
    }
  }
};
const setURLSearch = () => {
  let objURLSearch = getURLSearch();
  objURLSearch.currentpage = 0;
  console.log(objURLSearch);
};
const renderPage = (listproduct) => {
  if (!getSessionProducts("listproduct")) {
    setSessionProducts(listproduct);
  } else {
    listproduct = getSessionProducts("listproduct");
  }
  renderTagAPavination(devideProduct(listproduct));
  renderCart(getProductOnePage());
  checkCurrentPageActive();
};
const checkPageUrlSearch = () => {
  let objURLSearch = getURLSearch();
  console.log(objURLSearch);
  if (!objURLSearch.indexstart) removeSessionProducts("listproduct");
};
// ============================== Pavination End ================================
// ====================== Init Render Cart Start ===================================
const initRenderPage = () => {
  checkPageUrlSearch();
  renderPage(getDataTypeProducts());
};
initRenderPage();
// ====================== Init Render Cart End ===================================
const getIndexPage = (listA, type) => {
  let currentpage;
  let objURLSearch = getURLSearch();
  listA.forEach((elm, index) => {
    if (elm.classList.contains("active")) currentpage = index;
  });
  if (type == "decrease") {
    if (currentpage == 0) return;
    else location.href = listA[currentpage - 1].getAttribute("href");
  } else {
    if (currentpage == listA.length - 1) return;
    else location.href = listA[currentpage + 1].getAttribute("href");
  }
};
const prevOrNextPage = () => {
  let prevPage = $(".pavination-left");
  let nextPage = $(".pavination-right");
  let listA = $$(".pv-container-items > div > a");

  prevPage.addEventListener("click", (e) => {
    getIndexPage(listA, "decrease");
  });
  nextPage.addEventListener("click", (e) => {
    getIndexPage(listA, "increase");
  });
};
prevOrNextPage();

// ========================== Sort By Price Start ======================================
const getSortProducts = (typeSort) => {
  let dataSort = getSessionProducts("listproduct");
  if (typeSort == "low-hight") {
    dataSort = dataSort.sort((x, y) => {
      return x.price - y.price;
    });
  } else if (typeSort == "hight-low") {
    dataSort = dataSort.sort((x, y) => {
      return y.price - x.price;
    });
  } else {
    dataSort = dataSort;
  }
  setSessionProducts(dataSort);
  renderCart(getProductOnePage());
};

const sortByPrice = () => {
  let select = $(".filter-sort-right select");
  if (!select) return;
  select.addEventListener("change", function () {
    getSortProducts(select.value);
  });
};
sortByPrice();

// ========================== Sort By Price Start ======================================

// =============================== Render Filter Tag Start ==============
// const renderfilterTag = () => {
//   let dataFilter = getSessionProducts("filtertag");
//   if (!dataFilter) return;
//   let filterApply = $(".filter-apply");
//   let data = [...dataFilter["type"], ...dataFilter["sex"]];
//   data = data.map((elm) => {
//     if (elm == "pants") return "Quần";
//     else if (elm == "t-shirt") return "Áo";
//     else if (elm == "hat") return "Nón";
//     else if (elm == "shoe") return "Giày";
//     else if (elm == "male") return "Nam";
//     else return "Nữ";
//   });
//   data = data
//     .map((e) => {
//       return `<div class="filter-apply-tag">
//                 <span>${e}</span>
//             </div>
//     `;
//     })
//     .join(" ");
//   filterApply.innerHTML += data;
//   // removeSessionProducts("filtertag");
// };
// renderfilterTag();
// =============================== Render Filter Tag End ==============
