import { notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";

const popup = (message, description, error) => {
	const icon = error==='error' ? <CloseOutlined style={{ color: "red" }} />:<CheckCircleOutlined style={{ color: "#10e92d" }} />;
	notification.open({
		message: message,
		description: description,
		icon: icon,
	});
};

export default popup;
