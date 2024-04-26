
import { Link, NavLink, useNavigate } from 'react-router-dom';



export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }
    return (
        <header className='text-white/90 body-font'>
            <nav className="bg-black/90 flex flex-col items-center justify-center p-7 gap-5 lg:flex-row">

                <Link
                    className=" hover:opacity-80"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="flex gap-2">

                    <NavLink
                        className={({ isActive }) =>
                            `hover:opacity-80 ${isActive ? 'text-red-500' : ''} `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `hover:opacity-80 ${isActive ? 'text-red-500' : ''} `}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>

                <div className="w-full">
                    <ul className="flex gap-2 justify-center items-center lg:justify-end">
                        <span className=''>
                            Dagoberto
                        </span>
                        <button className='hover:opacity-80' onClick={onLogout}>
                            Log out
                        </button>
                    </ul>
                </div>
            </nav>
        </header>

    )
}