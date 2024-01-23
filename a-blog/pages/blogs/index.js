'use client'
import { useSelector,shallowEqual,useDispatch } from "react-redux";
import { useEffect } from "react";
import BlogListItems from "./bloglistitems";
import { useRouter } from "next/router";
import { fetchBlogs } from "@/lib/features/blogs/blogsSlice";
import { selectBlogIds } from "@/lib/features/blogs/blogsSlice";



export default function BlogList() {
    const router = useRouter()
    const dispatch = useDispatch()
    const blogStatus = useSelector(state=>state.blogs.status)
    const blogIds = useSelector(selectBlogIds) //not much difference between createSelector and showequal
    let renderedBlogListItems
    // useEffect(() => {
    //     if (blogStatus === 'idle') {
    //         dispatch(fetchBlogs())
    //     }
    //   }, [blogStatus, dispatch])

    useEffect(() => {
        // console.log('==============test')
        dispatch(fetchBlogs())
      }, [])
    
    // if (blogStatus === 'succeeded'){

        // renderedBlogListItems = blogIds.map(blogId=>{
        //     return <BlogListItems key = {blogId} id={blogId}/>
        // })
    renderedBlogListItems = blogIds.map(blogId=>(<BlogListItems key = {blogId} id={blogId}/>))
    // }



    return (
        <div className='blog-list'>
            {renderedBlogListItems}

            <button type="button" onClick={() => router.push('/blogs/create')}>
                Click me
            </button>
        </div>
     )
}