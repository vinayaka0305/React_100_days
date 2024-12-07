import React, { useEffect, useState } from 'react';
import Users from './Users'; // Importing the Users component
import axios from 'axios'; // Importing axios for API calls

const Random = () => {
    // State to store the fetched items (user data)
    const [items, setItems] = useState([]);
    // State to manage the loading state
    const [loading, setLoading] = useState(true);

    // useEffect runs once after the component mounts
    useEffect(() => {
        fetchData(); // Fetch user data when the component is mounted
    }, []);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            setLoading(true); // Set loading to true before making the API call
            const response = await axios.get('https://randomuser.me/api/?results=10'); // Fetch data from the API
            const data = response.data.results; // Extract the results array from the API response
            setItems(data); // Update the state with the fetched data

            // Simulate a delay of 2 seconds before setting loading to false
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Error fetching data:', error.message); // Log any errors that occur during the API call
            setLoading(false); // Stop loading in case of an error
        }
    };

    return (
        <>
            {/* Pass loading and items states as props to the Users component */}
            <Users loading={loading} items={items} />
        </>
    );
};

export default Random;
