import React from "react";
import CustomerAccount from "./CustomerAccount";
import person2 from "../../assets/icons/person2-icon.png";
import event from "../../assets/icons/event-icon.png";

const ServiceListHistory = () => {
  return (
    <body className="bg-[#F3F4F6] px-4">
      <div className="md:flex container md:mx-auto md:px-20 md:py-2 justify-between items-start  ">
        <div className="sticky top-[45px] md:top-[75px] z-40 md:basis-1/4  ">
          <CustomerAccount />
        </div>
        <div className="md:basis-3/4 md:ml-[32px]">
          {/* show on mobile */}
          <div className=" sm:hidden flex justify-center items-center mx-4 mb-4  p-4 rounded-[5px]  bg-blue-600 ">
            {/* show on mobile */}
            <div className="">
              <a className="font-medium text-white text-[20px] rounded-lg sm:text-[32px] ">
                ประวัติการซ่อม
              </a>
            </div>
          </div>
          <div className="  ">
            <div>
              <div>
                {/* เริ่มต้นcard */}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>
                {/* สิ้นสุด card */}
                {/* mockup ลบออกได้*/}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <div className=" w-full bg-white border-solid border-[1px] border-[#D8D8D8] rounded-[8px] flex flex-col px-[24px] py-[16px] mb-[16px] overflow-hidden">
                  <div className="flex flex-col">
                    <div className="pt-[12px] pb-[6px] flex flex-col sm:flex-row justify-between">
                      <p className="text-[18px] sm:text-[20px] font-medium text-black">
                        คำสังการซ่อมรหัส : AD04071205
                      </p>
                      <div className="flex flex-row items-center">
                        <p className="text-[14px] text-[#00596C] pr-4">
                          สถานะ:
                        </p>
                        <p className="text-[14px] text-gray-900 border bg-[#DFF9F6] rounded-[15px]  p-1 ml-1">
                          ดำเนินการสำเร็จ
                        </p>
                      </div>
                    </div>
                    <div className="  flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-row pt-[16px] ">
                        <img src={event} alt="event" className="mr-1 h-5" />
                        <p className="text-[14px] text-gray-700">
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                        </p>
                      </div>
                      {/* mapราคารวมจุดที่ 1 สำหรับแสดงผลบน PC*/}
                      <div className="hidden sm:flex flex-row items-center">
                        <p className="text-[14px] text-gray-700">ราคารวม:</p>
                        <p className="text-[18px] text-gray-950 pl-4 ">
                          1,550.00 ฿
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img src={person2} alt="person" className="mr-1 h-5" />
                      <p className="text-[14px] text-gray-700">
                        พนักงาน: สมาน เยี่ยมยอด
                      </p>
                    </div>
                    {/* mapราคารวมจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-center pt-[8px] md:hidden">
                      <p className="text-[14px] text-gray-700">ราคารวม:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        1,550.00 ฿
                      </p>
                    </div>
                    <p className="hidden sm:block text-[16px] pt-[20px] text-gray-700">
                      รายการ:{" "}
                    </p>
                    {/* mapรายการจุดที่ 1 สำหรับแสดงผลบน pc*/}
                    <div className=" hidden sm:flex flex-row justify-between">
                      <p className="text-[14px] pt-[20px] text-black">
                        • ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                      </p>
                      <button className="bg-blue-600 px-6 rounded-[10px] text-white">
                        ดูรายละเอียด
                      </button>
                    </div>
                    {/* mapรายการจุดที่ 2 สำหรับแสดงผลบน mobile*/}
                    <div className="flex flex-row items-top md:hidden pt-[8px]">
                      <p className="text-[14px] text-gray-700">รายการ:</p>
                      <p className="text-[16px] text-gray-950 pl-4 font-medium ">
                        • ล้างแอร์ 9,000 - 18,000 BTU,ติดผนัง 2 เครื่อง
                      </p>
                    </div>
                    <div>
                      <button className="bg-blue-600 py-2 px-6 rounded-[10px]  text-white md:hidden mt-[16px]">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>
                {/* mockup ลบออกได้*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ServiceListHistory;
