# EV Charger Finder Website Development TODO

## 1. Update Home.jsx to Landing/Homepage
- Add Hero Section with image, main text ("Find EV Chargers Near You"), CTA buttons (Find Chargers, Sign Up)
- Add service highlights: charging speed, coverage, advance booking, safety
- Include map image or placeholder, partner logos, testimonials
- Apply blue + neon green theme, energy icons, card effects, shadows

## 2. Create FindChargers.jsx Page
- Implement search bar: location, province, GPS (near me)
- Add filters: EV type, charger type (Type2, CCS2, CHAdeMO), power (7kW, 22kW, etc.), status (Available, Occupied, Offline), price
- Integrate interactive map (use Leaflet or Google Maps placeholder initially)
- Add markers with station details, click to view, route directions

## 3. Create StationDetails.jsx Page
- Display station images, supported chargers, power, price, parking, hours, reviews
- Add Book Now button linking to booking system

## 4. Implement Booking System
- Create BookingForm component for time selection, status check
- Add email notifications (mock), cancel/change options
- Integrate with StationDetails and Dashboard

## 5. Create Dashboard.jsx Page
- Show user profile (name, email, car details, license plate)
- Display charging history (date/time, duration, station, price)
- Show upcoming bookings
- Add payment options (credit card, PromptPay - mock)

## 6. Enhance Auth System
- Add Forgot Password functionality
- Consider social login (Google/Facebook) if time allows
- Improve token/session management (currently basic localStorage)

## 7. Create About.jsx Page
- Add vision, partners, team sections

## 8. Create Contact.jsx Page
- Add contact form, office location, phone/email/Line

## 9. Create HelpCenter.jsx Page
- Add FAQ/guides: how to charge, charger types, average prices, booking process

## 10. Add Footer Component
- Include quick links, social media, copyright, terms/privacy

## 11. Update Navbar.jsx
- Add links: Home, Find Chargers, Dashboard (if logged in), About, Contact, Help
- Make responsive based on login status

## 12. Update App.jsx Routing
- Add routes for all new pages: /find-chargers, /station/:id, /dashboard, /about, /contact, /help

## 13. Add Data Files
- Create src/data/chargers.json with mock charger data (locations, types, etc.)
- Create src/data/bookings.json for user bookings
- Update json-server script to watch both files

## 14. Create Additional Components
- Hero.jsx for homepage hero
- Map.jsx for interactive map
- Filters.jsx for search filters
- BookingForm.jsx for booking
- Footer.jsx

## 15. Update CSS and Design
- Apply blue + neon green theme across all pages
- Use energy icons (lightning ⚡), card effects, shadows
- Ensure modern minimal design
- Make responsive for mobile/desktop

## 16. Install Dependencies
- Install leaflet and react-leaflet for maps (npm install leaflet react-leaflet)
- Any other needed packages (e.g., for icons, forms)

## 17. Testing and Final Touches
- Test all pages and navigation
- Ensure responsive design
- Add mock data interactions
- Verify auth flow
- Add any missing features or polish
