
//images
import Image from "next/image";
import aesthetic from '../../../public/esteticawallpaper.webp'

const Initial = () => {
    return(
        <>
            <main className="flex items-center flex-col my-8 h-screen w-full">
                <h1 className="font-bodoni text-4xl text-[#4A4A4A]">Wellness & Spa</h1>
                <span className="font-quicksand text-2xl text-[#4A4A4A]">Aesthetic & Wellness Spa</span>
                <Image src={aesthetic} alt="aesthetic image" width={500} height={500} className="object-cover bg-opacity-40"/>
                <button className="bg-[#E7C8C3] text-[#4A4A4A] font-nunito py-2 px-4 my-8 rounded-md 
                    shadow-[0_2px_2px_#C5A882] hover:shadow-[0_4px_8px_#C5A882] 
                    focus:outline-none ">Entre em contato</button>
            </main>
        </>
    )
}

export default Initial;