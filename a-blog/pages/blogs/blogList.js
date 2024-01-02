'use client'

import Link from "next/link"
import Image from "next/image"
import { useSelector,useDispatch,useEffect} from 'react-redux';

export default function BlogList() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchContent())
    }, [dispatch])

const blogs = useSelector((state) => state.blogsSlice.blogs);
console.log(blogs)



  return (
    <main>
    <div className='blog-list'>
        <h1>Welcome to my blogs!</h1>
        {blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <Link href='{/blogs/{$id}}'>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <Image 
                src={blog.img}
                alt = 'blog pics'
                width={40}
                height={40}
                quality={100}

                />
                </Link>
            </div>
        ))}
    </div>
    </main>
  )
}
