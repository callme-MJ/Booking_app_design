import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = ()=>{

  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const handleOpen = (i)=>{
    setOpenSlide(true);
    setSlideNumber(i);
  }

  const handleMove = (direction)=>{

    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }

    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
              { openSlide && <div className="slider">
                <FontAwesomeIcon onClick={()=>{setOpenSlide(false)}} icon={faCircleXmark} className="close"/>
                <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className="arrow"/>
                <div className="slideWrapper">
                  <img src={photos[slideNumber].src} alt="slides" className="sliderImg"/>
                </div>
                <FontAwesomeIcon onClick={()=>handleMove('r')} icon={faCircleArrowRight} className="arrow"/>

              </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} className="hotelIcon"/>
                        <span className="hotelAddress">Address: 1234 Main Street, New York, NY 10001</span>
                    </div>
                        <span className="hotelDistance">Excellent location - 500m from Center</span>
                        <span className="hotelPriceHighlight">Book a stay over $141 at this property and get a free airport taxi..</span>
                        <div className="hotelImages">
                            {photos.map((photo,index)=>(
                                <div className="hotelImgWrapper">
                                    <img onClick={()=>handleOpen(index)} src={photo.src} alt="hotel" className="hotelImg"/>
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelDetailsTitle">Hotel Details</h1>
                                <p className="hotelDetailsDesc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                    Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                    Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                    Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                    Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                    </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a 9 night stay</h1>
                                <span>located in the real heart of karkow, this property has an excellent location score of 9.9</span>
                                <h2><b>$945</b>(9 nights)</h2>
                                <button className="hotelDetailsBtn">Book Now!</button>
                            </div>
                        </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>

        
    )
}

export default Hotel;                   