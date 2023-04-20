// =======================================
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// ================= Scroll NavBar =======================================
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  let navbar = $("nav");
  if (window.pageYOffset >= navbar.offsetHeight + 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// ========================== Open Cart =====================================
function openCart() {
  let open = $(".navbar-sticky .cart");
  let close = $("header .close-cart-products");
  let cartProducts = $(".cart-products");
  open.addEventListener("click", function () {
    cartProducts.classList.add("open");
  });
  close.addEventListener("click", function () {
    cartProducts.classList.remove("open");
  });
}
openCart();

// ============================= Close Cart ================================

// ============================= Open Nav Mobile ===============================

function openNavMobile() {
  let open = $(".header-action-bar");
  let close = $(".mobile-menu-inner .mobile-menu-close i");
  let navMb = $(".mobile-menu");
  open.addEventListener("click", function () {
    navMb.classList.add("open");
  });
  close.addEventListener("click", function () {
    navMb.classList.remove("open");
  });
}
openNavMobile();

// ============================= Close Nav Mobile ===============================

// =============================== Range Input Start ================================

// =============================== Range Input End ================================

// ================================ Open Filter Table Mobile Start ==============================

function openFilter_tm() {
  let open = $(".filter-sort .fiter-sort-left > i");
  let close = $(".shop-filters.screen-small>.filter-tm-close");
  let filter_tm = $(".filter-tm");
  if (open) {
    open.addEventListener("click", function () {
      filter_tm.classList.add("open");
    });
    close.addEventListener("click", function () {
      filter_tm.classList.remove("open");
    });
  }
}
openFilter_tm();
// ================================ Open Filter Table Mobile End ==============================

// ============================= Banner SlideShow Start ================================================

function slideShowBN() {
  let tabIndex = 0;
  let imgs = $$(".banner-slideshow img");
  if (!imgs) return;
  let btnLeft = $(".direc-btn .direc-left");
  let btnRight = $(".direc-btn .direc-right");
  if (!btnRight) return;
  btnRight.addEventListener("click", function (e) {
    tabIndex++;
    imgs.forEach((value) => {
      if (value.classList.contains("active")) value.classList.remove("active");
    });
    if (tabIndex >= imgs.length) tabIndex = 0;
    imgs[tabIndex].classList.add("active");
  });
  btnLeft.addEventListener("click", function (e) {
    tabIndex--;
    imgs.forEach((value) => {
      if (value.classList.contains("active")) value.classList.remove("active");
    });
    if (tabIndex < 0) tabIndex = imgs.length - 1;
    imgs[tabIndex].classList.add("active");
  });
}
slideShowBN();

// ============================= Banner SlideShow End ================================================

// =============================== Products Tab Start =============================
function productsTab() {
  const tabs = document.querySelector(".products-view-tab");
  if (!tabs) return;
  const content = document.querySelector(".products-view-content");

  // store the relationship between hash & tab id
  const hashes = new Map([
    ["#sanphammoi", "tab1"],
    ["#muanhieu", "tab2"],
    ["#sale", "tab3"],
  ]);

  // store the relationship between tab id and contents
  const data = new Map([
    [
      "tab1",
      {
        url: "index.html#sanphammoi",
        content: `
        <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img src="assets/image/img_024-1.jfif" alt="">
                    </div>
                    <div class="products-card-content">
                        <h4 class="provide">canifa</h4>
                        <h5 class="name">Pack 2 áo phông nữ CANIFA chất liệu 100% cotton</h5>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="price">
                            <strong>229000</strong>
                            VNĐ
                        </span>
                        <div class="add-to-cart">
                            <button class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham.html?id=024"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img src="assets/image/img_025-1.jfif" alt="">
                    </div>
                    <div class="products-card-content">
                        <h4 class="provide">canifa</h4>
                        <h5 class="name">Áo phông unisex Canifa Z tay lỡ cổ tròn chất cotton thoáng mát
                            form rộng</h5>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="price">
                            <strong>230000</strong>
                            VNĐ
                        </span>
                        <div class="add-to-cart">
                            <button class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham.html?id=025"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img src="assets/image/img_026-1.jfif" alt="">
                    </div>
                    <div class="products-card-content">
                        <h4 class="provide">canifa</h4>
                        <h5 class="name">Quần sooc nam CANIFA 100% polyester cạp chun, form regular
                            8BS23S005</h5>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="price">
                            <strong>199000</strong>
                            VNĐ
                        </span>
                        <div class="add-to-cart">
                            <button class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham.html?id=026"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        `,
      },
    ],
    [
      "tab2",
      {
        url: "index.html#muanhieu",
        content: `
        <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img src="assets/image/img_028-1.jfif" alt="">
                    </div>
                    <div class="products-card-content">
                        <h4 class="provide">adidas</h4>
                        <h5 class="name">adidas Phong cách sống Giày Continental 80 Unisex trắng G27706</h5>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="price">
                            <strong>2700000</strong>
                            VNĐ
                        </span>
                        <div class="add-to-cart">
                            <button class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham.html?id=028"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img src="assets/image/img_030-1.jfif" alt="">
                    </div>
                    <div class="products-card-content">
                        <h4 class="provide">adidas</h4>
                        <h5 class="name">adidas Phong cách sống Giày Superstar Unisex trắng EG4958</h5>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="price">
                            <strong>2600000</strong>
                            VNĐ
                        </span>
                        <div class="add-to-cart">
                            <button class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham.html?id=030"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img src="assets/image/img_031-1.jfif" alt="">
                    </div>
                    <div class="products-card-content">
                        <h4 class="provide">adidas</h4>
                        <h5 class="name">adidas Phong cách sống Giày Superstar Nam Màu xanh da trời GZ9411</h5>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="price">
                            <strong>3230000</strong>
                            VNĐ
                        </span>
                        <div class="add-to-cart">
                            <button class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham.html?id=031"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
      },
    ],
    [
      "tab3",
      {
        url: "index.html#sale",
        content: ``,
      },
    ],
  ]);
  tabs.addEventListener("click", function (event) {
    if (!event.target.id) return;
    update(event.target.id);
  });

  const update = (tabId) => {
    // remove the active class of the previously selected tab
    const currentTab = tabs.querySelector(".active");

    if (currentTab.id != tabId) {
      currentTab.classList.remove("active");
    }
    // add active class to the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");

    const entry = data.get(tabId);

    if (entry) {
      // update the URL
      history.pushState(null, "", entry.url);
      // change the content
      content.innerHTML = entry.content;
    }
  };

  (() => {
    // get tab id from the hash
    const tabId = hashes.get(window.location.hash);
    // update the tab
    if (tabId) update(tabId);
  })();
}

productsTab();
// =============================== Products Tab End =============================
function dealsTimeDown() {
  // Set the date we're counting down to
  var countDownDate = new Date("May 18, 2023 16:59:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    let day = $(".deals-time-count .day");
    if (!day) return;
    day.innerHTML = days;
    $(".deals-time-count .hour").innerHTML = hours;
    $(".deals-time-count .minute").innerHTML = minutes;
    $(".deals-time-count .second").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
dealsTimeDown();

// ============================= Counter Products Start ============================
function counterProduct() {}
// ============================= Counter Products End ============================
