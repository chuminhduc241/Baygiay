import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import { SwapOutlined, SearchOutlined } from "@ant-design/icons";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import "./style.scss";
import InputField from "pages/register/InputField";
import SelectField from "./SelectField";
import { AuthServices } from "services/auth-service";
import { useDispatch } from "react-redux";
import { getFlights } from "redux/actions/flight";
import { useHistory } from "react-router-dom";


const TicketsBooking = () => {
	const LIST_OPTIONS = [
		{ value: "DaNang", label: "Đà Nẵng, Việt Nam, DAD - Sân bay Đà Nẵng" },
		{ value: "HaNoi", label: "Hà Nội, Việt Nam, DAD - Sân bay Nội Bài" },
		{ value: "SaiGon", label: "TP HCM, Việt Nam, DAD - Sân bay Tân Sơn Nhất" },
		{ value: "DaLat", label: "Đà Lạt, Việt Nam, DAD - Sân bay Liên Khương" },
		{ value: "NhaTrang", label: "Nha Trang, Việt Nam, DAD - Sân bay Cam Ranh" },
		{ value: "PhuQuoc", label: "Phú Quốc, Việt Nam, DAD - Sân bay Phú Quốc" },
		{ value: "Hue", label: "Huế, Việt Nam, DAD - Sân bay Huế" },
		{ value: "Vinh", label: "Vinh, Việt Nam, DAD - Sân bay Vinh" },
		{ value: "HaiPhong", label: "Hải Phòng, Việt Nam, DAD - Sân bay Cát Bi" },
	];
	const LIST_AIRLINE = [
		{ value: "VietNam Airline", label: "VietNam Airline - Hãng hàng không" },
		{ value: "BamBoo", label: "BamBoo - Hãng hàng không" },
		{ value: "VietjetAir", label: "VietjetAir - Hãng hàng không" },
		{ value: "Jestar", label: "Jestar - Hãng hàng không" },
	]
	const [swap, setSwap] = useState({
		from: LIST_OPTIONS[0].value,
		to: LIST_OPTIONS[1].value,
	});
	const moment = require("moment");
	const tiketBooking = {
		startDate: "2022-03-08T08:30",
		endDate: "",
		from: LIST_OPTIONS[0].value,
		destination: LIST_OPTIONS[1].value,
		quantity: 1,
		category: "",
		airline: LIST_AIRLINE[0].value,
	};
	const SignupSchema = Yup.object().shape({
		startDate: Yup.date().required("This field is required"),
		endDate: Yup.date().min(
			Yup.ref("startDate"),
			"The end date must be a date after or equal to start date"
		),
		from: Yup.string().required('This field is required'),
		destination: Yup.string().notOneOf([Yup.ref("from")], "The place to go is different from the place to go")
	});
	const handleChange = (prop) => {
		prop.resetForm({
			values: { ...tiketBooking, from: swap.to, destination: swap.from },
		});
		setSwap((pre) => ({
			from: pre.to,
			to: pre.from,
		}));
	};
	const [oneway, setOneway] = useState(false);
	const handelChang1 = (value) => {
		if (value.name === "from")
			setSwap((pre) => ({
				...pre,
				from: value.value,
			}));
		else {
			setSwap((pre) => ({
				...pre,
				to: value.value,
			}));
		}
	};
	const authService = new AuthServices();
	const dispatch = useDispatch();
	const history = useHistory()
	const handleRegister = async (values) => {;
		values.startDate = moment(values.startDate).unix();
		if (values.endDate) {
			values.endDate = moment(values.endDate).unix();
		} else {
			values.endDate = 0;
		}
		values.category = values.endDate === 0 ? "one-way" : "round-trip";
		console.log(values);
		
		const valuesR = await authService.search(values)
		const data = valuesR.data.data.data;
		let dataRender= []
		if(!oneway) {
			dataRender = data.filter(e => e.category==='one-way')
			
		}else {
			dataRender = data.filter(e => e.category==='round-trip' && e.endDate<values.endDate)
		}
		dispatch(getFlights(dataRender))
		history.push('/listfilght');
		console.log(dataRender)
	};


	return (
		<div className="ticket-booking">
			<div className="ticket-booking-form">
				<div className="text-center">
					<h3>Search Flights</h3>
				</div>
				<Formik
					initialValues={tiketBooking}
					validationSchema={SignupSchema}
					onSubmit={(values) => handleRegister(values)}
				>
					{(formikProps) => {
						return (
							<Form>
								<div className="container">
									<div class="row d-flex align-items-center">
										<div class="col col-lg-5">
											<FastField
												style={{
													width: '100%'
												}}
												name="from"
												component={SelectField}
												label="From"
												options={LIST_OPTIONS}
												handelChang1={handelChang1}
											/>
										</div>
										<div class="col col-lg-2 d-flex justify-content-center">
											<SwapOutlined
												onClick={() => handleChange(formikProps)}
												style={{
													fontSize: "32px",
													padding: "0 16px",
												}}
											/>
										</div>
										<div class="col col-lg-5">
											<FastField
												name="destination"
												component={SelectField}
												label="To"
												options={LIST_OPTIONS}
												handelChang1={handelChang1}
											/>
										</div>
									</div>

									<div class="row d-flex align-items-center">
										<div class="col col-lg-5">
											<FastField
												name="startDate"
												component={InputField}
												label="Departure Date"
												type="datetime-local"
											/>
										</div>
										<div class="col col-lg-2 d-flex justify-content-center">
											<Checkbox
												defaultChecked={false}
												onChange={(a) => {
													setOneway(a.target.checked);
												}}
											>
												Round-trip
											</Checkbox>
										</div>
										<div class="col col-lg-5">
											{oneway && (
												<FastField
													name="endDate"
													component={InputField}
													label="Return day"
													type="datetime-local"
												/>
											)}
										</div>
									</div>
									<div className="row d-flex justify-content-between">
										<div className="col col-lg-5">
											<FastField
												name="quantity"
												component={InputField}
												label="No. of Passengers"
												type="number"
												min={1}
											/>
										</div>
										<div className="col col-lg-5">
											<FastField
												name="airline"
												component={SelectField}
												label="AirLine"
												options={LIST_AIRLINE}
												handelChang1={handelChang1}
											/>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-center">
									<Button type="primary" htmlType="submit">
										<SearchOutlined /> Search Flights
									</Button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default TicketsBooking;