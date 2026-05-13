import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto">
        {children}
        <ToastContainer />
      </main>

      <Footer />
    </>
  );
}
