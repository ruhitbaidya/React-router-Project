import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

function Home() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Home;