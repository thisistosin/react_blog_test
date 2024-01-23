'use client'
import { useSelector,shallowEqual,useDispatch } from "react-redux";
import { useEffect } from "react";
import BlogListItems from "./bloglistitems";
import { useRouter } from "next/router";
import { fetchBlogs } from "@/lib/features/blogs/blogsSlice";

const selectBlogIds = state => state.blogs.blogs.map(blog => blog.id)

let renderedBlogListItems

export default function BlogList() {
    const router = useRouter()
    const dispatch = useDispatch()
    const blogStatus = useSelector(state=>state.blogs.status)
    const blogIds = useSelector(selectBlogIds,shallowEqual)

    useEffect(() => {
        if (blogStatus === 'idle') {
            dispatch(fetchBlogs())
        }
      }, [blogStatus, dispatch])
    
    if (blogStatus === 'succeeded'){

        renderedBlogListItems = blogIds.map(blogId=>{
            return <BlogListItems key = {blogId} id={blogId}/>
        })

    }



    return (
        <div className='blog-list'>
            {renderedBlogListItems}

            <button type="button" onClick={() => router.push('/blogs/create')}>
      Click me
    </button>
        </div>
     )
}