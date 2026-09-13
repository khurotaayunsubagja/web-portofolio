// =====================================================
// SMOOTH SCROLL
// =====================================================

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



// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle =
    document.querySelector(".menu-toggle");


const mobileMenu =
    document.querySelector(".mobile-menu");


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
                        .remove("active");

                }
            );

        });

}



// =====================================================
// EXPERIENCE ACCORDION
// =====================================================

const experienceToggles =
    document.querySelectorAll(
        ".experience-toggle"
    );


experienceToggles.forEach((toggle) => {

    toggle.addEventListener(
        "click",
        () => {

            const currentItem =
                toggle.closest(
                    ".experience-item"
                );


            const isActive =
                currentItem
                    .classList
                    .contains("active");


            document
                .querySelectorAll(
                    ".experience-item"
                )
                .forEach((item) => {

                    item.classList.remove(
                        "active"
                    );


                    const button =
                        item.querySelector(
                            ".experience-toggle"
                        );


                    if (button) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


            if (!isActive) {

                currentItem
                    .classList
                    .add("active");


                toggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});



// =====================================================
// IMAGE LIGHTBOX
// =====================================================

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


zoomableImages.forEach((image) => {

    image.addEventListener(
        "click",
        () => {

            if (
                !lightbox ||
                !lightboxImage
            ) {
                return;
            }


            lightboxImage.src =
                image.src;


            lightboxImage.alt =
                image.alt;


            lightbox.classList.add(
                "active"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "no-scroll"
            );

        }
    );

});



function closeLightbox() {

    if (!lightbox) {
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
        "no-scroll"
    );

}



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
                event.target === lightbox
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
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);



// =====================================================
// PAUSE OTHER VIDEOS
// =====================================================

const projectVideos =
    document.querySelectorAll(
        ".project-video video"
    );


projectVideos.forEach((video) => {

    video.addEventListener(
        "play",
        () => {

            projectVideos.forEach(
                (otherVideo) => {

                    if (
                        otherVideo !== video
                    ) {

                        otherVideo.pause();

                    }

                }
            );

        }
    );

});



// =====================================================
// AUTOMATIC FOOTER YEAR
// =====================================================

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
