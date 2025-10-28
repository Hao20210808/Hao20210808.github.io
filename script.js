// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 作品資料
const projects = [
    {
        title: "Img Convertor",
        description: "圖片格式、尺寸批次轉換器，支援 PNG / JPG / WEBP / ICO。",
        img: "img/img_convertor_gui.png",
        link: "Img_convertor.exe",
        type: "download"
    },
    {
        title: "其他專案",
        description: "示範其他程式或設計作品。",
        img: "img/other_project.png",
        link: "#",
        type: "link"
    }
];

// 動態生成作品卡片
const portfolioGrid = document.getElementById("portfolio-grid");
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = project.img;
    img.alt = project.title;
    card.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = project.description;
    card.appendChild(p);

    const btn = document.createElement("a");
    btn.textContent = project.type === "download" ? "下載程式" : "了解更多";
    btn.href = project.link;
    btn.className = "btn";
    if(project.type === "download") btn.setAttribute("download", "");
    card.appendChild(btn);

    portfolioGrid.appendChild(card);
});
