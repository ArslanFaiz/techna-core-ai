import type { ReactNode } from "react"
import Header from "./header";
import Footer from "./footer";
import Chat from "./chat";
import { useLocation } from "react-router-dom";

type LayoutProps ={
    children : ReactNode
}


export default function Layout ({children}:LayoutProps){
    const location = useLocation();
    const hideLayouteRoutes = ['/form']
    const hideLayout = hideLayouteRoutes.includes(location.pathname)

    return (
     <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {!hideLayout && <Chat/>}
      <Footer />
    </div>
  );
}