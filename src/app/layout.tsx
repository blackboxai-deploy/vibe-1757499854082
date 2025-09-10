import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Pilot AVMED Recruitment - Doctor-on-Board Initiative",
  description: "A world-first program retraining qualified doctors using VR pilot training and deploying them as certified Pilot-Doctors on commercial flights. Made in Africa - Global Impact.",
  keywords: "aviation, medical, pilot training, VR training, doctor-on-board, AVMED, Emirates, South Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}