'use client'
import Link from "next/link";

function Post({author,title,image,date,content}){

    const newDate=new Date(date);
    const localDate=newDate.toLocaleString();

    return(
        <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          
          <img
            className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
            src={image}
            alt="Blog Image"
          />
  
         
          <div className="p-6">
            
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            
            {/* Text */}
            <p className="text-gray-700 mb-4">
              {content}
            </p>
            <a class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{author}</a>
          <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">{localDate}</p>
            
            {/* Button */}
            <Link href={"/"}>
        <button  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Home
        </button>
        </Link>
            
          </div>
        </div>
      </div>
    );
}

export default Post;