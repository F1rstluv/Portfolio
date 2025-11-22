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
    eduDegree3: "Basic Education Level"
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
    eduDegree3: "ระดับมัธยมศึกษาตอนต้น"
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