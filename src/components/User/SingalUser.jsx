import { NavLink } from "react-router-dom";

function SingalUser({user}){
    return(
        <>
            <div className="border border-gray-400 rounded-lg p-[15px]">
                <h2>Name : {user.name}</h2>
                <p>Email : {user.email}</p>
                <NavLink  to={`/user/${user.id}`}>
                    <button className="mt-[10px] border border-gray-300 px-[15px]">
                    Show Details
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default SingalUser;