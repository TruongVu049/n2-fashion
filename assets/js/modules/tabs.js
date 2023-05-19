const tabsContent = (classTablinks, classTabcontent, data = null) => {
  let tabsLi = $$(`${classTablinks}`);
  let tabActive = $$(`${classTabcontent}`);

  for (let i = 0; i < tabsLi.length; i++) {
    tabsLi[i].addEventListener("click", function (e) {
      if (!e.target.classList.contains("active")) {
        tabsLi.forEach((element) => {
          if (element.classList.contains("active")) {
            {
              element.classList.remove("active");
              tabActive.forEach((elm) => {
                if (elm.classList.contains("active"))
                  elm.classList.remove("active");
              });
            }
          }
        });
        tabActive[i].classList.add("active");
        e.target.classList.add("active");
      }
    });
  }
};

export default tabsContent();
