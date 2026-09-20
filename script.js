document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* =====================================================
           CURRENT YEAR
        ====================================================== */

        const yearElement =
            document.getElementById(
                "year"
            );

        if (yearElement) {

            yearElement.textContent =
                new Date().getFullYear();

        }


        /* =====================================================
           NAVBAR SCROLL EFFECT
        ====================================================== */

        const navbar =
            document.getElementById(
                "navbar"
            );

        const updateNavbar = () => {

            if (!navbar) {
                return;
            }

            if (
                window.scrollY > 20
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        };


        updateNavbar();


        window.addEventListener(
            "scroll",
            updateNavbar,
            {
                passive: true
            }
        );


        /* =====================================================
           MOBILE MENU
        ====================================================== */

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


                    const icon =
                        menuToggle.querySelector(
                            "i"
                        );


                    if (icon) {

                        if (
                            mobileMenu.classList.contains(
                                "active"
                            )
                        ) {

                            icon.classList.remove(
                                "fa-bars"
                            );

                            icon.classList.add(
                                "fa-xmark"
                            );

                        } else {

                            icon.classList.remove(
                                "fa-xmark"
                            );

                            icon.classList.add(
                                "fa-bars"
                            );

                        }

                    }

                }
            );


            const mobileLinks =
                mobileMenu.querySelectorAll(
                    "a"
                );


            mobileLinks.forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {

                            mobileMenu.classList.remove(
                                "active"
                            );


                            const icon =
                                menuToggle.querySelector(
                                    "i"
                                );


                            if (icon) {

                                icon.classList.remove(
                                    "fa-xmark"
                                );

                                icon.classList.add(
                                    "fa-bars"
                                );

                            }

                        }
                    );

                }
            );

        }


        /* =====================================================
           EXPERIENCE ACCORDION
        ====================================================== */

        const experienceItems =
            document.querySelectorAll(
                ".experience-item"
            );


        experienceItems.forEach(
            (item) => {

                const button =
                    item.querySelector(
                        ".experience-toggle"
                    );


                if (!button) {
                    return;
                }


                button.addEventListener(
                    "click",
                    () => {

                        const isActive =
                            item.classList.contains(
                                "active"
                            );


                        /*
                         * Close other experiences
                         */

                        experienceItems.forEach(
                            (otherItem) => {

                                if (
                                    otherItem !==
                                    item
                                ) {

                                    otherItem.classList.remove(
                                        "active"
                                    );


                                    const otherButton =
                                        otherItem.querySelector(
                                            ".experience-toggle"
                                        );


                                    if (
                                        otherButton
                                    ) {

                                        otherButton.setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );

                                    }

                                }

                            }
                        );


                        /*
                         * Toggle selected experience
                         */

                        if (isActive) {

                            item.classList.remove(
                                "active"
                            );

                            button.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        } else {

                            item.classList.add(
                                "active"
                            );

                            button.setAttribute(
                                "aria-expanded",
                                "true"
                            );

                        }

                    }
                );

            }
        );


        /* =====================================================
           IMAGE LIGHTBOX
        ====================================================== */

        const lightbox =
            document.getElementById(
                "lightbox"
            );

        const lightboxImage =
            document.getElementById(
                "lightbox-image"
            );

        const lightboxClose =
            document.querySelector(
                ".lightbox-close"
            );

        const zoomableImages =
            document.querySelectorAll(
                ".zoomable"
            );


        const openLightbox =
            (image) => {

                if (
                    !lightbox ||
                    !lightboxImage
                ) {
                    return;
                }


                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt || "";


                lightbox.classList.add(
                    "active"
                );


                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                document.body.classList.add(
                    "lightbox-open"
                );

            };


        const closeLightbox =
            () => {

                if (
                    !lightbox ||
                    !lightboxImage
                ) {
                    return;
                }


                lightbox.classList.remove(
                    "active"
                );


                lightbox.setAttribute(
                    "aria-hidden",
                    "true"
                );


                document.body.classList.remove(
                    "lightbox-open"
                );


                setTimeout(
                    () => {

                        lightboxImage.src =
                            "";

                    },
                    250
                );

            };


        zoomableImages.forEach(
            (image) => {

                image.addEventListener(
                    "click",
                    () => {

                        openLightbox(
                            image
                        );

                    }
                );

            }
        );


        if (lightboxClose) {

            lightboxClose.addEventListener(
                "click",
                closeLightbox
            );

        }


        if (lightbox) {

            lightbox.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target ===
                        lightbox
                    ) {

                        closeLightbox();

                    }

                }
            );

        }


        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeLightbox();

                }

            }
        );


        /* =====================================================
           SMOOTH ANCHOR NAVIGATION
        ====================================================== */

        const anchorLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        anchorLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior:
                                    "smooth",

                                block:
                                    "start"
                            }
                        );

                    }
                );

            }
        );


        /* =====================================================
           SCROLL REVEAL
        ====================================================== */

        const revealElements =
            document.querySelectorAll(
                [
                    ".section-heading",
                    ".education-card",
                    ".experience-item",
                    ".project-card",
                    ".skill-card",
                    ".contact-card",
                    ".about-highlight"
                ].join(",")
            );


        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "reveal"
                );

            }
        );


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(

                    (
                        entries,
                        observerInstance
                    ) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add(
                                            "visible"
                                        );


                                    observerInstance
                                        .unobserve(
                                            entry.target
                                        );

                                }

                            }
                        );

                    },

                    {
                        threshold: 0.10,
                        rootMargin:
                            "0px 0px -40px 0px"
                    }

                );


            revealElements.forEach(
                (element) => {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                (element) => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }


        /* =====================================================
           IMAGE ERROR FALLBACK
        ====================================================== */

        const allImages =
            document.querySelectorAll(
                "img"
            );


        allImages.forEach(
            (image) => {

                image.addEventListener(
                    "error",
                    () => {

                        console.warn(
                            "Image failed to load:",
                            image.getAttribute(
                                "src"
                            )
                        );


                        image.classList.add(
                            "image-error"
                        );

                    }
                );

            }
        );

    }
);
