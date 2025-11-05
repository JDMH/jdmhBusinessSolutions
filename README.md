# JDMH Business Solutions

A modern, responsive company website showcasing business solutions and services.

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Service Showcase**: Highlight company services and offerings
- **Contact Form**: Interactive contact form for customer inquiries
- **Firebase Ready**: Configured for Firebase Hosting deployment

## Project Structure

```
jdmhBusinessSolutions/
├── public/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   ├── images/             # Images directory
│   └── index.html          # Main HTML file
├── firebase.json           # Firebase hosting configuration
├── .gitignore
└── README.md
```

## Sections

1. **Navigation**: Fixed navigation bar with responsive mobile menu
2. **Hero**: Eye-catching hero section with call-to-action
3. **About**: Company overview with statistics
4. **Services**: Grid display of six key service offerings:
   - Business Consulting
   - Technology Solutions
   - Data Analytics
   - Cybersecurity
   - Cloud Services
   - Mobile Development
5. **Contact**: Contact information and inquiry form
6. **Footer**: Simple footer with copyright information

## Local Development

To view the website locally, simply open `public/index.html` in a web browser, or use a local server:

```bash
# Using Python
cd public
python -m http.server 8000

# Using Node.js http-server
cd public
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Firebase Deployment

To deploy to Firebase Hosting:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase project:
```bash
firebase init hosting
```

4. Deploy:
```bash
firebase deploy
```

## Customization

### Colors
Edit CSS variables in `public/css/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-dark: #1f2937;
    --text-light: #6b7280;
}
```

### Content
Edit the HTML content in `public/index.html` to match your business needs.

### Contact Information
Update contact details in the contact section of `public/index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 JDMH Business Solutions. All rights reserved.

