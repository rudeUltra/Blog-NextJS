import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { getNewBlogs } from "@/lib/api";

export default async function Home() {
  const dataArray = await getNewBlogs();
  const serializedData = JSON.stringify(dataArray); // Serialize dataArray to JSON

  return (
    <div>
     <Navbar/>
     <Layout data={serializedData}/>

    </div>
   
  
    
  );
}
