'use client'

import Post from "@/components/post";
import Navbar from "@/components/navbar";
import { getBlogById } from "@/lib/api";

import { useState,useEffect } from "react";


export default function Page(props){
    const [data, setData] = useState({})
    const blogId=props.params.id;
    
    
    
    useEffect(()=>{
        const fetchData = async () => {
            const blog=await getBlogById(blogId);
            console.log(blog)
            setData(blog);
        };
        fetchData();
    },[]);

    
    return(
        <>
        <Navbar/>
        <Post author={data.author} title={data.title} image={data.urlToImage} date={data.publishedAt} content={data.content}/>

        </>
        
    );
}