import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {

    return(
        <>
            <footer className="w-full h-94 bg-[#A8CABA] p-6 flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-center gap-8 text-center w-full max-w-screen-lg">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <a href="#home" className="hover:underline text-[#4A4A4A]">Home</a>
                        <a href="#serviços" className="hover:underline text-[#4A4A4A]">Serviços</a>
                        <a href="#sobre" className="hover:underline text-[#4A4A4A]">Sobre nós</a>
                        <a href="#depoimentos" className="hover:underline text-[#4A4A4A]">Depoimentos</a>
                        <a href="#contato" className="hover:underline text-[#4A4A4A]">Contato</a>
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="https://www.instagram.com" target="_blank" className="w-10 h-10 flex items-center justify-center border-2 border-[#E1306C] rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-[#FF0000] rounded-full text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" className="w-10 h-10 flex items-center justify-center border-2 border-[#000000] rounded-full text-[#000000] hover:bg-[#000000] hover:text-white transition">
                            <FaTiktok size={20} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" className="w-10 h-10 flex items-center justify-center border-2 border-[#1DA1F2] rounded-full text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" className="w-10 h-10 flex items-center justify-center border-2 border-[#4267B2] rounded-full text-[#4267B2] hover:bg-[#4267B2] hover:text-white transition">
                            <FaFacebook size={20} />
                        </a>
                    </div>
                </div>
                <p className="mt-6 text-[#4A4A4A]">Criado por Leandro Alves &#169; {new Date().getFullYear()}</p>
            </footer>   
        </>
    )
}

export default Footer;