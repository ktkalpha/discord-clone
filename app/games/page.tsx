import "../globals.css";
import ava from "./avatar.png";
import Image from "next/image";
import { FaHashtag, FaPlus, FaChevronDown, FaUserPlus } from "react-icons/fa";

export default function Home() {
  // console.log(ava);
  return (
    <main className="w-full flex flex-row">
      <div className="bg-[#2f3136] w-[25rem]">
        {/* server title */}
        <div className="flex flex-row items-center justify-between border-b border-[#27272a]">
          <p className="p-3">게임 서버</p> 
          <FaChevronDown className="mr-3" />
        </div>
        {/* chanel title */}
        <div className="flex text-[#72767d] text-xs flex-row items-center">
          <FaChevronDown className="ml-3" />
          <p className="p-3 mr-3">채팅 채널</p>
        </div>
        {/* chanel */}
        <div className="flex text-[#72767d] text-base flex-row items-center ml-4 mr-4 bg-[#40444b] rounded">
          <FaHashtag className="ml-3" />
          <p className="ml-1 pt-2 pb-2 mr-3 font-bold text-white">게임</p>
          <FaUserPlus className="ml-auto mr-3"></FaUserPlus>
        </div>
      </div>
      {/* chating zone */}
      <div className="w-full h-full flex flex-col">
        <header className="flex flex-row items-center p-3">
          <FaHashtag></FaHashtag>
          <h1>게임</h1>
        </header>
        <div className="border-b-2 border-[#2f3136] w-full"></div>
        {/* input box and title */}
        <footer className="mt-auto mb-5">
          <div className="rounded-full bg-[#4f545c] ml-2 mb-2 p-5 w-fit">
            <FaHashtag size="3rem"></FaHashtag>
          </div>
          <h1 className="text-xl font-bold  ml-2">
            #게임에 오신 것을 환영합니다!
          </h1>
          {/* msg add here */}
          <Msg nick="Anon" text="hello" profile={ava}></Msg>
          <div className="mt-3 mb-3 border-b-2 border-[#4d5159] w-full"></div>
          <div className="bg-[#40444b] rounded-lg p-3 flex space-x-5 items-center">
            <div className="rounded-full bg-[#4f545c] p-2 w-fit">
              <FaPlus size="1rem"></FaPlus>
            </div>
            <input
              className="bg-[#40444b] w-full h-full focus:outline-none"
              placeholder="#게임에 메시지 보내기"
            ></input>
          </div>
        </footer>
      </div>
    </main>
  );
}

const Msg = ({ nick, text, profile }: any) => (
  <div className="msg">
    <Image alt="profile image" src={profile}></Image>
    <div className="ml-2 flex flex-col">
      <p className="font-bold ">{nick}</p>
      <p>{text}</p>
    </div>
  </div>
);
