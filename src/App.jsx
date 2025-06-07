import Home from './component/threed'
import Swal from 'sweetalert2'
import 'boxicons/css/boxicons.min.css'
import 'font-awesome/css/font-awesome.min.css';


function App() {

  Swal.fire("FUTURE BILLIONAIRES WELCOME TO THE MINDSET HUB");

  setTimeout(() => {
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
  }, 5000)

  const handleClick = () => {
    Swal.fire("This isn’t a button. It’s a mirror. Look closely");
  }

  return (
    <>
     {/* header section */}
     <header className="bg-black h-[50px] flex justify-between items-center px-4 sm:px-6 md:px-10 fixed top-0 left-0 right-0 z-10 select-none">
      <div>
        <p className="text-lg sm:text-xl md:text-2xl text-violet-300 font-semibold uppercase tracking-wider">billionary</p>
      </div>
      <div className="hidden md:flex gap-4 lg:gap-10 text-white font-norma">
        <a className='hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-sm lg:text-base' href="#">Mindset Hub</a>
        <a className='hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-sm lg:text-base' href="#">Wealth Reads</a>
        <a className='hover:text-violet-300 hover:underline hover:underline-offset-8 decoration-violet-300 transition-all ease-in-out duration-500 text-sm lg:text-base' href="#">Takeoff Zone</a>
      </div>
      <div className="md:hidden">
        <button onClick={handleClick}>
          <i className='bx bx-menu text-[22px] text-violet-300 cursor-pointer'></i>
        </button>
      </div>
      <div className="hidden md:block">
        <button onClick={handleClick}>
          <i className='bx bx-user-circle text-[22px] text-violet-300 cursor-pointer'></i>
        </button>
      </div>
     </header>

     {/* hero section */}
     <main className='min-h-screen h-full bg-black flex flex-col md:flex-row justify-center md:justify-between items-center px-4 sm:px-6 md:px-10 select-none pt-20 md:pt-0'>
      <div className="w-full md:w-[50%] text-center md:text-left">
        <div>
          <button onClick={handleClick} className='bg-violet-300 text-black px-4 py-2 rounded-md hover:bg-violet-400 transition-all ease-in-out duration-500 cursor-pointer text-sm sm:text-base flex items-center gap-2'>
            <i className='bx bxs-diamond text-[22px]'></i>
            Introduction
          </button>
        </div>
        <div className='mt-6 md:mt-10'>
          <p className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wider'>Built for
            <br />
             Future Billionaires</p>
             <p className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wider'>Think Rich,
            <br />
             Live Free</p>
        </div>
        <div className='mt-10'>
          <p className='max-w-[500px] text-white text-xl sm:text-2xl font-semibold uppercase tracking-wider'>Wealth begins in the mind long before it fills the bank.</p>
         <div className="flex gap-4">
         <button onClick={handleClick} className="mt-10 bg-violet-300 text-black px-4 py-2 rounded-md hover:bg-violet-400 transition-all ease-in-out duration-500 cursor-pointer text-sm sm:text-base flex items-center gap-2">
          <i className='bx bx-right-top-arrow-circle text-[22px]'></i>
          Get Started
          </button>
          <button onClick={handleClick} className="mt-10 bg-violet-300 text-black px-4 py-2 rounded-md hover:bg-violet-400 transition-all ease-in-out duration-500 cursor-pointer text-sm sm:text-base flex items-center gap-2">
            <i className='bx bx-play-circle text-[22px]'></i>
            Documentary
          </button>
         </div>

        </div>
      </div>

      {/* 3D model container */}
      <div className="w-full md:w-[50%] h-[500px] relative">
        <Home />
      </div>
     </main>
    </>
  )
}

export default App
