import Navbar from "components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container bg-black">{children}</div>
    </>
  );
}
