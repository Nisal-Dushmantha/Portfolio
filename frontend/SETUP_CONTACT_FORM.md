# EmailJS Setup Guide for Your Portfolio Contact Form

## What You Need:
Your Gmail address: **lawanyanisal@gmail.com**

## Step-by-Step Setup:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Connect Your Gmail
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with your Gmail (lawanyanisal@gmail.com)
5. Give it a name like "Gmail Service"
6. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use these settings:
   - **Template Name**: Portfolio Contact Form
   - **Subject**: `New message from {{from_name}} - Portfolio Contact`
   - **Content**:
   ```
   Hello Nisal,

   You have received a new contact form submission from your portfolio website:

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   Reply directly to this email to respond to the sender.
   ```
4. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **"Account"** (top right)
2. Under **"API Keys"**, find your **Public Key**
3. **Copy the Public Key** (looks like: `user_xxxxxxxxxxxxxxxx`)

### 5. Update Your Code
Open the file `src/hooks/useContactForm.js` and replace:
```javascript
const serviceId = 'service_04t4cm1'  // Replace with YOUR Service ID
const templateId = 'template_3ozw3ui'  // Replace with YOUR Template ID  
const publicKey = 'AlcxgNUbxdv0C4oGu'  // Replace with YOUR Public Key
```

### 6. Test It!
1. Save the file
2. Go to your contact form
3. Fill it out and submit
4. Check your Gmail inbox (and spam folder)
5. You should receive an email with the form submission!

## Important Notes:
- ✅ Free plan: 200 emails per month
- ✅ All emails will go to: lawanyanisal@gmail.com
- ✅ Visitors can contact you directly through your website
- ✅ No backend server needed!

## Need Help?
If you get stuck, you can:
1. Check the EmailJS documentation
2. Contact EmailJS support
3. Email me directly at the address above

## ✅ Configuration Complete!
The EmailJS credentials have been updated in the code with your actual values:
- Service ID: `service_04t4cm1`
- Template ID: `template_3ozw3ui`
- Public Key: `AlcxgNUbxdv0C4oGu`

## 🔧 Troubleshooting Template Variables

If you're receiving emails but the name and email aren't showing, you need to check your EmailJS template:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) → **Email Templates**
2. Click on your template (`template_3ozw3ui`)
3. **Try these different template formats (test each one):**

**Option 1: Standard naming**
```
Hello Nisal,

You have received a new contact form submission from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply directly to this email to respond to the sender.
```

**Option 2: Simple naming (try this if Option 1 doesn't work)**
```
Hello Nisal,

You have received a new contact form submission from your portfolio website:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
Reply directly to this email to respond to the sender.
```

**Option 3: User naming**
```
Hello Nisal,

You have received a new contact form submission from your portfolio website:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
Reply directly to this email to respond to the sender.
```

4. **Save the template after trying each option**
5. Test the form again after each change

**Since the name is working but email isn't, try changing ONLY the email variable in your template:**
- Instead of `{{from_email}}`, try: `{{email}}`
- Or try: `{{user_email}}`
- Or try: `{{sender_email}}`
- Or try: `{{contact_email}}`

**Common Issues:**
- Make sure you use `{{from_name}}` not `{{name}}`
- Make sure you use `{{from_email}}` not `{{email}}`
- Double curly braces `{{}}` are required
- Variable names are case-sensitive

## Your Current Values (ALREADY UPDATED):
The code has been automatically updated with these values in `useContactForm.js`.
