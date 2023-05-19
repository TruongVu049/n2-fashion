const renderCart = (listProduct) => {
  let shop_products_bottom = $(".shop-products-bottom .row");
  if (!shop_products_bottom) return;

  listProduct = listProduct
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
  shop_products_bottom.innerHTML = listProduct;
};
export default renderCart;
