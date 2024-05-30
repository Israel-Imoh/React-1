const Preview = (props) => {
const blogs = props.blogs;

    return ( 
        <div className="preview">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                <p>written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Preview;