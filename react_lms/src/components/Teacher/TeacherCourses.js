import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function TeacherCourses(){
    return(
        <div className='container mt-4 '>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <th>Name</th>
                                    <th>Created By</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <td>Javascript development</td>
                                    <td><Link to="/">Cojocaru Florin</Link> </td>
                                    <td>
                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                        <Link className='btn btn-success btn-sm active ms-2' to='/add-chapter/2'>Add Chapter</Link>
                                    </td>
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