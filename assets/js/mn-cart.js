import getDataFromDB from "./modules/data.js";
const getSessionProducts = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};
getDataFromDB();
const DataProducts = getSessionProducts("listproductBD");
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
// =================================== Render Start ========================================
const renderMnCart = (data) => {
  let cartList = $(".inner-cart-items");
  cartList.innerHTML = "";
  let arr = data
    .map((elm) => {
      return `
            <div class="inner-items">
            <div>
                <a href="thongtinsanpham?id=${elm.Id}">
                    <img src="${elm.pd_image[0]}" alt="">
                </a>
            </div>
            <div>
                <h4>${elm.name}
                    <a href="thongtinsanpham?id=${elm.Id}"></a>
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

// ============================================
const renderTableCart = (data) => {
  let tableCart = $(".page-cart table");
  if (!tableCart) return;
  tableCart.innerHTML = `
    <tr class="tr-title">
        <th>Ảnh</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Tổng</th>
        <th>Xóa</th>
    </tr>
    `;
  let arr = data
    .map((elm) => {
      return `
          <tr class="tr-product">
          <td>
              <div>
                  <img src="${elm.pd_image[0]}" alt="image">
              </div>
          </td>
          <td>
              <div>
                  <h3>${elm.name}</h3>
              </div>
          </td>
          <td>
              <div>
                  <strong>${elm.price}</strong>
                  VNĐ
              </div>
          </td>
          <td>
              <div>
                  <div class="couter-product">
                      <div class="couter-product-minus">
                          <i class="fa-solid fa-minus"></i>
                      </div>
                      <div>
                          <strong>1</strong>
                      </div>
                      <div class="couter-product-plug">
                          <i class="fa-solid fa-plus"></i>
                      </div>
                  </div>
              </div>
          </td>
          <td>
              <div>
                  <strong>${elm.price}</strong>
                  VNĐ
              </div>
          </td>
          <td>
              <div>
                  <i data-id="${elm.Id}" class="fa-regular fa-trash-can remove-item"></i>
              </div>
          </td>
      </tr>
    `;
    })
    .join(" ");

  tableCart.innerHTML += arr;
  if (!arr) {
    tableCart.innerHTML += `
    <tr class="tr-product-none">
        <td colspan="6">
            <h4>Giỏ hàng trống</h4>
        </td>
    </tr>`;
  }
};

// ============================================

// ========================================
const renderPay = (data) => {
  let payLists = $(".total-product .li-product-list");
  let payTotal = $(".total-product .li-total > div strong");
  let payCart = $(".inner-cart-price strong");
  let sum = 0;
  let arr = data
    .map((elm) => {
      sum += elm.price;
      return `
      <li class="li-product">
      <div>
              <h5>${elm.name}</h5>
              <strong>${elm.price}
                  <span>VNĐ</span>
              </strong>
          </div>
      </li>`;
    })
    .join(" ");
  if (!payLists) {
    payCart.innerHTML = sum + ` <span> VNĐ</span>`;
    return;
  }
  payCart.innerHTML = "0";
  payLists.innerHTML = "0";
  payLists.innerHTML = arr;
  payTotal.innerText = sum;
};

// ========================================

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
  return arr;
};

// =================
const initLS = () => {
  renderMnCart(getDataLc());
  renderTableCart(getDataLc());
  renderPay(getDataLc());
};
initLS();

// ==================

let btn = $("body");
btn.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-sm")) {
    addLocalStorage(e.target.dataset.id);
    renderMnCart(getDataLc());
    renderTableCart(getDataLc());
    renderPay(getDataLc());
    renderAmount();
  }
});

// ==================== Remove Cart Item Start =====================================
const removeCartItem = () => {
  let remove = $("body");
  remove.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      localStorage.removeItem(e.target.dataset.id);
      renderMnCart(getDataLc());
      renderTableCart(getDataLc());
      renderPay(getDataLc());
      renderAmount();
    }
  });
};
removeCartItem();
// ==================== Remove Cart Item End =====================================

const checkPrice = () => {
  let payTotal = $(".total-product .li-total > div strong");
  let submit = $(".btn-submit");
  if (payTotal == null) return;
  submit.addEventListener("click", function () {
    if (payTotal.innerHTML === "0") alert("Không có sản phẩm trong giỏ hàng");
    else {
      location.href = "thanh-toan";
    }
  });
};
checkPrice();
