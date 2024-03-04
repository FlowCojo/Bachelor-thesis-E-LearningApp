import {Link} from 'react-router-dom';


function Sidebar(){
    return(
        <div className='card' >

            <div className='list-group list-group-flush'>
                <Link to='/user-dashboard' className='list-group-item-action text-start'>Dashboard </Link>
                <Link to='/my-courses' className='list-group-item-action text-start'>My Courses</Link>
                <Link to='/favorite-courses' className='list-group-item-action text-start'>Favorite Courses</Link>
                <Link to='/recommended-courses' className='list-group-item-action text-start'>Recommended Courses</Link>
                <Link to='/profile-setting' className='list-group-item-action text-start'>Profile Setting</Link>
                <Link to='/change-password' className='list-group-item-action text-start'>Change Password</Link>
                <Link to='/user-login' className='list-group-item-action text-start text-danger'>Logout</Link>
            </div>       
        </div>
    );
}

export default Sidebar;