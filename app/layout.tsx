import "./globals.css";
import { Inter } from "next/font/google";
import {
  FaGamepad,
  FaGithub,
  FaPlus,
  FaTimes,
  FaDiscord,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discord Clone",
  description: "Discord clone app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <Sidebar />
          {/* ^ discord-like sidebar */}
          {children}
        </div>
      </body>
    </html>
  );
}
const SidebarIcon = ({ icon, href }: any) => (
  <a href={href} className="side-icon side-btn">
    {icon}
  </a>
);
const SidebarLogo = ({ icon, href }: any) => (
  <a href={href} className="side-icon side-logo">
    {icon}
  </a>
);
const SplitLine = () => <div className="split-line"></div>;
const Sidebar = () => (
  <div className="sidebar">
    <SidebarLogo
      href="/"
      icon={<FaDiscord size="3rem"></FaDiscord>}
    ></SidebarLogo>
    <SplitLine />
    <SidebarIcon
      href="/games"
      icon={<FaGamepad size="3rem"></FaGamepad>}
    ></SidebarIcon>
    <SidebarIcon icon={<FaPlus size="3rem"></FaPlus>}></SidebarIcon>
    <SidebarLogo
      href="https://github.com/ktkalpha/"
      icon={<FaGithub size="3rem"></FaGithub>}
    ></SidebarLogo>
  </div>
);
