
export async function getNewBlogs() {
  
  let nextId=1; //indexing nOice
  let cachedData= null;
  try {
    
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=79f0983ddf5543a885a6531fa90ea7c0',{ next: { revalidate: 86400} });
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

export async function getBlogById(index) {

  
    try {
        // Make a fetch request to the API
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=79f0983ddf5543a885a6531fa90ea7c0');
        
        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        
        // Extract the JSON data from the response
        const data = await response.json();
        
        // Check if the provided index is valid
        if (index < 0 || index > data.articles.length) {
            throw new Error('Invalid index: Out of range');
        }
        
        // Retrieve the article at the specified index
        const article = data.articles[index-1];
        
        return article;
    } catch (error) {
        console.error('Error fetching or processing data:', error);
        return null;
    }
}
