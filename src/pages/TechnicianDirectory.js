import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllTechnicians = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/technicians');
        setTechnicians(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch technicians');
        setLoading(false);
      }
    };

    fetchTechnicians();
  }, []);

  if (loading) return <p>Loading technicians...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="technicians-container">
      <h2>All Technicians</h2>
      {technicians.length === 0 ? (
        <p>No technicians found.</p>
      ) : (
        <table className="technician-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Skill</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map((tech) => (
              <tr key={tech._id}>
                <td>{tech.userId}</td>
                <td>{tech.name}</td>
                <td>{tech.contact}</td>
                <td>{tech.location}</td>
                <td>{tech.skill || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllTechnicians;
