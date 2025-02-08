// HANTERA API ANROP
export const fetchData = async (endpoint) => {
    try {
      const baseUrl = 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/${endpoint}`);
      return await response.json();

    } catch (error) {
      console.error(`Could not fetch data: ${endpoint}:`, error);
      // throw new Error(error);
    }
   };