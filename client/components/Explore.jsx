import React from "react";
import dom from "/photos/kneeling_goku.webp"
import drippGod from "/photos/drippy_standing_goku.jpeg"
import saucy from "/photos/standing_saucy_goku.jpeg"

const Explore = (props) => {

    return (
        <div>
            <span>Hype Beast Goku</span>
            <img width={200} src={dom} alt="" />
            <span>Goated with the sauce</span>
            <img src={drippGod} />
            <span>Drip God Goku</span>
            <img src={saucy} alt="" />
            <span>Ultra Sauce-Stinct</span>
            

        </div>
    )
}

export default Explore