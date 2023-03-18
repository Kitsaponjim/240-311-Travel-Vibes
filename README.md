# Travel Vibes Final Assignment

# สมาชิกในกลุ่ม
- 6310110037 นายกิจศภณ  สุทโธ  // frontend backend
- 6310110287 นางสาวผกภณ์ รามเจริญ	  // fontend

# Frontend
- ใช้ nextjs ที่เป็น react framwork ใช้ในการทำ frontend เเละใช้ axios ในการดึงข้อมูลจากตัว restful api 

```
cd font
npm i
npm run dev
```
# หน้าหลัก มีหน้าเเสดง สถานที่ท่องเที่ยวที่แนะนำ (get all) 
- โดยจะมีข้อมูลที่เป็นรูปภาพ และชื่อที่เที่ยว ข้อมูที่เที่ยวทั้งหมด ในหน้านี้ และมีการบอกจำนวนที่เที่ยวทั้งหมดที่มีอยู่ในฐานข้อมูล
![image](https://user-images.githubusercontent.com/98834570/226094948-21f5feb1-7046-4191-9795-debc6c0a9dfc.png)
![image](https://user-images.githubusercontent.com/98834570/226094952-0890ca25-1905-46fb-8032-cf989363b1c2.png)

# หน้าเพิ่มสถานที่ท่องเที่ยว (Post )
- จะเป็นการเพิ่มสถนาที่ท่องเที่ยวเข้าไปให่หน้าหลัก โดยจะใส่ได้ 3 อย่าง 
- 1.ชื่อที่เที่ยว
- 2.รูปที่เที่ยว (ใส่แบบ link)
- 3.ข้อมูลของที่เที่ยวนั้นๆ
- เมื่อทำการกดปุ่ม submmit จะเป็นการเพิ่มข้อมูลนั้น ๆ ไปหน้าหลัก และจำนวนที่เที่ยวที่แสดงในหน้าแรกก็จะเพิ่มขึ้นด้วย
![image](https://user-images.githubusercontent.com/98834570/226094969-c07b62ac-dad6-4a3b-85c6-254f6ee50a4f.png)

# หน้าแก้ไขสถนาที่(get all & delete)
- โดยจะมีข้อมูลที่เป็นรูปภาพ และชื่อที่เที่ยว ข้อมูที่เที่ยวทั้งหมด ในหน้านี้ และมีการบอกจำนวนที่เที่ยวทั้งหมดที่มีอยู่ในฐานข้อมูล และจะมีปุ่ม delete อยู่ในทุกอัน ทำให้สามารถลบข้อมูลที่เราไม่ต้องการออกได้ เมื่อลบเสร็จแล้วจำนวนที่เที่ยวก็จะลดลงด้วย
![image](https://user-images.githubusercontent.com/98834570/226094976-752c2790-e371-4c8a-b084-5226a840e4df.png)

- มีการใช้ next-auth โดยใช้เป็น google signin api
![image](https://user-images.githubusercontent.com/98834570/226095021-6b993800-0746-4e83-8978-a1c4560bd503.png)

- มีการใช้ session  หาก session หมดอายุหรืออยู่ในระบบไปสักระยะหนึ่ง ก็จะออกจากระบบ
- axios เพื่อใช้งาน api ในการทำ CRUD บนหน้า frontend เเละใช้หลักการของ asyn await (non-blocking ทั้งหมด)


# Backend
- ใช้ node.js ร่วมกับ express ในการดึงข้อมูลจาก mongodb ออกมาเเสดงผลที่ส่วน frontend เเละใช้หลักการของ asyn await (non-blocking ทั้งหมด) โดยมีรายละเอียดดังนี้
```
cd backend
npm i
node server.js
```
- POST /api/ : สร้างที่เที่ยวใหม่ขึ้นมาโดยมี name, image, description
- GET /api/ : ดึงข้อมูลที่เที่ยวทั้งหมดจากฐานข้อมูล
- GET /api/:id : ดึงที่เที่ยวที่มี ID ตรงกันในฐานข้อมูล
- DELETE /api/:id: ลบ
- PUT /api/:id อัปเดต

- Authentication
- ใช้ nextauth ใน next.js ในการทำ oauth ของ google
- ใช้ nodemon ที่จะช่วยในการ restart server ทุกครั้งที่มีการ save ทำให้สะดวกกับการพัฒนา โดยจะติดตั้งแบบ Deverloper
```
npm install nodemond -D
```
- และแก้ไขข้อมูลใน package.json
![image](https://user-images.githubusercontent.com/98834570/226095110-bfe08d7e-6b22-40fc-a750-14a5b75cf1c1.png)
- ทำให้เราสามารถใช้คำสั่ง
```
npm run dev 
```
- ใช้ cors เป็น middleware เพื่อใช้ในการส่งข้อมูล ของบทความ ไปแสดงใน frontend เพราะมันอยู่คนละโดเมนต้องใช้เพื่อให้ browser อนุญาติ
- ใช่ mongoose ที่ช่วยเชื่อมต่อกับ mongodb

