// src/pages/TechnicianDirectory.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const TechnicianDirectory = () => {
  const technicians = [
    { name: 'Ravi Kumar', department: 'Plumbing', email: 'ravi.k@example.com', phone: '9876543210' },
    { name: 'Anjali Sharma', department: 'Plumbing', email: 'anjali.s@example.com', phone: '9876543211' },
    { name: 'Sita Reddy', department: 'Electrical', email: 'sita.r@example.com', phone: '9876543212' },
    { name: 'Mohit Verma', department: 'Electrical', email: 'mohit.v@example.com', phone: '9876543213' },
    { name: 'Naveen Rao', department: 'Civil', email: 'naveen.r@example.com', phone: '9876543214' },
    { name: 'Pooja Iyer', department: 'Civil', email: 'pooja.i@example.com', phone: '9876543215' }
  ];

  return (
    <Container className="my-4">
      <h3 className="text-center mb-4">🧑‍🔧 Technician Directory</h3>
      <Row xs={1} sm={2} md={3} className="g-4">
        {technicians.map((tech, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{tech.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{tech.department}</Card.Subtitle>
                <Card.Text>
                  📧 <strong>Email:</strong> {tech.email} <br />
                  📞 <strong>Phone:</strong> {tech.phone}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TechnicianDirectory;
