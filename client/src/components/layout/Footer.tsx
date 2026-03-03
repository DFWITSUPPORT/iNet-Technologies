export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="font-display font-bold text-xl mb-4">iNet Technologies</h3>
            <p className="text-muted-foreground max-w-sm mb-4">
              Enterprise Expertise. Executive Alignment. Real Transformation. We prepare complex organizations for AI deployment.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Tim Wilson</p>
              <p>tim@dfwitexpert.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enterprise Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#readiness" className="hover:text-primary transition-colors">Readiness Assessment</a></li>
              <li><a href="#readiness" className="hover:text-primary transition-colors">Data Foundation</a></li>
              <li><a href="#agents" className="hover:text-primary transition-colors">Agent-as-a-Service</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Implementation Process</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Industries Served</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-primary transition-colors cursor-default">Construction & Logistics</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Manufacturing</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Healthcare</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Professional Services</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} iNet Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-foreground">Terms & EULA</a>
            <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
