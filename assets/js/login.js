// let $ = document.querySelector.bind(document);
// let $$ = document.querySelectorAll.bind(document);
// const arr = [
//   {
//     name: "nguyenvu",
//     psw: "nguyenv1234",
//   },
//   {
//     name: "nam",
//     psw: "nam1234",
//   },
// ];
// console.log(arr);
// localStorage.setItem("settings", JSON.stringify(arr));
// const data = JSON.parse(localStorage.getItem("settings"));
// console.log(data);

// // =================================== Register Start ==============================================
// const register = () => {
//   let name1 = $("input#input-name");
//   let psw = $("input#input-password");
//   let lowerCaseLetters = /[a-z]/g;
//   let upperCaseLetters = /[A-Z]/g;
//   let numbers = /[0-9]/g;
//   let name = name1.value.toLowerCase().replace(/\s+/g, "");
//   if (name.length == 0) {
//     alert("Vui lòng nhập vào tên đăng nhập");
//   } else if (psw.length == 0) {
//     alert("Vui lòng nhập vào mật khẩu");
//   } else {
//     if (!localStorage.getItem(name)) {
//       localStorage.setItem(name, psw.value);
//       alert("Đã đăng ký thành công");
//     } else {
//       alert("Tên đăng nhập đã tồn tại. Vui lòng nhập lại!");
//     }
//   }
//   name1.value = "";
//   psw.value = "";
//   name1.focus();
//   psw.focus();
// };
// let btnRegister = $("#register");
// console.log(btnRegister);
// btnRegister.addEventListener("click", function () {
//   register();
//   let keys = Object.keys(localStorage);
//   for (let i of keys) {
//     console.log(`${i} : ${localStorage.getItem(i)}`);
//   }
// });
// // =================================== Register End ==============================================

// // =================================== Login Start ==============================================
// // const login = () => {
// //   let name = $("input#input-name");
// //   let psw = $("input#input-password");
// //   let lowerCaseLetters = /[a-z]/g;
// //   let upperCaseLetters = /[A-Z]/g;
// //   let numbers = /[0-9]/g;

// //   if (name.value.length == 0) {
// //     alert("Vui lòng nhập vào tên đăng nhập");
// //   } else if (psw.value.length == 0) {
// //     alert("Vui lòng nhập vào mật khẩu");
// //   } else {
// //     if (!localStorage.getItem(name.value)) {
// //       alert("Tài khoản và mật khẩu không chính xác");
// //     } else {
// //     }
// //   }
// //   name.value = "";
// //   psw.value = "";
// //   name.focus();
// //   psw.focus();
// // };
// // let btnLogin = $("#login");
// // btnLogin.addEventListener("click", function () {
// //   register();
// //   let keys = Object.keys(localStorage);
// //   for (let i of keys) {
// //     console.log(`${i} : ${localStorage.getItem(i)}`);
// //   }
// // });
// // =================================== Login End ==============================================
