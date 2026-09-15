(function () {
  const translations = {
    zh: {
      "nav.chapters": "章节", "nav.howto": "使用方式", "nav.about": "关于",
      "hero.eyebrow": "WEB LAYOUT · INTERACTIVE COURSE", "hero.title": "网页布局实验室",
      "hero.lead": "从页面结构到响应式设计，用可操作的案例理解网页为什么这样排。",
      "hero.primary": "开始学习", "hero.secondary": "直接体验演示",
      "stats.lessons": "个章节", "stats.demos": "个动态演示", "stats.languages": "种语言",
      "chapters.title": "课程章节", "chapters.intro": "从“内容如何组织”开始，逐步走到可以实时调整的页面布局。",
      "chapters.basics.title": "页面布局基础", "chapters.basics.desc": "理解层级、分组、对齐、留白与盒模型，先建立布局思维。",
      "chapters.flex.title": "Flex 一维布局", "chapters.flex.desc": "用主轴、交叉轴和间距控制导航、工具栏与卡片行。",
      "chapters.grid.title": "Grid 二维布局", "chapters.grid.desc": "用行、列与网格区域搭建课程卡片和仪表盘。",
      "chapters.responsive.title": "响应式设计", "chapters.responsive.desc": "让同一组内容适应桌面、平板和手机屏幕。",
      "common.live": "可学习", "common.enter": "进入章节",
      "howto.title": "使用方式", "howto.intro": "每个章节都把理论、代码和实时效果放在同一条学习路径上。",
      "howto.one.title": "先读讲解", "howto.one.desc": "从布局问题和使用场景出发，理解属性背后的设计原因。",
      "howto.two.title": "再看代码", "howto.two.desc": "把可视化结果对应到 HTML、CSS 和 JavaScript 的关键位置。",
      "howto.three.title": "最后动手调", "howto.three.desc": "修改参数，观察布局变化，再用自己的页面复现它。",
      "about.title": "关于这个网站", "about.intro": "这是一个围绕网页布局原理制作的交互式教学案例。",
      "about.theory.label": "理论重点", "about.theory.text": "视觉层级、空间关系、Flex、Grid、媒体查询与响应式设计。",
      "about.stack.label": "技术实现", "about.stack.text": "原生 HTML、CSS、JavaScript，可直接部署到 GitHub Pages。",
      "about.principle.label": "学习原则", "about.principle.text": "案例为中心；每个概念都配有可运行的视觉结果。",
      "footer.text": "网页布局交互式教学网站",
      "lesson.back": "返回课程首页", "lesson.progress": "学习路径", "lesson.chapters": "章节目录",
      "lesson.sidebarNote": "按照“讲解 → 代码 → 演示”的顺序学习，效果会更清楚。", "lesson.home": "课程首页",
      "tabs.explain": "讲解", "tabs.code": "关键代码", "tabs.demo": "动态演示",
      "code.title": "关键代码", "code.copy": "复制代码", "code.tip": "代码中的关键属性会在“动态演示”中被控件实时修改。",
      "demo.title": "动态演示", "demo.reset": "重置演示"
    },
    en: {
      "nav.chapters": "Chapters", "nav.howto": "How to use", "nav.about": "About",
      "hero.eyebrow": "WEB LAYOUT · INTERACTIVE COURSE", "hero.title": "Layout Lab",
      "hero.lead": "Understand why a page is arranged this way through hands-on examples, from structure to responsive design.",
      "hero.primary": "Start learning", "hero.secondary": "Try the demos",
      "stats.lessons": "lessons", "stats.demos": "live demos", "stats.languages": "languages",
      "chapters.title": "Course chapters", "chapters.intro": "Start with content structure, then move toward layouts you can tune in real time.",
      "chapters.basics.title": "Layout foundations", "chapters.basics.desc": "Build layout thinking through hierarchy, grouping, alignment, whitespace and the box model.",
      "chapters.flex.title": "One-dimensional Flex", "chapters.flex.desc": "Use the main axis, cross axis and gap to control navigation, toolbars and card rows.",
      "chapters.grid.title": "Two-dimensional Grid", "chapters.grid.desc": "Build course cards and dashboards with rows, columns and grid areas.",
      "chapters.responsive.title": "Responsive design", "chapters.responsive.desc": "Make one content system adapt to desktop, tablet and mobile screens.",
      "common.live": "Available", "common.enter": "Open lesson",
      "howto.title": "How to use", "howto.intro": "Every chapter connects theory, source code and a live result in one learning path.",
      "howto.one.title": "Read the idea", "howto.one.desc": "Start from the layout problem and use case to understand why a property exists.",
      "howto.two.title": "Read the code", "howto.two.desc": "Connect the visual result to the important HTML, CSS and JavaScript lines.",
      "howto.three.title": "Tune it yourself", "howto.three.desc": "Change parameters, observe the result, then recreate it in your own page.",
      "about.title": "About this site", "about.intro": "An interactive teaching case built around the principles of web layout.",
      "about.theory.label": "Theory", "about.theory.text": "Visual hierarchy, spatial relationships, Flex, Grid, media queries and responsive design.",
      "about.stack.label": "Built with", "about.stack.text": "Vanilla HTML, CSS and JavaScript, ready for GitHub Pages.",
      "about.principle.label": "Principle", "about.principle.text": "Case-led learning: every concept comes with a working visual result.",
      "footer.text": "Interactive web layout course",
      "lesson.back": "Back to course home", "lesson.progress": "Learning path", "lesson.chapters": "Chapters",
      "lesson.sidebarNote": "Follow the order: explanation → code → demo for a clearer result.", "lesson.home": "Course home",
      "tabs.explain": "Explanation", "tabs.code": "Key code", "tabs.demo": "Live demo",
      "code.title": "Key code", "code.copy": "Copy code", "code.tip": "The key properties in this code are changed live by the controls in the demo.",
      "demo.title": "Live demo", "demo.reset": "Reset demo"
    }
  };

  let language = localStorage.getItem("layout-lab-language") || "zh";
  function translate(key) { return (translations[language] && translations[language][key]) || key; }
  function apply(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(function (node) {
      const value = translate(node.getAttribute("data-i18n"));
      if (value !== node.getAttribute("data-i18n")) node.textContent = value;
    });
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
      button.textContent = language === "zh" ? "EN" : "中";
      button.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    });
    document.dispatchEvent(new CustomEvent("layout-language-change", { detail: { language: language } }));
  }
  function set(next) {
    language = next;
    localStorage.setItem("layout-lab-language", language);
    apply();
  }
  function init() {
    document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
      button.addEventListener("click", function () { set(language === "zh" ? "en" : "zh"); });
    });
    apply();
  }
  window.LayoutI18n = { init, apply, set, translate, getLanguage: function () { return language; } };
}());
