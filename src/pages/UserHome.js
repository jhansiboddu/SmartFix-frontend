import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import './UserHome.css'
import {
  Navbar,
  Container,
  Card,
  Button,
  Modal,
  Table,
  Badge,
  Image,
  Spinner
} from 'react-bootstrap';


const UserHome = () => {
  const navigate = useNavigate();
  const [issueList, setIssueList] = useState([]);
  const [fileRef, setFileRef] = useState(null);
  const [uploadedImage, setUploadedImage] = useState('');
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [predictedIssue, setPredictedIssue] = useState('');
  const [ticketId, setTicketId] = useState(null);
  const [technicianName, setTechnicianName] = useState('');
  const userId = localStorage.getItem('userId');

  // Redirect if not logged in
  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
  }, [userId, navigate]);

  // Fetch previous tickets
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tickets/user/${userId}`);
        setIssueList(res.data.tickets || []);
      } catch (err) {
        console.error("Error fetching tickets", err);
      }
    };

    if (userId) fetchIssues();
  }, [userId]);

  // File upload handler
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];
    setFileRef(file);
    setUploadedImage(URL.createObjectURL(file));
    setStep(1);
    setShowModal(true);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Predict issue
  const predictIssue = async () => {
    if (!fileRef || !userId) {
      alert("Missing file or user session. Please login and upload an image.");
      return;
    }

    try {
      setStep(2);
      setLoading(true);

      const formData = new FormData();
      formData.append('image', fileRef);
      formData.append('userId', userId);

      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { issueType, ticketId, imageUrl } = res.data;

      setPredictedIssue(issueType);
      setTicketId(ticketId);

      const cleanPath = imageUrl.replace(/\\/g, '/'); // Windows fix
      setUploadedImage(`http://localhost:5000/${cleanPath}`);
      setStep(3);
    } catch (err) {
      console.error("Prediction error:", err?.response?.data || err);
      alert("Failed to analyze image.");
      setShowModal(false);
    } finally {
      setLoading(false);
    }
  };
  const assignTechnician = async () => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/assign-technician', {
        ticketId: ticketId,
      });

      const { technicianName } = res.data;
      setTechnicianName(technicianName);
      alert(`Technician "${technicianName}" assigned successfully!`);
    } catch (err) {
      console.error("Assignment error:", err?.response?.data || err);
      alert(err?.response?.data?.message || "Failed to assign technician.");
    } finally {
      setLoading(false);
    }
  };
const confirmFinal = () => {
  setShowModal(false);
  setStep(0);
  setFileRef(null);
  setUploadedImage('');
  setPredictedIssue('');
  setTechnicianName('');
  setTicketId(null);
};

// Resolve ticket status
const resolveTicket = async (ticketId) => {
  try {
    await axios.put(`http://localhost:5000/api/update/${ticketId}/resolve`);
    setIssueList((prev) =>
      prev.map((t) =>
        t._id === ticketId ? { ...t, status: 'Resolved' } : t
      )
    );
  } catch (err) {
    console.error("Failed to resolve ticket:", err);
    alert("Could not resolve ticket.");
  }
};

  return (
    <>
      <Navbar className="justify-content-between px-4" bg="dark" variant="dark">
        <Navbar.Brand>SmartMaintain</Navbar.Brand>
        <div className="d-flex gap-2">
          <Button variant="outline-light" size="sm" onClick={() => navigate("/userroutes/technicians")}>
            👨‍🔧 View Technicians
          </Button>
          <Button variant="outline-light" size="sm">👤 Profile</Button>
        </div>
      </Navbar>

      <Container className="my-4">
        <Card className="p-4 text-center drag-box" {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="m-0">📂 Drag & Drop or Click to Upload an Issue Image</p>
        </Card>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {step === 1 && 'Uploaded Image'}
            {step === 2 && 'Processing...'}
            {step === 3 && 'Confirm Issue'}
            {step === 4 && 'Assigning Technician...'}
            {step === 5 && 'Technician Assigned ✅'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {step === 1 && (
            <>
              <Image src={uploadedImage} thumbnail />
              <p className="mt-3">Click Submit to detect issue type.</p>
              <Button onClick={predictIssue} variant="primary">Submit</Button>
            </>
          )}
          {step === 2 && <Spinner animation="border" variant="primary" />}
          {step === 3 && (
            <>
              <p>🛠️ Issue Type Detected: <strong>{predictedIssue}</strong></p>
              <Button onClick={assignTechnician} variant="success">Confirm & Assign Technician</Button>
            </>
          )}
          {step === 4 && (
            <>
              <p>Submitting your issue. Please wait...</p>
              <Spinner animation="border" variant="warning" />
            </>
          )}
          {step === 5 && (
            <>
              <p><strong>{predictedIssue}</strong> issue has been submitted.</p>
              <p>👨‍🔧 Assigned Technician: <strong>{technicianName}</strong></p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          {step === 5 && <Button variant="primary" onClick={confirmFinal}>OK</Button>}
        </Modal.Footer>
      </Modal>

      <Container>
        <h5 className="my-3">📋 Your Previous Issues</h5>
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
            {issueList.map((t, idx) => (
              <tr key={idx}>
                <td>
                  <img src={`http://localhost:5000/${t.imageUrl}`} alt="issue" width="90" />
                </td>
                <td>{t.issueType}</td>
                <td>{t.technicianName || 'Pending'}</td>
                <td>
                  <Badge bg={t.status === 'Resolved' ? 'success' : 'warning'}>
                    {t.status}
                  </Badge>
                  {t.status !== 'Resolved' && (
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="ms-2"
                      onClick={() => resolveTicket(t._id)}
                    >
                      Resolve
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default UserHome;
