import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';
function CourseChapters() {
    const [chapterData, setchapterData] = useState([]);
    const [totalResult, settotalResult] = useState([0]);

    const {course_id} = useParams();
    //console.log(course_id);
        //Fetch courses when page load
        useEffect(()=>{
            try{
                axios.get(baseUrl+'/course-chapters/'+course_id).then((res)=>{
                    setchapterData(res.data);
                    settotalResult(res.data.length);
                    }); 
            }catch(error){
                console.log(error);
            }
        },[]);


    //Delete Data
    const Swal = require('sweetalert2');
    const handleDeleteClick = (chapter_id) =>{
        Swal.fire({
            title: "Confirm ",
            text: "Are you sure you want to delete this?",
            icon: "info",
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/chapter/'+chapter_id)
                    .then((res)=>{
                        
                        Swal.fire('success', 'Data has been deleted.');   

                        try{
                            axios.get(baseUrl+'/course-chapters/'+course_id).then((res)=>{
                                setchapterData(res.data);
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
                        <h5 className='card-header'>All Chapters ({totalResult})</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <th>Title</th>
                                    <th>Video</th>
                                    <th>Remarks </th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    {chapterData.map((chapter,index)=> 
                                    <tr> 
                                        <td><Link to={'/edit-chapter/'+chapter.id}> {chapter.title}  </Link> </td>
                                        <td>
                                        <video width="320" height="240" controls>
                                        <source src={chapter.video.url}  type='video/mp4'/>
                                        <source src={chapter.video.url}  type="video/ogg"/>
                                        Your browser does not support the video tag.
                                        </video>
                                        </td>

                                        <td>{chapter.remarks}</td>
                                        <td>
                                            <Link to={'/edit-chapter/'+chapter.id} className='btn btn-sm text-white btn-info  '><i class="bi bi-pencil-square">Edit</i></Link>
                                            <button onClick={()=>handleDeleteClick(chapter.id)} className='btn btn-sm btn-danger ms-1'><i class="bi bi-trash">Delete</i></button>

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

export default CourseChapters;