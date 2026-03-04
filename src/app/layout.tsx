import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "영웅시대 덕질본부",
  description: "우리 가수님을 위한 모든 것, 여기서 한 번에!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" integrity="sha384-TiCmbV6AUnR+N/zcl21U9/cPWg1z1Bw2pXFvyk1Hbx/O+5e+M94U+eEosNn7MvR" crossOrigin="anonymous" async></script>
      </body>
    </html>
  );
}
