document.addEventListener("DOMContentLoaded", () => {
    // Lấy thẻ div chứa lồng đèn
    const carousel = document.getElementById("carousel");

    if (carousel) {
        // Sự kiện 1: Đưa chuột vào (mouseover) -> Dừng quay
        carousel.addEventListener("mouseover", () => {
            carousel.style.animationPlayState = "paused";
        });

        // Sự kiện 2: Rút chuột ra (mouseout) -> Tiếp tục quay
        carousel.addEventListener("mouseout", () => {
            carousel.style.animationPlayState = "running";
        });
    }
});
