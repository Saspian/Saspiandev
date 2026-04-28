export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-mono">
              <span className="text-muted-foreground/50">&lt;</span>
              saspian
              <span className="text-muted-foreground/50">/&gt;</span>
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sanjay Gurung. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
