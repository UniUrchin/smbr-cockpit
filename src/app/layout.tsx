import type { Metadata } from "next";
import { AppLayoutContainer } from "@/app/_components/AppLayoutContainer";

export const metadata: Metadata = {
  title: "SMBR Cockpit",
  description: "SMBR Cockpit - A web application that can run SMBR on a browser",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <head>
        <meta content="width=device-width,initial-scale=1" name="viewport" />
      </head>
      <body>
        <AppLayoutContainer>{children}</AppLayoutContainer>
      </body>
    </html>
  );
}
