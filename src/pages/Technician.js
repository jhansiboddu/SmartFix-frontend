import React, { useState } from 'react';
import { Container, Table, Card, Dropdown } from 'react-bootstrap';

const Technician = () => {
  const [issues, setIssues] = useState([
    {
      id: 1,
      description: 'Ceiling leaking in Room 12',
      category: 'Plumbing',
      status: 'Assigned'
    },
    {
      id: 2,
      description: 'AC not working in lab',
      category: 'Electrical',
      status: 'Open'
    }
  ]);

  const updateStatus = (index, newStatus) => {
    const updated = [...issues];
    updated[index].status = newStatus;
    setIssues(updated);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <h4>👨‍🔧 Technician Dashboard</h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, idx) => (
              <tr key={issue.id}>
                <td>{issue.description}</td>
                <td>{issue.category}</td>
                <td>{issue.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle size="sm" variant="secondary">Change</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => updateStatus(idx, 'Open')}>Open</Dropdown.Item>
                      <Dropdown.Item onClick={() => updateStatus(idx, 'Assigned')}>Assigned</Dropdown.Item>
                      <Dropdown.Item onClick={() => updateStatus(idx, 'Resolved')}>Resolved</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default Technician;
