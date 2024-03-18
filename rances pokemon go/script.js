document.getElementById("readMoreBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        document.getElementById("readMoreBtn").textContent = "Read Less";
    } else {
        moreInfo.classList.add("hidden");
        document.getElementById("readMoreBtn").textContent = "Read More";
    }
});