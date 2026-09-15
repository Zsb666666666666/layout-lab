(function () {
  const lessons = {
    basics: {
      kicker: "CHAPTER 01 · FOUNDATIONS", count: "01 / 04",
      title: { zh: "页面布局基础", en: "Layout foundations" },
      summary: { zh: "先从内容结构出发，理解层级、分组、对齐与留白如何共同形成一个可读的页面。", en: "Start with content structure and see how hierarchy, grouping, alignment and whitespace create a readable page." },
      explain: {
        zh: { lead: "好的布局不是把元素摆满，而是让用户一眼找到重点、理解关系，并知道下一步往哪里走。", sections: [{ title: "布局先解决什么问题？", text: "页面布局负责建立视觉顺序：什么最重要、哪些内容属于一组、哪里可以点击、哪里需要停顿。先定义内容关系，再选择 Flex 或 Grid，通常比先调像素更稳定。" }, { title: "三个可复用的判断", points: [{ title: "层级 Hierarchy", text: "标题、说明、操作按钮应有明确的视觉优先级。" }, { title: "关系 Relationship", text: "相近内容靠近，属于不同模块的内容用留白或边界分开。" }, { title: "节奏 Rhythm", text: "重复的间距和对齐线让页面更容易扫描。" }, { title: "适应 Adaptation", text: "布局要预留不同屏幕宽度下的变化空间。" }] }, { title: "案例思路", text: "本网站的首页先用大标题建立主题，再用四张章节卡片形成课程地图，最后用使用方式和关于区补充上下文。这种结构让用户可以先浏览全貌，再进入具体章节。", principle: "先画出内容关系，再决定 CSS 属性。布局是信息组织问题，CSS 只是把这个关系翻译成页面。" }] },
        en: { lead: "Good layout does not fill every pixel. It helps people find the focus, understand relationships and know where to go next.", sections: [{ title: "What problem does layout solve?", text: "Layout creates visual order: what matters most, which content belongs together, what is clickable and where a pause is needed. Define content relationships before choosing Flex or Grid; the result is usually more stable than tuning pixels first." }, { title: "Three reusable checks", points: [{ title: "Hierarchy", text: "Titles, descriptions and actions need a clear visual priority." }, { title: "Relationship", text: "Keep related content close and separate different modules with space or borders." }, { title: "Rhythm", text: "Repeated spacing and alignment lines make a page easier to scan." }, { title: "Adaptation", text: "Leave room for the layout to change at different viewport widths." }] }, { title: "The case behind this site", text: "The homepage establishes the subject with a large title, builds a course map with four chapter cards, then adds context through the usage and about sections. Users can scan the whole system before entering a lesson.", principle: "Map content relationships first, then choose CSS properties. Layout is an information-organization problem; CSS translates that relationship into a page." }] }
      },
      code: {
        zh: "<main class=\"course\">\n  <section class=\"hero\">...</section>\n  <section class=\"chapter-grid\">\n    <article class=\"chapter-card\">...</article>\n  </section>\n</main>\n\n.course {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 64px 24px;\n}\n\n.chapter-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}",
        en: "<main class=\"course\">\n  <section class=\"hero\">...</section>\n  <section class=\"chapter-grid\">\n    <article class=\"chapter-card\">...</article>\n  </section>\n</main>\n\n.course {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 64px 24px;\n}\n\n.chapter-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}"
      },
      codeDescription: { zh: "先用语义化的区块表达内容关系，再使用一个简单的 Grid 让章节卡片保持规则排列。", en: "Express content relationships with semantic sections, then use a simple Grid to keep chapter cards in a regular rhythm." },
      demoDescription: { zh: "拖动列数和间距，观察一个课程卡片区域如何从四列变成适合小屏幕的排列。", en: "Change the column count and gap to see a course-card area move from four columns toward a small-screen arrangement." },
      demo: "grid"
    },
    flex: {
      kicker: "CHAPTER 02 · FLEX", count: "02 / 04",
      title: { zh: "Flex 一维布局", en: "One-dimensional Flex" },
      summary: { zh: "用主轴、交叉轴和间距控制导航、工具栏与卡片行。", en: "Use the main axis, cross axis and gap to control navigation, toolbars and card rows." },
      explain: {
        zh: { lead: "Flex 适合处理一条轴线上的布局：一排按钮、一列信息，或者可以换行的卡片集合。", sections: [{ title: "先确定主轴", text: "flex-direction 决定项目沿水平还是垂直方向排列。方向确定之后，justify-content 控制主轴上的分布，align-items 控制交叉轴上的对齐。" }, { title: "三个最常用的控制点", points: [{ title: "Direction", text: "row 适合横向导航，column 适合纵向信息流。" }, { title: "Justify", text: "控制主轴上的起点、居中、两端或均匀分布。" }, { title: "Gap", text: "用统一的间距建立节奏，避免给每个子元素单独加 margin。" }, { title: "Wrap", text: "内容变多时允许换行，避免在窄屏上溢出。" }] }, { title: "什么时候不要用 Flex？", text: "如果你需要同时控制明确的行和列，例如仪表盘或复杂卡片墙，Grid 通常更合适。Flex 负责一维关系，Grid 负责二维关系。", principle: "先问“我在控制一条轴，还是一张网格？”这比记住更多属性名更重要。" }] },
        en: { lead: "Flex is for layout along one axis: a row of buttons, a column of information or a wrapping set of cards.", sections: [{ title: "Choose the main axis first", text: "flex-direction decides whether items run horizontally or vertically. Once the direction is known, justify-content distributes items on the main axis and align-items aligns them on the cross axis." }, { title: "Four everyday controls", points: [{ title: "Direction", text: "row suits horizontal navigation; column suits vertical information flow." }, { title: "Justify", text: "Control start, center, space-between or even distribution on the main axis." }, { title: "Gap", text: "Use one consistent spacing rule instead of individual margins." }, { title: "Wrap", text: "Allow content to wrap when it grows, avoiding overflow on narrow screens." }] }, { title: "When should Flex step aside?", text: "When you need explicit rows and columns, such as a dashboard or complex card wall, Grid is usually a better fit. Flex handles one-dimensional relationships; Grid handles two-dimensional relationships.", principle: "Ask: am I controlling one axis or a grid? That matters more than memorizing more property names." }] }
      },
      code: {
        zh: ".toolbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.toolbar .actions {\n  display: flex;\n  gap: 8px;\n}",
        en: ".toolbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.toolbar .actions {\n  display: flex;\n  gap: 8px;\n}"
      },
      codeDescription: { zh: "这段代码把工具栏分成一个横向主轴，并允许内容在空间不足时换行。", en: "This snippet gives the toolbar a horizontal main axis and lets its content wrap when space gets tight." },
      demoDescription: { zh: "修改主轴方向、对齐方式、间距和换行规则，观察同一组卡片如何改变排列。", en: "Change direction, alignment, gap and wrapping to see the same cards reorganize." },
      demo: "flex"
    },
    grid: {
      kicker: "CHAPTER 03 · GRID", count: "03 / 04",
      title: { zh: "Grid 二维布局", en: "Two-dimensional Grid" },
      summary: { zh: "用行、列与网格区域搭建课程卡片和仪表盘。", en: "Build course cards and dashboards with rows, columns and grid areas." },
      explain: {
        zh: { lead: "Grid 把容器看成一张有行、有列的网格，适合同时处理横向和纵向的空间关系。", sections: [{ title: "网格的价值", text: "Grid 可以先定义整体轨道，再让每个项目进入轨道。这样卡片之间共享同一组对齐线，页面更容易扩展，也更适合二维的信息结构。" }, { title: "从三个问题开始", points: [{ title: "有几列？", text: "用 grid-template-columns 描述可见的列结构。" }, { title: "间隔多大？", text: "用 gap 统一管理行列之间的空间。" }, { title: "谁需要跨列？", text: "用 grid-column 或命名区域突出重点模块。" }, { title: "内容会变吗？", text: "使用 minmax 和 auto-fit，让轨道适应可用宽度。" }] }, { title: "卡片墙的案例", text: "本页演示的卡片区域把每张卡片放入统一的网格中。改变列数时，内容顺序和间距规则仍然保持稳定，这就是 Grid 对复杂页面的价值。", principle: "Grid 先描述空间，项目再进入空间；这很适合需要整体对齐的页面。" }] },
        en: { lead: "Grid treats a container as rows and columns, making it useful for horizontal and vertical relationships at the same time.", sections: [{ title: "Why use a grid?", text: "Grid defines the overall tracks first, then places each item into them. Cards share alignment lines, making the page easier to extend and better suited to two-dimensional information." }, { title: "Start with three questions", points: [{ title: "How many columns?", text: "Describe the visible column structure with grid-template-columns." }, { title: "How large is the gap?", text: "Use gap to manage row and column space consistently." }, { title: "What spans columns?", text: "Use grid-column or named areas to give a module more emphasis." }, { title: "Will content change?", text: "Use minmax and auto-fit so tracks respond to available width." }] }, { title: "The card-wall case", text: "The card area in this lesson puts each item into a shared grid. When the column count changes, order and spacing rules remain stable. That is the value Grid brings to complex pages.", principle: "Grid describes the space first, then items enter that space. It is a strong fit when overall alignment matters." }] }
      },
      code: {
        zh: ".chapter-grid {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit, minmax(190px, 1fr)\n  );\n  gap: 16px;\n}\n\n.feature-card {\n  grid-column: span 2;\n}",
        en: ".chapter-grid {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit, minmax(190px, 1fr)\n  );\n  gap: 16px;\n}\n\n.feature-card {\n  grid-column: span 2;\n}"
      },
      codeDescription: { zh: "auto-fit 和 minmax 让网格按照可用空间自动选择列数，适合卡片型内容。", en: "auto-fit and minmax let the grid choose a column count from the available space, which works well for cards." },
      demoDescription: { zh: "尝试改变列数和间距，观察二维卡片区域如何保持整齐的对齐关系。", en: "Change columns and gap to see a two-dimensional card area preserve its alignment." },
      demo: "grid"
    },
    responsive: {
      kicker: "CHAPTER 04 · RESPONSIVE", count: "04 / 04",
      title: { zh: "响应式设计", en: "Responsive design" },
      summary: { zh: "让同一组内容适应桌面、平板和手机屏幕。", en: "Make one content system adapt to desktop, tablet and mobile screens." },
      explain: {
        zh: { lead: "响应式设计不是把桌面页面缩小，而是根据可用空间重新安排内容优先级。", sections: [{ title: "为什么需要响应式？", text: "用户可能在不同宽度、不同输入方式的设备上访问同一页面。布局需要在保持内容关系的同时，改变列数、导航形式和信息密度。" }, { title: "三个常见策略", points: [{ title: "流式空间", text: "使用百分比、minmax 和 max-width，让容器有弹性但不失控。" }, { title: "断点变化", text: "在关键宽度切换列数、方向或导航形式。" }, { title: "内容优先", text: "小屏幕先保证标题、主要内容和核心操作可见。" }, { title: "渐进增强", text: "先保证基础内容可用，再加入更丰富的视觉效果。" }] }, { title: "从手机开始检查", text: "本网站的页面在窄屏上会把多列内容改成单列，侧边目录也变成两列入口。这样不是简单缩放，而是重新安排阅读顺序。", principle: "响应式布局的目标是保持信息可读和操作可达，而不是让桌面布局原样挤进手机。" }] },
        en: { lead: "Responsive design does not shrink a desktop page. It rearranges priorities based on the available space.", sections: [{ title: "Why responsive design?", text: "People may visit the same page on devices with different widths and input methods. Layout must change columns, navigation and density while preserving content relationships." }, { title: "Three common strategies", points: [{ title: "Fluid space", text: "Use percentages, minmax and max-width to keep containers flexible but controlled." }, { title: "Breakpoint changes", text: "Switch columns, direction or navigation at meaningful widths." }, { title: "Content first", text: "On small screens, keep the title, primary content and core action visible first." }, { title: "Progressive enhancement", text: "Make the core content usable before adding richer visual effects." }] }, { title: "Check from the phone first", text: "On a narrow screen, this site turns multi-column content into a single column and reshapes the sidebar into two entry columns. It changes reading order instead of merely shrinking the desktop layout.", principle: "The goal of responsive layout is readable information and reachable actions, not a desktop page squeezed into a phone." }] }
      },
      code: {
        zh: ".cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n@media (max-width: 700px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n\n  .nav {\n    flex-wrap: wrap;\n  }\n}",
        en: ".cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n@media (max-width: 700px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n\n  .nav {\n    flex-wrap: wrap;\n  }\n}"
      },
      codeDescription: { zh: "媒体查询在屏幕变窄时重新定义列数，让内容优先于装饰保持可读。", en: "A media query changes the column count as the viewport narrows, keeping content readable before decoration." },
      demoDescription: { zh: "切换桌面、平板和手机预览，观察同一页面如何重排导航、侧栏和卡片。", en: "Switch between desktop, tablet and mobile previews to see the navigation, sidebar and cards reflow." },
      demo: "responsive"
    }
  };

  let currentKey = "flex";
  let currentLesson;

  function lang() { return window.LayoutI18n ? window.LayoutI18n.getLanguage() : "zh"; }
  function text(value) { return typeof value === "string" ? value : value[lang()]; }
  function escapeHtml(value) { return value.replace(/[&<>\"]/g, function (char) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[char]; }); }

  function renderLesson(key) {
    currentKey = key;
    currentLesson = lessons[key];
    document.getElementById("lesson-kicker").textContent = currentLesson.kicker;
    document.getElementById("lesson-count").textContent = currentLesson.count;
    document.getElementById("lesson-title").textContent = text(currentLesson.title);
    document.getElementById("lesson-summary").textContent = text(currentLesson.summary);
    document.querySelectorAll("[data-lesson-link]").forEach(function (link) { link.classList.toggle("is-current", link.dataset.lessonLink === key); });
    renderExplanation(); renderCode(); renderDemo();
  }

  function renderExplanation() {
    const content = currentLesson.explain[lang()];
    let html = '<p class="explain-lead">' + escapeHtml(content.lead) + '</p>';
    content.sections.forEach(function (section) {
      html += '<section class="explain-section"><h3>' + escapeHtml(section.title) + '</h3>';
      if (section.text) html += '<p>' + escapeHtml(section.text) + '</p>';
      if (section.points) {
        html += '<div class="point-grid">' + section.points.map(function (point) { return '<div class="point-card"><strong>' + escapeHtml(point.title) + '</strong><p>' + escapeHtml(point.text) + '</p></div>'; }).join("") + '</div>';
      }
      if (section.principle) html += '<div class="principle-box"><p>' + escapeHtml(section.principle) + '</p></div>';
      html += '</section>';
    });
    document.getElementById("explain-content").innerHTML = html;
  }

  function renderCode() {
    document.getElementById("code-description").textContent = text(currentLesson.codeDescription);
    document.getElementById("code-output").textContent = text(currentLesson.code);
  }

  function controlSelect(id, label, options, value) {
    return '<div class="control-group"><label class="control-label" for="' + id + '"><span>' + label + '</span></label><select id="' + id + '">' + options.map(function (option) { return '<option value="' + option[0] + '"' + (option[0] === value ? ' selected' : '') + '>' + option[1] + '</option>'; }).join("") + '</select></div>';
  }
  function controlRange(id, label, min, max, value, suffix) {
    return '<div class="control-group"><label class="control-label" for="' + id + '"><span>' + label + '</span><output id="' + id + '-output">' + value + suffix + '</output></label><input id="' + id + '" type="range" min="' + min + '" max="' + max + '" value="' + value + '" data-suffix="' + suffix + '"></div>';
  }
  function cardsMarkup(count) { return Array.from({ length: count }, function (_, index) { return '<div class="preview-card"><strong>Card ' + String(index + 1).padStart(2, "0") + '</strong><span>layout item</span></div>'; }).join(""); }

  function renderDemo() {
    const root = document.getElementById("demo-root");
    document.getElementById("demo-description").textContent = text(currentLesson.demoDescription);
    if (currentLesson.demo === "flex") renderFlexDemo(root);
    if (currentLesson.demo === "grid") renderGridDemo(root);
    if (currentLesson.demo === "responsive") renderResponsiveDemo(root);
  }

  function renderFlexDemo(root) {
    root.innerHTML = '<div class="demo-workspace"><div class="demo-controls">' +
      controlSelect("flex-direction", "direction", [["row", "row / 横向"], ["column", "column / 纵向"]], "row") +
      controlSelect("flex-justify", "justify-content", [["flex-start", "start / 起点"], ["center", "center / 居中"], ["space-between", "space-between / 两端"], ["space-around", "space-around / 环绕"]], "space-between") +
      controlSelect("flex-align", "align-items", [["stretch", "stretch / 拉伸"], ["center", "center / 居中"], ["flex-start", "flex-start / 起点"], ["flex-end", "flex-end / 终点"]], "center") +
      controlRange("flex-gap", "gap", 0, 36, 16, "px") + controlRange("flex-count", "cards", 2, 6, 4, "") +
      '<label class="check-row"><input id="flex-wrap" type="checkbox" checked> wrap / 允许换行</label></div>' +
      '<div class="demo-stage"><div class="stage-top"><span class="stage-led"><i></i><i></i><i></i></span><span id="flex-status">display: flex</span></div><div class="live-preview flex-preview" id="flex-preview">' + cardsMarkup(4) + '</div><pre class="preview-code" id="flex-live-code"></pre></div></div>';
    ["flex-direction", "flex-justify", "flex-align", "flex-gap", "flex-count", "flex-wrap"].forEach(function (id) { document.getElementById(id).addEventListener("input", updateFlex); });
    updateFlex();
  }
  function updateFlex() {
    const preview = document.getElementById("flex-preview"); if (!preview) return;
    const direction = document.getElementById("flex-direction").value, justify = document.getElementById("flex-justify").value, align = document.getElementById("flex-align").value, gap = document.getElementById("flex-gap").value, count = document.getElementById("flex-count").value, wrap = document.getElementById("flex-wrap").checked;
    preview.style.flexDirection = direction; preview.style.justifyContent = justify; preview.style.alignItems = align; preview.style.gap = gap + "px"; preview.style.flexWrap = wrap ? "wrap" : "nowrap"; preview.innerHTML = cardsMarkup(Number(count));
    document.getElementById("flex-gap-output").textContent = gap + "px"; document.getElementById("flex-count-output").textContent = count;
    document.getElementById("flex-live-code").textContent = ".preview { display: flex; flex-direction: " + direction + "; justify-content: " + justify + "; align-items: " + align + "; gap: " + gap + "px; flex-wrap: " + (wrap ? "wrap" : "nowrap") + "; }";
  }

  function renderGridDemo(root) {
    root.innerHTML = '<div class="demo-workspace"><div class="demo-controls">' + controlRange("grid-columns", "columns", 1, 4, 2, "") + controlRange("grid-gap", "gap", 0, 34, 14, "px") + controlRange("grid-count", "cards", 3, 8, 6, "") + '</div><div class="demo-stage"><div class="stage-top"><span class="stage-led"><i></i><i></i><i></i></span><span>display: grid</span></div><div class="live-preview grid-preview" id="grid-preview">' + cardsMarkup(6) + '</div><pre class="preview-code" id="grid-live-code"></pre></div></div>';
    ["grid-columns", "grid-gap", "grid-count"].forEach(function (id) { document.getElementById(id).addEventListener("input", updateGrid); }); updateGrid();
  }
  function updateGrid() { const preview = document.getElementById("grid-preview"); if (!preview) return; const columns = document.getElementById("grid-columns").value, gap = document.getElementById("grid-gap").value, count = document.getElementById("grid-count").value; preview.style.gridTemplateColumns = "repeat(" + columns + ", minmax(0, 1fr))"; preview.style.gap = gap + "px"; preview.innerHTML = cardsMarkup(Number(count)); document.getElementById("grid-gap-output").textContent = gap + "px"; document.getElementById("grid-columns-output").textContent = columns; document.getElementById("grid-count-output").textContent = count; document.getElementById("grid-live-code").textContent = ".preview { display: grid; grid-template-columns: repeat(" + columns + ", 1fr); gap: " + gap + "px; }"; }

  function renderResponsiveDemo(root) {
    root.innerHTML = '<div class="device-switcher"><button type="button" data-device="desktop" class="is-active">desktop</button><button type="button" data-device="tablet">tablet</button><button type="button" data-device="mobile">mobile</button></div><div class="responsive-stage"><div class="responsive-frame" id="responsive-frame"><div class="responsive-frame-header"><span></span><i></i></div><div class="responsive-body"><aside class="responsive-side"><i></i><i></i><i></i><i></i></aside><div class="responsive-content">' + cardsMarkup(4) + '</div></div></div></div><pre class="preview-code" id="responsive-live-code">@media (max-width: 700px) { ... }</pre>';
    root.querySelectorAll("[data-device]").forEach(function (button) { button.addEventListener("click", function () { root.querySelectorAll("[data-device]").forEach(function (item) { item.classList.remove("is-active"); }); button.classList.add("is-active"); updateResponsive(button.dataset.device); }); }); updateResponsive("desktop");
  }
  function updateResponsive(device) { const frame = document.getElementById("responsive-frame"); if (!frame) return; frame.className = "responsive-frame is-" + device; const width = device === "desktop" ? "100%" : device === "tablet" ? "78%" : "50%"; frame.style.setProperty("--frame-width", width); document.getElementById("responsive-live-code").textContent = device === "mobile" ? "@media (max-width: 700px) { .cards { grid-template-columns: 1fr; } .sidebar { display: none; } }" : device === "tablet" ? "@media (max-width: 980px) { .cards { grid-template-columns: repeat(2, 1fr); } }" : ".cards { grid-template-columns: repeat(4, 1fr); }"; }

  function setTab(tab) { document.querySelectorAll(".lesson-tab").forEach(function (button) { const active = button.dataset.tab === tab; button.classList.toggle("is-active", active); button.setAttribute("aria-selected", active); }); document.querySelectorAll(".lesson-panel").forEach(function (panel) { panel.classList.toggle("is-visible", panel.dataset.panel === tab); }); }
  function showToast(message) { const old = document.querySelector(".toast"); if (old) old.remove(); const toast = document.createElement("div"); toast.className = "toast"; toast.textContent = message; document.body.appendChild(toast); setTimeout(function () { toast.classList.add("is-out"); setTimeout(function () { toast.remove(); }, 220); }, 1500); }

  function init() {
    const initial = window.location.hash.slice(1); renderLesson(lessons[initial] ? initial : "flex");
    document.querySelectorAll("[data-lesson-link]").forEach(function (link) { link.addEventListener("click", function () { renderLesson(link.dataset.lessonLink); }); });
    window.addEventListener("hashchange", function () { const key = window.location.hash.slice(1); if (lessons[key]) renderLesson(key); });
    document.querySelectorAll(".lesson-tab").forEach(function (button) { button.addEventListener("click", function () { setTab(button.dataset.tab); }); });
    document.getElementById("reset-demo").addEventListener("click", function () { renderDemo(); showToast(lang() === "zh" ? "演示已重置" : "Demo reset"); });
    document.getElementById("copy-code").addEventListener("click", function () { navigator.clipboard.writeText(text(currentLesson.code)).then(function () { showToast(lang() === "zh" ? "代码已复制" : "Code copied"); }).catch(function () { showToast(lang() === "zh" ? "请手动选择代码" : "Please select the code manually"); }); });
    document.addEventListener("layout-language-change", function () { if (currentLesson) { renderLesson(currentKey); } });
    if (window.LayoutI18n) window.LayoutI18n.init();
  }
  document.addEventListener("DOMContentLoaded", init);
}());
