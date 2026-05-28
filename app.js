const ASSET = "./assets/";

const navItems = [
  {
    label: "킹콩러너스",
    href: "brand.html",
    children: [
      { label: "클럽 소개", href: "brand.html" },
      { label: "러닝 STORY", href: "story.html" },
    ],
  },
  { label: "러닝일정", href: "calendar.html" },
  { label: "가입안내", href: "register.html" },
  { label: "공지사항", href: "notice.html" },
];

const defaultProducts = [
  {
    id: "notice-0601",
    name: "6월 정기 러닝 모임 일정 안내",
    price: "매주 토요일 오전 7시",
    image: "picture/20260426_072346.jpg",
    type: "notice",
    date: "2026.05.28",
    summary: "킹콩 러너스 클럽의 6월 정기런, 야간런, 초보 러너 모임 일정을 한눈에 확인하세요.",
  },
  {
    id: "guide-2026",
    name: "킹콩 러너스 클럽 신규 회원 가입 안내",
    price: "상시 모집",
    image: "picture/20260314_074610.jpg",
    type: "guide",
    date: "2026.05.28",
    summary: "처음 달리는 러너도 환영합니다. 가입 절차, 준비물, 오픈채팅 참여 방법을 안내합니다.",
  },
  {
    id: "instagram",
    name: "킹콩 러너스 클럽 인스타그램",
    price: "팔로우하세요.",
    image: "picture/20260426_093654.jpg",
    type: "channel",
    date: "상시",
    summary: "정기런 사진, 완주 후기, 번개런 소식을 공식 소셜 채널에서 빠르게 확인하세요.",
  },
  {
    id: "challenge-5k",
    name: "초보 러너 5K 챌린지 프로그램 모집",
    price: "6월 시작",
    image: "picture/20260329_072115.jpg",
    type: "event",
    date: "2026.06.03",
    summary: "걷기와 조깅부터 5K 완주까지 함께 준비하는 4주 러닝 루틴입니다.",
  },
  {
    id: "kakao",
    name: "킹콩 러너스 카카오 채널",
    price: "공지 알림",
    image: "picture/1777181388630.jpg",
    type: "channel",
    date: "상시",
    summary: "모임 장소 변경, 우천 공지, 가입 안내를 카카오 채널에서 받아보세요.",
  },
];

const defaultNotices = [
  ["공지", "킹콩 러너스 클럽 6월 신규 회원 가입 안내", "관리자", "2026.05.28", "6월 신규 회원을 상시 모집합니다. 가입안내 메뉴에서 준비물과 참여 방법을 확인해 주세요."],
  ["공지", "토요 정기런 집합 장소 및 준비물 안내", "관리자", "2026.05.26", "토요 정기런은 오전 7시 한강공원에서 시작합니다. 개인 물, 러닝화, 가벼운 여벌 옷을 준비해 주세요."],
  ["공지", "초보 러너 5K 챌린지 신청 안내", "운영팀", "2026.05.24", "걷기와 조깅부터 5K 완주까지 함께 준비하는 4주 프로그램입니다."],
  ["12", "러닝 후 뒤풀이 및 회비 사용 내역 공지", "운영팀", "2026.05.21", "월별 회비 사용 내역과 뒤풀이 신청 방식은 관리자 공지로 업데이트됩니다."],
  ["11", "우천 시 모임 운영 기준 안내", "운영팀", "2026.05.18", "우천 예보가 있을 경우 모임 당일 오전 카카오채널과 공지사항으로 진행 여부를 안내합니다."],
];

const defaultNewsletters = [
  ["2026.05.28", "KINGKONG NEWS, 6월 러닝 소식", "정기런 일정, 신규 회원 안내, 챌린지 모집 소식을 정리했습니다."],
  ["2026.05.22", "첫 모임 전 체크리스트", "러닝화, 개인 물, 여벌 옷 등 편하게 참여하기 위한 준비물을 안내합니다."],
  ["2026.05.15", "함께 달릴 때 더 오래 달립니다", "킹콩 러너스 클럽 멤버들의 페이스 그룹과 응원 문화를 소개합니다."],
];

const defaultRunnersVoice = [
  ["2026.05.26", "첫 5K를 완주한 신입 멤버의 루틴", "작은 습관으로 첫 완주를 만든 러너의 기록입니다."],
  ["2026.05.16", "서로의 페이스메이커가 된 사람들", "킹콩 러너스에서 만난 멤버들의 팀 러닝 스토리입니다."],
  ["2026.04.30", "퇴근 후 야간런이 주는 리듬", "하루를 마무리하며 함께 달리는 멤버들의 이야기를 담았습니다."],
];

const defaultSchedules = [
  { date: "2026.06.06", title: "토요 정기런", place: "한강공원 집결", note: "5K·10K 페이스 그룹" },
  { date: "2026.06.13", title: "신규 회원 오리엔테이션", place: "러닝 후 카페 모임", note: "가입 안내 및 Q&A" },
  { date: "2026.06.20", title: "초보 러너 5K 챌린지", place: "트랙 러닝", note: "기초 자세와 페이스 연습" },
  { date: "2026.06.27", title: "월말 롱런 데이", place: "도심 순환 코스", note: "15K 선택 코스" },
];

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";
const ADMIN_SESSION_KEY = "kingkong-admin-session";
const STORE_KEYS = {
  products: "kingkong-admin-products",
  notices: "kingkong-admin-notices",
  newsletters: "kingkong-admin-newsletters",
  runnersVoice: "kingkong-admin-runners-voice",
  schedules: "kingkong-admin-schedules",
};

