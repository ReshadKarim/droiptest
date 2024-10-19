import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import the hook for the current URL

function Admin_Tabbar() {
  const location = useLocation(); // Get the current location (URL)

  const navItems = [
    {
      label: "My Office",
      defaultIcon: "MyOffice.png",
      hoverIcon: "MyOfficeRed.png",
      href: "/adminPanelMyOffice",
    },
    {
      label: "Reservations",
      defaultIcon: "Reservations.png",
      hoverIcon: "ReservationsRed.png",
      href: "/admin_Reservations",
    },
    {
      label: "Dispatch",
      defaultIcon: "Dispatch.png",
      hoverIcon: "DispatchRed.png",
      href: "/admin_Dispatch",
    },
    {
      label: "Transactions",
      defaultIcon: "Transactions.png",
      hoverIcon: "TransactionsRed.png",
      href: "/admin_Transactions",
    },
    {
      label: "Schedule",
      defaultIcon: "Schedule.png",
      hoverIcon: "ScheduleRed.png",
      href: "/admin_Schedule",
    },
    {
      label: "Reports",
      defaultIcon: "Reports.png",
      hoverIcon: "ReportsRed.png",
      href: "/admin_Reports",
    },
    {
      label: "Network",
      defaultIcon: "Network.png",
      hoverIcon: "NetworkRed.png",
      href: "/admin_Network",
    },
    {
      label: "Memos",
      defaultIcon: "Memos.png",
      hoverIcon: "MemosRed.png",
      href: "/admin_Memos",
    },
    {
      label: "Addons",
      defaultIcon: "Addons.png",
      hoverIcon: "AddonsRed.png",
      href: "/admin_Addons",
    },
    {
      label: "Tools",
      defaultIcon: "Tools.png",
      hoverIcon: "ToolsRed.png",
      href: "/admin_Tools",
    },
    {
      defaultIcon: "Notifications.png",
      hoverIcon: "NotificationsRed.png",
      href: "/notifications",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg-black font-[Outfit] py-7 fixed w-full z-50'>
      <div className='container mx-auto flex justify-around items-center px-5 lg:px-32'>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href; // Check if current page matches the href
          return (
            <a
              key={item.label}
              href={item.href}
              className='flex flex-col items-center text-white transition duration-300'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={
                  isActive || hoveredIndex === index
                    ? `src/assets/${item.hoverIcon}`
                    : `src/assets/${item.defaultIcon}`
                }
                alt={item.label}
                className='h-10 w-10 mb-1'
              />
              <span
                className={`text-xs font-semibold ${
                  isActive || hoveredIndex === index
                    ? "text-[#C51111]"
                    : "text-white"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Admin_Tabbar;
