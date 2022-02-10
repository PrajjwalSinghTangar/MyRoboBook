import React from "react";
import Card from './Card';

//Making a loop. D.R.Y Voilation.

const CardList = ({UserData}) => {
    return (
        <div>
            {UserData.map((user, i) => {
                return (
                    <Card 
                        key= {i}
                        id = {UserData[i].id}
                        name = {UserData[i].username}
                        email = {UserData[i].email}
                />)
        })}
        </div>
    );
}


export default CardList;