const PRODUCT_IMAGE_FALLBACK = "picture/1777181388630.jpg";
const DEFAULT_PRODUCT_IMAGES = {
  "notice-0601": "picture/20260426_072346.jpg",
  "guide-2026": "picture/20260314_074610.jpg",
  instagram: "picture/20260426_093654.jpg",
  "challenge-5k": "picture/20260329_072115.jpg",
  kakao: "picture/1777181388630.jpg",
};

const products = loadCollection("products", defaultProducts);
const notices = loadCollection("notices", defaultNotices);
const newsletters = loadCollection("newsletters", defaultNewsletters);
const runnersVoice = loadCollection("runnersVoice", defaultRunnersVoice);
const schedules = loadCollection("schedules", defaultSchedules);

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function loadCollection(name, fallback) {
  if (typeof localStorage === "undefined") return cloneData(fallback);
  try {
    const saved = localStorage.getItem(STORE_KEYS[name]);
    const data = saved ? JSON.parse(saved) : cloneData(fallback);
    return name === "products" ? migrateProductImages(data) : data;
  } catch {
    return cloneData(fallback);
  }
}

function migrateProductImages(items) {
  return items.map((item) => {
    if (!item || typeof item !== "object") return item;
    const currentImage = item.image || "";
    return {
      ...item,
      image: currentImage.startsWith("picture/") ? currentImage : DEFAULT_PRODUCT_IMAGES[item.id] || PRODUCT_IMAGE_FALLBACK,
    };
  });
}

function saveCollection(name, items) {
  localStorage.setItem(STORE_KEYS[name], JSON.stringify(items));
}

function resetCollection(name) {
  localStorage.removeItem(STORE_KEYS[name]);
}

function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function asset(name) {
  return ASSET + name;
}

function pageId() {
  return document.body.dataset.page || "home";
}

function renderLayout(content) {
  document.getElementById("app").innerHTML = `
    <div class="site">
      <div class="top-banner">
        <span>킹콩 러너스 클럽 | 함께 달리고 오래 즐기는 러닝 동호회</span>
        <button type="button" aria-label="상단배너 닫기" data-close-top>
          <img src="${asset("ic_top_close.svg")}" alt="">
        </button>
      </div>
      <header class="site-header" data-header>
        <div class="header-inner">
          <a class="logo text-logo" href="index.html" aria-label="킹콩 러너스 클럽 홈">
            <span>KINGKONG</span>
            <em>RUNNERS CLUB</em>
          </a>
          <nav class="nav" aria-label="주요 메뉴">
            ${navItems.map(renderNavItem).join("")}
          </nav>
          <div class="header-utils">
            <a class="util-link" href="admin.html">ADMIN</a>
            <button class="icon-btn" type="button" aria-label="검색창 열기" data-search-toggle>
              <img class="icon-light" src="${asset("ic_hd_search.svg")}" alt="">
              <img class="icon-dark" src="${asset("ic_hd_search_b.svg")}" alt="">
            </button>
            <div class="lang">
              <button class="lang-current" type="button">KR <img src="${asset("ic_hd_arr_down_b.svg")}" alt=""></button>
              <div class="lang-menu">
                <a href="index.html">KR</a>
                <a href="index.html" lang="en">EN</a>
              </div>
            </div>
            <button class="menu-toggle" type="button" aria-label="메뉴 열기" data-menu-toggle>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div class="search-panel" aria-label="검색 패널">
          <form class="search-form" action="search.html">
            <label class="sr-only" for="global-search">검색어</label>
            <input id="global-search" name="q" type="search" autocomplete="off" placeholder="검색어를 입력하세요">
            <button type="submit" aria-label="검색"><img src="${asset("ic_search.svg")}" alt=""></button>
          </form>
        </div>
      </header>
      <main class="main ${pageId() === "home" ? "" : "page-main"}">
        ${content}
      </main>
      ${renderFooter()}
    </div>
  `;
}

