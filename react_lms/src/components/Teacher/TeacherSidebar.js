import {Link} from 'react-router-dom';


function TeacherSidebar(){
    return(
        <div className='card' >

            <div className='list-group list-group-flush'>
                <Link to='/teacher-dashboard' className='list-group-item-action text-start'>Dashboard </Link>
                <Link to='/teacher-courses' className='list-group-item-action text-start'>My Courses</Link>
                <Link to='/my-users' className='list-group-item-action text-start'>My Users</Link>
                <Link to='/add-course' className='list-group-item-action text-start'>Add Course</Link>
                <Link to='/teacher-profile-setting' className='list-group-item-action text-start'>Profile Setting</Link>
                <Link to='/teacher-change-password' className='list-group-item-action text-start'>Change Password</Link>
                <Link to='/teacher-login' className='list-group-item-action text-start text-danger'>Logout</Link>
            </div>       
        </div>
    );
}

export default TeacherSidebar;