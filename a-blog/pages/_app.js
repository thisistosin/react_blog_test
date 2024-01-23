import '@/styles/globals.css'
import store from '@/lib/store'
import { Provider } from 'react-redux'
import { fetchBlogs } from '@/lib/features/blogs/blogsSlice'

export default function App({ Component, pageProps }) {

  // store.dispatch(fetchBlogs)
  return (
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}
