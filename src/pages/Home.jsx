import { useState,useEffect} from 'react'
import '../App.css'
import mypic from "../assets/IMG_6933.jpeg"; 
import axios from 'axios';

function Home() {

    const [quote, setQuote] = useState("");
    const [author,setAuthor] = useState("");
    
    const fetchQuote = async () => {
        try {
            const response = await axios.get("/api/random");
            setQuote(response.data[0].q);
            setAuthor(response.data[0].a);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }   , []);

  return (
    <div className='flex flex-col items-center w-full h-full'>
    <div className="w-fit h-fit items-center flex flex-col sm:flex-row rounded-t-3xl mt-5  gap-2 bg-transparent backdrop-blur-sm ">
        <div className="flex flex-col items-center font-sans p-3 m-3 text-center md:text-left">
            <h1 className="text-4xl text-violet-400 font-bold">Hello,</h1>
            <h2 className="text-xl text-gray-300">I'm Mohamed Adel</h2>

            <p className="text-lg text-gray-300 font-serif">
                a Software and AI Developer.
            </p>

            <hr className="my-2 border-gray-600 w-full" />

            <p className="text-sm text-gray-400">
                Specialized Full-Stack Engineer with a blend of AI and ML experience and
                genuine interest.
            </p>
            <p className="text-sm text-gray-400">
                This is my personal website, where I share my projects and ideas.
            </p>

        </div>

                
                <div className="w-60 h-fit m-3">
                    <img className="w-80 h-52 md:h-64 rounded-full border-4 border-violet-400 shadow-lg shadow-violet-500 object-cover" src={mypic} alt="Profile" /> 

            </div>
            </div>
                
            <div className="flex flex-col items-center w-3/4 h-fit m-3 p-3 border-2 border-violet-400 rounded-lg bg-black shadow-lg shadow-violet-300 sm:w-3/5">
               
                <p className="text-sm text-gray-400 italic text-center">"{quote ? `"${quote}"` : "Loading..."}"</p>
                <p className="text-xs text-gray-500 italic text-center">- {author}</p>
                <button onClick={fetchQuote} className="mt-2 px-3 py-1 bg-violet-500 border-2 text-white rounded border-violet-100 hover:bg-violet-600 transition hover:cursor-pointer">New Quote</button>  

                    
            </div>

    </div>

    
  )
}

export default Home
