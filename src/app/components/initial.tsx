
//images
import Image from "next/image";
import aesthetic from '../../../public/wallpaper2.jpg'

const Initial = () => {
    return(
        <>
            <main className="relative flex items-center justify-center flex-col my-8 h-screen w-full">
                <div className="absolute inset-0 z-0">
                    <Image 
                    src={aesthetic} 
                    alt="aesthetic image" 
                    layout="fill"
                    objectFit="cover"
                    className="object-cover w-full bg-opacity-40"/>
                </div>
                <div className="relative z-10 text-center flex flex-col text-white">
                    <h1 className="font-bodoni text-4xl text-[#4A4A4A]">Wellness & Spa</h1>
                    <span className="font-quicksand text-2xl text-[#4A4A4A]">Aesthetic & Wellness Spa</span>
                    <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    className="bg-[#E7C8C3] text-[#4A4A4A] text-center font-nunito py-2 px-4 my-8 rounded-md 
                        shadow-[0_2px_2px_#C5A882] hover:shadow-[0_4px_8px_#C5A882] 
                        focus:outline-none "
                    >
                        Entre em contato
                    </a>
                </div>
            </main>
        </>
    )
}

export default Initial;