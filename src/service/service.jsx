import axios from 'axios';

// Make a GET request to fetch data from the Spring Boot API
async function fetchData() {
  try {
    const response = await axios.get('http://localhost:2025/products');
    console.log(response);
    // Process the response data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data
fetchData();
