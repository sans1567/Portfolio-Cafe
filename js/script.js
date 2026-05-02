/* =========================
   ハンバーガーメニュー
========================= */
const btn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.hamburger-menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('open');
})

document.addEventListener('click', (e) => {
    const target = e.target;

    if(!btn.contains(target) && !menu.contains(target)) {
        btn.classList.remove('active');
        menu.classList.remove('open');
    }
})

/* ====================
    スライドショー
====================== */
const mainVisualTrack = document.querySelector('.main-visual__track');
const mainVisualSlides = document.querySelectorAll('.slide');
let num = 0;

function mainVisualSlide() {
    mainVisualTrack.style.transform = `translateX(-${num * 100}%)`;
}

setInterval(function(){
    num++;

    if(num >= mainVisualSlides.length) {
        num = 0;
    }

    mainVisualSlide();
},6000);

const mainInteriorSlides = document.querySelectorAll('.main-interior__item');
const mainInteriorTrack = document.querySelector('.main-interior__track');
const mainInteriorPrevButton = document.querySelector('.main-interior__button--prev');
const mainInteriorNextButton = document.querySelector('.main-interior__button--next');
let index = 0;

function mainInteriorSlideAnimation() {
    mainInteriorTrack.style.transform = `translateX(-${index * 100}%)`;
}

mainInteriorNextButton.addEventListener('click', () => {
    if(index < mainInteriorSlides.length - 1) {
        index++;
    } else {
        index = 0;
    }

    mainInteriorSlideAnimation();
})

mainInteriorPrevButton.addEventListener('click', () => {
    if(index > 0) {
        index--;
    } else {
        index = mainInteriorSlides.length - 1;
    }

    mainInteriorSlideAnimation();
})

setInterval(() => {
    index++;

    if(index >= mainInteriorSlides.length) {
        index = 0;
    }

    mainInteriorSlideAnimation()
}, 6000);

const pickupTrack = document.querySelector('.main-menu__pickup-track');
const pickupSlides = document.querySelectorAll('.main-menu__pickup-item');
const pickupTitle = document.querySelector('.pickup-title');
const pickupPrice = document.querySelector('.pickup-price');
const pickupDesc = document.querySelector('.pickup-desc');
const prev = document.querySelector('.main-menu__button--prev');
const next = document.querySelector('.main-menu__button--next');
let current = 0;

const pickupText = [
    {
        name: "自家製レモネード",
        price: "¥400",
        desc: "国産レモンを使用した爽やかな自家製レモネード。",
    },
    {
        name: "フレッシュトマトとバジルの春風パスタ",
        price: "¥1,180",
        desc: "完熟トマトの甘みと爽やかなバジルの香りが広がる、季節限定の一皿。",
    },
    {
        name: "ミント香るキウイのフレッシュジュース",
        price: "¥520",
        desc: "フレッシュミントとキウイで暑い季節にぴったりなリフレッシュドリンク。",
    },
    {
        name: "ベリーメープルパンケーキ",
        price: "¥980",
        desc: "ふんわり焼き上げたパンケーキに、甘酸っぱいベリーとたっぷりのシロップを添えた一皿。",
    },
]

function pickupSlideAnimation() {
    pickupTrack.style.transform = `translateX(-${current * 100}%)`;
    pickupTitle.textContent = pickupText[current].name;
    pickupPrice.textContent = pickupText[current].price;
    pickupDesc.textContent = pickupText[current].desc;  
}

next.addEventListener('click', () => {
    if(current < pickupSlides.length - 1) {
        current++;
    } else {
        current = 0;
    }

    pickupSlideAnimation();
})

prev.addEventListener('click', () => {
    if(current > 0) {
        current--;
    } else {
        current = pickupSlides.length -1;
    }

    pickupSlideAnimation();
})

setInterval(function(){
    current++;

    if(current >= pickupSlides.length) {
        current = 0;
    }

    pickupSlideAnimation()

},6000);

/* ====================
    クリック
====================== */
const mainPhoto = document.querySelector('.main-menu__photogallery-photo--main');
const photos = document.querySelectorAll('.main-menu__photogallery-photo--sub');

