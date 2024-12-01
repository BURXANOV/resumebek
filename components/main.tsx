"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-auto bg-[#2A2A2A] overflow-hidden relative sm:p-16 p-2">
      <div className=" p-10 h-auto items-center border-gray-300 shadow-sm justify-center rounded-xl bg-gradient-to-r from-[#232732] to-[#3e4c59]">
        <nav className="md:hidden sm:hidden xs:hidden lg:block">
          <ul className="flex justify-center space-x-20 ">
            <li className="px-6 cursor-pointer py-3 bg-gradient-to-r text-white font-semibold rounded-lg shadow-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-950  transition duration-300">
              <Link href="/">Контакт</Link>
            </li>
            <li className="px-6 cursor-pointer py-3 bg-gradient-to-r text-white font-semibold rounded-lg shadow-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-950 transition duration-600">
              <Link href="/">Резюме</Link>
            </li>
            <li className="px-6 cursor-pointer py-3 bg-gradient-to-r text-white font-semibold rounded-lg shadow-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-950 transition duration-300">
              <Link href="/">Мен жонундо</Link>
            </li>
            <li className="px-6 cursor-pointer py-3 bg-gradient-to-r text-white font-semibold rounded-lg shadow-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-950 transition duration-300">
              <Link href="/">Сертификать</Link>
            </li>
            <li className="px-6 cursor-pointer py-3 bg-gradient-to-r text-white font-semibold rounded-lg shadow-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-950 transition duration-300">
              <Link href="/">Проект</Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className="md:block cursor-pointer sm:block lg:hidden">
            <Image src="/image/Vector.png" width={24} height={24} alt="img" />
          </ul>
        </div>

        <div className="animate-fade-in flex justify-center items-center mt-10">
          <div className="bg-slate-400 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[100px] shadow-md shadow-blue-200 w-[300px] h-[300px] flex items-center justify-center relative">
            <Image
              className="rounded-tl-[200px]  rounded-tr-[200px] rounded-bl-[200px] rounded-br-[100px] shadow-lg hover:bg-black"
              src="/image/beko.jpeg"
              width={300}
              height={300}
              alt="img"
            />
          </div>
        </div>

        <div className="flex text-center mt-6 items-center justify-center text-white">
          <div className="max-w-[800px]">
            <p className="text-2xl font-bold">Хейй, менин атым Бек</p>
            <h1 className="text-3xl mt-2">Frontend-разработчик </h1>
            <p className="text-xl  mt-2  ">
              Мен Frontend иштеп чыгуучу катары заманбап жана адаптивдүү
              веб-тиркемелерди түзүү менен алектенем. Интерфейс дизайнына жана
              API менен иштөөгө кызыгам. IT чөйрөсүндө өсүүгө жана татаал
              маселелерди чечүүгө умтулам.
            </p>
          </div>
        </div>
        <div>
          <div className="flex mt-10 flex-wrap items-center justify-center space-x-10">
            <Link href="https://www.linkedin.com/in/bekbolot-kamalidin-uulu-878877214/">
              <Image
                className="cursor-pointer"
                src="/linkedin.svg"
                alt="img"
                width={84}
                height={24}
              />
            </Link>
            <Link href="https://github.com/BURXANOV">
              <Image
                className="cursor-pointer"
                src="/github.svg"
                alt="img"
                width={84}
                height={24}
              />
            </Link>
            <Link href="https://web.whatsapp.com/">
              <Image
                className="cursor-pointer"
                src="/whatsapp.svg"
                alt="img"
                width={84}
                height={24}
              />{" "}
            </Link>
            <Link href="https://web.telegram.org/k/">
              <Image
                className="cursor-pointer"
                src="/telegram.svg"
                alt="img"
                width={84}
                height={24}
              />
            </Link>
            <Link href="https://www.instagram.com/burxan0v_official/">
              <Image
                className="cursor-pointer"
                src="/instagram.svg"
                alt="img"
                width={84}
                height={24}
              />
            </Link>
            <Link href="https://mail.google.com/mail/u/0/#inbox">
              <Image
                className="cursor-pointer"
                src="/gmail.svg"
                alt="img"
                width={84}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
