// 一共8张图片 p1~p8
const work1ImgList = [
    "./images/work1-p1.jpg",
    "./images/work1-p2.jpg",
    "./images/work1-p3.jpg",
    "./images/work1-p4.jpg",
    "./images/work1-p5.jpg",
    "./images/work1-p6.jpg",
    "./images/work1-p7.jpg",
    "./images/work1-p8.jpg"
];

let nowPage = 0;

function openModal(workId) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const totalPageDom = document.getElementById("totalPage");
    const currentPageDom = document.getElementById("currentPage");

    nowPage = 0;
    modalImg.src = work1ImgList[nowPage];
    totalPageDom.innerText = work1ImgList.length;
    currentPageDom.innerText = nowPage + 1;
    modal.style.display = "block";
}

function changePage(step) {
    const modalImg = document.getElementById("modal-img");
    const currentPageDom = document.getElementById("currentPage");
    nowPage = nowPage + step;
    if (nowPage < 0) nowPage = work1ImgList.length - 1;
    if (nowPage >= work1ImgList.length) nowPage = 0;

    modalImg.src = work1ImgList[nowPage];
    currentPageDom.innerText = nowPage + 1;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function (e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}