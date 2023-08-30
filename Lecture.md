###########################
####### DEVELOPMENT #######
###########################

# Project Setup

- npx create-react-app <project-name>
- cd <project-name>

# Project Start-Stop

- pwd (current root of prject)
- root level : จะมี package\*.jason, node_modules, .git
- npm start # รอ script ทำงาน
- เปิด browser
- ห้ามปิด terminal

# nmp start (CRA) หรือ npm run dev

เวลาที่โค้ดไม่ทำงาน หรือมี bug ให้ลองไล่เช็คตามนี้

- เรียกใช้ script ของ library(react-script)
- เอาโค้ดใน src มา Bundle (Webpack)
- ไล่ตั้งแต่ index.js และดูว่ามีการ import อะไรบ้าง
- ไล่หา code ที่ import ทั้งหมด
  - code ตัวเองในไฟล์อื่นๆ (incorrect_path, missing file, ลืม export)
  - code ใน Node_Modules (import ผิด, ยังไม่ได้ install)
  - asset ต่างๆ VDO,PIC,SVG
- solve import ได้หมด => bundle code เป็น 1 ไฟล์ JSใหญ่
- นำไฟล์ JS แนบ Index.html ให้
- นำ CSS ทั้งหมด แนบ index.html ให้ด้วย
- นำ Asset ต่างๆไปแทรกใน index.html
- ยัดทุกอย่างที่ต้องใช้ ลง dev-server (webpack dev-server)
- เปิด server ให้ (default port:3000)

React ==> React Dom ==> Inject CSS เข้าไปใน Javascript (Webpack ช่วย Inject) ==> <App/>