function renderNavItem(item) {
  return `
    <div class="nav-item">
      <a class="nav-link" href="${item.href}">${item.label}</a>
      ${item.children ? `<div class="dropdown">${item.children.map((child) => `<a href="${child.href}">${child.label}</a>`).join("")}</div>` : ""}
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-address">
          <p>© 2026 KINGKONG RUNNERS CLUB ALL RIGHTS RESERVED.</p>
          <span>CLUB.<strong>킹콩 러너스 클럽</strong></span><span>RUN LEAD.<strong>운영진</strong></span><br>
          <span>AREA.<strong>서울 한강·도심 러닝 코스</strong></span><span>NOTICE.<strong>신규 회원 상시 모집</strong></span><br>
          <span>CONTACT.<strong>카카오채널 @킹콩러너스클럽</strong></span><span>EMAIL.<strong>hello@kingkongrunners.club</strong></span>
        </div>
        <div class="cs">
          <h3>CLUB CONTACT</h3>
          <strong>@킹콩러너스클럽</strong>
        </div>
        <ul class="footer-links">
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="agreement.html">이용약관</a></li>
          <li><a href="privacy.html">개인정보처리방침</a></li>
        </ul>
        <ul class="sns-links">
          <li><a href="https://www.instagram.com/kingkongrunnersclub/" target="_blank" rel="noreferrer">INSTAGRAM</a></li>
        </ul>
      </div>
    </footer>
  `;
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-thumb" href="product.html?id=${product.id}">
        <img src="${asset(product.image)}" alt="${product.name}">
      </a>
      <div class="product-info">
        <a class="product-name" href="product.html?id=${product.id}">${product.name}</a>
        <div class="product-price">${product.price}</div>
      </div>
    </article>
  `;
}

function renderHome() {
  return `
    <section class="hero-slider" data-hero-slider>
      <div class="hero-track">
        <div class="hero-slide">
          <video autoplay muted loop playsinline preload="metadata" poster="${asset("picture/20260426_072346.jpg")}" aria-label="KINGKONG RUNNERS CLUB hero video">
            <source src="${asset("video/hero.mp4")}" type="video/mp4">
          </video>
        </div>
        <div class="hero-slide">
          <video autoplay muted loop playsinline preload="metadata" poster="${asset("picture/20260329_072318.jpg")}" aria-label="KINGKONG RUNNERS CLUB group running video">
            <source src="${asset("video/hero2.mp4")}" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="hero-pagination"><span data-hero-current>01</span> / <span>02</span></div>
    </section>

    <section class="section product-strip container">
      <div class="product-track">
        ${products.map(productCard).join("")}
      </div>
      <div class="product-scrollbar" role="scrollbar" aria-label="가입안내 목록 가로 스크롤" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0" data-product-scrollbar>
        <span class="product-scrollbar-thumb"></span>
      </div>
    </section>

    <section class="split-banners">
      <a class="split-banner" href="calendar.html">
        <img src="${asset("picture/20251017_180003.jpg")}" alt="">
        <div class="banner-copy">
          <h2>KINGKONG<br>Weekly Run Log</h2>
          <p>정기런 일정과 모임 기록을 한눈에 확인!</p>
          <span class="text-link">VIEW MORE</span>
        </div>
      </a>
      <a class="split-banner" href="https://www.instagram.com/kingkongrunnersclub/" target="_blank" rel="noreferrer">
        <img src="${asset("picture/20260426_093721.jpg")}" alt="킹콩 러너스 클럽 인스타그램">
      </a>
    </section>

    <section class="news-section">
      <div class="news-left">
        <h2>KINGKONG NEWS <a href="newsletter.html" aria-label="뉴스 더보기">↗</a></h2>
        <div class="news-tabs">
          <button type="button" class="is-active" data-news-tab="newsletter">최신뉴스레터</button>
          <button type="button" data-news-tab="runners">러너의소리</button>
        </div>
      </div>
      <div class="news-list" data-news-list>${renderNewsList(newsletters)}</div>
    </section>

    <section class="wide-banner" data-wide-banner>
      <div class="wide-banner-frame">
        <div class="wide-banner-track">
          <a class="wide-banner-slide" href="brand.html"><img src="${asset("picture/20260329_072318.jpg")}" alt="킹콩 러너스 클럽 소개"></a>
          <a class="wide-banner-slide" href="story.html"><img src="${asset("picture/20260426_075115.jpg")}" alt="킹콩 러너스 클럽 캠페인"></a>
        </div>
      </div>
      <div class="banner-dots">
        <button type="button" class="is-active" data-wide-dot="0" aria-label="첫 번째 배너"></button>
        <button type="button" data-wide-dot="1" aria-label="두 번째 배너"></button>
      </div>
    </section>

    <section class="board-banners">
      <a class="board-tile" href="magazine.html">
        <img src="${asset("picture/20251123_104709.jpg")}" alt="러닝매거진">
        <span>Insight, Club Magazine<br>러닝의 루틴과 스토리를 한눈에</span>
      </a>
      <a class="board-tile" href="runners.html">
        <img src="${asset("picture/20260426_075120.jpg")}" alt="러너의 소리">
        <span>Echo<br>러너의 소리, 함께 울리는 진짜 이야기들</span>
      </a>
    </section>
  `;
}

function renderNewsList(items) {
  return items.map((item) => `
    <a class="news-item" href="newsletter.html">
      <time>${item[0]}</time>
      <strong>${item[1]}</strong>
      <p>${item[2]}</p>
    </a>
  `).join("");
}

function renderBrand() {
  return `
    <section class="brand-hero">
      <img src="${asset("picture/20260426_093220.jpg")}" alt="">
      <div class="narrow">
        <h1>Run Together, Grow Stronger</h1>
        <p>킹콩 러너스 클럽은 함께 달리고 오래 즐기는 러닝 동호회입니다. 정기런, 번개런, 신규 회원 가입 공지와 클럽 소식을 한곳에서 전합니다.</p>
      </div>
    </section>
    <section class="section narrow intro-grid">
      <div>
        <h2>혼자보다 멀리, 함께라서 꾸준히.</h2>
      </div>
      <div>
        <p>킹콩 러너스 클럽은 초보 러너부터 기록을 준비하는 러너까지 편하게 합류할 수 있는 커뮤니티입니다. 모임 일정, 가입 안내, 공지사항, 멤버 이야기를 보기 쉽게 정리합니다.</p>
        <p>러너는 정기런 일정, 참여 안내, 우천 공지, 클럽 뉴스와 후기를 한 화면에서 확인할 수 있습니다.</p>
        <div class="stat-row">
          <div class="stat"><strong>SAT</strong><span>토요 정기런</span></div>
          <div class="stat"><strong>5K·10K</strong><span>페이스 그룹 운영</span></div>
          <div class="stat"><strong>OPEN</strong><span>신규 회원 환영</span></div>
        </div>
      </div>
    </section>
  `;
}

function renderStory() {
  return `
    ${pageTitle("러닝 STORY", "킹콩 러너스 클럽의 모임, 챌린지, 멤버 이야기를 전합니다.")}
    <section class="section narrow story-grid">
      <a class="story-card" href="magazine.html">
        <img src="${asset("picture/20260426_093654.jpg")}" alt="">
        <div><h2>RUN &amp; SHARE</h2><p>함께 달리고 서로의 성장을 나누는 클럽 문화를 소개합니다.</p></div>
      </a>
      <a class="story-card" href="runners.html">
        <img src="${asset("picture/20260426_093721.jpg")}" alt="">
        <div><h2>SAFE &amp; FUN</h2><p>안전하게 모이고 즐겁게 이어가는 러닝 문화를 모았습니다.</p></div>
      </a>
    </section>
  `;
}

function renderCalendar() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthMatch = (schedules[0]?.date || "2026.06.01").match(/^(\d{4})\.(\d{2})/);
  const year = Number(monthMatch?.[1] || 2026);
  const month = Number(monthMatch?.[2] || 6);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push({ day: "", muted: true });
  for (let i = 1; i <= lastDate; i += 1) {
    const dayKey = `${year}.${String(month).padStart(2, "0")}.${String(i).padStart(2, "0")}`;
    const title = schedules.find((schedule) => schedule.date === dayKey)?.title || "";
    cells.push({ day: i, title });
  }
  while (cells.length % 7) cells.push({ day: "", muted: true });

  return `
    ${pageTitle("러닝일정", "킹콩 러너스 클럽의 정기런과 주요 모임 일정을 확인하세요.")}
    <section class="section narrow calendar-layout">
      <div class="calendar-box">
        <div class="calendar-head">
          <h2>${year}.${String(month).padStart(2, "0")}</h2>
          <a class="outline-btn" href="register.html">가입안내</a>
        </div>
        <div class="calendar-grid">
          ${days.map((day) => `<span>${day}</span>`).join("")}
          ${cells.map((cell) => `<div class="calendar-day ${cell.muted ? "is-muted" : ""}">${cell.day}${cell.title ? `<strong>${cell.title}</strong>` : ""}</div>`).join("")}
        </div>
      </div>
      <aside class="schedule-list">
        ${schedules.map((schedule) => `
          <a class="schedule-card" href="register.html">
            <time>${schedule.date}</time>
            <strong>${schedule.title}</strong>
            <p>${schedule.place} · ${schedule.note}</p>
          </a>
        `).join("")}
      </aside>
    </section>
  `;
}

function renderRegister() {
  return `
    ${pageTitle("가입안내", "현재 참여 가능한 모임과 가입 채널을 확인하세요.")}
    <section class="section container">
      <div class="filter-row">
        <select aria-label="정렬">
          <option>최신공지</option>
          <option>모임명</option>
          <option>채널안내</option>
        </select>
        <input type="search" placeholder="모임 또는 공지 검색" aria-label="모임 또는 공지 검색" data-list-filter>
      </div>
      <div class="list-grid" data-filter-target>
        ${products.map(productCard).join("")}
      </div>
    </section>
  `;
}

function renderNotice() {
  const requestedId = Number(new URLSearchParams(location.search).get("id"));
  const selected = Number.isInteger(requestedId) ? notices[requestedId] : null;
  if (selected) {
    return `
      ${pageTitle(selected[1], `${selected[2]} · ${selected[3]}`)}
      <section class="section narrow">
        <article class="notice-detail">
          <div class="notice-detail-meta"><span>${selected[0]}</span><span>${selected[3]}</span></div>
          <p>${selected[4] || "상세 내용은 관리자 페이지에서 추가할 수 있습니다."}</p>
        </article>
        <div class="page-actions"><a class="outline-btn" href="notice.html">목록으로</a></div>
      </section>
    `;
  }

  return `
    ${pageTitle("공지사항", "킹콩 러너스 클럽의 소식, 가입 안내, 모임 운영 공지입니다.")}
    <section class="section narrow">
      ${boardTable(notices)}
      ${pagination()}
    </section>
  `;
}

function renderNewsletter() {
  return `
    ${pageTitle("KINGKONG NEWS", "최신 소식과 멤버 이야기를 확인하세요.")}
    <section class="section narrow">
      <div class="story-grid">
        <div>
          <div class="section-title"><h2>최신뉴스레터</h2></div>
          ${renderNewsList(newsletters)}
        </div>
        <div>
          <div class="section-title"><h2>러너의소리</h2></div>
          ${renderNewsList(runnersVoice)}
        </div>
      </div>
    </section>
  `;
}

function renderMagazine() {
  const magazineImages = [
    "picture/20251123_081255.jpg",
    "picture/20251123_081309(0).jpg",
    "picture/20260426_093205.jpg",
    "picture/20260426_093301(0).jpg",
  ];
  return `
    ${pageTitle("러닝매거진", "러닝 루틴과 클럽 현장 이야기를 아카이브합니다.")}
    <section class="section narrow story-grid">
      ${["러닝의 루틴과 스토리를 한눈에", "서울 도심을 함께 달리는 사람들", "완주를 만드는 주간 훈련", "정기런 전날 체크리스트"].map((title, index) => `
        <a class="story-card" href="newsletter.html">
          <img src="${asset(magazineImages[index % magazineImages.length])}" alt="">
          <div><h2>${title}</h2><p>킹콩 러너스 클럽이 전하는 러닝 인사이트 콘텐츠입니다.</p></div>
        </a>
      `).join("")}
    </section>
  `;
}

function renderRunners() {
  return `
    ${pageTitle("러너의소리", "함께 울리는 진짜 이야기들을 모았습니다.")}
    <section class="section narrow">
      ${renderNewsList(runnersVoice)}
    </section>
  `;
}

function renderFaq() {
  const faqs = [
    ["가입은 어디에서 하나요?", "가입안내 메뉴에서 신규 회원 공지를 확인한 뒤 안내된 채널로 신청할 수 있습니다."],
    ["처음 달려도 참여할 수 있나요?", "네. 초보 러너를 위한 5K 페이스 그룹과 오리엔테이션 모임을 운영합니다."],
    ["정기런 일정은 어디에서 확인하나요?", "러닝일정 메뉴와 공지사항에서 이번 달 모임 일정을 확인할 수 있습니다."],
    ["문의는 어떻게 하나요?", "카카오채널 @킹콩러너스클럽으로 문의해 주세요."],
  ];
  return `
    ${pageTitle("FAQ", "자주 묻는 질문을 확인하세요.")}
    <section class="section narrow faq-list">
      ${faqs.map((faq, index) => `
        <div class="faq-item ${index === 0 ? "is-open" : ""}">
          <button type="button" data-faq-toggle><span>Q. ${faq[0]}</span><span>+</span></button>
          <div class="faq-answer">${faq[1]}</div>
        </div>
      `).join("")}
    </section>
  `;
}

function renderSearch() {
  const query = new URLSearchParams(location.search).get("q") || "";
  const list = query ? products.filter((product) => product.name.includes(query) || product.summary.includes(query)) : products;
  return `
    ${pageTitle("검색", "킹콩 러너스 클럽 콘텐츠를 검색하세요.")}
    <section class="section container">
      <form class="search-page-form" action="search.html">
        <input name="q" type="search" value="${query}" placeholder="검색어를 입력하세요">
        <button class="primary-btn" type="submit">검색</button>
      </form>
      <div class="list-grid">${list.map(productCard).join("")}</div>
    </section>
  `;
}

function renderProduct() {
  const requestedId = new URLSearchParams(location.search).get("id") || products[1].id;
  const product = products.find((item) => item.id === requestedId) || products[1];
  return `
    ${pageTitle("상세보기", "킹콩 러너스 클럽 안내")}
    <section class="section narrow product-detail">
      <div class="product-detail-media">
        <img src="${asset(product.image)}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <p class="price">${product.price}</p>
        <p>${product.summary}</p>
        <div class="detail-meta">
          <div><span>공지일</span><strong>${product.date}</strong></div>
          <div><span>분류</span><strong>${product.type === "event" ? "러닝모임" : product.type === "guide" ? "가입안내" : product.type === "channel" ? "채널안내" : "공지"}</strong></div>
          <div><span>문의</span><strong>@킹콩러너스클럽</strong></div>
        </div>
        <a class="outline-btn" href="register.html">LIST</a>
      </div>
    </section>
  `;
}

function renderAgreement() {
  return legalPage("이용약관", [
    ["제1조 목적", "이 약관은 킹콩 러너스 클럽 홈페이지 이용과 관련하여 필요한 기본 사항을 정합니다."],
    ["제2조 서비스 이용", "회원은 모임 일정, 가입 공지, 클럽 소식, 러닝 콘텐츠 등 홈페이지가 제공하는 정보를 이용할 수 있습니다."],
    ["제3조 책임과 의무", "회원은 모임 참여 시 안전 수칙을 확인하고 운영진의 현장 안내를 따라야 합니다."],
  ]);
}

function renderPrivacy() {
  return legalPage("개인정보처리방침", [
    ["수집 항목", "가입 안내와 문의 응대에 필요한 이름, 연락처, 이메일, 러닝 경험 등이 수집될 수 있습니다."],
    ["이용 목적", "모임 운영, 신규 회원 안내, 공지 전달, 문의 응대 목적으로 사용합니다."],
    ["보관 및 파기", "운영 목적이 끝난 정보는 관계 법령과 클럽 운영 기준에 따라 안전하게 파기합니다."],
  ]);
}

function pageTitle(title, description) {
  return `
    <div class="page-title narrow">
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  `;
}

function boardTable(rows) {
  return `
    <table class="board-table">
      <thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th></tr></thead>
      <tbody>
        ${rows.map((row, index) => `<tr><td>${row[0]}</td><td><a href="notice.html?id=${index}">${row[1]}</a></td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function pagination() {
  return `<div class="pagination"><a class="is-active" href="#">1</a><a href="#">2</a><a href="#">3</a></div>`;
}

function legalPage(title, sections) {
  return `
    ${pageTitle(title, "킹콩 러너스 클럽 홈페이지 이용 안내")}
    <section class="section narrow">
      <div class="legal">
        ${sections.map((section) => `<h2>${section[0]}</h2><p>${section[1]}</p>`).join("")}
      </div>
    </section>
  `;
}

const ADMIN_SECTIONS = [
  {
    name: "notices",
    title: "공지사항 게시판",
    description: "공지 목록과 클릭 후 보이는 상세 내용을 관리합니다.",
    publicHref: "notice.html",
    kind: "array",
    fields: [
      { key: "0", label: "번호", placeholder: "공지 또는 숫자" },
      { key: "1", label: "제목", placeholder: "공지 제목" },
      { key: "2", label: "작성자", placeholder: "관리자" },
      { key: "3", label: "작성일", placeholder: "2026.05.28" },
      { key: "4", label: "상세 내용", placeholder: "공지 상세 내용", multiline: true },
    ],
  },
  {
    name: "schedules",
    title: "러닝일정",
    description: "러닝일정 페이지의 일정 카드와 달력 표시를 관리합니다.",
    publicHref: "calendar.html",
    kind: "object",
    fields: [
      { key: "date", label: "날짜", placeholder: "2026.06.06" },
      { key: "title", label: "일정명", placeholder: "토요 정기런" },
      { key: "place", label: "장소", placeholder: "한강공원 집결" },
      { key: "note", label: "메모", placeholder: "5K·10K 페이스 그룹" },
    ],
  },
  {
    name: "products",
    title: "가입안내 / 갤러리 카드",
    description: "홈 카드, 가입안내 목록, 상세보기 화면을 관리합니다. 이미지는 assets 폴더의 파일명을 입력합니다.",
    publicHref: "register.html",
    kind: "object",
    fields: [
      { key: "id", label: "ID", placeholder: "guide-2026" },
      { key: "name", label: "제목", placeholder: "신규 회원 가입 안내" },
      { key: "price", label: "보조 문구", placeholder: "상시 모집" },
      { key: "image", label: "이미지 파일명", placeholder: "picture/20260314_074610.jpg" },
      { key: "type", label: "분류", placeholder: "guide / event / channel / notice" },
      { key: "date", label: "날짜", placeholder: "2026.05.28" },
      { key: "summary", label: "설명", placeholder: "카드와 상세 화면에 보일 설명", multiline: true },
    ],
  },
  {
    name: "newsletters",
    title: "뉴스레터",
    description: "홈과 KINGKONG NEWS 페이지의 최신 소식을 관리합니다.",
    publicHref: "newsletter.html",
    kind: "array",
    fields: [
      { key: "0", label: "작성일", placeholder: "2026.05.28" },
      { key: "1", label: "제목", placeholder: "KINGKONG NEWS" },
      { key: "2", label: "요약", placeholder: "소식 요약", multiline: true },
    ],
  },
  {
    name: "runnersVoice",
    title: "러너의소리 / 갤러리",
    description: "러너의소리 탭과 페이지에 보이는 멤버 이야기 콘텐츠를 관리합니다.",
    publicHref: "runners.html",
    kind: "array",
    fields: [
      { key: "0", label: "작성일", placeholder: "2026.05.26" },
      { key: "1", label: "제목", placeholder: "첫 5K 완주 후기" },
      { key: "2", label: "내용", placeholder: "멤버 이야기 요약", multiline: true },
    ],
  },
];

function adminDefaults(name) {
  return {
    products: defaultProducts,
    notices: defaultNotices,
    newsletters: defaultNewsletters,
    runnersVoice: defaultRunnersVoice,
    schedules: defaultSchedules,
  }[name];
}

function adminData(name) {
  return {
    products,
    notices,
    newsletters,
    runnersVoice,
    schedules,
  }[name];
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function adminValue(item, key) {
  if (!item) return "";
  return Array.isArray(item) ? item[Number(key)] || "" : item[key] || "";
}

function renderAdminField(field, item) {
  const value = escapeHtml(adminValue(item, field.key));
  const label = `<span>${field.label}</span>`;
  if (field.multiline) {
    return `<label>${label}<textarea data-admin-field="${field.key}" placeholder="${escapeHtml(field.placeholder || "")}">${value}</textarea></label>`;
  }
  return `<label>${label}<input data-admin-field="${field.key}" type="text" value="${value}" placeholder="${escapeHtml(field.placeholder || "")}"></label>`;
}

function renderAdminForm(section, item, index) {
  const isNew = index === "new";
  return `
    <form class="admin-edit-form" data-admin-form="${section.name}" data-index="${index}">
      <div class="admin-form-head">
        <strong>${isNew ? "새 항목 추가" : `항목 ${Number(index) + 1} 수정`}</strong>
        ${isNew ? "" : `<button class="text-danger" type="button" data-admin-delete="${section.name}" data-index="${index}">삭제</button>`}
      </div>
      <div class="admin-fields">
        ${section.fields.map((field) => renderAdminField(field, item)).join("")}
      </div>
      <button class="primary-btn" type="submit">${isNew ? "추가하기" : "저장하기"}</button>
    </form>
  `;
}

function renderAdminSection(section) {
  const items = adminData(section.name);
  return `
    <details class="admin-section" id="admin-${section.name}" ${section.name === "notices" ? "open" : ""}>
      <summary>
        <span><strong>${section.title}</strong><em>${items.length}개 항목 · ${section.description}</em></span>
      </summary>
      <div class="admin-section-body">
        <div class="admin-section-tools">
          <a class="outline-btn" href="${section.publicHref || "index.html"}">공개 화면 보기</a>
          <button class="outline-btn" type="button" data-admin-reset="${section.name}">기본값 복원</button>
        </div>
        ${renderAdminForm(section, null, "new")}
        <div class="admin-current-list">
          ${items.map((item, index) => renderAdminForm(section, item, index)).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderAdminLogin() {
  return `
    ${pageTitle("ADMIN", "관리자 로그인 후 게시판, 러닝일정, 가입안내, 갤러리 콘텐츠를 수정할 수 있습니다.")}
    <section class="section">
      <form class="auth-box" data-admin-login>
        <label>아이디<input required type="text" name="username" autocomplete="username" placeholder="admin"></label>
        <label>비밀번호<input required type="password" name="password" autocomplete="current-password" placeholder="admin"></label>
        <p class="form-error" data-admin-error></p>
        <div class="auth-actions">
          <button class="primary-btn" type="submit">관리자 로그인</button>
          <a class="outline-btn" href="index.html">홈으로</a>
        </div>
      </form>
    </section>
  `;
}

function renderAdmin() {
  if (!isAdminLoggedIn()) return renderAdminLogin();

  return `
    ${pageTitle("ADMIN", "킹콩 러너스 클럽 홈페이지 콘텐츠 관리")}
    <section class="section narrow admin-dashboard">
      <div class="admin-toolbar">
        <div>
          <strong>admin</strong>
          <span>게시판, 일정, 안내 카드, 갤러리성 콘텐츠를 한곳에서 수정합니다.</span>
        </div>
        <div class="admin-toolbar-actions">
          <a class="outline-btn" href="index.html">홈 확인</a>
          <button class="outline-btn" type="button" data-admin-logout>로그아웃</button>
        </div>
      </div>
      <div class="admin-quick-grid">
        ${ADMIN_SECTIONS.map((section) => `
          <a class="admin-quick-card" href="#admin-${section.name}">
            <span>${section.title}</span>
            <strong>${adminData(section.name).length}</strong>
            <em>바로 수정</em>
          </a>
        `).join("")}
      </div>
      <p class="admin-note">항목을 추가하거나 수정하면 공개 페이지에 바로 반영됩니다. 현재 저장 방식은 브라우저 저장소이며, 배포 후 전체 공유형 관리가 필요하면 Netlify/Vercel 저장소를 연결하면 됩니다.</p>
      ${ADMIN_SECTIONS.map(renderAdminSection).join("")}
    </section>
  `;
}

const renderers = {
  home: renderHome,
  brand: renderBrand,
  story: renderStory,
  calendar: renderCalendar,
  register: renderRegister,
  notice: renderNotice,
  newsletter: renderNewsletter,
  magazine: renderMagazine,
  runners: renderRunners,
  faq: renderFaq,
  agreement: renderAgreement,
  privacy: renderPrivacy,
  search: renderSearch,
  product: renderProduct,
  admin: renderAdmin,
};

function bindEvents() {
  const header = document.querySelector("[data-header]");
  const closeTop = document.querySelector("[data-close-top]");
  const topBanner = document.querySelector(".top-banner");

  function syncHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }

  closeTop?.addEventListener("click", () => {
    topBanner?.classList.add("is-hidden");
  });

  document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
    header.classList.toggle("menu-open");
  });

  document.querySelector("[data-search-toggle]")?.addEventListener("click", () => {
    header.classList.toggle("search-open");
    if (header.classList.contains("search-open")) {
      setTimeout(() => document.getElementById("global-search")?.focus(), 40);
    }
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      header?.classList.remove("search-open", "menu-open");
    }
  });

  bindSliders();
  bindNewsTabs();
  bindFaq();
  bindAdmin();
  bindFilters();
  bindDragScroll();
  bindProductScrollbar();
}

