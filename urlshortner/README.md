# SnapLink - URL Shortener & QR Code Generator UI

A modern, beautiful Next.js application for URL shortening and QR code generation. **This is a UI-only implementation with no backend logic.**

## 🎨 Design Features

- **Modern UI**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **shadcn/ui Components**: Beautiful, accessible components
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Gradient Themes**: Purple to blue gradient color scheme
- **Clean Layout**: Professional navigation and page structure

## 📄 Available Pages

### 1. Home / Landing Page
**Route:** `/`
- URL shortening form with input field
- Advanced options dropdown with:
  - Custom alias
  - QR code generation toggle
  - Link expiration settings
  - Password protection
  - Analytics toggle
- Feature cards showcasing stats
- Clean, welcoming hero section

### 2. Features Overview
**Route:** `/features`
- Comprehensive features showcase
- Feature cards with descriptions
- Stats dashboard
- CTA sections

### 3. Result / Success Page
**Route:** `/result`
- Display of original URL
- Shortened URL with copy button
- QR code preview with download options
- Social media sharing buttons (Twitter, Facebook, LinkedIn, Email)
- Analytics link
- Actions to create new link or view dashboard

### 4. Dashboard / My Links
**Route:** `/dashboard`
- Overview stats cards (Total Links, Total Clicks, Monthly Stats, Active Links)
- Search and filter functionality
- Sortable links table with:
  - Short URL and original URL
  - Click counts
  - Creation and expiration dates
  - Password protection indicators
  - Action buttons (Copy, Stats, Edit, Delete)
- Pagination

### 5. Analytics Page
**Route:** `/analytics`
- Time period selector (24h, 7d, 30d, 90d, custom)
- Key metrics cards (Total Clicks, Unique Visitors, Today)
- Clicks over time chart (bar chart visualization)
- Geographic data (Top Locations with progress bars)
- Device breakdown (Mobile, Desktop, Tablet) with donut chart
- Referrer sources
- Browser statistics
- Export and report generation options

### 6. QR Code Generator
**Route:** `/qr-generator`
- Multiple QR code types:
  - URL
  - Plain Text
  - WiFi credentials
  - vCard (contact information)
- Customization options:
  - Size selection
  - Error correction level
  - Foreground and background colors
  - Logo/icon addition (Pro feature)
  - Frame with text (Pro feature)
- Live preview
- Multiple download formats (PNG, SVG, PDF, EPS)
- Use cases section

### 7. Link-in-Bio Page Builder
**Route:** `/bio-link`
- Linktree-style landing page creator
- Drag-and-drop link management
- Profile customization:
  - Avatar upload
  - Display name and bio
  - Custom page URL
- Link management:
  - Add/edit/delete links
  - Enable/disable individual links
  - Click tracking per link
  - Reorder with drag handles
- Appearance customization:
  - Theme selection (Gradient, Dark, Light)
  - Button styles (Rounded, Square, Sharp)
  - Font choices
- Social media icons toggle
- Live mobile preview
- Page analytics

### 8. Bulk Operations
**Route:** `/bulk`
Two main sections:

#### Import URLs
- Manual text entry (1000+ URLs at once)
- File upload support (CSV, TXT, XLS, XLSX)
- CSV template download
- Import options:
  - Custom domain selection
  - Alias generation strategy
  - Default expiration
  - Folder assignment
  - Analytics toggle
  - QR code generation
- Preview before processing
- Success/error reporting
- Error details export

#### Export URLs
- Filter selection (All, By Folder, By Date, Selected)
- Format options (CSV, JSON)
- Analytics data inclusion levels
- Export preview
- Quick export presets (Last 7 Days, Top Performers, Expiring Soon)

### 9. A/B Testing Dashboard
**Route:** `/ab-testing`
- Active tests monitoring
- Test performance metrics:
  - Total visitors
  - Conversion rates
  - Confidence levels
  - Estimated time remaining
- Variant comparison:
  - Traffic distribution
  - Click-through rates
  - Conversion metrics
  - Winner indication
- Test controls:
  - Pause/Resume
  - Declare winner
  - Stop test
- Completed tests archive
- Results analysis:
  - Revenue impact
  - Performance improvements
  - Statistical confidence
- Best practices guide

### 10. Team Collaboration
**Route:** `/team`
- Team statistics dashboard
- Member management:
  - Search and filter members
  - View member activity
  - Last active tracking
  - Links created count
- Role-based access control:
  - Owner (Full access)
  - Admin (Team & link management)
  - Editor (Create & edit links)
  - Viewer (Read-only access)
- Pending invitations management
- Member invitation system
- Activity status tracking
- Role permissions matrix

### 11. Settings Page
**Route:** `/settings`

Six comprehensive tabs:

#### Profile Tab
- Avatar upload
- Name fields (First & Last)
- Email
- Bio textarea
- Website URL

#### Account Tab
- Password change form
- Two-factor authentication toggle
- Account deletion (danger zone)

#### Domain Tab
- Custom domain configuration
- DNS setup instructions
- Domain verification status
- SSL certificate status

#### API Tab
- API key management
- Production and development keys
- Key rotation and revocation
- Usage statistics
- API documentation link

#### Notifications Tab
- Email notification preferences
- Push notification settings
- Individual toggles for different alert types

#### Billing Tab
- Current plan display
- Payment method management
- Billing history
- Invoice downloads

## 🚀 Getting Started

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## 📱 Navigation

The app includes a persistent navbar with:
- Logo and brand name (SnapLink)
- Navigation links (Home, My Links, Analytics, QR Generator)
- User authentication buttons (Sign In, Sign Up)
- User avatar dropdown menu with quick links

## 🎨 Color Scheme

- **Primary:** Purple (#9333ea) to Blue (#3b82f6) gradient
- **Background:** Gray-50 to Gray-100 gradient
- **Accent Colors:** 
  - Success: Green
  - Warning: Amber
  - Error: Red
  - Info: Blue

## 📝 Notes

- This is a **UI-only implementation** with mock data
- No backend API or database integration
- No actual URL shortening functionality
- No real QR code generation
- All buttons and forms are non-functional (for display only)
- Perfect for prototyping, design reviews, or as a starting point for full implementation

## 🌐 Routes

- `/` - Home page with URL shortener
- `/result` - Success/result page
- `/dashboard` - My links dashboard
- `/analytics` - Analytics page
- `/qr-generator` - QR code generator
- `/settings` - User settings

## 🎯 Perfect For

- UI/UX portfolio projects
- Design mockups and prototypes
- Client presentations
- Learning Next.js and shadcn/ui
- Starting point for a full-stack URL shortener project
