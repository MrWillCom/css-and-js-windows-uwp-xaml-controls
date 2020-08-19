var uwpBtn = document.getElementById("uwp-btn");
var uwpBtnBorder = document.getElementById("uwp-border");
var uwpBtnReveal = document.getElementById("uwp-reveal-highlight");

uwpBtn.style.width = uwpBtnBorder.clientWidth + "px"
uwpBtn.style.height = uwpBtnBorder.clientHeight + "px"

function clickRotate3d(e) {
    uwpBtn.classList.remove("click");

    var mousePos = { x: e.offsetX, y: e.offsetY };
    var rotateSize = { width: uwpBtn.clientWidth, height: uwpBtn.clientHeight };

    var innerMousePos = {
        x: mousePos.x - rotateSize.width / 2,
        y: mousePos.y - rotateSize.height / 2
    };

    var rotateDeg = {
        x: (-innerMousePos.y / rotateSize.height) * 2 * (rotateSize.height / 15),
        y: (innerMousePos.x / rotateSize.width) * 2 * (rotateSize.width / 15)
    };

    uwpBtn.style.transform =
        "perspective(1000px) rotateX(" +
        rotateDeg.x +
        "deg) rotateY(" +
        rotateDeg.y +
        "deg) scale3d(0.95, 0.95, 0.95)";
}

function clearRotate3d(e) {
    uwpBtn.classList.add("click");
    uwpBtn.style.transform = "";
}

function setOutlineShow(show) {
    if (show) {
        uwpBtn.classList.remove('hide-outline');
    } else {
        uwpBtn.classList.add('hide-outline');
    }
}

function addHoverBorder(e) {
    uwpBtnBorder.classList.add("hover");
}

function clearHoverBorder(e) {
    uwpBtnBorder.classList.remove("hover");
}

function placeReveal(e) {
    uwpBtnReveal.style.left = e.offsetX + "px";
    uwpBtnReveal.style.top = e.offsetY + "px";
}

function showReveal(e) {
    uwpBtnReveal.classList.add("show");
}

function hideReveal(e) {
    uwpBtnReveal.classList.remove("show");
}

uwpBtn.onmousedown = (e) => {
    clickRotate3d(e);
    clearHoverBorder(e);
    setOutlineShow(false);
};

uwpBtn.onmouseup = (e) => {
    clearRotate3d(e);
    addHoverBorder(e);
    setOutlineShow(true);
    uwpBtn.blur();
};

uwpBtn.onmouseenter = (e) => {
    addHoverBorder(e);
    showReveal(e);
};

uwpBtn.onmouseleave = (e) => {
    clearRotate3d(e);
    clearHoverBorder(e);
    hideReveal(e);
    setOutlineShow(true);
};

uwpBtn.onmousemove = (e) => {
    placeReveal(e);
};

uwpBtn.onclick = (e) => {
    console.log(e)
}