function bindSliders() {
  const hero = document.querySelector("[data-hero-slider]");
  if (hero) {
    let index = 0;
    const track = hero.querySelector(".hero-track");
    const current = hero.querySelector("[data-hero-current]");
    setInterval(() => {
      index = (index + 1) % 2;
      track.style.transform = `translateX(-${index * 100}%)`;
      current.textContent = `0${index + 1}`;
    }, 4800);
  }

  const wide = document.querySelector("[data-wide-banner]");
  if (wide) {
    const track = wide.querySelector(".wide-banner-track");
    const dots = [...wide.querySelectorAll("[data-wide-dot]")];
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = Number(dot.dataset.wideDot);
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((item) => item.classList.toggle("is-active", item === dot));
      });
    });
  }
}

function bindNewsTabs() {
  const list = document.querySelector("[data-news-list]");
  const tabs = [...document.querySelectorAll("[data-news-tab]")];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      list.innerHTML = renderNewsList(tab.dataset.newsTab === "runners" ? runnersVoice : newsletters);
    });
  });
}

function bindFaq() {
  document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".faq-item").classList.toggle("is-open");
    });
  });
}

function bindAdmin() {
  document.querySelectorAll("[data-admin-login]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = form.querySelector('[name="username"]').value.trim();
      const password = form.querySelector('[name="password"]').value;
      const error = form.querySelector("[data-admin-error]");
      if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem(ADMIN_SESSION_KEY, "true");
        location.href = "admin.html";
        return;
      }
      if (error) error.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
    });
  });

  document.querySelector("[data-admin-logout]")?.addEventListener("click", () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    location.href = "admin.html";
  });

  document.querySelectorAll("[data-admin-reset]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!confirm("이 영역을 기본 내용으로 되돌릴까요?")) return;
      resetCollection(button.dataset.adminReset);
      location.reload();
    });
  });

  document.querySelectorAll("[data-admin-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!confirm("이 항목을 삭제할까요?")) return;
      const sectionName = button.dataset.adminDelete;
      const items = loadCollection(sectionName, adminDefaults(sectionName));
      items.splice(Number(button.dataset.index), 1);
      saveCollection(sectionName, items);
      location.reload();
    });
  });

  document.querySelectorAll("[data-admin-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const sectionName = form.dataset.adminForm;
      const section = ADMIN_SECTIONS.find((item) => item.name === sectionName);
      const items = loadCollection(sectionName, adminDefaults(sectionName));
      const nextItem = section.kind === "array" ? [] : {};

      section.fields.forEach((field) => {
        const control = form.querySelector(`[data-admin-field="${field.key}"]`);
        const value = control ? control.value.trim() : "";
        if (section.kind === "array") {
          nextItem[Number(field.key)] = value;
        } else {
          nextItem[field.key] = value;
        }
      });

      if (sectionName === "products") {
        if (!nextItem.id) nextItem.id = `item-${Date.now()}`;
        if (!nextItem.image) nextItem.image = PRODUCT_IMAGE_FALLBACK;
        if (!nextItem.type) nextItem.type = "notice";
      }

      if (form.dataset.index === "new") {
        items.unshift(nextItem);
      } else {
        items[Number(form.dataset.index)] = nextItem;
      }

      saveCollection(sectionName, items);
      location.reload();
    });
  });
}

