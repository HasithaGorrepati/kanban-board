import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tickets, grouping, sortBy }) => {
  const groupTickets = (tickets) => {
    const groups = {};
    tickets.forEach((ticket) => {
      const key = ticket[grouping]; 
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(ticket);
    });
    return groups;
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority; 
      } else {
        return a.title.localeCompare(b.title); 
      }
    });
  };

  const groupedTickets = groupTickets(tickets);
  const sortedGroups = Object.keys(groupedTickets).map((group) => ({
    group,
    tickets: sortTickets(groupedTickets[group]),
  }));

  return (
    <div className="kanban-board">
      {sortedGroups.map(({ group, tickets }) => (
        <div key={group} className="kanban-group">
          <h2>{group}</h2> {/* Display the heading for each group */}
          <KanbanColumn tickets={tickets} /> {/* Render KanbanColumn with tickets */}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
