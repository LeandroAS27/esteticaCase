import Image from "next/image";

//images
import limpeza from '../../../public/limpeza-de-pele-1024x819.png'
import drenagemLinfatica from '../../../public/drenagemLinfatica.webp'
import drenagemFacial from '../../../public/drenagemFacial.jpg'
import radioFrequencia from '../../../public/radiofrequencia.png'

const Services = () => {
    return(
        <>
            <section className="w-full min-h-screen bg-[#E1D7B7] py-12 px-4 flex flex-col items-center">
                <h1 className="text-[#C5A882] text-4xl my-4 font-bodoni font-bold">Serviços</h1>
                <div className="grid grid-cols-1 gap-8 mx-4">
                    {/* service 1 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={limpeza} 
                            alt="imagem de limpeza de pele" 
                            className="object-cover w-full h-full"/>
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Limpeza de Pele</h3>
                        <p className="text-[#4A4A4A] font-nunito">
                            A <strong className="text-black">Limpeza de Pele</strong> é uma higienização profunda da pele, 
                            que consiste em remover impurezas, comedões, pústulas e excesso de oleosidade da pele, 
                            recuperando o viço e o frescor de peles normais, mistas e oleosas. Proporciona uma pele mais clara e homogênea e uma textura mais fina e macia.
                        </p>
                    </div>
                    {/* service 2 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={drenagemLinfatica}
                            alt="Imagem da drenagem linfatica"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Drenagem Linfática</h3>
                        <p className="text-[#4A4A4A] font-nunito">A <strong className="text-black">Drenagem Linfática</strong> é indicada para diminuir os edemas gerais (posturais, medicamentosa, pré-menstruais), inchaço e medidas.
                            Também melhora o contorno corporal, desintoxicação 
                            (alimentação errada, exagero na ingestão de bebidas alcoólicas, longos períodos em medicação), aspecto da celulite e a nutrição da pele, além de reforçar o sistema imunológico e auxiliar no processo de emagrecimento.
                        </p>
                    </div>
                    {/* service 3 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={drenagemFacial} 
                            alt="imagem da drenagem facial"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white">Drenagem Facial</h3>
                        <p className="text-[#4A4A4A] font-nunito">A <strong className="text-black">Drenagem Facial</strong> é composta pela técnica de massagem drenante leve, suave e de movimentos lentos, 
                            realizado na região do colo, pescoço e face. Melhora a nutrição da pele, favorece o sistema imunológico e relaxa. Indicado para edema facial, pós-operatório facial, desordens sanguíneas e bolsas infra oculares.
                        </p>
                    </div>
                    {/* service 4 */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                            <Image 
                            src={radioFrequencia}
                            alt="Imagem da radiofrequencia"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="font-quicksand text-lg text-white">RadioFrequência</h3>
                        <p className="text-[#4A4A4A] font-nunito mb-4">A <strong className="text-black">Radiofrequência</strong> é um aparelho muito versátil, 
                            eficaz e seguro para o tratamento estético facial e corporal para redução de flacidez, rugas e celulite e também no auxílio ao tratamento de gordura localizada. O tratamento não é invasivo e causa efeitos apenas nas áreas de tratamento.
                        </p>
                        <p className="text-[#4A4A4A] font-nunito mb-4">
                            O aquecimento provocado pelas correntes de alta frequência, 
                            induzem a produção de novas fibras de colágeno, melhorando o aspecto da pele. 
                            Os resultados são rápidos e progressivos e começam a aparecer a partir da terceira sessão, 
                            dependendo de vários fatores, como idade, local de aplicação, grau de flacidez, 
                            número de sessões e manutenção dos resultados obtidos.
                        </p>

                        <p className="text-[#4A4A4A] font-nunito mb-4">
                            O tratamento com Radiofrequência possui algumas contraindicações: pessoas com uso de pinos e placas, 
                            marca-passo, tumor, DIU de cobre, alergia à substâncias, dermatite, trombose, gestantes, 
                            infecções locais, diabetes e rosáceas.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;