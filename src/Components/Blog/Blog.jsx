

const Blog = ({blog}) => {
    const {course_img,course_name,credit_hour,course_price,course_description} = blog
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={course_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course_name}</h2>
    <p>{course_description}</p>
    <div className="flex justify-center items-center gap-5">
        <p>{course_price}</p>
        <p>{credit_hour}</p>

    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;