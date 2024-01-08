import Link from "next/link"
import Image from "next/image"
import { useSelector } from "react-redux"

// export default function BlogListItems({blog}) {

//   return (
//     <main>
//         <h1>Welcome to my blogs!</h1>
//             <div className='blog-preview' key={blog.id}>
//               <Link href={`/blogs/${blog.id}`}>
//                 <h2>{blog.title}</h2>
//                 <p>Written by {blog.author}</p>
//                 <Image 
//                 src={blog.img}
//                 alt = 'blog pics'
//                 width={40}
//                 height={40}
//                 quality={100}

//                 />
//                 </Link>
//             </div>
        
//     </main>
//   )
// }


//Refactored - Part 1

const selectTodoById = (state, blogId) => {
  return state.blogs.blogs.find(blog => blog.id === blogId)
}

export default function BlogListItems({id}) {

  const blog = useSelector(state => selectTodoById(state, id))

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
