import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({link, path, toggleMobileMenu}) {    
    return (
        <Link onClick={()=>toggleMobileMenu()} to={link.path}>
           <div className={`${path === link.path ? "text-blue-500 font-extrabold" : "text-slate-300"} w-28 2xl:w-32  py-2 pl-3 pr-4 font-bold text-base 2xl:text-xl rounded md:bg-transparent `}>
           {link.label} </div>
        </Link>
    )

} export default NavLink;

