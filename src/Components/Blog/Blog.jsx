import { MdOutlineAttachMoney } from 'react-icons/md';
import { BiBookOpen } from 'react-icons/bi';


const Blog = ({blog , handleSelectedCard}) => {
    const {course_img,course_name,credit_hour,course_price,course_description} = blog
    return (
        <div>
            <div className="card  bg-[#ffffff] shadow-xl rounded-lg">
    <figure className="h-52 p-5"><img src={course_img} alt="Shoes" className="w-full  h-full" /></figure>
  <div className="card-body">
    <h2 className="card-title lg:text-xl font-bold text-black">{course_name}</h2>
    <p className='lg:text-xl text-[#1C1B1B99]'>{course_description}</p>
    <div className="flex justify-center items-center gap-5 ">
        <p className='flex items-center gap-1 text-black lg:text-xl font-bold'><MdOutlineAttachMoney/><span className='text-[#1C1B1B99] font-semibold'>Price : {course_price}</span></p>
        <p className="flex items-center gap-1 text-black lg:text-xl font-bold"><BiBookOpen/><span className='text-[#1C1B1B99] font-semibold'>Credit : {credit_hour}hr</span></p>

    </div>
    <div className="card-actions ">
      <button className="btn btn-primary w-full bg-[#2F80ED] border-none text-[#ffffff]" onClick={() => handleSelectedCard(blog) }>Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;