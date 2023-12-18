import { BrowserRouter, Route, Routes, } from "react-router-dom";
import './styles/index.css'
import HomeScreen from "./screens/Home";
import LogIn from "./screens/Login";
import ConseilUsage from "./screens/ConseilUsage";
import SignUp from "./screens/SignUp";
import Details from "./screens/UserDetails";
import ProfileList from "./screens/ProfileList";
import Payment from "./screens/Payment";
import UserProfile from "./screens/UserProfile";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/inscription" element={<SignUp />} />
                <Route path="/ConseilUsage" element={<ConseilUsage />} />
                <Route path="/Details/:id" element={<Details />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/users" element={<ProfileList />} />
                <Route path="/user-profile/:id" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

