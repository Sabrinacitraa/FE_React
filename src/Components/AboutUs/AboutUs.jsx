import React from 'react'
import './AboutUs.css'
import img from "../../Assets/image.jpg"


const aboutUs = () => {
  return (
    <section className='about'>
    <div className="content">
        <h2>Step into a world of timeless elegance where modern amenities seamlessly merge with classic charm, offering guests an unparalleled retreat.</h2>
        <h5>Nestled in the heart of the city, our hotel is a testament to refined elegance and unparalleled hospitality. With a commitment to providing an exceptional stay, we blend modern comfort seamlessly with timeless charm. </h5>
    </div>

    <div className="image">
    <img src={img} classNamealt="img" />
    </div>

    <div className="content2">
        <h2 >Your Retreat Our Passion</h2>
        <h5 >Four Points by Sheraton is travel reinvented. Four Points serves as the center of where business meets pleasure, enabling guests to kick back and relax on the road. 
            Designed for the smart, independent traveler, Four Points offers the timeless style and comfort guests are looking for, coupled with genuine 
            service and everything that matters most, all around the world. Four Points hotels can be found in sprawling urban centers, near the closest 
            airport, on the beach, or nestled in the suburbs. Each hotel offers a familiar and authentic sense of the local, friendly service that allows 
            guests to relax and unwind, watch local sports, and enjoy the brand’s Best Brews program. Best Brews provides guests with the chance to sample
             craft beers and enjoy authentic local flavors at every hotel pub across the brand’s 200+ property portfolio with each brew strategically 
             chosen for its unique flavor, popularity and quality ingredients. Committed to improving productivity while on the road, Four Points also 
             offers what business travelers around the world need most, including free in-room water, in-room and public space Wi-Fi and more. A true 
             global brand, Four Points is 4th in total number of properties open outside North America amongst Marriott International’s entire portfolio.
             </h5>
             

    </div>
    
    <h2 className='bottom'>Four Points by Sheraton</h2>
    <h3>in Indonesia</h3>
    
    

    

    </section>

  )   
}

export default aboutUs;