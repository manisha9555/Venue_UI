# Car Rental Dashboard

A modern, responsive car rental dashboard built with React.js, featuring clean design principles, interactive charts, and a comprehensive user interface.

## Features

- **Daily Statistics**: View income, expenses, and comparisons with previous periods
- **Car Availability Checker**: Filter by car number, date, and time
- **Live Car Status**: Monitor real-time car status with driver information
- **Interactive Charts**: Pie chart for hire vs cancel data and line chart for earnings over time
- **Responsive Design**: Optimized for both desktop and tablet views
- **Modern UI/UX**: Clean typography, proper spacing, and consistent color scheme

## Screenshots

The dashboard features:
- Dark sidebar navigation with active states
- Light-themed main content area
- Interactive cards with hover effects
- Responsive grid layout
- Modern color palette and typography

## Technology Stack

- **Frontend**: React.js 18
- **Styling**: CSS3 with modern features
- **Icons**: Lucide React
- **Charts**: Recharts library
- **Typography**: Inter font family

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-rental-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
car-rental-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js          # Main dashboard component
│   │   ├── Sidebar.js            # Navigation sidebar
│   │   ├── Header.js             # Top header with search
│   │   ├── StatisticsCard.js     # Income/expenses statistics
│   │   ├── HireVsCancelCard.js   # Pie chart component
│   │   ├── CarAvailabilityCard.js # Car availability filters
│   │   ├── LiveCarStatusCard.js  # Live car status table
│   │   └── EarningSummaryCard.js # Earnings line chart
│   ├── App.js                    # Main app component
│   ├── App.css                   # App-level styles
│   ├── Dashboard.css             # Dashboard-specific styles
│   └── index.js                  # Entry point
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Design Decisions

### Color Palette
- **Primary**: Blue (#3B82F6) for active states and primary actions
- **Background**: Light gray (#F3F4F6) for main content area
- **Sidebar**: Dark theme (#1A1A1A) for navigation
- **Success**: Green (#10B981) for positive trends
- **Warning**: Red (#EF4444) for negative trends and alerts

### Typography
- **Font Family**: Inter - Modern, highly legible sans-serif
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Hierarchy**: Clear size differences for headings, body text, and captions

### Layout
- **Grid System**: CSS Grid for responsive layout
- **Spacing**: Consistent 8px base unit system
- **Cards**: Elevated design with subtle shadows and hover effects
- **Responsive**: Mobile-first approach with breakpoints at 640px, 768px, and 1200px

## Responsive Design

The dashboard is fully responsive with the following breakpoints:
- **Desktop**: 1200px+ (two-column layout)
- **Tablet**: 768px - 1199px (single-column layout)
- **Mobile**: < 768px (collapsible sidebar, optimized spacing)

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Reader**: Semantic HTML structure and ARIA labels
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Clear focus states for interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- **Lazy Loading**: Components loaded as needed
- **CSS Optimization**: Efficient selectors and minimal reflows
- **React Optimization**: Proper component structure and state management
- **Image Optimization**: Optimized icons and minimal asset usage

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Real-time data updates
- [ ] Advanced filtering and search
- [ ] Export functionality for reports
- [ ] User authentication and roles
- [ ] Mobile app version

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue in the repository.

---

**Note**: This is a UI/UX design assignment showcasing modern web development practices, responsive design, and accessibility considerations.
