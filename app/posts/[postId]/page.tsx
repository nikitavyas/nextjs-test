'use client';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { fetchPosts} from '../postsSlice'
import IPosts from '../IPosts';
import Link from 'next/link';


const PostDetails =  ({params} : {params : { postId : number}}) => {
  const posts = useAppSelector(state => state.posts)
  const [postData, getPostData]  = useState<IPosts>();
  useEffect(() => {
    if(!posts.loading && !posts.error){
       const data = posts.posts.filter((data : IPosts) => data.id == params.postId);
        getPostData(data[0]);
    }
  },[posts])
  
  return (
    <>
    <Link href="/posts" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Go Back to List</Link>
    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3">
      <div className="flex items-center space-x-3">
        <svg className="h-6 w-6 stroke-sky-500 " fill="none" viewBox="0 0 24 24"></svg>
        <h3 className="text-slate-900  text-sm font-semibold">{postData?.title}</h3>
      </div>
      <p className="text-slate-500 text-sm">{postData?.body}</p>
    </div>
    </>
  )
}

export default PostDetails