window.addEventListener("load", function () {
  console.log("Đã tải xong");
  this.setTimeout(function () {
    let loading = document.querySelector(".loading");
    loading.style.display = "none";
  }, 300);
});
let btnNone = document.querySelector(".btn.shopnow-cart a");
btnNone.setAttribute("href", "javascript:void(0)");
