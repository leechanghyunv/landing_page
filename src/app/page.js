'use client'

import Image from 'next/image';
import { texts,appStore,playStore } from './text'; 
import React, { useState, useEffect } from "react";



export default function Home() {
  const handleAndroidClick = () => {
    alert("준비중입니다!");
  };


  return (
    <div>


<header className="w-full text-white py-4" style={{ backgroundColor: '#EAEAEA' }}>
      <div className="flex justify-end items-center mx-4">
        <nav>
          <ul className="flex space-x-4 text-black font-bold ">
            <li><a href={appStore} 
            onClick={(e) => {

            }} className="text-base lg:text-xl">IOS</a></li>
            <li>
              <a 
                href={playStore} 
                onClick={(e) => { 
                  
                }}
                className="text-base lg:text-xl"
              >
                Android
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>






  <div className='flex justify-center'>
       <img
    src="/assets/공수계산기_워크캘린더.png"
    alt="워크캘린더 공수계산기"
    className="w-auto h-auto my-4 md:hidden"
  />
<img
  src="/assets_big/공수계산기_소개.png" // 모바일 이상에서 보일 이미지
  alt="워크캘린더 공수계산기"
  className="hidden md:block w-full h-auto my-4" // 모바일 이상에서 보이도록 설정
/>
  </div>
      

  <div className='flex justify-center my-4'>
       <img
    src="/assets/소비자_리뷰.png"
    alt="워크캘린더 공수계산기"
    className="w-auto h-auto my-4 md:hidden"
  />
<img
  src="/assets_big/공수달력_특징.png" // 모바일 이상에서 보일 이미지
  alt="워크캘린더 공수계산기"
  className="hidden md:block w-full h-auto my-4" // 모바일 이상에서 보이도록 설정
/>
  </div>
      
 <div className='flex justify-center my-4'>
       <img
    src="/assets/편리한_공수등록.png"
    alt="워크캘린더 공수계산기"
    className="w-auto h-auto my-8 md:hidden"
  />

  </div>


<div className="my-4">
  {/* 스와이프 가능한 이미지 목록 */}
     <img
    src="/assets/공수기록_백업.png"
    alt="워크캘린더 공수계산기"
    className="w-auto h-auto my-4 md:hidden"
  />

  <img
  src="/assets_big/공수_특징.png" // 모바일 이상에서 보일 이미지
  alt="워크캘린더 공수계산기"
  className="hidden md:block w-full h-auto my-4" // 모바일 이상에서 보이도록 설정
/>

</div>


 <div className='flex justify-center my-2'>
       <img
    src="/assets/Q&A.png"
    alt="워크캘린더 공수계산기"
    className="w-auto h-auto my-4 md:hidden"    
  />
  <img
  src="/assets_big/공수어플_평가.png" // 모바일 이상에서 보일 이미지
  alt="워크캘린더 공수계산기"
  className="hidden md:block w-full h-auto my-4" // 모바일 이상에서 보이도록 설정
/>

  </div>



    </div>
  );
}





