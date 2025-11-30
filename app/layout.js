import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description:
    "Good food, fair prices, friendly service. Family restaurant in downtown serving comfort food since '85.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
