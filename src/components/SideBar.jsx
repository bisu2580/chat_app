import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";
import "../App.scss";
const SideBar = () => {
	return (
		<div className="sideBar">
			<NavBar />
			<Search />
			<Chats />
		</div>
	);
};
export default SideBar;
