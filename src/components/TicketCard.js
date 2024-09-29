import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p><strong>User:</strong> {ticket.user}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {['No Priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority]}</p>
    </div>
  );
};

export default TicketCard;
