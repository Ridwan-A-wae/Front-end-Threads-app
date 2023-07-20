const data = [
  {
    id: 1,
    username: "Jojo",
    post: "Full Stack Developer คือ ผู้พัฒนาซอฟต์แวร์ทั้งส่วนที่ติดต่อกับผู้ใช้งาน และส่วนระบบหลังบ้าน หรือก็คือ เป็นทั้ง Front End Developer และ Back End Developer ในคน ๆ เดียวกันนั่นเอง ซึ่งในส่วน Front End จะเป็นส่วนของเว็บไซต์ที่ผู้ใช้งานมองเห็น และสามารถโต้ตอบกับมันได้ เช่น กดปุ่ม, กรอกแบบฟอร์ม, เมนู, ตัวหนังสือ หรือรูปภาพต่าง ๆ เป็นส่วนที่หลายคนมักจะเรียกกันว่า “หน้าบ้าน” หรือ User Interface (UI)",
    time: "19/7/2023",
    heart: false,
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
  },
  {
    id: 2,
    username: "Hanzo",
    post: "Hard Skill Hard Skill ที่ Full Stack Developer ควรมี คือ การใช้งานภาษา และเครื่องมือต่าง ๆ ของทั้ง Front End และ Back End ได้อย่างคล่องแคล่ว สามารถสร้างของได้ตรงตามที่ออกแบบ ใช้งานได้จริง และง่ายต่อการแก้ไขในอนาคต โดยควรมีทักษะดังต่อไปนี้",
    time: "16/7/2023",
    heart: true,
    image:"https://images.unsplash.com/photo-1453805622064-de9796753c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    username: "Rome",
    post: "ทักษะการใช้ Front End Frameworks และ Front End LibrariesFrameworks และ Libraries เป็นเหมือนเครื่องมือที่ช่วยในการ Code สะดวกมากยิ่งขึ้นLibrary คือ ชุดของโปรแกรม หรือโค้ดที่ถูกสร้างขึ้นมาเพื่อทำงานบางอย่าง โดยที่เราสามารถนำไปใช้ในโปรแกรมของเราได้ เช่น ถ้าอยากสร้างช่อง Search ก็สามารถเรียกใช้ชุดโค้ดได้เลย แล้วนำมาปรับปรุงเล็กน้อยให้เข้ากับเว็บไซต์ของเรา ซึ่งโดยทั่วไปแล้ว Library จะไม่เป็นโครงสร้างที่ครอบคลุมการทำงานทั้งหมดของโปรแกรมFramework คือ ชุดคำสั่ง หรือโครงสร้างที่กำหนดรูปแบบการเขียนโค้ดเพื่อช่วยในการสร้าง และพัฒนาซอฟต์แวร์ โดยจะมีการกำหนดโครงสร้างของโปรแกรมที่ต้องการพัฒนาไว้แล้ว ซึ่งจะช่วยให้เราสามารถเขียนโค้ดได้อย่างมีประสิทธิภาพ และตรงตามมาตรฐาน ช่วยลดเวลา และทำให้โค้ดตรงตามมาตรฐานมากยิ่งขึ้นด้วย",
    time: "15/7/2023",
    heart: false,
    image:"https://images.unsplash.com/photo-1430876988766-1be68caef0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    username: "Meme",
    post: "ทักษะการทำ Responsive DesignResponsive Design คือหลักการออกแบบที่ทำให้เว็บไซต์สามารถรองรับการใช้งานได้จากทุก ๆ ขนาดหน้าจอ ไม่ว่าจะเป็น Mobile, Desktop, Tablet ก็ต้องสามารถกำหนดให้แสดงผลได้เหมาะกับอุปกรณ์นั้น ๆ",
    time: "12/7/2023",
    heart: true,
    image:"https://images.unsplash.com/photo-1441260038675-7329ab4cc264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    username: "JohnDo",
    post: "ทักษะ Progressive Web AppsProgressive Web Apps (PWA) คือ แนวคิดไอเดียจาก Google ที่จะพัฒนาให้ Web มีประสบการณ์ใช้งานใกล้เคียงกับ App มากที่สุด ไม่ว่าจะเป็น ความรวดเร็ว หรือการใช้งานที่ลื่นไหล ลูกเล่นเมนูที่ใช้ง่าย ถือเป็นทักษะที่ถ้าหากทำเป็น จะช่วยเพิ่มเครดิตให้กับตัวเองได้อย่างมากเลยทีเดียวทักษะการใช้ Browser Developer ToolsBrowser Developer Tools เป็นเครื่องมือที่มาพร้อมกับ Browser นั้น ๆ ซึ่งจะช่วยให้ Developer สามารถเข้าไปตรวจสอบ ทดสอบ ปรับแต่งเว็บไซต์ได้ เพื่อให้มั่นใจว่าเว็บไซต์เป็นไปตามความคาดหวังทักษะการตรวจสอบ และปรับปรุง Web Performanceเมื่อพูดถึงเรื่อง Performance ของเว็บ ก็จะพูดเรื่องความเร็วเป็นหลัก Developer ที่ดีต้องสามารถลดขนาดของ Component บนหน้าเว็บให้อยู่ในขนาดที่พอดี เพื่อให้เว็บไซต์ทำงานได้เร็วมากยิ่งขึ้น",
    time: "10/7/2023",
    heart: false,
    image:"https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
  },
];
export default data;
