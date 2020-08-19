var uwpBtn = document.getElementById("uwp-btn");

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
        "deg) scale3d(0.97, 0.97, 0.97)";
}

function clearRotate3d(e) {
    uwpBtn.classList.add("click");
    uwpBtn.style.transform = "";
}

function setClick(listener) {
    mousedownFunc = listener;
}

function setOutlineShow(show) {
    if (show) {
        uwpBtn.classList.remove('hide-outline');
    } else {
        uwpBtn.classList.add('hide-outline');
    }
}

uwpBtn.onmousedown = (e) => {
    clickRotate3d(e);
    setOutlineShow(false);
};

uwpBtn.onmouseup = (e) => {
    clearRotate3d(e);
    setOutlineShow(true);
    uwpBtn.blur();
};

uwpBtn.onmouseenter = (e) => { };

uwpBtn.onmouseleave = (e) => {
    clearRotate3d(e);
    setOutlineShow(true);
};

uwpBtn.onmousemove = (e) => { };

uwpBtn.onclick = (e) => {
    console.log(e)
}
