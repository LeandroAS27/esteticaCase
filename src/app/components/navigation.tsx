const Navigation = () => {
    return(
        <>
            <header id="home" className="w-full h-24 bg-[#A8CABA] flex justify-center items-center">
                <nav>
                    <ul className="flex flex-wrap justify-center sm:justify-between items-center gap-4 text-[#4A4A4A] font-bodoni text-md font-bold">
                        <li>
                            <a href="#home" className="hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="#serviços" className="hover:text-white transition duration-300">Serviços</a>
                        </li>
                        <li>
                            <a href="#sobre" className="hover:text-white transition duration-300">Sobre</a>
                        </li>
                        <li>
                            <a href="#depoimentos" className="hover:text-white transition duration-300">Depoimentos</a>
                        </li>
                        <li>
                            <a href="#contato" className="hover:text-white transition duration-300">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation;