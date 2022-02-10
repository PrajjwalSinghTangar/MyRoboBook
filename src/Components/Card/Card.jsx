import React from "react";
import './Card.css'

// Making a Card Component.

const Card = ({id,name,email}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5s w-20-l">
            <div>
                <img alt="imgId" src={`https://robohash.org/${id}?200x200`}/>
            </div>
            <div className="namemail">
                {name}
            </div>
            <div className="namemail">
                {email}
            </div>
        </div>
    );
}

export default Card;