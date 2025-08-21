import "./globals.css";

export const metadata = {
  title: "Unomi",
  description: "Clarity. Velocity. Results."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
