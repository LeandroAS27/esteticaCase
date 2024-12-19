const Navigation = () => {
    return(
        <>
            <header id="home" className="w-full h-auto bg-[#A8CABA] flex flex-col sm:flex-row sm:justify-between items-center px-6 sm:px-12 py-4 gap-4 sm:gap-0">
                <h1 className="font-bodoni text-[#4A4A4A] text-xl py-2">EsteticaCaseOne</h1>
                <nav className="w-full sm:w-auto">
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
                <div>
                    <p className="font-nunito text-gray-100">Aesthetic & Wellness Spa</p>
                </div>
            </header>
        </>
    )
}

export default Navigation;