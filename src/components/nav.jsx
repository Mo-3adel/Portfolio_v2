import { Link } from 'react-router';
import github from '../assets/0D87BF3B-A96E-474E-B042-EB2648EAD181_4_5005_c.jpeg'
import linkedin from '../assets/2BDB40DA-EEDA-4017-84D1-C2ADC6994659.jpeg'
import { useLocation } from 'react-router';
export const Nav1 = () => {   
    const location = useLocation();
    return (  
        <div className='flex fixed top-0 z-10 w-full h-fit bg-transparent backdrop-blur-lg'>
        <div className="flex flex-wrap flex-row justify-center w-11/12 mx-auto sm:max-w-fit space-x-2.5 bg-gradient-to-r  from-cyan-600 to-violet-400 text-white p-2 font-bold rounded-2xl">
            <ul className="flex content-center justify-center space-x-4">
                <li><Link to={"/"} className={location.pathname==="/"?" bg-violet-950 text-violet-200 w-fit text-lg rounded-2xl p-1 m-1":""}>Home</Link></li> 
                <li><Link to={"/about"} className={location.pathname==="/about"?"bg-violet-950 text-violet-200 w-fit text-lg rounded-2xl p-1 m-1 ":""}>About</Link></li>
                <li><Link to={"/Experiance"} className={location.pathname==="/Experiance"?"bg-violet-950 text-violet-200 w-fit text-lg rounded-2xl p-1 m-1":""}>Experiance</Link></li>
                <li><Link to={"/Projects"} className={location.pathname==="/Projects"?"bg-violet-950 text-violet-200 w-fit text-lg rounded-2xl p-1 m-1":""}>Projects</Link></li>
                 
                <p1 className="sm:border-r-2 sm:border-blacks"></p1> 
            
                
            </ul>
            <ul className="flex content-center justify-center space-x-4 ">
                <li><Link to={"/Contact"} className={location.pathname==="/Contact"?"bg-violet-950 text-violet-200 w-fit text-lg rounded-2xl p-1 m-1":""}>Contact</Link></li>
                <li><Link to={"/Blog"} className={location.pathname==="/Blog"?"bg-violet-950 text-violet-200 w-fit text-lg rounded-2xl p-1 m-1 ":""}>Blog</Link></li> 
                <li><a href="/Mohamed_Adel_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <a href="https://www.linkedin.com/in/mohamed-adel-47aa01177/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} width={27} className="rounded-full" alt='LinkedIn'></img>
                </a>
                <a href="https://github.com/Mo-3adel" target="_blank" rel="noopener noreferrer">
                <img src={github} width={27} className="rounded-full" alt='GitHub'></img>
                </a>
            </ul>

        </div>
        </div>
        
          

    );
}