function renderHeader() {
  let header = document.querySelector("header");
  header.innerHTML = ` <!-- ================== Navbar ================== -->
    <nav>
        <div class="container">
            <div class="navbar-sticky">
                <div class="navbar-left" style="margin-bottom: 10px;">
                    <a href="index.html">
                        <img style="" src="assets/favicon/logo-s.png" alt="logo">
                    </a>
                </div>
                <div class="navbar-center">
                    <ul>
                        <li><a href="index.html">trang chủ</a></li>
                        <li><a href="sanpham.html?page=all">sản phẩm</a></li>
                        <li><a href="sanpham.html?page=male">nam</a></li>
                        <li><a href="sanpham.html?page=female">nữ</a></li>
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="lienhe.html">liên hệ</a></li>
                    </ul>
                </div>
                <div class="navbar-right">
                    <a id="id-search" href="javascript:void(0)" class="header-action search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="login.html" class="header-action user">
                        <span class="check-user"></span>
                        <i class="fa-regular fa-user"></i>
                    </a>
                    <a href="javascript:void(0)" class="header-action cart">

                        <i class="fa-solid fa-cart-shopping">
                            <span>12</span>
                        </i>
                    </a>
                    <a href="javascript:void(0)" class="header-action-bar">
                        <i class="fa-solid fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    

    <!-- ==================== MOBILE MENU ================================= -->
    <div class="mobile-menu">
        <div class="overlay">

        </div>
        <div class="mobile-menu-inner">
            <div class="mobile-menu-close">
                <i class="fa-solid fa-xmark"></i>
            </div>

            <div class="mobile-menu-links navbar-center">
                <ul>
                    <li><a href="index.html">trang chủ</a></li>
                    <li><a href="sanpham.html?page=all">sản phẩm</a></li>
                    <li><a href="sanpham.html?page=male">nam</a></li>
                    <li><a href="sanpham.html?page=female">nữ</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="lienhe.html">liên hệ</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- ======================= Cart Products ============== -->
    <div class="cart-products">
        <div class="overlay">

        </div>
        <div class="inner-cart">
            <div class="close-cart-products">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="inner-cart-top">
                <h3>Giỏ Hàng</h3>
                <div class="inner-cart-items">
                    <div class="inner-items">
                        <div>
                            <a href="thongtinsanpham.html">
                                <img src="https://cf.shopee.vn/file/vn-11134207-23030-fhot1hcfqwovf3_tn" alt="">
                            </a>
                        </div>
                        <div>
                            <h4>Brother Hoddies in Grey
                                <a href="thongtinsanpham.html"></a>
                            </h4>
                            <strong>1.234.567</strong> VNĐ
                        </div>
                        <div>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    <div class="inner-items">
                        <div>
                            <a href="thongtinsanpham.html">
                                <img src="https://down-vn.img.susercontent.com/file/8e8402f8e2aa2b8d1634bb9ec99e0f4b_tn"
                                    alt="">
                            </a>
                        </div>
                        <div>
                            <h4>Brother Hoddies in Grey
                                <a href="thongtinsanpham.html"></a>

                            </h4>
                            <strong>1.234.567</strong> VNĐ
                        </div>
                        <div>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    <div class="inner-items">
                        <div>
                            <a href="thongtinsanpham.html">
                                <img src="https://down-vn.img.susercontent.com/file/6601dcdeba4fe51713c5d78635b6a826_tn"
                                    alt="">
                            </a>
                        </div>
                        <div>
                            <h4>Brother Hoddies in Grey
                                <a href="thongtinsanpham.html"></a>
                            </h4>
                            <strong>1.234.567</strong> VNĐ
                        </div>
                        <div>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div class="inner-cart-bottom">
                <div class="inner-cart-price">
                    <h3>Tổng Tiền</h3>
                    <strong>123.456
                        <span>VNĐ</span>
                    </strong>
                </div>
                <button class="btn view-">
                    <a href="gio-hang.html"></a>
                    XEM GIỎ HÀNG
                </button>
                <button class="btn shopnow-cart">
                    <a href="thanh-toan.html"></a>
                    MUA HÀNG
                </button>
            </div>
        </div>
    </div>
    <section>
        <div class="container">
            <div class="search-products">
                <div>
                    <label for="name"></label>
                    <input type="text" name="name" id="des-data" placeholder="Tìm kiếm sản phẩm ...">
                </div>
                <div id="btn-search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </section>
    `;
  let namePage = location.pathname;
  namePage = namePage.split(/[/]/);
  let navbar_center = document.querySelectorAll(".navbar-center ul li a");
  if (
    namePage[namePage.length - 1] == "" ||
    !namePage[namePage.length - 1].includes(".html")
  ) {
    navbar_center[0].classList.add("active");
    navbar_center[6].classList.add("active");
    return;
  }
  for (let i of navbar_center) {
    if (i.getAttribute("href").includes(namePage[namePage.length - 1]))
      i.classList.add("active");
  }
}

