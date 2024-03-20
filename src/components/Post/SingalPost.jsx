import { NavLink } from "react-router-dom";

function SingalPost({ post }) {
    console.log(post)
    return (
        <div className="border border-gray-400 rounded-lg p-[15px]">
            <h2 className="text-xl font-[600] mb-[20px]">{post.title.split("").slice(0, 20)}</h2>
            <p>{post.body.split("").slice(0, 100)}</p>
            <NavLink to={`/post/${post.id}`}>
                <button className="mt-[10px] border border-gray-300 px-[15px]">
                    Show Details
                    </button>
            </NavLink>
        </div>
    )
}

export default SingalPost;