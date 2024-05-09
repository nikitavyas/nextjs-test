import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import IPosts from './IPosts'

type InitialState = {
  loading: boolean
  posts: IPosts[]
  error: string
}
const initialState: InitialState = {
  loading: false,
  posts: [],
  error: ''
}

export const fetchPosts = createAsyncThunk('user/fetchPosts', async () => {
  const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: IPosts[] = await res.json();
  return posts;
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<IPosts[]>) => {
        state.loading = false
        state.posts = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export default postsSlice.reducer;