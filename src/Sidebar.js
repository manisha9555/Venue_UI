import React from 'react';
import { 
  LayoutDashboard, 
  Car, 
  BookOpen, 
  Bell, 
  Settings, 
  CreditCard, 
  RotateCcw, 
  FileText,
  LogOut 
} from 'lucide-react';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const mainMenuItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Drivers', icon: Car, label: 'Drivers' },
    { id: 'Bookings', icon: BookOpen, label: 'Bookings' },
    { id: 'Notifications', icon: Bell, label: 'Notifications' },
    { id: 'Settings', icon: Settings, label: 'Settings' }
  ];

  const reportMenuItems = [
    { id: 'Payment Details', icon: CreditCard, label: 'Payment Details' },
    { id: 'Transactions', icon: RotateCcw, label: 'Transactions' },
    { id: 'Car Report', icon: FileText, label: 'Car Report' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <div className="logo-triangle"></div>
          <span className="logo-v">V</span>
        </div>
        <span className="logo-text">CAR RENT</span>
      </div>
      
      <nav className="nav-menu">
        {/* Main Navigation */}
        {mainMenuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
        
        {/* Report Section - positioned right after main navigation */}
        <div className="report-section">
          <span className="report-label">Report</span>
          {reportMenuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <button className="logout-btn">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
