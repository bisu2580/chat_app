import cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
	const {data}=useContext(ChatContext);
	return (
		<div className="chat">
			<div className="chatInfo">
				<span>{data.user?.displayName}</span>
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
