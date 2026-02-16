const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Store contact form submissions (in-memory, can be extended to database)
const submissions = [];

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify email transporter if credentials are provided
let emailConfigured = false;
if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.EMAIL_PASSWORD !== 'your-app-specific-password') {
  transporter.verify((error, success) => {
    if (error) {
      console.warn('⚠️  Email service not configured properly:', error.message);
      console.warn('Form submissions will succeed but emails will not be sent.');
    } else {
      emailConfigured = true;
      console.log('✅ Email service verified and ready');
    }
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is running', timestamp: new Date() });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required' 
    });
  }

  try {
    // Store submission
    const submission = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
      ipAddress: req.ip,
    };

    submissions.push(submission);
    console.log('New contact form submission:', submission);

    // Send email notification to admin (non-blocking)
    if (emailConfigured && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || 'admin@idssmarttech.com',
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `,
      };

      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'We received your message - IDS SmartTech Consultancy',
        html: `
          <h2>Thank You for Contacting Us!</h2>
          <p>Hi ${firstName},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p><strong>Your Message Details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
          </ul>
          <p>Our team will review your inquiry and contact you within 24 hours.</p>
          <p>Thank you for your interest in IDS SmartTech Consultancy!</p>
          <br>
          <p>Best regards,<br>IDS SmartTech Team</p>
        `,
      };

      // Send emails asynchronously (don't wait for them)
      transporter.sendMail(adminMailOptions).catch(err => {
        console.error('Failed to send admin email:', err.message);
      });

      transporter.sendMail(userMailOptions).catch(err => {
        console.error('Failed to send user confirmation email:', err.message);
      });
    }

    res.json({ 
      success: true, 
      message: 'Form submitted successfully',
      submissionId: submission.id 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process form submission. Please try again later.' 
    });
  }
});

// Get all submissions (admin endpoint - add authentication in production)
app.get('/api/submissions', (req, res) => {
  // In production, add proper authentication
  const token = req.headers.authorization?.split(' ')[1];
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  res.json({ 
    total: submissions.length,
    submissions: submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
  });
});

// Get submission by ID
app.get('/api/submissions/:id', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const submission = submissions.find(s => s.id.toString() === req.params.id);
  if (!submission) {
    return res.status(404).json({ error: 'Submission not found' });
  }
  
  res.json(submission);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Contact form endpoint: POST http://localhost:${PORT}/api/contact`);
});

module.exports = app;
