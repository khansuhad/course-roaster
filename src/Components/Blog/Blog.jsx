import { MdOutlineAttachMoney } from 'react-icons/md';
import { BiBookOpen } from 'react-icons/bi';


const Blog = ({blog , handleSelectedCard}) => {
    const {course_img,course_name,credit_hour,course_price,course_description} = blog
    return (
        <div>
            <div className="card  bg-[#ffffff] shadow-xl rounded-lg">
    <figure className="h-52 p-5"><img src={course_img} alt="Shoes" className="w-full  h-full" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course_name}</h2>
    <p>{course_description}</p>
    <div className="flex justify-center items-center gap-5 ">
        <p className='flex items-center gap-1'><MdOutlineAttachMoney/>Price : {course_price}</p>
        <p className="flex items-center gap-1"><BiBookOpen/>Credit : {credit_hour}hr</p>

    </div>
    <div className="card-actions ">
      <button className="btn btn-primary w-full" onClick={() => handleSelectedCard(blog) }>Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;