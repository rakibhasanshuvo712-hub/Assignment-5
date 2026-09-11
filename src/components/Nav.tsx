
import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="flex justify-between border-bottom container mx-auto items-center border-black-200 underline-black-200">
<img src={Logo} alt="Logo" className="w-32 h-auto" /> 
    <ul className="flex gap-4 text-lg font-semibold">
        <li>Home </li>
        <li> Technologies</li>
        <li>Project </li>
        <li>About</li>
         <li>Contact</li>
        </ul>  
        <div className="flex ">
        <button className="btn btn-active rounded-2xl">Sign In</button>
        <button className="btn btn-active btn-error  rounded-2xl">Sign Up</button>
        </div>
        </nav>
    );
};

export default Nav;