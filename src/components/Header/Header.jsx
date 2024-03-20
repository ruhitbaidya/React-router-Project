import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div className="bg-black">
            <div className="container mx-auto px-[10px]">
                <nav className="flex justify-between py-[10px] text-white items-center">
                    <div>
                        <h2>Ruhit</h2>
                    </div>
                    <div className="space-x-[20px]">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/user">User</NavLink>
                        <NavLink to="/post">Post</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <div>
                        <button className="bg-white py-[10px] px-[20px] rounded-lg text-black">Signup</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header