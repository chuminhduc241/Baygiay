const Advertise = () => {
	const data = [
		{
			id: "1",
			image: "./img/9d8ed5_754d973e06ec48588435b26e77584557_mv2.png"
		},
		{
			id: "2",
			image: "./img/9d8ed5_754d973e06ec48588435b26e77584557_mv2.png"
		},
		{
			id: "3",
			image: "./img/9d8ed5_754d973e06ec48588435b26e77584557_mv2.png"
		},
		{
			id: "4",
			image: "./img/9d8ed5_754d973e06ec48588435b26e77584557_mv2.png"
		},
		{
			id: "5",
			image: "./img/9d8ed5_754d973e06ec48588435b26e77584557_mv2.png"
		},
		{
			id: "6",
			image: "./img/9d8ed5_754d973e06ec48588435b26e77584557_mv2.png"
		},
	];
	return (
		<>
			{" "}
			<div className="container pt-3 pb-5">
				<div className="row pt-5 pb-5">
					<h3 className="text-center" style={{ color: "#343a40" }}>
						ĐỐI TÁC HÀNG KHÔNG
					</h3>
				</div>
				<div className="row pb-5">
					{
						data.map(item=>{
							return <div key={item.id} className="col-2">
								<img
									src={item.image}
									height="150px"
									width="200px"
									alt=""
								/>
						</div>
						})
					}
				</div>
			</div>
		</>
	);
};

export default Advertise;
