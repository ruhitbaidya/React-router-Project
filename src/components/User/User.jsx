import { useLoaderData } from "react-router";
import SingalUser from "./SingalUser";

function User() {
    const loadData = useLoaderData()
    return (
        <>
            <div className="container mx-auto px-[10px] py-[50px]">
                <h2 className="text-center mb-[20px] text-3xl">This Is Our User</h2>
                <div className="grid grid-cols-4 gap-[23px]">
                    {
                        loadData.map((user) => <SingalUser key={user.id} user={user}></SingalUser>)
                    }
                </div>
            </div>
        </>
    )
}

export default User