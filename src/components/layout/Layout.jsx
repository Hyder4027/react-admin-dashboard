import React, {
  useState,
} from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Content */}
        <main className="flex-1 bg-gray-100 p-6">

          {children}

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Layout;