import React, { useState } from "react";
// import Details from "../screens/UserDetails";
import { Link } from "react-router-dom";

const Users = [
	{
		id: 1,
		email: "user1@gmail.com",
		password: "toto1010",
		name: "User1",
		firstname: "User1",
		phone: "0100000000",
		city: "Bouna1",
		municipality: "Bouna1",
		domain: "Plombier",
		precise_location: "Pharmacie1",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 2,
		email: "user2@gmail.com",
		password: "toto1010",
		name: "User2",
		firstname: "User2",
		phone: "0200000000",
		city: "Bouna2",
		municipality: "Bouna2",
		domain: "Plombier",
		precise_location: "Pharmacie2",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 3,
		email: "user3@gmail.com",
		password: "toto1010",
		name: "User3",
		firstname: "User3",
		phone: "0300000000",
		city: "Bouna3",
		municipality: "Bouna3",
		domain: "Plombier",
		precise_location: "Pharmacie3",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 4,
		email: "user4@gmail.com",
		password: "toto1010",
		name: "User4",
		firstname: "User4",
		phone: "0400000000",
		city: "Bouna4",
		municipality: "Bouna4",
		domain: "Plombier",
		precise_location: "Pharmacie4",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 5,
		email: "user5@gmail.com",
		password: "toto1010",
		name: "User5",
		firstname: "User5",
		phone: "0200000000",
		city: "Bouna5",
		municipality: "Bouna5",
		domain: "Plombier",
		precise_location: "Pharmacie5",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 6,
		email: "user6@gmail.com",
		password: "toto1010",
		name: "User6",
		firstname: "User6",
		phone: "0600000000",
		city: "Bouna6",
		municipality: "Bouna6",
		domain: "Plombier",
		precise_location: "Pharmacie6",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 7,
		email: "user7@gmail.com",
		password: "toto1010",
		name: "User7",
		firstname: "User7",
		phone: "0700000000",
		city: "Bouna7",
		municipality: "Bouna7",
		domain: "Plombier",
		precise_location: "Pharmacie7",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 8,
		email: "user8@gmail.com",
		password: "toto1010",
		name: "User8",
		firstname: "User8",
		phone: "0800000000",
		city: "Bouna8",
		municipality: "Bouna8",
		domain: "Plombier",
		precise_location: "Pharmacie8",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 9,
		email: "user9@gmail.com",
		password: "toto1010",
		name: "User9",
		firstname: "User9",
		phone: "0900000000",
		city: "Bouna9",
		municipality: "Bouna9",
		domain: "Plombier",
		precise_location: "Pharmacie9",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 10,
		email: "user1@gmail.com",
		password: "toto1010",
		name: "User10",
		firstname: "User10",
		phone: "01000000000",
		city: "Bouna10",
		municipality: "Bouna10",
		domain: "Plombier",
		precise_location: "Pharmacie10",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 11,
		email: "user11@gmail.com",
		password: "toto1010",
		name: "User11",
		firstname: "User11",
		phone: "01100000000",
		city: "Bouna11",
		municipality: "Bouna11",
		domain: "Plombier",
		precise_location: "Pharmacie11",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 12,
		email: "user12@gmail.com",
		password: "toto1010",
		name: "User12",
		firstname: "User12",
		phone: "01200000000",
		city: "Bouna12",
		municipality: "Bouna12",
		domain: "Plombier",
		precise_location: "Pharmacie12",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 13,
		email: "user13@gmail.com",
		password: "toto1010",
		name: "User13",
		firstname: "User13",
		phone: "0100000000",
		city: "Bouna13",
		municipality: "Bouna13",
		domain: "Plombier",
		precise_location: "Pharmacie13",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 14,
		email: "user14@gmail.com",
		password: "toto1010",
		name: "User14",
		firstname: "User14",
		phone: "01400000000",
		city: "Bouna14",
		municipality: "Bouna14",
		domain: "Plombier",
		precise_location: "Pharmacie14",
		payment_mode: "Wave",
		payment: false,
	},
	{
		id: 15,
		email: "user15@gmail.com",
		password: "toto1010",
		name: "User15",
		firstname: "User15",
		phone: "01500000000",
		city: "Bouna15",
		municipality: "Bouna15",
		domain: "Plombier",
		precise_location: "Pharmacie15",
		payment_mode: "Wave",
		payment: false,
	},
];
const UserModel = ({ navigation }) => {
    const [isLoding, setIsLoding] = useState(false); 

    const handleDetails = (item) => {
        // navigation.navigate("Details", { data: item });
		console.log("Handle details:", item);
    };

    if (isLoding) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="user-list-container">
                {Users.map((item) => (
                    <UserList2 key={item.id} item={item}/>
                ))}
            </div>
        );
    }
};

function UserList2({ item }) {
    return (
        <Link to={`Details/${item.id}`} className="user-container" >
            {/* <img src={item.avatar} alt="User Avatar" className="user-photo" /> */}
            <img src='arrowIcon.png' alt="User Avatar" className="user-photo" />
            <div className="user-info">
                <div className="user-name">{item.name}</div>
                <div className="user-number">
                    <img
                        src="loc.png"
                        alt="Location Icon"
                        className="location-icon"
                    />
                    {item.city}, {item.precise_location}
                </div>
                <div className="user-domain">Domaine: {item.domain}</div>
            </div>
        </Link>
    );
}

export default UserModel;
