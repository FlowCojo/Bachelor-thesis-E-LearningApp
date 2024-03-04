import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function TeacherDashboard(){
    return(
        <div className='container mt-4 '>
            <div className='row pb-3'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                Teacher Dashboard
                </section>
            </div>
        </div>
    )
}

export default TeacherDashboard;