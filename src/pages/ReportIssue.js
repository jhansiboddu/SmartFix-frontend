import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const ReportIssue = () => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Image:', image);
    console.log('Description:', desc);
    setSubmitted(true);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <h4>📸 Report an Issue</h4>
        {submitted && <Alert variant="success">Issue submitted successfully!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ReportIssue;
