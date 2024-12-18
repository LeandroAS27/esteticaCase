//images
import Image from "next/image";
import profissional from '../../../public/profissionalEstetica.jpg';
import equipamentos from '../../../public/equipamentosEstetica.jpg';
import ambient from '../../../public/ambientEstetica.webp';
import tratamento from '../../../public/tratamentosEsteticas.jpg';

const Benefits = () => {
    return(
        <>
            <section className="min-h-screen w-full bg-[#A1B5A7] flex flex-col justify-center items-center py-16">
                <h1 className="text-[#C5A882] text-4xl mb-8 font-bodoni font-bold">Benefícios</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-4 max-w-7xl">
                    {/* service 1 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={profissional} 
                            alt="imagem de uma profissional de estetica" 
                            className="object-cover w-full h-full"/>
                        </div>
                        <h3 className="font-quicksand text-lg text-white mt-4">Profissionais qualificados</h3>
                        <p className="text-gray-400 font-nunito mt-2">
                            texto
                        </p>
                    </div>
                    {/* service 2 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={equipamentos}
                            alt="Imagem dos equipamentos de estetica"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white mt-4">Equipamentos modernos</h3>
                        <p className="text-gray-400 font-nunito mt-2">
                            texto
                        </p>
                    </div>
                    {/* service 3 */}
                    <div id="depoimentos" className="flex flex-col items-center justify-center text-center">
                        <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={ambient} 
                            alt="imagem da drenagem facial"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white mt-4">Ambiente aconchegante</h3>
                        <p className="text-gray-400 font-nunito mt-2">
                            texto
                        </p>
                    </div>
                    {/* service 4 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={tratamento}
                            alt="Imagem da radiofrequencia"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white mt-4">Tratamentos Personalizados</h3>
                        <p className="text-gray-400 font-nunito mt-2">
                            texto
                        </p>
                    </div>
                </div>
                    <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    className="mt-12 py-3 px-6 border-2 rounded-lg bg-[#FFF8E6] text-center text-black hover:text-blue-500 transition duration-300 font-quicksand mb-2"
                    >
                        Agende sua consulta
                    </a>
            </section>
        </>
    )
}

export default Benefits;