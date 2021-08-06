const handleHeader = () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".navbar");
  const navLinks = [...document.querySelectorAll(".nav-link-with-drop")];
  const searchHolder = document.getElementById("search-bar");
  const originDiv = document.querySelector(".nav-dropdown-country");
  const titleOrigin = originDiv.querySelectorAll(".drop-title");
  const dropdown = document.querySelectorAll(".nav-dropdown");
  const searchWrapper = document.querySelector(".header-content");
  const navHolder = document.querySelectorAll(".nav-link");
  const CheckoutPage = document.querySelector(".checkout");
  const CheckoutPageLogin = document.querySelector(".login");
  const navbar = document.querySelector(".navbar");
  const catalogHolder = document.querySelector(".catalog-holder");

  hamburger.addEventListener("click", () => {
    if (navBar.classList.contains("show")) {
      navBar.classList.remove("show");
      searchHolder.style.display = "flex";
      searchWrapper.style.height = "163px";
    } else {
      navBar.classList.add("show");
      searchHolder.style.display = "none";
    }
  });

  // Handling nav links
  navLinks.forEach((link) => {
    // var wid = $(window).width();
    // if (wid > 1024) {
    link.addEventListener("mouseover", (event) => {
      var wid = $(window).width();
      const allDrops = [...document.querySelectorAll(".nav-dropdown")];
      const drop = event.target.parentElement.querySelector(".nav-dropdown");

      if (drop && wid > 1024) {
        if (drop.classList.contains("show")) {
          drop.classList.remove("show");
        } else {
          allDrops.forEach((el) => {
            el.classList.remove("show");
          });
          drop.classList.add("show");
        }
      }
    });
    link.addEventListener("click", (e) => {
      e.preventDefault();
      var width = $(window).width();
      if (width > 1024) {
        return false;
      } else {
        const allDrops = [...document.querySelectorAll(".nav-dropdown")];
        const drop = e.target.parentElement.querySelector(".nav-dropdown");

        if (drop) {
          if (drop.classList.contains("show")) {
            drop.classList.remove("show");
          } else {
            allDrops.forEach((el) => {
              el.classList.remove("show");
            });
            drop.classList.add("show");
          }
        }
      }
    });
    // } else {
    //   // $(".nav-link-with-drop").off("mouseover").off("mouseout");
    //   link.addEventListener("click", (event) => {
    //     const allDrops = [...document.querySelectorAll(".nav-dropdown")];
    //     const drop = event.target.parentElement.querySelector(".nav-dropdown");

    //     if (drop) {
    //       if (drop.classList.contains("show")) {
    //         drop.classList.remove("show");
    //       } else {
    //         allDrops.forEach((el) => {
    //           el.classList.remove("show");
    //         });
    //         drop.classList.add("show");
    //       }
    //     }
    //   });
    // }
  });

  //hide the drop
  dropdown.forEach((drop) => {
    drop.addEventListener("mouseleave", () => {
      drop.classList.remove("show");
    });
  });
  navHolder.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      // link.classList.remove("show");
      if (!link.classList.contains("nav-link-with-drop")) {
        const allDrops = [...document.querySelectorAll(".nav-dropdown")];
        allDrops.forEach((el) => {
          el.classList.remove("show");
        });
      }
    });
  });

  //Handling regions sidebar
  titleOrigin.forEach((title) => {
    title.addEventListener("click", (e) => {
      const wrapper = originDiv.querySelectorAll(".drop-link-holder");
      wrapper.forEach((el) => {
        const titleDiv = el.querySelector(".origine-main");
        el.querySelector(".origine-regions").classList.remove("show");
        if (titleDiv.contains(e.target)) {
          el.querySelector(".origine-regions").classList.add("show");
        }
      });
    });
  });

  //hide search on scroll
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);
  if (isMobile) {
    if (CheckoutPage || CheckoutPageLogin) {
      searchHolder.style.display = "none";
      searchWrapper.style.height = "88px";
    }
    window.onscroll = function () {
      if (window.scrollY > 100) {
        searchHolder.style.display = "none";
        searchWrapper.style.height = "88px";
        if (catalogHolder) {
          navbar.style.height = "100%";
          navbar.style.top = "64px";
        }
      } else if (window.scrollY == 0) {
        if (CheckoutPage || CheckoutPageLogin) {
          searchHolder.style.display = "none";
          searchWrapper.style.height = "88px";
        } else if (catalogHolder) {
          navbar.style.top = "121px";
        } else {
          searchHolder.style.display = "flex";
          searchWrapper.style.height = "163px";
        }
      }
    };
  }
};
