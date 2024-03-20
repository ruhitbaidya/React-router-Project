import Image from "../assetc/bgHome.jpg"
function Onlytext() {
    return (
        <>
            <div className="relative">
                <img className="h-[400px] w-full" src={Image} alt="" />
                <div className="bg-black">
                    <div className="absolute top-0 left-[50%] translate-x-[-50%] text-white text-center">
                        <h2 className="text-3xl text-center py-[100px]">This Is a Context Project For Pratic Purpouse</h2>
                        <button className="px-[30px] py-[15px] border broder-gray-200">Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Onlytext;