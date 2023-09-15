const Blog = ({blog , handleSelectedCard}) => {
    const {course_img,course_name,credit_hour,course_price,course_description} = blog
    return (
        <div>
            <div className="card w-96 bg-[#ffffff] shadow-xl rounded-lg">
  <figure><img src={course_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course_name}</h2>
    <p>{course_description}</p>
    <div className="flex justify-center items-center gap-5 ">
        <p>Price : {course_price}</p>
        <p className="">Credit : {credit_hour}hr</p>

    </div>
    <div className="card-actions ">
      <button className="btn btn-primary w-[95%] mx-auto" onClick={() => handleSelectedCard(blog) }>Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;