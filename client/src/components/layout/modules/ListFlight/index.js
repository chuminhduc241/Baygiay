import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getFlights } from 'redux/actions/flight';

const Card = ({ data }) => {
	return (
		<div className="card my-2 ">
			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
			</div>
            <button className='btn'>
                <Link to = {`/detailflight/${data.id}`} >Chi tiết chuyến bay</Link>
            </button>
		</div>
	);
};


const ListFlight = () => {
    const dispatch = useDispatch();
    const flights = useSelector(state => state.flights.flights);
    console.log(flights);

  return (
    <div className="container-fluid pt-5 pb-5 news ">
			<div className="container pt-5 pb-5 border-top border-1 rounded border-dark">
				<div className="row px-5">
					<h3 className="text-center pb-5 ">Danh sách chuyến bay</h3>
                        {
                            flights?.map(flight=>(
                                <Card key={flight.id} data={flight} />
                            ))
                        }
                </div>
            </div>
    </div>
  )
}

export default ListFlight