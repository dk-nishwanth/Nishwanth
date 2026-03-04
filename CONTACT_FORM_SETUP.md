# Contact Form Setup Guide

## How to Enable Email Receiving

Your contact form is now functional and ready to receive messages! Follow these steps to set it up:

### Option 1: Using Formspree (Recommended - Free & Easy)

1. **Visit Formspree**: Go to https://formspree.io
2. **Sign Up**: Create a free account with your email
3. **Create a New Form**:
   - Click "New Form"
   - Enter your email address (dknishwanth1718@gmail.com)
   - You'll get a form ID (looks like: `xyzgvqpk`)
4. **Update the Form ID**:
   - Open `src/pages/ContactPage.tsx`
   - Find the line: `const response = await fetch("https://formspree.io/f/xyzgvqpk", {`
   - Replace `xyzgvqpk` with your actual form ID from Formspree
5. **Verify Email**: Check your email for a verification link from Formspree and click it
6. **Done!** Messages will now be sent to your email

### How It Works

When someone fills out the contact form:
1. They enter their name, email, and message
2. Click "Send Message"
3. The form validates the input
4. Sends the data to Formspree
5. You receive an email with their message
6. User sees a success message

### Features Included

✅ Form validation (all fields required)
✅ Loading state while sending
✅ Success/error messages
✅ Form clears after successful submission
✅ Error handling with user-friendly messages
✅ Responsive design
✅ No backend required

### Testing Locally

1. Run `npm run dev`
2. Navigate to the Contact page
3. Fill in the form and submit
4. You should receive an email at your configured address

### Troubleshooting

**Not receiving emails?**
- Make sure you verified your email in Formspree
- Check spam/junk folder
- Verify the form ID is correct in the code

**Form not submitting?**
- Check browser console for errors (F12)
- Ensure all fields are filled
- Check your internet connection

### Alternative: Using Your Own Email Service

If you prefer a different email service, you can replace the Formspree endpoint with:
- **SendGrid**: https://sendgrid.com
- **Mailgun**: https://www.mailgun.com
- **AWS SES**: https://aws.amazon.com/ses/
- **Custom Backend**: Set up your own Node.js/Express server

Just update the fetch URL and payload format accordingly.
