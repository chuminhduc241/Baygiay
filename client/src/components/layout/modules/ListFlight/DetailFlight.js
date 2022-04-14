import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailFlight = () => {
    const id = useParams().id;
    const flight = useSelector(state => state.flights.flights).find(fl => fl.id === +id)
    let  startDate = new Date(flight.startDate*1000);
    let  endDate = new Date(flight.endDate*1000);
    const duration = parseInt(flight.duration, 10);
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - (hours * 3600)) / 60);

  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='card'>
                <div className='card-title'>
                    <h3>{flight?.name}</h3>
                </div>
                <div className='card-body'>
                    <div className='d-flex justify-content-center'>   
                        <span className=' me-3 fs-5'>{flight?.from}</span>
                        <ArrowRightOutlined className='d-flex align-items-center'/>
                        <span className='ms-3 fs-5'>{flight?.destination}</span>
                    </div>
                    <div className='text-center'>{hours}h {minutes}m</div>
                    <div className='d-flex fs-5 fw-500'>
                        <span>Ngày đi: {startDate.getDate()} - {startDate.getMonth() + 1}</span>
                        {flight.endDate !== 0 && (<><span className='mx-3'>--</span><span>Ngày về: {endDate.getDate()} - {endDate.getMonth() + 1} </span></>)}
                    </div>
                    <div className='fs-5'>
                        Tổng số vé {flight.quantity}
                    </div>
                    <h5 className='text-warning'>
                        {flight?.cost}VND/khách
                    </h5>
                    <button className='btn btn-block btn-warning text-light col-2'>
                        Chọn
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailFlight