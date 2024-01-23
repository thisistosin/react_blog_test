import { createSlice,nanoid,createAsyncThunk } from "@reduxjs/toolkit"
import { createSelector } from "@reduxjs/toolkit"


const initialState = {
  blogs:[],
  status:'idle',
  error:null

}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
      blogAdded: {
        reducer(state, action) {
          state.blogs.push(action.payload)
        },
        // prepare(title, content) {
        //   return {
        //     payload: {
        //       id: nanoid(),
        //       title,
        //       content
        //     }
        //   }
        // }
      }
      // other reducers here
    },
    extraReducers(builder) {
      builder
        .addCase(fetchBlogs.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched blogs to the array
          state.blogs = state.blogs.concat(action.payload)
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(addNewBlog.fulfilled, (state, action) => {
          // We can directly add the new blog object to our posts array
          state.blogs.push(action.payload)
        })
    }

  })

  export const { blogAdded } = blogsSlice.actions
  export default blogsSlice.reducer

  export const selectAllBlogs = state=>{state.blogs}
  export const selectBlogById = (state,blogId)=>{
    return state.blogs.blogs.find(blog=>blog.id ===blogId)
  }
  export const selectBlogIds = createSelector(state => state.blogs.blogs,blogs=>blogs.map(blog => blog.id)) 


  export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs',async()=>{
    const res = await fetch('http://localhost:4100/blogs')
    const data = await res.json();
    console.log(data)
    return data
  })

  export const addNewBlog = createAsyncThunk(
    'posts/addNewBlog',
    // The payload creator receives the partial `{title, content, user}` object
    async initialBlog => {
      // We send the initial data to the fake API server
      const res = await fetch('http://localhost:4100/blogs',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(initialBlog)
        })
      // The response includes the complete post object, including unique ID
      return res
    }
  )