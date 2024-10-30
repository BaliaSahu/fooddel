import  { useState } from 'react';
import './ContactPage.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to an API)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-container">
            <h1  className='ghr '> || Contact Us || <hr /></h1>
            <p className='h1'>We'd Love to Hear from You!</p>
            <p className='h1'>If you have any questions, feedback, or need assistance, feel free to reach out to us.</p>

            <h2 className='ghr h2'>Contact Information <hr /></h2>
            <p className='h1  p'> <strong>Phone:</strong> (123) 456-7890</p>
            <p className='h1 p'><strong>Email:</strong> support@fooddelivery.com</p>
            <p className='h1 p'><strong>Address:</strong> 123 Food Lane, Flavor Town, FT 12345</p>

            <h2 className='ghr h2'>Customer Support Hours <hr /></h2>
            <p className='h1 p'><strong>Monday - Friday:</strong> 9:00 AM - 9:00 PM</p>
            <p className='h1 p'><strong>Saturday - Sunday:</strong> 10:00 AM - 6:00 PM</p>

            <h2 className='ghr h2'>Get in Touch <hr /></h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <h2>Follow Us</h2>
            <p className='p'>
                Stay connected for the latest updates and promotions!
                <br />
                <Link to="#">Facebook</Link> | <Link to="#">Instagram</Link> | <Link to="#">Twitter</Link>
            </p>
        </div>
    );
};

export default ContactPage;
