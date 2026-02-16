# Backend Server Setup Guide

This guide explains how to set up and run the backend server for form submission handling.

## Overview

The backend server (server.js) is an Express.js application that handles form submissions from the contact page. It provides:

- Form validation
- Email notifications (admin + user confirmation)
- Submission storage
- Admin endpoints for viewing submissions

## Installation

### 1. Install Dependencies

```bash
npm install
```

This will install the required packages:
- `express` - Web server framework
- `cors` - Cross-Origin Resource Sharing
- `nodemailer` - Email sending
- `dotenv` - Environment variable management

### 2. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your configuration:
   ```
   # Backend Server Port
   BACKEND_PORT=5000

   # Email Configuration (Gmail example)
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   ADMIN_EMAIL=admin@idssmarttech.com

   # Admin Token (generate a secure random token)
   ADMIN_TOKEN=your-secure-admin-token-here

   # Frontend URL
   FRONTEND_URL=http://localhost:3000
   ```

### 3. Email Configuration (Gmail)

To use Gmail for sending emails:

1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password
3. Use this password as `EMAIL_PASSWORD` in your `.env` file

**For other email services**, update `EMAIL_SERVICE` to your provider (e.g., 'outlook', 'yahoo', 'sendgrid')

## Running the Server

### Development Mode (Single Terminal)

```bash
# Terminal 1: Start the backend server
node server.js

# Terminal 2: Start the Next.js frontend
npm run dev
```

### Production Mode (Using PM2)

PM2 is pre-configured in `ecosystem.config.js` to manage both the frontend and backend:

```bash
# Start both frontend and backend
npm run pm2:start

# View status
npm run pm2:status

# View logs
npm run pm2:logs

# Stop services
npm run pm2:stop

# Restart services
npm run pm2:restart
```

## API Endpoints

### 1. Health Check
```
GET http://localhost:5000/api/health

Response:
{
  "status": "Backend server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 2. Submit Contact Form
```
POST http://localhost:5000/api/contact

Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "message": "I'm interested in your services..."
}

Response (Success):
{
  "success": true,
  "message": "Form submitted successfully",
  "submissionId": 1705314600000
}

Response (Error):
{
  "success": false,
  "error": "All fields are required"
}
```

### 3. Get All Submissions (Admin Only)
```
GET http://localhost:5000/api/submissions

Headers:
Authorization: Bearer your-secure-admin-token-here

Response:
{
  "total": 5,
  "submissions": [
    {
      "id": 1705314600000,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "+91 98765 43210",
      "message": "I'm interested in your services...",
      "submittedAt": "2024-01-15T10:30:00.000Z",
      "ipAddress": "127.0.0.1"
    }
  ]
}
```

### 4. Get Specific Submission (Admin Only)
```
GET http://localhost:5000/api/submissions/1705314600000

Headers:
Authorization: Bearer your-secure-admin-token-here

Response:
{
  "id": 1705314600000,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "message": "I'm interested in your services...",
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "ipAddress": "127.0.0.1"
}
```

## Frontend Integration

The contact form in `src/app/(company)/contact/page.tsx` is already configured to send submissions to the backend server.

### How it works:

1. User fills out the contact form
2. Clicking "Send Message" triggers `handleSubmit()`
3. Form data is sent to `http://localhost:5000/api/contact`
4. Backend validates and processes the submission
5. User receives success/error feedback
6. Admin receives email notification

## Testing

Use curl or Postman to test the API:

```bash
# Test health check
curl http://localhost:5000/api/health

# Test form submission
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "+91 98765 43210",
    "message": "This is a test message"
  }'

# Get submissions (with admin token)
curl http://localhost:5000/api/submissions \
  -H "Authorization: Bearer your-secure-admin-token-here"
```

## Database Integration (Optional)

Currently, submissions are stored in memory. For production, integrate a database:

1. **Option 1: MongoDB**
   - Install: `npm install mongoose`
   - Update `server.js` to use MongoDB collections

2. **Option 2: PostgreSQL**
   - Install: `npm install pg`
   - Update `server.js` to use PostgreSQL tables

3. **Option 3: Firebase**
   - Install: `npm install firebase-admin`
   - Update `server.js` to use Firestore

## Troubleshooting

### "Backend server is running" message but form won't submit

- Check if port 5000 is already in use: `netstat -ano | findstr :5000` (Windows) or `lsof -i :5000` (Mac/Linux)
- Try a different port in `.env` and update the frontend API URL

### Email not sending

- Verify `.env` file credentials
- Check if Gmail 2-Step Verification is enabled
- Ensure App Password is correctly set
- Check backend logs for email service errors

### CORS errors

- Verify `CORS` is enabled in `server.js`
- Check frontend URL in `.env` matches your setup

### PORT ALREADY IN USE ERROR

If port 5000 is already in use:

1. Find the process: `lsof -i :5000` (Mac/Linux)
2. Kill it: `kill -9 <PID>`
3. Or change `BACKEND_PORT` in `.env`

## Security Notes

- **ADMIN_TOKEN**: Generate a strong random token for production
- **EMAIL_PASSWORD**: Never commit `.env` to version control (it's in .gitignore)
- **Validation**: Add additional validation for phone numbers, email formats, etc.
- **Rate Limiting**: Consider adding rate limiting for form submissions
- **HTTPS**: Use HTTPS in production

## Next Steps

1. Set up the `.env` file with real credentials
2. Configure a database for persistent storage
3. Add email templates for professional branding
4. Implement rate limiting
5. Add spam/bot detection (reCAPTCHA, etc.)
6. Set up error logging/monitoring

## Support

For issues or questions, refer to:
- Express.js: https://expressjs.com/
- Nodemailer: https://nodemailer.com/
- PM2: https://pm2.keymetrics.io/
