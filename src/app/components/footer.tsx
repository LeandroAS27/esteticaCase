import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";

import addressIcon from '../../../public/icons8-marcador-96.png';

const Footer = () => {

    return(
        <>
            <footer className="w-full h-94 bg-[#A8CABA] p-6 flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:items-center sm:justify-center gap-8 text-center w-full max-w-screen-lg">
                    <div className="flex flex-col items-center justify-center lg:flex-row gap-2">
                        <a 
                        href="#home" 
                        className="hover:underline text-[#4A4A4A] font-nunito" 
                        aria-label="Ir para a seção Home">Home</a>
                        <a 
                        href="#serviços" 
                        className="hover:underline text-[#4A4A4A] font-nunito"
                        aria-label="Ir para a seção Serviços">Serviços</a>
                        <a 
                        href="#sobre"
                        className="hover:underline text-[#4A4A4A] font-nunito"
                        aria-label="Ir para a seção Sobre">Sobre</a>
                        <a 
                        href="#depoimentos" 
                        className="hover:underline text-[#4A4A4A] font-nunito"
                        aria-label="Ir para a seção Depoimentos">Depoimentos</a>
                        <a 
                        href="#contato" 
                        className="hover:underline text-[#4A4A4A] font-nunito"
                        aria-label="Ir para a seção Contato">Contato</a>
                    </div>

                    <div className="flex justify-center gap-4">
                        <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 border-[#E1306C] rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition"
                        aria-label="Acessar o Instagram">
                            <FaInstagram size={20} />
                        </a>
                        <a 
                        href="https://www.youtube.com" 
                        target="_blank" 
                        rel="nofollow noopener noreferrer" 
                        className="w-10 h-10 flex items-center justify-center border-2 border-[#FF0000] rounded-full text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition"
                        aria-label="Acessar o Youtube">
                            <FaYoutube size={20} />
                        </a>
                        <a 
                        href="https://www.tiktok.com" 
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 border-[#000000] rounded-full text-[#000000] hover:bg-[#000000] hover:text-white transition"
                        aria-label="Acessar o Tiktok">
                            <FaTiktok size={20} />
                        </a>
                        <a 
                        href="https://www.twitter.com" 
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 border-[#1DA1F2] rounded-full text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition"
                        aria-label="Acessar o Twitter">
                            <FaTwitter size={20} />
                        </a>
                        <a 
                        href="https://www.facebook.com" 
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 border-[#4267B2] rounded-full text-[#4267B2] hover:bg-[#4267B2] hover:text-white transition"
                        aria-label="Acessar o Facebook">
                            <FaFacebook size={20} />
                        </a>
                    </div>

                    <div className="flex items-center justify-center"> 
                        <Image src={addressIcon} alt="Icone de um marcador para o endereco" width={32} height={32}/>
                        <p className="text-[#4A4A4A] font-nunito">Av. lorem ipsulum, 123, Brasil</p>
                    </div>
                </div>
                <p className="mt-6 text-[#4A4A4A] font-nunito">Criado por Leandro Alves &#169; {new Date().getFullYear()}</p>
            </footer>   
        </>
    )
}

export default Footer;