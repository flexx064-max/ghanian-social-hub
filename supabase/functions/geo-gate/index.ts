// supabase/functions/geo-gate/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const AFRICAN_COUNTRIES = [
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CG", "CD", "CI", 
  "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", 
  "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", "ST", "SN", 
  "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "ZM", "ZW"
];

serve(async (req) => {
  // Check for preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  // Get country from header (Supabase/Edge provides this)
  const country = req.headers.get("cf-ipcountry");
  
  // If no country header (e.g. local dev), we might want to allow it for testing 
  // but for production logic, we restrict.
  const isAfrican = country && AFRICAN_COUNTRIES.includes(country);

  if (!isAfrican) {
    return new Response(JSON.stringify({ 
      allowed: false, 
      message: "Access restricted to Pan-African countries.",
      country: country || "Unknown"
    }), {
      status: 403,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return new Response(JSON.stringify({ 
    allowed: true, 
    country 
  }), {
    status: 200,
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
});