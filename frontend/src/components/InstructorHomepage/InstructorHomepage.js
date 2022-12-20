import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import InstructorImage from '../../images/InstructorImage.svg'
import InstructorCoursesPage from "../InstructorCoursesPage/InstructorCoursesPage";

function InstructorHomepage() {
    const navigate = useNavigate();

    function scrollTo(id){
        document.getElementById(id).scrollIntoView( { behavior: 'smooth', block: 'start' } );
      }

    return (
        <>
            <Header />
            <div className='instructor--options'>
                <div className='instructor--leftcontainer'>
                    <h1 className='instructor-header'>Instructor</h1>
                    <hr className="instructor--line"/>    
                    
                    <div className='instructor--discounts'>       
                        <button className='instructor--setpromobutton' onClick={() => navigate(`/user/${JSON.parse(sessionStorage.getItem("User")).Username}`)}><i className="fa-solid fa-user"></i>&nbsp;&nbsp;My Profile</button>
                    </div>
                    <div className='instructor--addusers'>
                        <button className='instructor--setpromobutton' onClick={() => navigate("/addcourse")}><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add a New Course</button>
                        <button className='instructor--setpromobutton' onClick={() => scrollTo("instructorCourses")}><i className="fa-solid fa-eye"></i>&nbsp;&nbsp;View My Courses</button>
                        <button className='instructor--setpromobutton' onClick={() => navigate("/allcourses")}><i className="fa-solid fa-eye"></i>&nbsp;&nbsp;View All Courses</button> 
                    </div>
                </div>
                <div className='instructor--rightcontainer'>
                    <img className="instructor--adminimage" src={InstructorImage} alt='Instructor' />
                </div>
            </div>
            <div id="instructorCourses">
                <InstructorCoursesPage sectionNotPage={true} />
            </div>
        </>
    )
}

export default InstructorHomepage;