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

const handleBanner = (tabIndex, imgs, animationName) => {
  imgs.forEach((value) => {
    if (value.classList.contains("active")) value.classList.remove("active");
  });
  imgs[tabIndex].classList.add("active");
  imgs[tabIndex].style.animationName = animationName;
};

const slideShowTemp = () => {
  let tabIndex = 0;
  let imgs = $$(".banner-slideshow img");
  if (!imgs) return;
  let btnLeft = $(".direc-btn .direc-left");
  let btnRight = $(".direc-btn .direc-right");
  if (!btnRight) return;
  setInterval(() => {
    if (tabIndex >= imgs.length - 1) tabIndex = 0;
    else tabIndex++;
    handleBanner(tabIndex, imgs, "fadeInRightImage");
  }, 5000);

  btnRight.addEventListener("click", function (e) {
    tabIndex++;
    if (tabIndex >= imgs.length) tabIndex = 0;
    handleBanner(tabIndex, imgs, "fadeInRightImage");
  });
  btnLeft.addEventListener("click", function (e) {
    tabIndex--;
    if (tabIndex < 0) tabIndex = imgs.length - 1;
    handleBanner(tabIndex, imgs, "fadeInLeftImage");
  });
};

slideShowTemp();

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
        url: "index#sanphammoi",
        content: `
        <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img  src="assets/image/img_024-1.jfif" alt="">
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
                            <button data-id="024" class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham?id=024"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img  src="assets/image/img_025-1.jfif" alt="">
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
                            <button data-id="025" class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham?id=025"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img  src="assets/image/img_026-1.jfif" alt="">
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
                            <button data-id="026" class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham?id=026"></a>
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
        url: "index#muanhieu",
        content: `
        <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img  src="assets/image/img_028-1.jfif" alt="">
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
                            <button data-id="028" class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham?id=028"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="shop-products-card">
            <div class="products-card-thumb">
                <img  src="assets/image/img_039-1.jfif" alt="">
            </div>
            <div class="products-card-content">
                <h4 class="provide">converse</h4>
                <h5 class="name">CONVERSE - Nón bucket unisex Reversible 24563-A04-TUQS_BLUE</h5>
                <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="price">
                    <strong>550000</strong>
                    VNĐ
                </span>
                <div class="add-to-cart">
                    <button data-id="039" class="btn btn-sm">Thêm vào giỏ hàng</button>
                </div>
                <a href="thongtinsanpham?id=039"></a>
            </div>
        </div>
    </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="shop-products-card">
                    <div class="products-card-thumb">
                        <img  src="assets/image/img_031-1.jfif" alt="">
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
                            <button data-id="031" class="btn btn-sm">Thêm vào giỏ hàng</button>
                        </div>
                        <a href="thongtinsanpham?id=031"></a>
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
        url: "index#sale",
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
  var countDownDate = new Date("May 24, 2023 16:59:25").getTime();

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

// ====================== Search Products Start ============================
function searchProducts() {
  let open = $("#id-search");
  let innerSearch = $(".search-products");
  let input = $("input#des-data");
  open.addEventListener("click", function () {
    innerSearch.classList.toggle("active");
    open.classList.toggle("active");
    input.value = "";
    input.focus();
  });
}
searchProducts();
function checkInputSearch(inputSearch) {
  if (inputSearch.value == "") {
    alert("Vui lòng điền nội dung vào ô tìm kiếm");
  } else {
    let data = inputSearch.value.trim().toLowerCase();
    location.href = `sanpham?res=${data}`;
  }
}
function handleSearch() {
  let btnSearch = $("#btn-search");
  let inputSearch = $("input#des-data");
  btnSearch.addEventListener("click", function () {
    checkInputSearch(inputSearch);
  });
  inputSearch.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkInputSearch(inputSearch);
    }
  });
}
handleSearch();
// ====================== Search Products End ============================

// ========================= Lazyload Image ==============================

function observerLoadImage(img) {
  const url = img.getAttribute("data-src");
  img.setAttribute("src", url);
}

function lazyLoadImageObserver() {
  if ("IntersectionObserver" in window) {
    let lazyImgs = $$("[data-src]");
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observerLoadImage(entry.target);
        }
      });
    });
    lazyImgs.forEach((img) => {
      observer.observe(img);
    });
  } else {
    !(function (window) {
      var $q = function (q, res) {
          if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
          } else {
            var d = document,
              a = d.styleSheets[0] || d.createStyleSheet();
            a.addRule(q, "f:b");
            for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
              l[b].currentStyle.f && c.push(l[b]);

            a.removeRule(0);
            res = c;
          }
          return res;
        },
        addEventListener = function (evt, fn) {
          window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : window.attachEvent
            ? this.attachEvent("on" + evt, fn)
            : (this["on" + evt] = fn);
        },
        _has = function (obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        };
      function loadImage(el, fn) {
        var img = new Image(),
          src = el.getAttribute("data-src");
        img.onload = function () {
          if (!!el.parent) el.parent.replaceChild(img, el);
          else el.src = src;

          fn ? fn() : null;
        };
        img.src = src;
      }

      function elementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      }

      var images = new Array(),
        query = $q("[data-src]"),
        processScroll = function () {
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          }
        };
      // Array.prototype.slice.call is not callable under our lovely IE8
      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
      }

      processScroll();
      addEventListener("scroll", processScroll);
    })(this);
  }
}
document.addEventListener("DOMContentLoaded", lazyLoadImageObserver);

// ========================= Lazyload Image ==============================
