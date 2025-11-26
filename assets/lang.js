// assets/lang.js
(function () {
  const body = document.body;

  // 設定語言的主函數
  function setLanguage(lang) {
    // 防呆機制：只允許 en 或 zh
    if (lang !== "en" && lang !== "zh") lang = "en";

    // 1. 切換 Body 的 Class (CSS 依此顯示/隱藏內容)
    body.classList.remove("lang-en", "lang-zh");
    body.classList.add("lang-" + lang);

    // 2. 更新 HTML 的 lang 屬性 (對 SEO 和瀏覽器翻譯友善)
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "zh-Hant");
    
    // 3. 儲存設定到 LocalStorage
    localStorage.setItem("site_lang", lang);

    // 4. 更新 Sidebar 按鈕的 Active 狀態
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // 偵測預設語言
  function detectDefaultLanguage() {
    // 優先讀取使用者之前的選擇
    const saved = localStorage.getItem("site_lang");
    if (saved === "en" || saved === "zh") {
      return saved;
    }

    // 其次讀取瀏覽器語系
    const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (navLang.startsWith("zh")) {
      return "zh";
    }
    
    // 預設回傳英文
    return "en";
  }

  // 初始化
  const defaultLang = detectDefaultLanguage();
  setLanguage(defaultLang);

  // 綁定點擊事件
  document.addEventListener("DOMContentLoaded", () => {
    const langBtns = document.querySelectorAll(".lang-btn");
    
    langBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        // 防止 form submit 或其他預設行為 (雖然這裡是 button 但保險起見)
        e.preventDefault();
        const targetLang = btn.getAttribute("data-lang");
        setLanguage(targetLang);
      });
    });
  });
})();