function rederFooter() {
  let footer = document.querySelector("footer");
  footer.innerHTML = `        <div class="footer-top">
    <div class="row justify-content-between align-items-center">
        <div class="col-lg-3 col-sm-6">
            <div class="footer-nsx">
                <div>
                    <img src="https://sixdo.vn/images/banners/original/limited-time2x-1624335793.png" alt="">
                </div>
                <h4>6 ngày đổi trả sản phẩm</h4>
                <p>Đổi trả sản phẩm trong 6 ngày</p>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="footer-nsx">
                <div>
                    <img src="https://sixdo.vn/images/banners/original/group-242x-1624335840.png" alt="">
                </div>
                <h4>hotline 1000 1100</h4>
                <p>8h00 - 21h00, T2 - CN nghỉ Tết Âm lịch</p>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="footer-nsx">
                <div>
                    <img src="https://sixdo.vn/images/banners/original/group-262x-1624335863.png" alt="">
                </div>
                <h4>hệ thống cửa hàng</h4>
                <p>Gần 60 cửa hàng trên toàn hệ thống</p>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="footer-nsx">
                <div>
                    <img src="https://sixdo.vn/images/banners/original/path-833-1623718758-1624336147.png"
                        alt="">
                </div>
                <h4>VẬN CHUYỂN</h4>
                <p>Đồng giá 25K toàn quốc</p>
            </div>
        </div>
    </div>

</div>

<div class="footer-center">
    <div class="container">
        <div class="row justify-content-center align-items-start no-gutters">
            <div class="col-lg-3 col-sm-6">
                <div class="footer-center-centent">
                    <h4>Về TLA</h4>
                    <p>Luôn đi theo tiêu chí giúp các nàng cảm thấy thoải mái và tự tin khi diện. Thật tuyệt vời
                        nếu mỗi ngày đều xinh đẹp! TLA cảm ơn quý khách đã tin yêu sản phẩm. Chúc bạn có ngày
                        mua sắm thật thoải mái.
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="footer-center-centent">
                    <h4>Thông tin liên hệ</h4>
                    <ul>
                        <li><strong>Địa chỉ: </strong>
                            140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam
                        </li>
                        <li><strong>Điện thoại: </strong>090 789 3879</li>
                        <li><strong>THời gian làm việc: </strong>08h00 - 22h00</li>
                        <li><strong>Email: </strong>tla@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="footer-center-centent">
                    <h4>Chính sách mua hàng</h4>
                    <ul>
                        <li>Đổi trả hàng lỗi trong vòng 7 ngày</li>
                        <li>Ship COD toàn quốc</li>
                        <li>Hỗ trợ 24/7 với các kênh chat, email & phone</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="footer-center-centent">
                    <h4>Kết nối với chúng tôi</h4>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footer-bottom">
    <p>© 2023 by TLA.</p>
</div>`;
}
renderHeader();
rederFooter();
