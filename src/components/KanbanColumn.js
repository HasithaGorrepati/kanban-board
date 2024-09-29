import React from 'react';

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className= "kanban-column">
      <h3>{title}</h3>
      <div className= "kanban-column-tickets">
        {tickets.map(ticket => (
          <div key={ticket.id} className= "ticket-card">
            <h4>{ticket.title}</h4>
            <p>Status: {ticket.status}</p>
            <p>Priority: {ticket.priority}</p>
            <p>User: {ticket.assignedUser}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
