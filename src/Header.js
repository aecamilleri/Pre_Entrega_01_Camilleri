import Navbar from './components/Navbar';
import CartWidget from './CartWidget';

function Header (){
    return (
        <header id="header" className="header flex justify-between py-4 px-2 mx-auto max-w-screen-xl  text-slate-800">
            <div>
            <a href="#" class="flex items-center">
                <img src="./logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
            </div>
            <Navbar />
            <CartWidget itemCount={5} />
        </header>
    )
}

export default Header;