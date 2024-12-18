const About = () => {
    return(
        <>
            <section id="sobre" className="min-h-screen w-full bg-[#ECEBDE] flex flex-col justify-center items-center py-8">
                    <h1 className="text-[#C5A882] font-bodoni text-4xl font-bold py-8">Sobre nós</h1>
                <div className="mx-4 max-w-7xl lg:mx-auto flex flex-col lg:justify-start lg:text-left">
                    <p className="text-[#4A4A4A] mb-4 font-nunito">
                        No <strong>Estetica CaseOne</strong>, acreditamos que o cuidado com a beleza vai além da estética:
                        é um momento de autocuidado, confiança e renovação. 
                        Com uma equipe altamente qualificada e apaixonada pelo que faz, 
                        oferecemos tratamentos personalizados para realçar a sua beleza natural, 
                        respeitando sempre a individualidade de cada cliente.
                    </p>

                    <p className="text-[#4A4A4A] mb-4 font-nunito">
                        Nosso espaço foi cuidadosamente pensado para proporcionar um ambiente acolhedor, 
                        confortável e sofisticado, onde cada detalhe convida você a relaxar e aproveitar a experiência ao máximo. 
                        Trabalhamos com as melhores tecnologias, 
                        produtos de alta qualidade e tendências inovadoras do mercado de estética para garantir resultados seguros, 
                        eficazes e duradouros.
                    </p>

                    <p className="text-[#4A4A4A] mb-4 font-nunito">
                        Seja para um tratamento facial, corporal ou apenas um momento de descanso, 
                        estamos aqui para cuidar de você com profissionalismo, atenção e carinho.
                    </p>

                </div>
            </section>
        </>
    )
}

export default About;