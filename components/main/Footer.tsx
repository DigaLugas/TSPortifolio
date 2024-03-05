import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxGlobe,
  RxReader,
  RxDesktop,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Other Links</div>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSg3lcP7_Zsb4TKIVEEzYXCinjFutvG6FSZGT9qU5r8fRmohleFlExTTdagN4gDQQ/pub" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxReader />
                        <span className="text-[15px] ml-[6px]">CV (English)</span>    
                    </a>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSg3lcP7_Zsb4TKIVEEzYXCinjFutvG6FSZGT9qU5r8fRmohleFlExTTdagN4gDQQ/pub" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxReader />
                        <span className="text-[15px] ml-[6px]">CV (Portuguese)</span>    
                    </a>
                    <a href="https://digalugas.github.io/portifolio/portifolio/index.html" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDesktop />
                        <span className="text-[15px] ml-[6px]">Personal Site</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://cursos.alura.com.br/vitrinedev/digalguas" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGlobe />
                        <span className="text-[15px] ml-[6px]">Vitrine.Dev</span>    
                    </a>
                    <a href="https://www.github.com/DigaLugas" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">GitHub</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/lucasgrfzan/" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                    <a href="mailto:lucasgustavorodrigues10@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">lucasgustavorodrigues10@gmail.com</span>    
                    </a>
                    <a href="link_para_aprender_mais_sobre_voce" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">+55 (11) 95225-5818</span>    
                    </a>

                </div>
            </div>


        </div>
    </div>
  )
}

export default Footer
