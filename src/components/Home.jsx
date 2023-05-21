import Chat from "./Chat";
import SideBar from "./SideBar";
const Home=()=>{
    return(
        <div className="home">
        <div className="container">
        <SideBar />
        <Chat />
        </div>
        </div>
    )
}
export default Home;