import "./globals.css";
import ActionButton from "./components/client/ActionButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        <ActionButton />
      </body>
    </html>
  );
}
