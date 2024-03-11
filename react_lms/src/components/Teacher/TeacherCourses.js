import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function TeacherCourses(){
    const [courseData, setCourseData] = useState([]);
    const [totalResult, settotalResult] = useState([0]);

    const teacherId = localStorage.getItem('teacherId');
    console.log(teacherId);
        //Fetch courses when page load
        useEffect(()=>{
            try{
                axios.get(baseUrl+'/teacher-courses/'+teacherId).then((res)=>{
                    setCourseData(res.data);
                    settotalResult(res.data.length);
                    }); 
            }catch(error){
                console.log(error);
            }
        },[]);

        //Delete Data
    const Swal = require('sweetalert2');
    const handleDeleteClick = (course_id) =>{
        Swal.fire({
            title: "Confirm ",
            text: "Are you sure you want to delete this?",
            icon: "info",
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/teacher-course-detail/'+course_id)
                    .then((res)=>{
                        
                        Swal.fire('success', 'Data has been deleted.');   

                        try{
                            axios.get(baseUrl+'/teacher-courses/'+teacherId).then((res)=>{
                                setCourseData(res.data);
                                settotalResult(res.data.length);
                                }); 
                        }catch(error){
                            console.log(error);
                        }
                       
                        
                    });
                }catch(error){
                    Swal.fire('error', 'Data has not been deleted!');   
                }
            }else{
                Swal.fire('error', 'Data has not been deleted!');   
            }
        });
    }



    return(
        <div className='container mt-4 '>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Courses({totalResult})</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <th>Name</th>
                                    <th>Image</th>

                                    <th>Total Enrolled</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    {courseData.map((course,index)=> 
                                    <tr> 
                                        <td><Link to={'/all-chapters/'+course.id}> {course.title}  </Link> </td>
                                        <td><img src={course.featured_img} width="80" className='rounded' alt={course.title}/> </td>

                                        <td><Link to="/">123</Link> </td>
                                        <td>
                                        <Link to={'/edit-course/'+course.id} className='btn btn-sm text-white btn-info  '><i class="bi bi-pencil-square">Edit</i></Link>
                                            <Link className='btn btn-success btn-sm ms-2' to={'/add-chapter/'+course.id}> <i class="bi bi-folder-plus">Add Chapter</i> </Link>
                                            <button onClick={()=>handleDeleteClick(course.id)} className='btn btn-sm btn-danger ms-1'><i class="bi bi-trash">Delete</i></button>

                                        </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </section>
            </div>
        </div>   
    );
}

export default TeacherCourses;