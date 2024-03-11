import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';
function EditCourse(){
    const {course_id} = useParams();
    const[cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        prev_img: '',
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

        //fetch current course data
        try{
            axios.get(baseUrl+'/teacher-course-detail/'+ course_id).then((res)=>{
                setCourseData({
                    category:res.data.category,
                    title:res.data.title,
                    description:res.data.description,
                    prev_img:res.data.featured_img,
                    f_img:'',
                    techs:res.data.techs,
           
           
                });
                }); 
        }catch(error){
            console.log(error);
        }
        //end

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
    if(courseData.f_img!==''){
        _formData.append('featured_img',courseData.f_img, courseData.f_img.name);
    }
    _formData.append('techs',courseData.techs);

    try{
        axios.put(baseUrl+'/teacher-course-detail/'+course_id,_formData,{
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }).then((res)=>{
           // console.log(res.data);
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
                        <h5 className='card-header text-start'>Edit Course </h5>
                        <div className='card-body'>
                            <div className="mb-3 row">
                                <label for="title" className='form-label text-start'>Category</label>
                                <select name='category' value={courseData.category} onChange={handleChange} className='form-control'>
                                    {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title} </option>})}
                                </select>
                            </div>
                            <div className="mb-3 row">
                                <label for="title" className="col-sm-2 col-form-label text-start">Title</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" value={courseData.title} onChange={handleChange} name='title' id='title' className="form-control"  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="description" className="col-sm-2 col-form-label text-start">Description</label>
                                <div className="col-sm-10 text-start">
                                <textarea value={courseData.description} onChange={handleChange} name='description' className='form-control' id='description'></textarea>
                                 </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="image" className="col-sm-2 col-form-label text-start">Featured Image</label>
                                <div className="col-sm-10 text-start">
                                <input name='f_img' type="file" onChange={handleFileChange} className="form-control" id="video"/>
                                {courseData.prev_img &&   
                                    <p className='mt-2'> <img src={courseData.prev_img} width="200" /></p>
                                   
                                    }
                                </div>
                            </div>
                           
                            <div className="mb-3 row">
                                <label for="techs" className="col-sm-2 col-form-label text-start">Technologies</label>
                                <div className="col-sm-10 text-start">
                                <textarea name='techs' value={courseData.techs} onChange={handleChange} className='form-control' id='techs' placeholder='Php, Python, Javascript, HTML, CSS'></textarea>
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

export default EditCourse;