import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import HeadManager from "@/components/HeadManager";
import Home from "@/pages/Home";
import AIEmployee from "@/pages/AIEmployee";
import Features from "@/pages/Features";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import LeakAudit from "@/pages/LeakAudit";
import QuickBooksIntegration from "@/pages/QuickBooksIntegration";
import FieldServiceAudit from "@/pages/FieldServiceAudit";
import ConstructionErp from "@/pages/ConstructionErp";
import MagnetPage from "@/pages/MagnetPage";
import NotFound from "@/pages/not-found";
import { OFFERS } from "@/content/offers";
import { MAGNETS } from "@/content/magnets";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path={OFFERS["leak-audit"].path} component={LeakAudit} />
      <Route path={OFFERS.quickbooks.path} component={QuickBooksIntegration} />
      <Route path={OFFERS["field-service"].path} component={FieldServiceAudit} />
      <Route path={OFFERS.erp.path} component={ConstructionErp} />
      <Route path={MAGNETS.checklist.path}>{() => <MagnetPage slug="checklist" />}</Route>
      <Route path={MAGNETS.compare.path}>{() => <MagnetPage slug="compare" />}</Route>
      <Route path={MAGNETS.sync.path}>{() => <MagnetPage slug="sync" />}</Route>
      <Route path="/ai-employee" component={AIEmployee} />
      <Route path="/features" component={Features} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

/** Everything except the router itself, shared by the browser entry and the prerender entry. */
export function AppShell() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <HeadManager />
        <Toaster />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default AppShell;
