import React, {useState,useEffect} from "react";
import { FaBeer } from 'react-icons/fa';
import {motion as m} from 'framer-motion';


const NavBar = () => {
    const [nav,setNav] = useState(false)

    const handlNav = () =>{
        setNav(!nav) 
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
        setPrevScrollPos(currentScrollPos);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hoverBorder = "py-2 hover:border-b-2 border-green ease-in-out duration-100 transform origin-right hover:scale-x-0 hover:origin-left"
    return(
        <header className={`fixed w-full shadow shadow-veryDarkBlue z-10 transition-transform duration-300 ease-in-out 
        ${ visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <m.nav 
                initial={{opacity:0}} 
                animate={{opacity: 1 }}
                transition={{duration: 0.75,ease:"easeOut"}} 
                className="flex justify-between items-center h-24 max-w-[1033px] 
                mx-auto px-4 ease-in-out duration-300">
                <div className="logo mr-auto text-green font-bold text-2xl">
                        <a href="#heroSection">M Z K</a>
                </div>
                <ul className=" hidden md:flex nav-links text-white space-x-6 relative items-center content-center ">
                    <li><a href="#About" className= {hoverBorder}>ABOUT</a></li>
                    <li><a href="#Skill" className= {hoverBorder}>SKILLS</a></li>
                    <li><a href="#Project" className= {hoverBorder}>PROJECTS</a></li>
                    <li><a href="Contact" className= {hoverBorder}>CONTACT</a></li>
                    <li><a href="MZK_Resume.html" className=" px-5 py-3 border-[3px] ease-in-out duration-300 border-green rounded-lg hover:bg-midGreen" target="_blank" rel="noopener noreferrer">RESUME.pdf</a></li>
                </ul>


                <div className="burger z-50 block md:hidden " onClick={handlNav}>
                    <div className="line w-[25px] h-[3px] bg-green m-[5px] rounded-xl z-50"></div>
                    {!nav ? <div className="line w-[25px] h-[3px] bg-green m-[5px] ml-[0px] rounded-xl z-50 ease-in-out duration-300"></div> : <div className="line w-[25px] h-[3px] bg-green m-[5px] ml-[10px] rounded-xl z-50 ease-in-out duration-300"></div> }
                    
                    <div className="line w-[25px] h-[3px] bg-green m-[5px] rounded-xl z-50"></div>
                </div>
                <div className={!nav ? "md:hidden fixed right-[-100%] top-0 w-[99%] border-2 border-midGreen h-full backdrop-blur-xl bg-midGreen/10 backdrop-opacity-10 rounded-l-full ease-in-out duration-500 ": ' md:hidden fixed right-0 top-0 w-[99%] border-2 border-midGreen h-full backdrop-blur-xl bg-midGreen/10 backdrop-opacity-10 rounded-l-full ease-in-out duration-300 '}>
                    <ul className="  nav-links text-white  pt-24 text-center ">
                        <li className="p-5"><a href="#aboutSection">ABOUT</a></li>
                        <li className="p-5"><a href="#skillSection">SKILLS</a></li>
                        <li className="p-5"><a href="#projectSection">PROJECTS</a></li>
                        <li className="p-5"><a href="#contactSection">CONTACT</a></li>
                        <li className="p-5"><a href="MZK_Resume.html" className=" px-5 py-3 border-[3px] ease-in-out duration-300 border-green rounded-lg hover:bg-midGreen" target="_blank" rel="noopener noreferrer">RESUME.pdf</a></li>
                        <div className="socialLinks flex items-center justify-around mt-3 w-[70%] mx-auto">
                            <div className="linksContainer"><a href="https://twitter.com/MoosaZk" target="_blank" rel="noopener noreferrer"><FaBeer /> </a></div>
                            <div className="linksContainer"><a href="https://github.com/MoosaZK" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></div>
                            <div className="linksContainer"><a href="https://www.linkedin.com/in/moosa-zafar-5627261bb/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></div>
                            <div className="linksContainer"><a href="mailto:moosazkhan@gmail.com" target="_blank" rel="noopener noreferrer"></a></div>
                        </div>
                    </ul>
                </div>    
            </m.nav>
        </header>
    );
}


export default NavBar;