function bindFilters() {
  const input = document.querySelector("[data-list-filter]");
  const target = document.querySelector("[data-filter-target]");
  input?.addEventListener("input", () => {
    const keyword = input.value.trim();
    const filtered = products.filter((product) => product.name.includes(keyword) || product.summary.includes(keyword));
    target.innerHTML = filtered.map(productCard).join("");
  });
}

function bindDragScroll() {
  document.querySelectorAll(".product-track").forEach((track) => {
    let isDown = false;
    let didDrag = false;
    let startX = 0;
    let scrollLeft = 0;

    track.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      isDown = true;
      didDrag = false;
      startX = event.clientX;
      scrollLeft = track.scrollLeft;
      track.classList.add("is-dragging");
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener("pointermove", (event) => {
      if (!isDown) return;
      const distance = event.clientX - startX;
      if (Math.abs(distance) > 4) didDrag = true;
      track.scrollLeft = scrollLeft - distance;
    });

    track.addEventListener("pointerup", (event) => {
      isDown = false;
      track.classList.remove("is-dragging");
      if (track.hasPointerCapture(event.pointerId)) {
        track.releasePointerCapture(event.pointerId);
      }
    });

    track.addEventListener("pointercancel", () => {
      isDown = false;
      track.classList.remove("is-dragging");
    });

    track.addEventListener("click", (event) => {
      if (!didDrag) return;
      event.preventDefault();
      event.stopPropagation();
    }, true);
  });
}

