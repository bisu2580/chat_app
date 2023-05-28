import cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import SideBar from "./SideBarResponsive";

const Chat = () => {
	const { data } = useContext(ChatContext);
	const { currentUser } = useContext(AuthContext);
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<div className="chat">
			<div className="chatInfo">
				<div className="toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
					<button
						className="sidebar-toggle"
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
						<span>
							{isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
						</span>
					</button>
					<div
						className={`sideBar ${
							isNavOpen ? "sideBar-active" : "sideBar-hide"
						}`}
					>
						<SideBar />
					</div>
				</div>
				<span className="disp-name">
					{data.user?.displayName === currentUser.displayName
						? currentUser.displayName + "(me)"
						: data.user?.displayName}
				</span>
				<div className="chatIcons">
					<img src={cam} alt="" />
					<img src={add} alt="" />
					<img src={more} alt="" />
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	);
};
export default Chat;
