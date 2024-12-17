//images
import Image from "next/image";
import profissional from '../../../public/profissionalEstetica.jpg';
import equipamentos from '../../../public/equipamentosEstetica.jpg';
import ambient from '../../../public/ambientEstetica.webp';
import tratamento from '../../../public/tratamentosEsteticas.jpg';

const Benefits = () => {
    return(
        <>
            <section id="" className="min-h-screen w-full bg-[#A1B5A7] flex flex-col items-center">
                <h1 className="text-[#C5A882] text-4xl my-4 font-bodoni font-bold">Benefícios</h1>
            <div className="grid grid-cols-1 gap-8 mx-4">
                    {/* service 1 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={profissional} 
                            alt="imagem de uma profissional de estetica" 
                            className="object-cover w-full h-full"/>
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Profissionais qualificados</h3>
                        <p className="text-gray-400 font-nunito">
                            texto
                        </p>
                    </div>
                    {/* service 2 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={equipamentos}
                            alt="Imagem dos equipamentos de estetica"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Equipamentos modernos</h3>
                        <p className="text-gray-400 font-nunito">
                            texto
                        </p>
                    </div>
                    {/* service 3 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={ambient} 
                            alt="imagem da drenagem facial"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Ambiente aconchegante</h3>
                        <p className="text-gray-400 font-nunito">
                            texto
                        </p>
                    </div>
                    {/* service 4 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={tratamento}
                            alt="Imagem da radiofrequencia"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Tratamentos Personalizados</h3>
                        <p>texto</p>
                    </div>
                    <button className="py-2 px-4 border-2 rounded-lg bg-[#FFF8E6] text-black font-quicksand mb-2">Agende sua consulta</button>
                </div>
            </section>
        </>
    )
}

export default Benefits;