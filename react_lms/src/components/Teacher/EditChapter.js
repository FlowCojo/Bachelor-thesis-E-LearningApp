import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';
function EditChapter(){
    const [chapterData, setChapterData] = useState({
        title: '',
        description: '',
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
    
    const {chapter_id} = useParams();
    const formSubmit=()=>{
        const _formData = new FormData();
    
        _formData.append('course',chapter_id);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        _formData.append('video',chapterData.video, chapterData.video.name);
        _formData.append('remarks',chapterData.remarks);
    
        try{
            axios.post(baseUrl+'/chapter/',_formData,{
                headers : {
                    'content-type' : 'multipart/form-data'
                }
            }).then((res)=>{
               // console.log(res.data);
               window.location.href='/add-chapter/'+chapter_id;
            });   
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div className='container mt-4 '>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header text-start'>Update Chapter </h5>
                        <div className='card-body'>
                            <div className="mb-3 row">
                                <label for="title" className="col-sm-2 col-form-label text-start">Title</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" onChange={handleChange} name='title' id='title' className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="description" className="col-sm-2 col-form-label text-start">Description</label>
                                <div className="col-sm-10 text-start">
                                <textarea className='form-control' onChange={handleChange} name='description' id='description'></textarea>
                                 </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="video" className="col-sm-2 col-form-label text-start">Video</label>
                                <div className="col-sm-10 text-start">
                                <input type="file" onChange={handleFileChange} name='video' className="form-control" id="video"/>
                                 </div>
                            </div>
                           
                            <div className="mb-3 row">
                                <label for="techs" className="col-sm-2 col-form-label text-start">Remarks</label>
                                <div className="col-sm-10 text-start">
                                <textarea onChange={handleChange} name='remarks' className='form-control' placeholder='This video is focused on basic introduction' id='techs'
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