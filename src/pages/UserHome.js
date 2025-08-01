import React, { useState } from 'react';
import {
  Container, Navbar, Table, Card, Button, Modal,
  Badge, Image, Spinner
} from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import './UserHome.css';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictedIssue, setPredictedIssue] = useState('');
  const [assignedTechnician, setAssignedTechnician] = useState('');
  const [loading, setLoading] = useState(false);
  const [issueList, setIssueList] = useState([]);

  const availableTechnicians = {
    Plumbing: ['Ravi Kumar', 'Anjali Sharma'],
    Electrical: ['Sita Reddy', 'Mohit Verma'],
    Civil: ['Naveen Rao', 'Pooja Iyer']
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(file));
    setShowModal(true);
    setStep(1);
  };

  const getIssueFromModel = () => {
    setLoading(true);
    setStep(2);

    setTimeout(() => {
      const types = ['Plumbing', 'Electrical', 'Civil'];
      const issue = types[Math.floor(Math.random() * types.length)];
      setPredictedIssue(issue);
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const submitIssue = () => {
    setLoading(true);
    setStep(4);

    setTimeout(() => {
      const techList = availableTechnicians[predictedIssue];
      const assigned = techList[Math.floor(Math.random() * techList.length)];
      setAssignedTechnician(assigned);
      setLoading(false);
      setStep(5);
    }, 2000);
  };

  const confirmFinal = () => {
    setIssueList(prev => [
      {
        image: uploadedImage,
        type: predictedIssue,
        technician: assignedTechnician,
        status: 'Open'
      },
      ...prev
    ]);

    setShowModal(false);
    setStep(0);
    setUploadedImage(null);
    setPredictedIssue('');
    setAssignedTechnician('');
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      {/* Header */}
      <Navbar className="justify-content-between px-4" bg="dark" variant="dark">
        <Navbar.Brand>SmartMaintain</Navbar.Brand>
        <div className="d-flex gap-2">
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => navigate("/userroutes/technicians")}
          >
            👨‍🔧 View Technicians
          </Button>
          <Button variant="outline-light" size="sm">👤 Profile</Button>
        </div>
      </Navbar>

      {/* Upload Box */}
      <Container className="my-4">
        <Card className="p-4 text-center drag-box" {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="m-0">📂 Drag & Drop or Click to Upload an Issue Image</p>
        </Card>
      </Container>

      {/* Modal: Upload & Classification Flow */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {step === 1 && 'Uploaded Image'}
            {step === 2 && 'Identifying Issue...'}
            {step === 3 && 'Issue Identified'}
            {step === 4 && 'Submitting Issue...'}
            {step === 5 && 'Technician Assigned ✅'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {step === 1 && (
            <>
              <Image src={uploadedImage} thumbnail />
              <p className="mt-3">Click next to detect issue type.</p>
            </>
          )}
          {step === 2 && <Spinner animation="border" variant="primary" />}
          {step === 3 && (
            <>
              <p>🛠️ Issue Type: <strong>{predictedIssue}</strong></p>
              <Button variant="success" onClick={submitIssue}>Submit Issue</Button>
            </>
          )}
          {step === 4 && (
            <>
              <p>Submitting your issue. Please wait while we assign a technician...</p>
              <Spinner animation="border" variant="warning" />
            </>
          )}
          {step === 5 && (
            <>
              <p><strong>{predictedIssue}</strong> issue has been submitted.</p>
              <p>👨‍🔧 Assigned Technician: <strong>{assignedTechnician}</strong></p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          {step === 1 && <Button onClick={getIssueFromModel}>Next</Button>}
          {step === 5 && <Button variant="primary" onClick={confirmFinal}>OK</Button>}
        </Modal.Footer>
      </Modal>

      {/* Issue Table */}
      <Container>
        <h5 className="my-3">📋 Previous Issues</h5>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Type</th>
              <th>Technician</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issueList.map((issue, index) => (
              <tr key={index}>
                <td><img src={issue.image} width="80" alt="issue" /></td>
                <td>{issue.type}</td>
                <td>{issue.technician}</td>
                <td><Badge bg="danger">{issue.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default UserHome;
