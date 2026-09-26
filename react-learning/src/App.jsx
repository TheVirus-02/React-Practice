import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import ClickButton from "./components/ClickButton";
import InputExample from "./components/InputExample";
import ActionPanel from "./components/ActionPanel";
import Counter from "./components/Counter";
import StudentForm from "./components/StudentForm";
import StudentForm2 from "./components/StudentForm2";
import StudentList from "./components/StudentList"
import LoginStatus from "./components/LoginStatus";
import ProfileVisible from "./components/ProfileVisibility";
import UserList from "./components/UserList";
import './App.css'

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Login from "./components/Login";

function App() {

return (
    /*
     <div>
        <h1>Welcome to My App</h1>
         <LoginStatus /> 
         <CourseList /> 
         <ProfileVisible />
         <StudentProfile/> 
        <UserList />
     </div>
   */

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        {/* here :id is dynamic */}
      </Routes>
    </BrowserRouter>

    
)


}

export default App
