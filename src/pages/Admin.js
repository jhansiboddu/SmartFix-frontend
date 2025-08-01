import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Admin = () => {
  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <h4>📋 Admin Panel</h4>
        <p>This is a placeholder for admin features like reassigning technicians, viewing all issues, and managing the system.</p>
      </Card>
    </Container>
  );
};

export default Admin;
