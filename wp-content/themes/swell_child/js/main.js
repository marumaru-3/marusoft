// セカンドページはPCでもメニューを表示
let topMenu = document.querySelector("#top-menu");
let header = document.querySelector("#header");

if (topMenu == null) {
  header.style.display = "block";
}

// ヘッダーロゴをクリック時に出るborder
let link = document.querySelector(".c-headLogo__link");

link.addEventListener("click", () => {
  link.style.border = "1px dashed #39a0ff";
});

// ページトップボタン
let pageTop = document.querySelector(".page-top-link");

window.onhashchange = () => {
  if (window.location.hash === "#body_wrap") {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
};

let mission = document.querySelector("#mission");
let work = document.querySelector("#work");
let service = document.querySelector("#service");
let company = document.querySelector("#company");
let news = document.querySelector("#news");
let inquiry = document.querySelector("#inquiry");

if (mission != null) {
  document.querySelectorAll(".c-gnav a")[0].classList.add("click");
} else if (work != null) {
  document.querySelectorAll(".c-gnav a")[1].classList.add("click");
} else if (service != null) {
  document.querySelectorAll(".c-gnav a")[2].classList.add("click");
} else if (company != null) {
  document.querySelectorAll(".c-gnav a")[3].classList.add("click");
} else if (news != null) {
  document.querySelectorAll(".c-gnav a")[4].classList.add("click");
} else if (inquiry != null) {
  document.querySelectorAll(".c-gnav a")[5].classList.add("click");
}
