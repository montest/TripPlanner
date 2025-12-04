# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in the Birthday Trip Planner.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
{{subject}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .itinerary-day { margin-bottom: 20px; padding: 15px; background-color: #f5e6f0; border-radius: 8px; }
    h2 { color: #ff6b9d; }
    h3 { color: #b886b3; margin-top: 20px; }
    h4 { color: #d4a5c7; margin-top: 15px; }
  </style>
</head>
<body>
  <p>Hello {{to_name}},</p>
  <div>
    {{{message_html}}}
  </div>
  <p>Best regards,<br>Birthday Trip Planner</p>
</body>
</html>
```

**IMPORTANT:** Use triple braces `{{{message_html}}}` (not double braces) to render HTML properly!

**Content (Plain Text):**
```
{{subject}}

Hello {{to_name}},

{{message_text}}

Best regards,
Birthday Trip Planner
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update Configuration

1. Open `src/config/emailConfig.js`
2. Replace the placeholder values:
   - `YOUR_PUBLIC_KEY` → Your EmailJS Public Key
   - `YOUR_SERVICE_ID` → Your Email Service ID
   - `YOUR_TEMPLATE_ID` → Your Email Template ID

Example:
```javascript
export const emailjsConfig = {
  publicKey: 'abc123xyz789',
  serviceId: 'service_gmail',
  templateId: 'template_abc123',
}
```

## Step 6: Add More Email Recipients

To add your wife's email (or any other recipients):

1. Open `src/config/emailConfig.js`
2. Add email addresses to the `emailRecipients` array:

```javascript
export const emailRecipients = [
  'montes.thibaut@gmail.com',
  'her.email@example.com',  // Add more emails here
]
```

## Testing

1. Run the app: `npm run dev`
2. Complete the trip selection process
3. Click "Send Itinerary via Email" button
4. Check your email inbox (and spam folder if needed)

## Troubleshooting

- **"EmailJS is not configured" error**: Make sure you've updated all three values in `emailConfig.js`
- **Emails not arriving**: Check spam folder, verify EmailJS service is connected properly
- **Rate limit errors**: Free tier allows 200 emails/month. Consider upgrading if needed
- **HTML showing as plain text**: Make sure your EmailJS template uses triple braces `{{{message_html}}}` (not double braces `{{message_html}}`) to render HTML properly. Update your template and save it again.

## Security Note

The Public Key is safe to expose in client-side code. However, for production use, consider:
- Using environment variables
- Setting up rate limiting
- Using a backend service for sensitive applications

