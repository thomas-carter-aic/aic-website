# Applied Innovations Corporation - Next.js Application

This is a comprehensive Next.js application that combines a marketing website with three distinct portal systems: Admin, Client, and Investor portals. The application has been converted from a React/Vite setup to Next.js App Router architecture.

## 🚀 Features

### Marketing Website
- Modern, responsive design
- Hero section with call-to-action
- Services showcase
- Solutions overview
- Contact forms
- About page
- Consultation booking

### Admin Portal (`/admin`)
- **Dashboard**: System metrics, health monitoring, recent activity
- **User Management**: Complete user CRUD operations with filtering and search
- **AI Agent Management**: Agent monitoring, configuration, and performance metrics
- **Workflow Management**: Workflow creation, monitoring, and execution tracking
- **System Settings**: Configuration management
- **Analytics**: Usage analytics and reporting
- **Audit Logs**: System activity tracking

### Client Portal (`/client`)
- **Dashboard**: Project overview, agent status, quick actions
- **Project Management**: Full project lifecycle management with progress tracking
- **AI Agents**: Agent deployment and monitoring
- **Workflows**: Custom workflow creation and management
- **Analytics**: Usage analytics and performance metrics
- **Billing**: Invoice management, usage tracking, payment methods
- **Support**: Ticket system with priority management and real-time updates

### Investor Portal (`/ir`)
- **Dashboard**: Investment overview, key metrics, portfolio performance
- **Data Room**: Secure document management with access controls
- **Financials**: Comprehensive financial reporting with interactive charts
- **Portfolio**: Investment tracking and performance analysis
- **Updates**: Company updates and communications
- **Board Meetings**: Meeting management and materials

## 🛠 Technology Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   cd aic-website
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to:
   - Marketing site: `http://localhost:3000`
   - Admin portal: `http://localhost:3000/admin`
   - Client portal: `http://localhost:3000/client`
   - Investor portal: `http://localhost:3000/ir`

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features Implemented

### ✅ Completed Features

1. **Full Next.js App Router Implementation**
   - Proper routing structure for all portals
   - Layout components with nested routing
   - Server-side rendering optimization

2. **Responsive Design System**
   - Mobile-first approach
   - Consistent design language across all portals
   - Tailwind CSS utility classes

3. **State Management**
   - React Context for each portal
   - Mock data for development and testing
   - Type-safe state management

4. **Interactive Components**
   - Data tables with filtering and search
   - Interactive charts and graphs
   - Modal dialogs and forms
   - Real-time status indicators

5. **User Experience**
   - Intuitive navigation
   - Loading states and error handling
   - Consistent UI patterns
   - Accessibility considerations

## 📄 License

This project is proprietary to Applied Innovations Corporation.

---

**Note**: This application represents a complete conversion from React/Vite to Next.js while maintaining all original functionality and adding enhanced features for better user experience and maintainability.
