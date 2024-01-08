// 'use client'
import { useSelector,shallowEqual } from "react-redux";
import BlogListItems from "./bloglistitems";
import { useRouter } from "next/router";


console.log('hi')


// export default function BlogList() {
//     const blogs = useSelector(state => state.blogs)
//     console.log(blogs)
//     const renderedBlogListItems = blogs.blogs.map(blog=>{
//         return <BlogListItems key = {blog.id} blog={blog}/>
//     })

//     return (
//         <div className='blog-list'>
//             {renderedBlogListItems}
//         </div>
//      )
// }

//Changing one blog object means creating copies of both the blog and the 
//state.blogs array, and each copy is a new reference in memory.
//When useSelector sees a new reference as its result, 
//it forces its component to re-render.
//So, any time one todo object is updated 
//the whole <BlogList> parent component will re-render

//Refactored Part 1 - By Selecting Data in List Items by ID

const selectBlogIds = state => state.blogs.blogs.map(blog => blog.id)

export default function BlogList() {
    const router = useRouter()


    // const blogIds = useSelector(selectBlogIds)

    //refactored to disallow re-render
    const blogIds = useSelector(selectBlogIds,shallowEqual)


    const renderedBlogListItems = blogIds.map(blogId=>{
        return <BlogListItems key = {blogId} id={blogId}/>
    })

    return (
        <div className='blog-list'>
            {renderedBlogListItems}

            <button type="button" onClick={() => router.push('/blogs/create')}>
      Click me
    </button>
        </div>
     )
}