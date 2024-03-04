import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function TeacherProfileSetting(){
    return(
        <div className='container mt-4 '>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header text-start'>Profile Setting</h5>
                        <div className='card-body'>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label text-start">Fullname</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" readonly className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label text-start">Email</label>
                                <div className="col-sm-10 text-start">
                                <input type="text" readonly className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label text-start">Profile Photo</label>
                                <div className="col-sm-10 text-start">
                                <input type="file" className="form-control" id="inputPassword"/>
                                 </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label text-start">Password</label>
                                <div className="col-sm-10 text-start">
                                <input type="password" className="form-control" id="inputPassword"/>
                                 </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label text-start">Skills</label>
                                <div className="col-sm-10 text-start">
                                <textarea className='form-control'></textarea>
                                 </div>
                            </div>
                            <hr/>
                            <button className='btn btn-primary' style={{ textAlign: 'left' }}>Update</button>

                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default TeacherProfileSetting;