import React, { useEffect, useReducer, useState } from "react";

// Initial state for the reducer, containing an empty list of hotels and filtered hotels
const initialState = { hotels: [], filteredHotel: [] };

// Reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": // Handles successful data fetch
      return { ...state, hotels: action.payload }; // Update hotels with fetched data
    case "FILTER": // Handles filtering of hotels based on user input
      if (!action.payload.trim()) { // If input is empty or only whitespace
        return { ...state, filteredHotel: state.hotels }; // Reset to all hotels
      }
      // Filter hotels by city name, case-insensitive
      let result = state.hotels.filter((hotel) =>
        hotel.city.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log(result); // Debugging: Log the filtered result
      return { ...state, filteredHotel: result }; // Update filtered hotels
    default:
      return state; // Default case: return the current state
  }
};

// Main component for rendering hotels
const HotelHome = () => {
  // UseReducer hook to manage state with the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  // UseState hook to manage user input for filtering
  const [input, setInput] = useState("");

  // Function to fetch the hotel data from the API
  const intialRendering = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`
      ); // API call to fetch hotel data
      const data = await response.json(); // Parse JSON response
      console.log(data); // Debugging: Log the fetched data
      dispatch({ type: "FETCH_SUCCESS", payload: data }); // Dispatch action to update hotels
    } catch (error) {
      console.log(error); // Handle and log any errors
    }
  };

  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    intialRendering();
  }, []); // Empty dependency array ensures this runs only once

  // Effect hook to filter hotels whenever the input value changes
  useEffect(() => {
    dispatch({ type: "FILTER", payload: input }); // Dispatch filter action with the input value
  }, [input]); // Dependency on `input`

  // Render the component
  return (
    <div id="main">
      {/* Input field for the user to type the filter text */}
      <input
        type="text"
        value={input} // Controlled component: value is tied to `input` state
        onChange={(e) => setInput(e.target.value)} // Update `input` state on change
      />
      {/* Render filtered hotels */}
      {state.filteredHotel.map((hotel, index) => (
        <p key={index}>{hotel.hotel_name}</p> // Display hotel name
      ))}
    </div>
  );
};

export default HotelHome;
