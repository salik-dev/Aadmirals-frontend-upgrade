import React from 'react';
import "./style.css"

const CardsSection2 = () => {
    const cardsStyle = {
        marginTop: "2px",
        display: "flex",
        color: "#EF4A67"
    }
    return (
        <div className="cards">
            <div className="image-container">
                <img src="car pics.svg" style={{
                    height: 'fit-content',
                    width: '18.2vw',
                    marginLeft: "-4%"
                }}
                />
            </div>
            <div className="cards-details">
                <h4 style={cardsStyle}>Standard Sedan Lincoln MKS, MKZ</h4>
                <p>Clean in and out 4 doors, 2 rows of seats clean Sedan car fit for 2 people with 2 check-in bags and 2 carry-ons.</p>
                <h5>From $75 Per Hour</h5>
                <div className="stars">
                    <img src="star 1.svg" style={{ height: 'fit-content', marginLeft: "-4%" }} />
                    <img src="star 1.svg" style={{ height: 'fit-content', marginLeft: "-4%" }} />
                    <img src="star 1.svg" style={{ height: 'fit-content', marginLeft: "-4%" }} />
                    <img src="star 1.svg" style={{ height: 'fit-content', marginLeft: "-4%" }} />
                    <img src="star 1.svg" style={{ height: 'fit-content', marginLeft: "-4%" }} />
                </div>
                <button>BOOK NOW</button>
            </div>
        </div>
    )
}

export default CardsSection2;
