const HeroSection = () => {
    const heroSectionOneStyle = 'ml-[40%] h-[20em] w-[20em] rounded shadow-md  bg-HERO-TWO bg-center bg-cover transition duration-1000 hover:scale-110'
    const heroSectionTwoStyle = 'ml-[40%] h-[20em] w-[20em] rounded shadow-md  bg-HERO-ONE bg-center bg-cover transition duration-1000 hover:scale-110'
    const heroSectionThreeStyle = 'ml-[40%] h-[20em] w-[20em] rounded shadow-md  bg-HERO-THREE bg-center bg-cover transition duration-1000 hover:scale-110'
    const heroSectionFourStyle = 'ml-[40%] h-[20em] w-[20em] rounded shadow-md  bg-HERO-FOUR bg-center bg-cover transition duration-1000 hover:scale-110'
    const textHeroSection = 'h-[30%] w-[100%] bg-SECONDARY  shadow-2xl relative top-0 rounded flex items-center justify-center'
    const infoHeroSection = 'h-[30%] w-[100%] bg-TERCIARY relative top-[70%] rounded opacity-0  transition duration-700 hover:opacity-100'
    const titleInfoHeroSection = 'text-white font-lilita '
    const textInfoHeroSection = 'text-black font-lilita p-2 text-sm'
    return (

        <div className='grid grid-cols-2 grid-rows-2 h-screen w-screen bg-TERCIARY  information' >
            <div className={heroSectionOneStyle}>
                <div className={infoHeroSection}>
                    <div className={textHeroSection}>
                        <p className={titleInfoHeroSection}>DISFRUTA DE LA TRANQUILIDAD</p>
                    </div>
                    <p className={textInfoHeroSection}>Descubre un lugar sereno donde puedas encontrar la paz interior y disfrutar de momentos de tranquilidad.</p>
                </div>
            </div>
            <div className={heroSectionTwoStyle}>
                <div className={infoHeroSection}>
                    <div className={textHeroSection}>
                        <p className={titleInfoHeroSection}>EXPERIENCIA GASTRONÓMICA</p>
                    </div>
                    <p className={textInfoHeroSection}>Sumérgete en una experiencia culinaria única con la selección más exquisita de platos preparados con pasión y creatividad.</p>
                </div>
            </div>
            <div className={heroSectionThreeStyle}>
                <div className={infoHeroSection}>
                    <div className={textHeroSection}>
                        <p className={titleInfoHeroSection}>VISTAS PANORÁMICAS</p>
                    </div>
                    <p className={textInfoHeroSection}>Disfruta de las mejores vistas que te dejarán sin aliento, ofreciendo un paisaje que captura la belleza de la naturaleza.</p>
                </div>
            </div>
            <div className={heroSectionFourStyle}>
                <div className={infoHeroSection}>
                    <div className={textHeroSection}>
                        <p className={titleInfoHeroSection}>EXPLORA LA NATURALEZA</p>
                    </div>
                    <p className={textInfoHeroSection}>Adéntrate en la naturaleza y descubre paisajes sorprendentes que te conectarán con el entorno de manera única.</p>
                </div>
            </div>
        </div>

    )
}

export default HeroSection