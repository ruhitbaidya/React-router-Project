import { useLoaderData } from "react-router";
import SingalPost from "./SingalPost";

function Post (){
    const posts = useLoaderData();
    return (
        <>
            <div className="container mx-auto px-[10] my-[50px]">
                <h2 className="text-center text-3xl">Their Found Post : {posts.length}</h2>
                <div className="grid grid-cols-4 gap-[23px] mt-[30px]">
                    {
                        posts.map((post)=> <SingalPost key={post.id} post={post}></SingalPost>)
                    }
                </div>
            </div>
        </>
    )
}

export default Post