import { useState } from "react";
import { Editor } from "primereact/editor";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { Button, Input } from "antd";

const AddBlog = () => {
	const [blog, setBlog] = useState({
		title: "",
		content: "",
	});

	const handleClick = () => {
		console.log(blog);
	};
	const [thumb, setThumb] = useState({
		avatar: {
			fileName: "",
			content: "",
		},
	});
	const uploadImage = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const base64 = await convertBase64(file);
		setThumb({
			avatar: {
				fileName: file.name,
				content: base64,
			},
		});
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};
	return (
		<div className="container">
			<div className="row">
				<div className="card m-3">
					<Input
						placeholder="Enter title ..."
						value={blog.title}
						onChange={(e) => {
							setBlog({ ...blog, title: e.target.value });
						}}
					/>
					<div className="">
						<img className="w-100 mt-3" src={thumb.avatar.content} alt="" />
						<input
							className=" form-control-sm ms-5 mt-2"
							type="file"
							onChange={(e) => {
								uploadImage(e);
							}}
							required
						/>
					</div>
					<Editor
						style={{ height: "320px" }}
						value={blog.content}
						onTextChange={(e) => setBlog({ ...blog, content: e.htmlValue })}
					/>
					<div className="footer-card text-center">
						<Button
							onClick={handleClick}
							className="col-2 m-2"
							type="primary"
							danger
						>
							Add Blog
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddBlog;
