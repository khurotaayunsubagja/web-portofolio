// =====================================
// SMOOTH SCROLL
// =====================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

        anchor.addEventListener(
            "click",
            function (event) {

                const href =
                    this.getAttribute("href");

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(href);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );

const mobileMenu =
    document.querySelector(
        ".mobile-menu"
    );

if (
    menuToggle &&
    mobileMenu
) {

    menuToggle.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu
                        .classList
                        .remove(
                            "active"
                        );

                }
            );

        });

}


// =====================================
// AUTOMATIC FOOTER YEAR
// =====================================

const yearElement =
    document.getElementById(
        "year"
    );

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}