import { useLoaderData } from "react-router";

function UserDetails(){
    const userDetails = useLoaderData();
    console.log(userDetails)
    return (
        <>
            <div className="container mx-auto px-[10px] py-[50px]">
                <div className="w-[40%] mx-auto">
                    <div className="border border-gray-300 rouned-lg text-center p-[30px]">
                        <h2 className="text-2xl"> {userDetails.company.name}</h2>
                        <p>Email : {userDetails.email}</p>
                        <p>Phone : {userDetails.phone}</p>
                        <p>{userDetails.website}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails;