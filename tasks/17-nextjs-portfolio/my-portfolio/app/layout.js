import "./globals.css";
  import Navigation from "./components/Navigation";

  export const metadata = {
    title: "Andrej Ferenc - Portfolio",
    description: "Web developer portfolio",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Navigation />
          <main>{children}</main>
        </body>
      </html>
    );
  }
