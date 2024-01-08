import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '@/lib/features/blogs/blogsSlice';

export default function BlogDetails() {
  const router = useRouter();
  const {id} = router.query
  const blogId = parseInt(id)


  const blog = useSelector(state => {
    // Assuming your state structure has `state.blogs.blogs`
    return state.blogs.blogs.find(blog => blog.id === blogId);
  });
  console.log(blog)
  const dispatch = useDispatch()
  const delBlogId = blog.id
  console.log(deleteBlog)

  const handleDelete = () => {
    console.log('deleted!')
    dispatch(deleteBlog(delBlogId));
    console.log('deleted!!!!')

    router.push('/blogs');
    console.log('deleted!!!!!!!!!!!!')

  };
  return (
    <div className="blog-details">
      <article>
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
        <div>{ blog.body }</div>
      </article>
      <button onClick={handleDelete}>delete blog</button>
    </div>
  );
}
