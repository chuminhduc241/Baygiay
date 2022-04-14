/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setInfo } from "redux/actions/user";
import { ROUTES } from "../../../constants/routes";
import { UserServices } from "../../../services/user-service";

const BlogCard = ({ blog }) => {
	return (
		<div className="card">
			<img src="" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{blog.title}</h5>
			</div>
		</div>
	);
};
const listBlog = [
	{
		id: "1",
		title: "abc",
	},
	{
		id: "2",
		title: "abcd",
	},
	{
		id: "3",
		title: "abcde",
	},
	{
		id: "4",
		title: "abcde",
	},
	{
		id: "5",
		title: "abcde",
	},
	{
		id: "6",
		title: "abcde",
	},
];

const tenThanhPho = {
	Hanoi: "Hà Nội",
	Turan: "Đà Nẵng",
	Tokyo: "Tokyo",
};

const Blog = () => {
	const [state, setState] = useState([]);
	const data = [];

	useEffect(() => {
		const getAPI = async () => {
			const res = await axios.get(
				"https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=20fe418e095994b4dd58dcfc045e2f1d"
			);
			data.push({
				name: res.data.city.name,
				list: res.data.list,
			});
			const res1 = await axios.get(
				"https://api.openweathermap.org/data/2.5/forecast?q=danang&appid=20fe418e095994b4dd58dcfc045e2f1d"
			);
			data.push({
				name: res1.data.city.name,
				list: res1.data.list,
			});
			const res2 = await axios.get(
				"https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=20fe418e095994b4dd58dcfc045e2f1d"
			);
			data.push({
				name: res2.data.city.name,
				list: res2.data.list,
			});
			setState(
				data.map((dat) => {
					return {
						name: tenThanhPho[dat.name],
						list: dat.list[0],
					};
				})
			);
		};
		getAPI();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const userServices = new UserServices();
	const username = useSelector((state) => state.user.profile);
	const dispatch = useDispatch();
	const role = useSelector((state) => state.user.profile.role);
	useEffect(() => {
		const getInfor = async () => {
			const profile = await userServices.getInfo({
				username: username.username,
			});
			dispatch(setInfo(profile.data.data));
		};
		getInfor();
	}, []);

	return (
		<div className="container-fluid pt-5 pb-5 news ">
			<div className="container pt-5 pb-5 border-top border-1 rounded border-dark">
				<div className="row">
					<h3 className="text-center pb-5 ">Blog</h3>
					{role &&
						(role === "admin" ? (
							<Link to={ROUTES.ADDBLOG}>
								<Button>Add Blog</Button>
							</Link>
						) : null)}
				</div>
				<div className="row">
					<div className="col-8">
						<div className="row">
							{listBlog.map((blog) => {
								return (
									<div key={blog.id} className="col-6">
										<BlogCard blog={blog} />
									</div>
								);
							})}
						</div>
					</div>
					<div className="col-4">
						{state.map((st) => (
							<div key={st.name} className="card my-2 ">
								<div className="row card-body">
									<div className="col-4">{st.name}</div>
									<div className="col-4">
										{Math.round(st.list.main.temp - 273.15)} *C
									</div>
									<div className="col-4">{st.list.weather[0].description}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
