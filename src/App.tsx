import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import RightSidebar from "./components/layout/RightSidebar";
import Feed from "./components/feed/Feed";
import { Toaster } from "./components/ui/sonner";
import { ShieldAlert, MapPin, Loader2 } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        // In a real app, this would be your Supabase Edge Function URL
        // const response = await fetch('https://[PROJECT_REF].supabase.co/functions/v1/geo-gate');
        
        // FOR MOCK PURPOSES: We simulate the check.
        // If we are in the local sandbox, we allow access but log the simulation.
        console.log("Simulating Geo-Gate check...");
        
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // We set it to true for the user to see the app
        setIsAllowed(true);
        setCountry("NG"); // Simulation: Nigeria
      } catch (error) {
        console.error("Geo-Gate check failed:", error);
        setIsAllowed(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAccess();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Securing your connection...</p>
      </div>
    );
  }

  if (!isAllowed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-red-100 p-6 rounded-full mb-6">
          <ShieldAlert className="w-16 h-16 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Restricted</h1>
        <p className="text-gray-600 max-w-md mb-8">
          UbuntuSocial is currently only available to users in Pan-African countries. 
          It looks like you're visiting from <span className="font-bold">{country || "outside the region"}</span>.
        </p>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 mb-8">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Detected Region: {country || "Global"}</span>
        </div>
        <Button variant="outline" className="rounded-full px-8">
          Learn More
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-100">
      <Navbar />
      <div className="flex justify-center max-w-[1440px] mx-auto">
        <Sidebar />
        <main className="flex-1 min-h-[calc(100vh-56px)] bg-gray-50">
          <Feed />
        </main>
        <RightSidebar />
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;