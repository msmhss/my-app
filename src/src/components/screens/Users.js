import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places")
            .then(function (response) {
                console.log(response.data.data);
                setUsers(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    let renderItems = () => {
        return users.map((user) => (
            <div key={user.id} style={{border: "1px double #abcdef"}}>
                
            </div>
        ))
    } 

    return (
        <>
        <div>{renderItems()}</div>
        <h1>മുഹമ്മദ് നാഫിൽ എൻ.</h1>
        <h5>ബാലചന്ദ്രൻ</h5>
        <h1>സ്കൂളിൽ പോകാറായി!</h1>
        <h5>എം.എസ്.എം എച്ച്.എസ്.എസ് ചാത്തിനാംകുളം</h5>
        </>
    )
}