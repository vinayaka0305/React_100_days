import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dashboard component
const Dashboard = () => {
    // State to track whether the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // Hook for programmatic navigation
    const navigate = useNavigate();

    /**
     * Handles user logout by updating the `isLoggedIn` state to `false`.
     * This triggers a redirect to the home page.
     */
    const handleLogout = () => {
        setIsLoggedIn(false); // Update login state to indicate the user is logged out
    };

    /**
     * Redirects the user to the home page if they are not logged in.
     * The `navigate` function is used for programmatic redirection.
     */
    if (!isLoggedIn) {
        return navigate('/'); // Redirect to the home page (e.g., login page)
    }

    // Render the dashboard UI
    return (
        <div className='dashboard'>
            {/* Display a welcome message */}
            <h1>Welcome to the Dashboard</h1>

            {/* Logout button that triggers the `handleLogout` function */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
