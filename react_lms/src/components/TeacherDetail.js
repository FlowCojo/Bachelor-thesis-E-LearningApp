import {Link} from 'react-router-dom';


function TeacherDetail(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3 text-start" >
                <img src="/logo512.png" className="card-img-top" alt="Teacher Image" />

                </div>
                <div className="col-9 text-start">
                    <h3>Florin Cojocaru</h3>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card conten</p>
                    <p className="fw-bold">Skills : <Link to="/category/javascript">Javascript</Link>,
                     <Link to="/category/python"> Python</Link>, 
                     <Link to="/category/ReactJs"> ReactJs</Link> </p>
                    <p className="fw-bold">Recent Course: <Link to="/teacher-detail/1">ReactsJs Course</Link></p>
                    <p className="fw-bold">Rating: 4.5/5 </p>

                </div>
            </div>
            {/*Course Videos*/}
            <div className="card mt-4 text-start" >
                <h5 className="card-header">
                    Course List
                </h5>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Javascript Course 1</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Javascript Course 2</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Python Course 1</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Python Course 2</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>ReactsJs Course 1</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>ReactsJs Course 2</Link>
                            
                </div>
            </div>   
        </div>
    )
}

export default TeacherDetail;