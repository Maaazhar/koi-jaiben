import React, { useState } from 'react';
import { useParams } from 'react-router';
import map from '../../images/Map.png'
import Header from '../Header/Header';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Map, { MapContainer } from '../Map/Map';

const RideConfirm = () => {
    const [isSearch, setIsSearch] = useState(true);
    const { rideType } = useParams()
    const blurHandler = (event) => {
        let Name = event.target.name;
        let Value = event.target.value
        let from, to, date, time;
        if (Name === 'from') { from = Value; }
        if (Name === 'to') { to = Value; }
        if (Name === 'date') { date = Value; }
        if (Name === 'from') { time = Value; }
        setIsSearch(true);
    }
    const searchHandler = () => {
        setIsSearch(!isSearch);

    }
    return (
        <div>
            <Header />
            {/* <h1 className="text-light mt-5">Ride is confirmed</h1> */}
            <div className="fixed-top row mt-5 pt-5">
                <div className="col-lg-3 text-light ps-5">
                    <div>
                        {   isSearch 
                            ? <form className="form-control " action="" onSubmit={searchHandler}>
                                <label className="fs-5 " htmlFor="from" > From</label>
                                <input className="form-control form-control-label " onBlur={blurHandler} required placeholder="from where you starts the ride." name="from" type="text" />
                                <label className="fs-5 " htmlFor="to" > To</label>
                                <input className="form-control form-control-label " onBlur={blurHandler} required placeholder="where you end the ride." name="to" type="text" />
                                <label className="fs-5 " htmlFor="date" > Date</label>
                                <input className="form-control form-control-label " onBlur={blurHandler} required placeholder="riding date." name="date" type="date" />
                                <label className="fs-5 " htmlFor="date" > Time</label>
                                <input className="form-control form-control-label " onBlur={blurHandler} required placeholder="riding time." name="time" type="time" />
                                <input className="form-control btn-warning mt-2 fw-bold" type="submit" value="SEARCH" />
                            </form>
                            : <div className="container bg-light p-2 rounded text-dark">
                                <div className="container bg-warning m-2 rounded text-dark">
                                    <h2>From</h2>
                                    <h2>To</h2>
                                </div>
                                <div>
                                    <img src="" alt=""/>
                                    <h3>Car</h3>
                                    <h3>4</h3>
                                    <h3>400</h3>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                    </div>
                </div>
                <div className="col-lg-3 text-light"></div>
                <div className="col-lg-6 text-light">
                    <div className="container bordered border-danger " style={{ width: '600rem' }}>
                        <h5 className="text-info" style={{ marginLeft: '13rem' }}>Your place on map</h5>
                        {/* <MapContainer></MapContainer> */}
                        <Map></Map>
                        {/* <img src={map} width="550rem" alt=""/>  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RideConfirm;