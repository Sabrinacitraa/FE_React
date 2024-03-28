import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import header from '../../../Assets/header.jpg'
import Carousel from '../../Carousel/Carousel'
import img from '../../../Assets/content2.jpg'
import axios from 'axios';


const LandingPage = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('');

    // Kirim data ke BE
    const handleFindPoints = () => {
        const data = {
            checkIn: checkIn,
            checkOut: checkOut,
            roomType: roomType
        };
         
        axios.post('http://localhost:7000/tipe_kamar/', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <div className="home">
            <div className="img">
                <img src={header} alt=""/>            
            </div>
            <div className='headerText'>
                <h5>Enjoy a Worry</h5>
                <h6>Free Stay</h6>
            </div>

            <section className="grid">
                <div className="horizontal-grid d-flex flex-row">
                    <div className="checkIn">
                        <label htmlFor="checkIn">Check In</label>
                        <input
                            type="date"
                            id="checkIn"
                            value={checkIn}
                            onChange={e => setCheckIn(e.target.value)}
                        />
                    </div>

                    <div className="checkOut">
                        <label htmlFor="checkOut">Check Out</label>
                        <input
                            type="date"
                            id="checkOut"
                            value={checkOut}
                            onChange={e => setCheckOut(e.target.value)}
                        />
                    </div>

                    <div className="roomGuest">
                        <label htmlFor="roomGuest">Room Type</label>
                        <select
                            className="dropdown"
                            id="roomGuest"
                            value={roomType}
                            onChange={e => setRoomType(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="room">Luxury</option>
                            <option value="tipekamar">Premium</option>
                            <option value="nomorkamar">First Class</option>
                        </select>
                    </div>

                    <button className="btn">
                    <Link to='/booking' onClick={handleFindPoints}>Find a Four Points</Link>      
                    </button>
                </div>
            </section>

           <div className="textContent">
                <h2>Four Points</h2>
                <h6 className='subttitle2'>by Sheraton Munich Arabellapark</h6>
                <p className='desk'>
                    Discover our new hotel that combines Bavarian charm and a timeless design with local elements.
                    Located a few subway stops from the city center and only a short walk from the English Garden, Munich’s
                    famous city park, you will experience the special mixture of exciting city life and Bavarian coziness that makes Munich so unique.
                    Inside, find convenient workspaces with fast, free Wi-Fi, Munich’s highest spa with pool, sauna, and treatments, and local beer
                    with Best Brews™ on tap. Spacious guest rooms with views up to the alps round out your stay.
                </p>
            </div>

            <Carousel/>

            <div className="content3">
                <div className="img">
                    <img src={img} alt="" />
                </div>

                <div className="text">
                <h1>In the realm of 30 extraordinary Marriott Bonvoy hotel brands, Four Points is a standout.</h1>
                <p>Step into a world of exclusive member advantages with Marriott Bonvoy™, featuring complimentary Wi-Fi, member-only rates, and points that unlock travel experiences. Start your adventure at Marriott.com. Where will our journey together lead?</p>
                <div className='link'>
                <a href="../../Login/Login">Sign in  </a>
                <a href="">Join Now</a>
                </div>
                </div>


            </div>

            </div>
       
       );  
   };
   
   export default LandingPage;