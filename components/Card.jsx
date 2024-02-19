
import Link from "next/link";
function Card({author,title,image,date,desc,id}){
    const newDate=new Date(date);
    const localDate=newDate.toLocaleString();

    
    return(
        <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src={image} class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p class="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">News</p>
        <a class="text-lg font-bold sm:text-xl md:text-2xl">{title}</a>
        <p class="text-sm text-black">{desc}</p>
        <Link href={`/${id}`}>
        <button  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Read More
        </button>
        </Link>
        
        <div class="pt-2 pr-0 pb-0 pl-0">
        
          <a class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{author}</a>
          <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">·{localDate}·</p>
          <p class="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
          
        </div>
      </div>
    );
}

export default Card;