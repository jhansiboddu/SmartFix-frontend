// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './TechnicianTickets.css';
// import TechnicianNotificationsDropdown from './NotifyDropdown';
// const TechnicianTickets = ({ technicianId }) => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/tickets/technician/${technicianId}`);
//         setTickets(res.data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch tickets');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTickets();
//   }, [technicianId]);

//   if (loading) return <p>Loading tickets...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   return (
//     <div className="technician-tickets-container">
//       <TechnicianNotificationsDropdown technicianId={technicianId} />
//       <h2>Assigned Tickets</h2>
//       {tickets.length === 0 ? (
//         <p>No tickets assigned.</p>
//       ) : (
//         <table className="ticket-table">
//           <thead>
//             <tr>
//               <th>Ticket ID</th>
//               <th>Issue Type</th>
//               <th>Description</th>
//               <th>Status</th>
//               <th>Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.map(ticket => (
//               <tr key={ticket._id}>
//                 <td>{ticket._id}</td>
//                 <td>{ticket.issueType}</td>
//                 <td>{ticket.description}</td>
//                 <td>{ticket.status}</td>
//                 <td>{new Date(ticket.createdAt).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TechnicianTickets;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TechnicianTickets.css';


const TechnicianTickets = ({ technicianId }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

 useEffect(() => {
  const fetchTickets = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/tickets/user/${technicianId}`);
      setTickets(res.data.tickets);  // ✅ FIXED HERE
    } catch (err) {
      console.error(err);
      setError('Failed to fetch tickets');
    } finally {
      setLoading(false);
    }
  };

  fetchTickets();
}, [technicianId]);

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="technician-tickets-container">
      
      <h2>Assigned Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets assigned.</p>
      ) : (
        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Issue Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>
                <td>{ticket.issueType}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{new Date(ticket.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TechnicianTickets;
