import Home from './component/threed'
import Swal from 'sweetalert2'
import 'boxicons/css/boxicons.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { useState, useEffect } from 'react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Show initial welcome message
    Swal.fire("FUTURE BILLIONAIRES WELCOME TO THE MINDSET HUB");

    // Show second message after 5 seconds
    const timer = setTimeout(() => {
      Swal.fire({
        title: "<strong>Was it aesthetic or anesthetic</strong>",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    Swal.fire("This isn't a button. It's a mirror. Look closely");
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
     {/* header section */}
     <header className="bg-black h-[50px] flex justify-between items-center px-4 sm:px-6 md:px-10 fixed top-0 left-0 right-0 z-30 select-none">
      <div className="flex-shrink-0">
        <p className="text-lg sm:text-xl md:text-2xl text-violet-300 font-semibold uppercase tracking-wider whitespace-nowrap">billionary</p>
      </div>
      <div className="hidden md:flex gap-4 lg:gap-10 text-white font-norma overflow-x-auto">
        <a className='hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-sm lg:text-base whitespace-nowrap' href="#">Mindset Hub</a>
        <a className='hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-sm lg:text-base whitespace-nowrap' href="#">Wealth Reads</a>
        <a className='hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-sm lg:text-base whitespace-nowrap' href="#">Takeoff Zone</a>
      </div>
      <div className="md:hidden z-40">
        <button onClick={toggleMenu} className="p-2 relative">
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-[22px] text-violet-300 cursor-pointer transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-90' : ''}`}></i>
        </button>
      </div>
      <div className="hidden md:block">
        <button onClick={handleClick} className="p-2">
          <i className='bx bx-user-circle text-[22px] text-violet-300 cursor-pointer'></i>
        </button>
      </div>
     </header>

     {/* Mobile Menu */}
     <div 
      className={`fixed top-[50px] left-0 w-full h-screen bg-black/95 backdrop-blur-sm transform ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} transition-all duration-500 ease-in-out md:hidden z-20`}
      onClick={toggleMenu}
     >
       <div className="flex flex-col items-center py-8 gap-6">
         <a className='text-white hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-lg' href="#">Mindset Hub</a>
         <a className='text-white hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-lg' href="#">Wealth Reads</a>
         <a className='text-white hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-lg' href="#">Takeoff Zone</a>
       </div>
     </div>

     {/* hero section */}
     <main className='min-h-screen h-full bg-black flex flex-col md:flex-row justify-center md:justify-between items-center px-4 sm:px-6 md:px-10 select-none pt-20 md:pt-0'>
      <div className="w-full md:w-[50%] text-center md:text-left px-4 sm:px-6 md:px-0 mb-10 md:mb-0">
        <div>
          <button onClick={handleClick} className='bg-violet-300 text-black px-4 py-2 rounded-md hover:bg-violet-400 transition-all ease-in-out duration-500 cursor-pointer text-sm sm:text-base flex items-center gap-2 mx-auto md:mx-0'>
            <i className='bx bxs-diamond text-[22px]'></i>
            Introduction
          </button>
        </div>
        <div className='mt-6 md:mt-10'>
          <p className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wider leading-tight'>Built for
            <br />
             Future Billionaires</p>
             <p className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wider leading-tight mt-2'>Think Rich,
            <br />
             Live Free</p>
        </div>
        <div className='mt-10'>
          <p className='max-w-[500px] text-white text-xl sm:text-2xl font-semibold uppercase tracking-wider mx-auto md:mx-0'>Wealth begins in the mind long before it fills the bank.</p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
         <button onClick={handleClick} className="mt-10 bg-violet-300 text-black px-4 py-2 rounded-md hover:bg-violet-400 transition-all ease-in-out duration-500 cursor-pointer text-sm sm:text-base flex items-center gap-2 justify-center">
          <i className='bx bx-right-top-arrow-circle text-[22px]'></i>
          Get Started
          </button>
          <button onClick={handleClick} className="mt-4 sm:mt-10 bg-violet-300 text-black px-4 py-2 rounded-md hover:bg-violet-400 transition-all ease-in-out duration-500 cursor-pointer text-sm sm:text-base flex items-center gap-2 justify-center">
            <i className='bx bx-play-circle text-[22px]'></i>
            Documentary
          </button>
         </div>
        </div>
      </div>

      {/* 3D model container */}
      <div className="w-full md:w-[50%] h-[300px] sm:h-[400px] md:h-[500px] relative">
        <Home />
      </div>
     </main>
    </>
  )
}

export default App
