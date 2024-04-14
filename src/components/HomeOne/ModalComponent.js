import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CustomModal.css';

const CustomModal = ({ showModal, closeModal }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        city: 'Select City',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        closeModal();
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Book an Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="custom-modal-form"> {/* Add custom class */}
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Mobile number" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control as="select" name="city" value={formData.city} onChange={handleInputChange}>
                            <option value="Select City" disabled>Select City</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className='mt-3 main-btn' type="submit">
                        Book Consultation
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;