const menus = [
    {
        img: "./images/sp1.png",
        name: "グリルチキンと季節野菜のプレート",
        price: "¥1,200",
        desc: "香ばしく焼き上げたグリルチキンと、彩り豊かな季節野菜を一皿にまとめたプレート。"
    },
    {
        img: "./images/sp2.png",
        name: "トマトパスタ",
        price: "¥980",
        desc: "じっくり煮込んだトマトソースと香り高いバジルを合わせた、王道の一皿です。"   
    },
    {
        img: "./images/sp3.png",
        name: "クラブハウスサンド",
        price: "¥920",
        desc: "新鮮な野菜とジューシーなベーコンをたっぷり挟んだサンドです。"
    },
    {
        img: "./images/sp4.png",
        name: "ふわとろオムライス",
        price: "¥1,050",
        desc: "とろける卵と特製ケチャップライスの相性抜群。やさしい味わいが広がります。"
    },
    {
        img: "./images/sp5.png",
        name: "季節のフルーツパンケーキ",
        price: "¥1,100",
        desc: "ふわふわ食感のパンケーキに旬のフルーツをたっぷり添えた贅沢なデザート。"
    },
    {
        img: "./images/sp6.png",
        name: "チョコワッフル",
        price: "¥780",
        desc: "外はサクサク、中はふんわり。濃厚チョコソースをたっぷりかけた一品です。"
    },
    {
        img: "./images/sp7.png",
        name: "抹茶ラテ",
        price: "¥650",
        desc: "香り豊かな抹茶とミルクを合わせた、ほっと落ち着く和のドリンク。"
    },
    {
        img: "./images/sp8.png",
        name: "ブレンドコーヒー",
        price: "¥500",
        desc: "丁寧にドリップした香り高い一杯。食後にもデザートにもよく合います。"
    },
    {
        img: "./images/sp9.png",
        name: "濃厚ココア",
        price: "¥600",
        desc: "カカオのコクをしっかり感じられる、やさしい甘さのホットドリンク。"
    },
]

const title = document.querySelector('.menu-title');
const price = document.querySelector('.menu-price');
const desc = document.querySelector('.menu-desc');

photos.forEach( (photo,index) => {
    photo.addEventListener('click', (e) => {
        console.log(photo, index);
        mainPhoto.src = menus[index].img;
        title.textContent = menus[index].name;
        price.textContent = menus[index].price;
        desc.textContent = menus[index].desc;
    })
})

/* ====================
    スクロール
====================== */
const mainMenuExplanation = document.querySelector('.main-menu__explanation');

function mainMenuExplanationShow(entries) {
    if(entries[0].isIntersecting) {
        mainMenuExplanation.classList.add('is-visible');
    } else {
        mainMenuExplanation.classList.remove('is-visible');
    }
}

const explanationObserver = new IntersectionObserver(mainMenuExplanationShow);

explanationObserver.observe(mainMenuExplanation);
/* ============================
    文字が浮き出てくるアニメーション
===============================*/
const mainInteriorDescription = document.querySelector('.main-interior__description p');
let count = 0;

const descText = mainInteriorDescription.textContent; /*pタグ内のテキスト*/
const descTextSplits = descText.split('');/*テキストを分割*/

const descTextMap = descTextSplits.map((descTextSplit) => `<span>${descTextSplit}</span>`).join("");/*<spanタグの新たな配列を作成>*/

mainInteriorDescription.innerHTML = descTextMap;

const spans = mainInteriorDescription.querySelectorAll('span');

let timer;

function descObserver(entries) {
    if(entries[0].isIntersecting) {
        spans.forEach((span) => {span.classList.remove('is-visible')});

        let count = 0;

        timer = setInterval(() => {
            spans[count].classList.add('is-visible');
            count++;
            
            if(count >= spans.length) {
                clearInterval(timer);
            }
        }, 80);
    }
}

const descObserv = new IntersectionObserver(descObserver);

descObserv.observe(mainInteriorDescription);