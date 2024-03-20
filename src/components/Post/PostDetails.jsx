import { useLoaderData, useNavigate } from "react-router";

function PostDetails(){
    const postDetails = useLoaderData();
    const navigate = useNavigate()
    const handelBack = ()=>{
        navigate(-1)
    }
    return(
        <div className="container mx-auto px-[10px] py-[50px]">
                <div className="w-[40%] mx-auto">
                    <div className="border border-gray-300 rouned-lg text-center p-[30px]">
                        <h2 className="text-2xl mb-[20px]"> {postDetails.title}</h2>
                        <p> {postDetails.body}</p>
                        <button className="mt-[10px] border border-gray-300 px-[15px]" onClick={handelBack}>Go Back</button>
                    </div>
                </div>
            </div>
    )
}

export default PostDetails;