document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CURRENT YEAR
    ====================================================== */
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }



    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );


            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.className = isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";

            }

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );


                    const icon =
                        menuToggle.querySelector("i");

                    if (icon) {
                        icon.className =
                            "fa-solid fa-bars";
                    }

                });

            });

    }



    /* =====================================================
       EXPERIENCE ACCORDION
    ====================================================== */
    const experienceItems =
        document.querySelectorAll(".experience-item");


    experienceItems.forEach(item => {

        const toggle =
            item.querySelector(".experience-toggle");

        const detail =
            item.querySelector(".experience-detail");


        if (!toggle || !detail) {
            return;
        }


        toggle.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");


            /* Close other experience items */
            experienceItems.forEach(otherItem => {

                if (otherItem === item) {
                    return;
                }


                otherItem.classList.remove("active");


                const otherToggle =
                    otherItem.querySelector(
                        ".experience-toggle"
                    );


                const otherDetail =
                    otherItem.querySelector(
                        ".experience-detail"
                    );


                if (otherToggle) {
                    otherToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }


                if (otherDetail) {
                    otherDetail.style.maxHeight = null;
                }

            });


            /* Toggle current item */
            if (isActive) {

                item.classList.remove("active");

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                detail.style.maxHeight = null;

            }

            else {

                item.classList.add("active");

                toggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

                detail.style.maxHeight =
                    detail.scrollHeight + "px";

            }

        });

    });



    /* =====================================================
       PROJECT FILTER
    ====================================================== */
    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            /* Active button */
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            /* Filter cards */
            projectCards.forEach(card => {

                const categories =
                    card.dataset.category || "";


                if (
                    filter === "all" ||
                    categories
                        .split(" ")
                        .includes(filter)
                ) {

                    card.classList.remove("hidden");

                }

                else {

                    card.classList.add("hidden");

                }

            });

        });

    });



    /* =====================================================
       IMAGE LIGHTBOX
    ====================================================== */
    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    const lightboxClose =
        document.querySelector(".lightbox-close");

    const zoomableImages =
        document.querySelectorAll(".zoomable");


    function openLightbox(image) {

        if (!lightbox || !lightboxImage) {
            return;
        }


        lightboxImage.src = image.src;

        lightboxImage.alt =
            image.alt || "Portfolio image";


        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeLightbox() {

        if (!lightbox || !lightboxImage) {
            return;
        }


        lightbox.classList.remove("active");

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        lightboxImage.src = "";

        document.body.style.overflow =
            "";

    }


    zoomableImages.forEach(image => {

        image.addEventListener("click", () => {

            openLightbox(image);

        });

    });


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (event.target === lightbox) {
                    closeLightbox();
                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox &&
                lightbox.classList.contains(
                    "active"
                )
            ) {

                closeLightbox();

            }

        }
    );



    /* =====================================================
       CLOSE MOBILE MENU ON RESIZE
    ====================================================== */
    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 900 &&
            mobileMenu
        ) {

            mobileMenu.classList.remove(
                "active"
            );


            document.body.classList.remove(
                "menu-open"
            );


            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.className =
                        "fa-solid fa-bars";

                }

            }

        }

    });

});