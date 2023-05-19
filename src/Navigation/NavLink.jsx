import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({link, path}) {

    console.log(path)
    console.log(link.path === path)
    
    return (
        <Link to={link.path}>
           <div className={`${path === link.path ? "text-blue-500 font-extrabold" : "text-slate-300"} w-32  py-2 pl-3 pr-4 font-bold text-xl rounded md:bg-transparent `}>
           {link.label} </div>
        </Link>
    )

} export default NavLink;

