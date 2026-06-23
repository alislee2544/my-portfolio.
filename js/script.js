document.addEventListener("DOMContentLoaded", () => {
    console.log("Website đã tải xong!");
    alert("Chào mừng đến với portfolio của Đạt!");
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website đã tải xong!");
    alert("Chào mừng đến với portfolio của Đạt!");

    const carousel = document.getElementById("carousel");

    if (carousel) {
        carousel.addEventListener("mouseenter", () => {
            carousel.style.animationPlayState = "paused";
        });

        carousel.addEventListener("mouseleave", () => {
            carousel.style.animationPlayState = "running";
        });
    }
});
