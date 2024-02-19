'use client'

import Link from "next/link";

export default function Error(){
    
    return(
        <div class="flex items-center justify-center h-screen">
  <h1 class="text-4xl text-center text-blue-600">Error Please Reload Page</h1>
  <Link href="/">
        <button  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Home Page
        </button>
        </Link>
</div>

    );
}