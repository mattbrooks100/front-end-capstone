import React from "react";
import Reviews from "./reviews.jsx";
import { ViewDetails } from "./viewDetails.jsx";

const Info = (props) => {
    let count = 3

    return (
        <div className="container">
            <h4>Shipping*</h4>
            <span>To get accurate shiping information <><u>Edit Location</u></></span>{/**Edit location should have a pop up box to search shipping info for your location */}
            <p>Free Pickup <br/><u>Find a Store</u></p> {/**popup box that searches for stores in the area of the zipcode entered */}
            <h6>*Faster Shipping options may be available</h6> {/** small text light gray color */}
            <p>The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</p>
            <ul>
                <li>Shown: Tan/White</li>
                <li>Style: Drippy</li>
            </ul>
            <ViewDetails />
            <Reviews />
        </div>
    )
}

export default Info;