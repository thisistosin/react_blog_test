import Link from "next/link"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectBlogById } from "@/lib/features/blogs/blogsSlice"

export default function BlogListItems({id}) {

  const blog = useSelector(state => selectBlogById(state, id))

  return (
    <main>
        {/* <h1>Welcome to my blogs!</h1> */}
            <div className='blog-preview' key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
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
        
    </main>
  )
}
