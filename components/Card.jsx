'use client'

import Link from "next/link";
import { format } from 'date-fns';

function Card({author,title,image,date,desc,id}){
  const formattedDate = format(new Date(date), 'MM/dd/yyyy, h:mm:ss a');

    
    return(
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 transition-transform duration-300 transform hover:scale-105 hover: shadow-orange-700  border-gradient rounded-lg overflow-hidden shadow-lg">
        <img src={image} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">News</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">{title}</a>
        <p className="text-sm text-black">{desc}</p>
        <Link href={`/posts/${id}`}>
        <button  className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
        <span class="relative z-10">Read More</span>
        </button>
        </Link>
        
        <div className="pt-2 pr-0 pb-0 pl-0">
        
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{author}</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">·{formattedDate}·</p>
          <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
          
        </div>
      </div>
    );
}

export default Card;