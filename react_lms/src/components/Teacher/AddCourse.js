import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';
function AddCourse(){
    const[cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img : '',
        techs: ''
    });

    //Fetch categories when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category').then((res)=>{
                    setCats(res.data);
                }); 
        }catch(error){
            console.log(error);
        }
    },[]);
    // console.log(cats);

    
const handleChange=(event)=>{
    setCourseData({
        ...courseData,
        [event.target.name]:event.target.value

    });
}

const handleFileChange=(event)=>{
    setCourseData({
        ...courseData,
        [event.target.name]:event.target.files[0]

    });
}

const formSubmit=()=>{
    const _formData = new FormData();
    _formData.append('category',courseData.category);
    _formData.append('teacher',10);
    _formData.append('title',courseData.title);
    _formData.append('description',courseData.description);
    _formData.append('featured_img',courseData.f_img, courseData.f_img.name);
    _formData.append('techs',courseData.techs);

    try{
        axios.post(baseUrl+'/course/',_formData,{
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }).then((res)=>{
           // console.log(res.data);
           window.location.href='/add-course';
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
                        <h5 className='card-header text-start'>Add Course </h5>
                        <div className='card-body'>
                            <div className="mb-3 row">
                                <label for="title" className='form-label text-start'>Category</label>
                                <select name='category' onChange={handleChange} className='form-control'>
                                    {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title} </option>})}
                                </select>
                            </div>
                            <div className="mb-3 row">
                                <label for="title" className="col-sm-2 col-form-label text-start">Title</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" onChange={handleChange} name='title' id='title' className="form-control"  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="description" className="col-sm-2 col-form-label text-start">Description</label>
                                <div className="col-sm-10 text-start">
                                <textarea onChange={handleChange} name='description' className='form-control' id='description'></textarea>
                                 </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="image" className="col-sm-2 col-form-label text-start">Featured Image</label>
                                <div className="col-sm-10 text-start">
                                <input name='f_img' type="file" onChange={handleFileChange} className="form-control" id="video"/>
                                 </div>
                            </div>
                           
                            <div className="mb-3 row">
                                <label for="techs" className="col-sm-2 col-form-label text-start">Technologies</label>
                                <div className="col-sm-10 text-start">
                                <textarea name='techs' onChange={handleChange} className='form-control' id='techs' placeholder='Php, Python, Javascript, HTML, CSS'></textarea>
                                 </div>
                            </div>
                            
                            <hr/>
                            <button className='btn btn-primary text-start' onClick={formSubmit} type="button">Submit</button>

                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default AddCourse;