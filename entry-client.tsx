// ============================================================
// AWAKEN WELLNESS — Client Entry Point
// ============================================================

import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";
import "./styles.css";

// Import pages based on actual exported function names
// File names are scrambled but we import by what they export:
// main.tsx exports Home
// Home.tsx exports About
// Insurance.tsx exports Acupuncture
// MassageTherapy.tsx exports Blog
// App.tsx exports ConditionPageRouter
// useMobile.tsx exports Layout
// NutritionCounseling.tsx exports BlogPostRouter
// Practitioners.tsx exports BookAppointment
// VeteranCare.tsx exports ConditionPage
// NotFound.tsx exports BlogPost

import Home from "./main";
import About from "./Home";
import Acupuncture from "./Insurance";
import Blog from "./MassageTherapy";
import ConditionPageRouter from "./App";
import BlogPostRouter from "./NutritionCounseling";
import BookAppointment from "./Practitioners";

// 404 fallback component
function NotFoundPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "3rem",
          marginBottom: "1rem",
          color: "#333"
        }}>
          Page Not Found
        </h1>
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          style={{ 
            color: "oklch(0.44 0.13 308)",
            textDecoration: "underline"
          }}
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/acupuncture" component={Acupuncture} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPostRouter} />
      <Route path="/book-appointment" component={BookAppointment} />
      <Route path="/conditions/:slug" component={ConditionPageRouter} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
