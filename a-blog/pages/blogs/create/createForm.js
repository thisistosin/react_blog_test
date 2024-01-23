import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
// import { blogAdded } from '@/lib/features/blogs/blogsSlice'
import { addNewBlog } from '@/lib/features/blogs/blogsSlice'
import { nanoid } from '@reduxjs/toolkit'

export default function CreateForm() {

    const router = useRouter()
    const dispatch = useDispatch()

    const [title,setTitle] = useState('')
    const [blogbody,setBlogbody] = useState('')
    const [author,setAuthor] = useState('mario')
    const [newfile,setNewfile] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    // const img = ''

    const newBlog = {title,blogbody,author,newfile,id:nanoid()}

    const handleSubmit = async (e)=>{
        // const newBlog = {title,blogbody,author,newfile}


        console.log(addNewBlog)
        e.preventDefault()
        setIsLoading(true)
        dispatch(addNewBlog(newBlog))
        //could also use this
        // dispatch({ type: 'blogs/add_blog', blog: newBlog })
        setIsLoading(false)
        // router.refresh()
        router.push('/blogs')
    }
    


  return (
    <main className='create'>
    <h1>Create Blog</h1>
    <form onSubmit={handleSubmit}>
        <label>
            Blog Title:
            <input type="text"
            required
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
             />
        </label>
        <label>
            Blog Body:
            <textarea 
            required
            value={blogbody}
            onChange={(e)=>{setBlogbody(e.target.value)}}
            >

            </textarea>
        </label>
        <label>
            Blog Author:
            <select
                required
                onChange={(e)=>{setAuthor(e.target.value)}}
                value={author}
            >
                <option value='yoshi'>Yoshi</option>
                <option value='mario'>Mario</option>

            </select>
        </label>
        <label>
            <input type="file"
            required
            onChange={(e)=>{setNewfile(e.target.value)}}
            value={newfile} />
        </label>

        <button
            disabled = {isLoading}
        >
        {!isLoading && <span>Submit</span> }
        {isLoading && <span>Adding...</span> }
        </button>
    </form>
    </main>
  )
}
