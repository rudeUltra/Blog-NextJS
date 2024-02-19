let cachedData = null;
let nextId=1;

export async function getBlogs() {

    // await new Promise((resolve)=>setTimeout(resolve,6000));
  try {
    if (cachedData) {
        console.log("Cached");
        console.log(cachedData);
      return cachedData; // Return cached data if available
    }
    
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=79f0983ddf5543a885a6531fa90ea7c0');
    const data = await res.json();
    if (data.articles && Array.isArray(data.articles)) {
        cachedData = data.articles.map(article => ({ ...article, id: nextId++ }));
      return cachedData;
    } else {
      console.error('Invalid data format:', data);
      return []; // Return an empty array if the 'articles' array is missing or invalid
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error
  }
}

export function getBlogById(index) {
    if (!cachedData || index < 0 || index > cachedData.length) {
      throw new Error('Blog Doesnt Exist Please use correct Id');
    }
    
    
    return cachedData[index-1];
  }
  