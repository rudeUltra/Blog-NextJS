'use client'

import Card from "./Card";
import SearchForm from "./search";
import { getNewBlogs } from "@/lib/api";

import { useState } from "react";

function Layout({data}) {
  const dataArray=JSON.parse(data)

  // const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dataArray);

  // Function to handle search
  const handleSearch = (searchQuery) => {
    const filtered = dataArray.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredData(filtered);
  };

  // Function to handle clear
  const handleClear = () => {
    setFilteredData(dataArray);
  };

  return (

    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
              <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block">
                <p className="inline">
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </p>
                <p className="inline text-xs font-medium">New</p>
              </div>
              <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">News Blog using NextJS</a>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="text-sm font-medium inline">author:</p>
                <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Rudhra Deep Biswas</a>
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· February 2023 ·</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <img src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full" />
            </div>
          </div>
        </div>
        <SearchForm handleSearch={handleSearch} handleClear={handleClear} />
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
        {filteredData.map((blog, index) => (
          <Card
            key={index}
            author={blog.author}
            title={blog.title}
            image={blog.urlToImage}
            date={blog.publishedAt}
            desc={blog.description}
            id={blog.id}
          />
        ))}
        </div>
        
        
      </div>
    </div>
  );

}

export default Layout;
