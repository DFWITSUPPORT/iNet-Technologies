import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BookingModalProps {
  children: React.ReactNode;
}

export default function BookingModal({ children }: BookingModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-background border-border">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-display font-bold">Book a call with Tim</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Pick a time. Bring your stack (field software, accounting, estimating) and the problem that costs you the most.
          </DialogDescription>
        </DialogHeader>
        
        {/* Calendly Inline Widget Placeholder */}
        <div className="w-full h-[600px] mt-4 bg-card/50 flex items-center justify-center">
          <iframe 
            src="https://calendly.com/tim-dfwitexpert/30min?hide_gdpr_banner=1&background_color=0f172a&text_color=f8fafc&primary_color=1e6fd9" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            className="rounded-b-lg"
            title="Book a call"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
