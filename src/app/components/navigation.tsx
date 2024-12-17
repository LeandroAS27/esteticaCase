const Navigation = () => {
    return(
        <>
            <header className="w-full h-24 bg-[#A8CABA] flex justify-center items-center">
                <nav>
                    <ul className="flex justify-center items-center gap-4 text-[#4A4A4A] font-bodoni text-md font-bold">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Serviços</a>
                        </li>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="">Depoimentos</a>
                        </li>
                        <li>
                            <a href="">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation;