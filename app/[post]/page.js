import Post from "@/components/post";
import Navbar from "@/components/navbar";
import { redirect } from 'next/navigation'
import { getBlogById } from "@/lib/api";

export default function Page(props){
    const blog=getBlogById(props.params.post);

    
    return(
        <>
        <Navbar/>
        <Post author={blog.author} title={blog.title} image={blog.urlToImage} date={blog.publishedAt} content={blog.content}/>

        </>
        
    );
}