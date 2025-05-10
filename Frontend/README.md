# Visual Form Builder Application

A sophisticated form builder platform that enables users to design, publish, and analyze multi-step forms with conditional logic and comprehensive analytics.

## 🎯 Overview

### User Roles

- **Form Designers**: Authenticated users who create and manage forms
- **Respondents**: Anonymous users who can submit form responses

## 🚀 Core Features

### Visual Form Designer

- **Drag-and-Drop Interface** for intuitive field arrangement
- **Field Types Support**:
  - Short Text, Email, Number
  - Dropdown (Single & Multi-select)
  - Checkboxes, Radio Groups
  - 5-point Rating Scale
  - Section titles & descriptions
- **Advanced Form Logic**:
  - Conditional field visibility
  - Multi-page support
  - Progress indicator
  - Real-time preview while designing

### Form Management

- **Publishing Controls**:
  - Generate unique shareable URLs
  - Form status (Open/Closed/Scheduled)
  - Optional password protection
  - Drag-and-drop field reordering
  - Update access permissions

### Response Collection

- **Data Capture**:
  - Anonymous or identified submissions
  - Optional email collection
  - Real-time validation enforcement
  - Duplicate submission prevention (IP/email based)

### Analytics Dashboard

- **Visualization Tools**:
  - Tabular raw response view
  - Bar charts (single/multi-select)
  - Histograms (numerical inputs)
  - Word clouds (open-ended responses)
  - Date-based filtering
  - Summary view for each form

### Export & Integration

- **Data Portability**:
  - Export responses as CSV or XLSX
  - Webhook trigger on new response
  - Real-time sync with external tools

## 🔐 Authentication

```plaintext
POST /api/users/register/request-otp  # Request OTP for registration
POST /api/users/register              # Complete registration with OTP
POST /api/users/login                 # Login and get token
```

## 🛣️ API Routes

### Form Management

```plaintext
POST   /api/forms/create         # Create new form
GET    /api/forms                # Get all user forms
PATCH  /api/forms/:id            # Update form settings or structure
POST   /api/forms/access         # Manage access/password
POST   /api/forms/validate       # Validate form before publishing
```

### Response Handling

```plaintext
POST   /api/responses/submit     # Submit form response
GET    /api/forms/responses/:id  # Get all responses for a form
```

### Analytics

```plaintext
GET    /api/dashboard/analytics        # Analytics metrics
GET    /api/dashboard/forms            # Summary of forms
GET    /api/dashboard/export/excel     # Download XLSX export
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 6
- **Routing**: React Router DOM
- **State**: Redux Toolkit
- **UI Components**:
  - Radix UI Primitives
  - Tremor Charts
  - Lucide Icons
- **Styling**:
  - TailwindCSS + Tailwind Merge + Class Variance Authority
- **Forms**:
  - React Hook Form + Yup
- **Data Viz**:
  - Recharts, D3.js, React WordCloud
- **Tooling**:
  - ESLint, PostCSS, Autoprefixer

## 🔧 Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run lint` — Run linter
- `npm run preview` — Preview production

## 📝 Project Structure

- `src/components` — Reusable UI blocks
- `src/hooks` — Custom hooks
- `src/functions` — Utility helpers
- `src/imports` — API endpoints, constants, etc.

## 🎨 Design System

A sleek and consistent design system featuring:

- Neutral slate palette for base elements
- Indigo/blue highlights for focus
- Accessible contrast
- Subtle transition animations
- Responsive design with mobile-first approach