function bindProductScrollbar() {
  document.querySelectorAll(".product-strip").forEach((section) => {
    const track = section.querySelector(".product-track");
    const bar = section.querySelector("[data-product-scrollbar]");
    const thumb = bar?.querySelector(".product-scrollbar-thumb");
    if (!track || !bar || !thumb) return;

    const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);

    const update = () => {
      const max = maxScroll();
      const ratio = max ? track.scrollLeft / max : 0;
      const visibleRatio = Math.min(1, track.clientWidth / track.scrollWidth);
      thumb.style.width = `${Math.max(18, visibleRatio * 100)}%`;
      thumb.style.transform = `translateX(${ratio * (bar.clientWidth - thumb.offsetWidth)}px)`;
      bar.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
    };

    const scrollToPointer = (clientX) => {
      const rect = bar.getBoundingClientRect();
      const thumbWidth = thumb.offsetWidth;
      const usable = Math.max(1, rect.width - thumbWidth);
      const x = Math.min(Math.max(clientX - rect.left - thumbWidth / 2, 0), usable);
      track.scrollLeft = (x / usable) * maxScroll();
    };

    let dragging = false;

    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    bar.addEventListener("pointerdown", (event) => {
      dragging = true;
      bar.setPointerCapture(event.pointerId);
      scrollToPointer(event.clientX);
    });

    bar.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      scrollToPointer(event.clientX);
    });

    bar.addEventListener("pointerup", (event) => {
      dragging = false;
      if (bar.hasPointerCapture(event.pointerId)) {
        bar.releasePointerCapture(event.pointerId);
      }
    });

    bar.addEventListener("pointercancel", () => {
      dragging = false;
    });

    bar.addEventListener("keydown", (event) => {
      const step = track.clientWidth * 0.25;
      if (event.key === "ArrowRight") {
        track.scrollLeft += step;
        event.preventDefault();
      }
      if (event.key === "ArrowLeft") {
        track.scrollLeft -= step;
        event.preventDefault();
      }
    });

    update();
  });
}

function init() {
  const renderer = renderers[pageId()] || renderers.home;
  renderLayout(renderer());
  bindEvents();
}

init();
