import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function AddCourse(){
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
                                <label for="title" className="col-sm-2 col-form-label text-start">Title</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" id='title' className="form-control"  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="description" className="col-sm-2 col-form-label text-start">Description</label>
                                <div className="col-sm-10 text-start">
                                <textarea className='form-control' id='description'></textarea>
                                 </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="image" className="col-sm-2 col-form-label text-start">Featured Image</label>
                                <div className="col-sm-10 text-start">
                                <input type="file" className="form-control" id="image"/>
                                 </div>
                            </div>
                           
                            <div className="mb-3 row">
                                <label for="techs" className="col-sm-2 col-form-label text-start">Technologies</label>
                                <div className="col-sm-10 text-start">
                                <textarea className='form-control' id='techs' placeholder='Php, Python, Javascript, HTML, CSS'></textarea>
                                 </div>
                            </div>
                            
                            <hr/>
                            <button className='btn btn-primary' style={{ textAlign: 'left' }}>Add</button>

                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default AddCourse;