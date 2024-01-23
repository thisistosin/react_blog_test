import { createSlice,nanoid,createAsyncThunk } from "@reduxjs/toolkit"


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
    }

  })

  export const { blogAdded } = blogsSlice.actions
  export default blogsSlice.reducer

  export const selectAllBlogs = state=>{state.blogs}
  export const selectBlogById = (state,blogId)=>{
    state.blogs.find(blog=>blog.id ===blogId)
  }

  export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs',async()=>{
    const res = await fetch('http://localhost:4100/blogs')
    const data = await res.json();
    console.log(data)
    return data
  })