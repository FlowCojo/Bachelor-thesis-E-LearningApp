import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl='http://127.0.0.1:8000/api';
function EditChapter(){
    const {chapter_id} = useParams();
    const [chapterData, setChapterData] = useState({
        course: '',
        title: '',
        description: '',
        prev_video: '',
        video : '',
        remarks: ''
    });

    const handleChange=(event)=>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.value
    
        });
    }

    const handleFileChange=(event)=>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.files[0]
    
        });
    }
    

    const formSubmit=()=>{
        const _formData = new FormData();
    
        _formData.append('course',chapterData.course);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        if(chapterData.video!==''){
        _formData.append('video',chapterData.video, chapterData.video.name);
        }
        
        _formData.append('remarks',chapterData.remarks);
    
        try{
            axios.put(baseUrl+'/chapter/'+chapter_id,_formData,{
                headers : {
                    'content-type' : 'multipart/form-data'
                }
            }).then((res)=>{
                if(res.status==200){
                    Swal.fire({
                        title: "Data has been updated ",
                        icon: "success",
                        toast: "true",
                        timer:3000,
                        position:'top-right',
                        timeProgressBar:true,
                        showConfirmButton: false
                      
                    }); 
                }
               //window.location.href='/add-chapter/'+chapter_id;
            });   
        }catch(error){
            console.log(error);
        }
        
    }
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/chapter/'+ chapter_id).then((res)=>{
                setChapterData({

                    course:res.data.course,
                    title:res.data.title,
                    description:res.data.description,
                    prev_video:res.data.video,
                    remarks:res.data.remarks,
                    video:''
                });
                }); 
        }catch(error){
            console.log(error);
        }
    },[]);   
    

    return(
        <div className='container mt-4 '>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header text-start'>Edit Chapter </h5>
                        <div className='card-body'>
                            <div className="mb-3 row">
                                <label for="title" className="col-sm-2 col-form-label text-start">Title</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" value={chapterData.title} onChange={handleChange} name='title' id='title' className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="description" className="col-sm-2 col-form-label text-start">Description</label>
                                <div className="col-sm-10 text-start">
                                <textarea value={chapterData.description} className='form-control' onChange={handleChange} name='description' id='description'></textarea>
                                 </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="video" className="col-sm-2 col-form-label text-start">Video</label>
                                <input type="file" onChange={handleFileChange} name='video' className="form-control" id="video"/>
                                    {chapterData.prev_video &&   
                                    <video controls className='mt-2' width="100%" height="240" >
                                        <source src={chapterData.prev_video} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                    }
                            </div>
                           
                            <div className="mb-3 row">
                                <label for="techs" className="col-sm-2 col-form-label text-start">Remarks</label>
                                <div className="col-sm-10 text-start">
                                <textarea value={chapterData.remarks} onChange={handleChange} name='remarks' className='form-control' placeholder='This video is focused on basic introduction' id='techs'
                                 ></textarea>
                                 </div>
                            </div>
                            
                            <hr/>
                            <button type='button' onClick={formSubmit} className='btn btn-primary' style={{ textAlign: 'left' }}>Submit</button>

                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    );
}

export default EditChapter;