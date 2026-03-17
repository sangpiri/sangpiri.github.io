import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {profile.nameEn}. All rights reserved.
      </div>
    </footer>
  );
}
