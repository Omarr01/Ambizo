import React from 'react';
import Header from '../Header/Header';
import CoursesPage from '../CoursesPage/CoursesPage';
import AdminImage from '../../images/AdminImage2.png'
import { useNavigate } from "react-router-dom"

function AdminHomepage() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className='adminhp--options'>
                <div className='adminhp--leftcontainer'>
                    <h1 className='adminhp-header'>Website Administrator</h1>
                    <hr className="adminhp--line"/>    
                    
                    <div className='adminhp--discounts'>       
                        <button className='adminhp--setpromobutton' onClick={() => navigate("/pricesanddiscounts")}><i className="fa-solid fa-tag"></i>&nbsp;&nbsp;Prices & Discounts</button>
                    </div>
                    <div className='adminhp--addusers'>
                        <button className='adminhp--setpromobutton' onClick={() => navigate("/addAdmin")}><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Another Admin</button>
                        <button className='adminhp--setpromobutton' onClick={() => navigate("/addinstructor")}><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Instructor</button>
                        <button className='adminhp--setpromobutton' onClick={() => navigate("/addtrainee")}><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Corporate Trainee</button>
                    </div>
                    <div className='adminhp--addusers'>
                        <button className='adminhp--setpromobutton'><i className="fa-solid fa-eye"></i>&nbsp;&nbsp;View Reported Problems</button>
                        <button className='adminhp--setpromobutton'><i className="fa-solid fa-eye" onClick={() => navigate("/courseaccessrequests")}></i>&nbsp;&nbsp;View Corporate Requests</button>
                    </div>
                </div>
                <div className='adminhp--rightcontainer'>
                    <img className="adminhp--adminimage" src={AdminImage} alt='Admin' />
                </div>
            </div>
            <CoursesPage sectionNotPage={true}/>
        </>
    )
}

export default AdminHomepage;