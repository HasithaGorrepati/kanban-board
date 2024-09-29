  import React, { useState, useEffect } from 'react';
  import KanbanBoard from './components/Kanban-board.js';
  import './App.css';

  const App= () => {
    const [tickets, setTickets]= useState([]);
    const [grouping, setGrouping]= useState('status'); 
    const [sortBy, setSortBy]= useState('priority');   

    useEffect(() => {
      const fetchTickets= async () => {
        try {
          const response= await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
          const data= await response.json();
          setTickets(data.tickets);
        } catch (error) {
          console.error('Error fetching tickets:', error);
        }
      };

      fetchTickets();
    }, []);

    useEffect(() => {
      console.log('Grouping tickets by:', grouping);
    }, [grouping]);

    useEffect(() => {
      console.log('Sorting tickets by:', sortBy);
    }, [sortBy]);

    return (
      <div>
        {/* Dropdown for grouping options */}
        <label htmlFor= "grouping">Group by:</label>
        <select 
          id="grouping" 
          value={grouping} 
          onChange={(e) => setGrouping(e.target.value)}
        >
          <option value= "status">Status</option>
          <option value= "user">User</option>
          <option value= "priority">Priority</option>
        </select>

        {/* Dropdown for sorting options */}
        <label htmlFor= "sorting">Sort by:</label>
        <select 
          id= "sorting" 
          value= {sortBy} 
          onChange= {(e) => setSortBy(e.target.value)}
        >
          <option value= "priority">Priority</option>
          <option value= "title">Title</option>
        </select>

        {/* Render KanbanBoard with tickets */}
        <KanbanBoard tickets= {tickets} grouping={grouping} sortBy={sortBy} />
      </div>
    );
  };

  export default App;
