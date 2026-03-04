# Quick Start: Enable Contact Form Emails

## 3 Simple Steps

### Step 1: Go to Formspree
Visit: https://formspree.io

### Step 2: Create Account & Form
- Sign up with your email
- Create new form
- Get your form ID (e.g., `abc123def`)

### Step 3: Update Code
In `src/pages/ContactPage.tsx`, line ~35:

**Find:**
```
https://formspree.io/f/xyzgvqpk
```

**Replace with:**
```
https://formspree.io/f/YOUR_FORM_ID
```

### Step 4: Verify Email
Click the verification link Formspree sends you.

### Done! 🎉
Your contact form now receives emails at: dknishwanth1718@gmail.com

---

## What Users See

✅ Form validation
✅ Loading indicator
✅ Success message
✅ Error handling
✅ Auto-clear after send

## Test It
1. `npm run dev`
2. Go to Contact page
3. Fill form and submit
4. Check your email!
