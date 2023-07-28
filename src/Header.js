import Navbar from './components/Navbar';
import CartWidget from './CartWidget';

function Header (){
    return (
        <header id="header" className="header flex justify-between py-4 px-2 mx-auto max-w-screen-xl  text-slate-800">
            <a href="https://flowbite.com" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <Navbar />
            <CartWidget itemCount={5} />
        </header>
    )
}

export default Header;