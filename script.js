// =========================================
// 1. ส่วนแปลภาษา (Translations)
// =========================================
const translations = {
  en: {
    home: "Home",
    education: "Education",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    heroTitle: "Hi, I'm Sorawit Treechot",
    heroSubtitle: "Front-end Developer",
    heroText: "I am currently a third-year student at Sripatum University. I have skills in website development and knowledge of other programming languages as well.",
    btnClick: "Click Me",
    btnResume: "View Resume",

    educationHeading: "Education",
    eduDate1: "2023 - Present",
    eduSchool1: "Sripatum University",
    eduDegree1: "Bachelor of Science in Information and Communication Technology",
    eduGpa1: "GPA: 3.xx",
    
    eduDate2: "2017 - 2022",
    eduSchool2: "Triamudomsuksanomklao School",
    eduDegree2: "High School - Science & Math Program",
    
    eduDate3: "2013 - 2016",
    eduSchool3: "Secondary School",
    eduDegree3: "Basic Education Level",

    skillsHeading: "My Skills",
    skillCoding: "Coding Skills",
    skillTools: "Tools & Automation",
    skillSoft: "Soft Skills",
    soft1: "Teamwork",
    soft2: "Self-Management",
    soft3: "Presentation",

    portfolioHeading: "Latest Projects",
    port1Title: "Voice Transcription & Summarization",
    port1Desc: "A system designed using N8N to transcribe audio to text and summarize the content automatically.",
    port2Title: "Contract Management App",
    port2Desc: "An application built on AppSheet for contractors to easily record contracts and labor costs.",
    port3Title: "Cyber Security & ICDL",
    port3Desc: "Competed in Thailand Cyber Top Talent 2024 and ICDL Digital Challenge 2025.",
    port4Title: "PAPAYA POG & POG SHOP",
    port4Desc: "An online clothing store website developed using HTML, CSS, and JavaScript.",

    contactHeading: "Contact Me!",
    address: "Nong Chok, Bangkok 10530"
  },
  
  th: {
    home: "หน้าหลัก",
    education: "การศึกษา",
    skills: "ความสามารถ",
    portfolio: "ผลงาน",
    contact: "ติดต่อ",
    heroTitle: "สวัสดีครับ ผมนาย สรวิศ ตรีโชติ",
    heroSubtitle: "นักพัฒนา Front-end",
    heroText: "ตอนนี้กำลังศึกษาอยู่ปีที่ 3 ที่มหาวิทยาลัยศรีปทุม มีทักษะในการพัฒนาเว็บไซต์และมีความรู้ภาษาโปรแกรมอื่น ๆ เพิ่มเติม",
    btnClick: "ติดต่อ",
    btnResume: "ดูเรซูเม่",

    educationHeading: "ประวัติการศึกษา",
    eduDate1: "2566 - ปัจจุบัน",
    eduSchool1: "มหาวิทยาลัยศรีปทุม",
    eduDegree1: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
    eduGpa1: "เกรดเฉลี่ย: 3.xx",
    
    eduDate2: "2560 - 2565",
    eduSchool2: "โรงเรียนเตรียมอุดมศึกษาน้อมเกล้า",
    eduDegree2: "มัธยมศึกษาตอนปลาย (สายวิทย์-คณิต)",
    
    eduDate3: "2556 - 2559",
    eduSchool3: "โรงเรียนมัธยมศึกษา",
    eduDegree3: "ระดับมัธยมศึกษาตอนต้น",

    skillsHeading: "ทักษะความสามารถ",
    skillCoding: "ทักษะการเขียนโค้ด",
    skillTools: "เครื่องมือและออโตเมชัน",
    skillSoft: "ทักษะด้านบุคคล",
    soft1: "การทำงานเป็นทีม",
    soft2: "การจัดการตนเอง",
    soft3: "การนำเสนอ",

    portfolioHeading: "ผลงานที่โดดเด่น",
    port1Title: "ระบบถอดข้อความและสรุปเนื้อหา",
    port1Desc: "ระบบอัตโนมัติที่ออกแบบจากโปรแกรม N8N เพื่อถอดข้อความจากเสียงและสรุปเนื้อหา",
    port2Title: "แอป Contract Management",
    port2Desc: "แอปพลิเคชันสำหรับผู้รับเหมาก่อสร้าง สร้างบน AppSheet เพื่อบันทึกสัญญาและค่าแรง",
    port3Title: "กิจกรรมการแข่งขัน",
    port3Desc: "เข้าร่วมแข่งขัน Thailand Cyber Top Talent 2024 และ ICDL Digital Challenge 2025",
    port4Title: "เว็บไซต์ PAPAYA POG & POG SHOP",
    port4Desc: "พัฒนาเว็บไซต์ร้านขายเสื้อผ้าออนไลน์ โดยใช้ HTML, CSS และ JavaScript",

    contactHeading: "ช่องทางการติดต่อ",
    address: "เขตหนองจอก กทม. 10530"
  }
};

// ฟังก์ชันเปลี่ยนภาษา
function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // ตั้งค่าปุ่ม Active
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`btn-${lang}`).classList.add("active");
}

// เริ่มต้นด้วยภาษาอังกฤษ
document.addEventListener("DOMContentLoaded", () => setLanguage('en'));


// =========================================
// 2. ประกาศตัวแปร Global (ใช้ร่วมกันทั้งไฟล์)
// =========================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// =========================================
// 3. ฟังก์ชันเมนูมือถือ (Toggle Menu)
// =========================================
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // เปลี่ยนไอคอนเป็นกากบาท
    navbar.classList.toggle('active'); // แสดง/ซ่อนเมนู
};

// เมื่อกดลิงก์ในเมนู ให้หุบเมนูกลับไป
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


// =========================================
// 4. ฟังก์ชัน Scroll Spy (เปลี่ยน Active ตามการเลื่อน)
// =========================================
window.onscroll = () => {
    // Logic สำหรับเปลี่ยนปุ่ม Active ตาม Section ที่เลื่อนถึง
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // ค้นหาลิงก์ที่มี href ตรงกับ id แล้วใส่ active
                let target = document.querySelector('header nav a[href*=' + id + ']');
                if(target) {
                    target.classList.add('active');
                }
            });
        }
    });

    // Logic เพิ่มเติม: เมื่อเลื่อนหน้าจอ ให้หุบเมนูมือถืออัตโนมัติ (ใช้ตัวแปร Global)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
