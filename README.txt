TAWHEED HADI CONSTRUCTION SERVICES - MULTI-PAGE WEBSITE

Run a local web server from this folder (clean URLs need HTTP, not opening files directly):
  npx --yes serve .
Then open http://localhost:3000/ in your browser.

Pages (URLs without .html):
- /  (index.html)
- /about/
- /services/
- /projects/
- /locations/
- /contact/

Shared assets:
- assets/styles.css
- assets/script.js
- assets/logo.png

Before publishing:
1. Replace placeholder email, phone numbers and office addresses.
2. Replace sample project categories with verified project case studies.
3. Connect the contact page form to your backend/email service.
4. Add real licensed project photography if available.
5. Add Privacy Policy / Terms pages if required.


REAL IMAGERY & ICONS
- Construction photography is loaded from Unsplash image CDN URLs.
- Icons are loaded using Lucide Icons CDN.
- An internet connection is required for these remote photos/icons to display.
- Hero photo: https://images.unsplash.com/photo-1757436382135-5cb8e5cbcda5?auto=format&fit=crop&fm=jpg&q=82&w=2200
- Construction workers photo: https://images.unsplash.com/photo-1747056711958-9d8c3b97b578?auto=format&crop=faces%2Cedges&fit=crop&q=82&w=1800
- Renovation photo: https://images.unsplash.com/photo-1771170318067-e8e3428900ed?auto=format&fit=crop&fm=jpg&q=82&w=1800

WHATSAPP CHAT
-------------
A floating WhatsApp chat button has been added to every page through assets/script.js.
To connect it directly to the company WhatsApp account, open assets/script.js and set:
const WHATSAPP_NUMBER = 'countrycodeandnumber';
Use digits only, without +, spaces or dashes (example: 15551234567).
Until a number is added, the button still opens WhatsApp with a pre-filled project enquiry message.

LOGO
----
The logo image was cropped to remove excess blank space so it displays larger and clearer in the header and footer.
