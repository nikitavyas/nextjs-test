'use client';
import Link from 'next/link';
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hook'
import { fetchPosts} from './postsSlice'


const PostList =  () => {
    const postData = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchPosts())
    }, [])
  return (
    <>
     {postData.loading && <div>Loading...</div>}
      {!postData.loading && postData.error ? <div>Error: {postData.error}</div> : null}
      {!postData.loading && postData.posts.length ? (
        <ul className="max-w-100  px-10 divide-y divide-gray-200 dark:divide-gray-700">
        {postData.posts.map(data => {
        return  <li className="pb-3 sm:pb-4" key={`post-${data.id}`}>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {data.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {data.body}
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Link href={`posts/${data.id}`}> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg> 
                            </Link>
                        </div>
                    </div>
                </li>
            })
        }
        </ul>
      ) : null }
    </>
  )
}

export default PostList;