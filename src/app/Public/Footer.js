function Link({link, text})
{
    return(
        <a href={link} className="text-xs mr-2 xl:text-sm">{text}</a>
    );
}


export default function Footer() {
    return (
        <>
            <section className="bg-blue-950 grid grid-cols-4 text-white pt-2 pl-2 pr-1 pb-5">
                
                    <h1 className="text-lg col-span-1 xl:text-2xl">Authentifi</h1>

                    <div className="col-span-3 text-right">
                        <Link link="/" text="Privacy Policy"></Link>
                        <Link link="/" text="Terms of Service"></Link>
                        <Link link="/" text="Contact Us"></Link>
                    </div>

                    <h2 className="text-xsm col-span-4 text-center mt-2">Empowering research with AI and blockchain</h2>

                <h3 className="h3-footer col-span-4 text-center">&copy; 2025 Authentifi, All rights reserved.</h3>
            </section>
            
            
            
            
            </>
    )
}