import Navbar from 'components/Navbar';

export default function MainLayout({ children, className, ...props }) {
  return (
    <>
      <Navbar />
      <div {...props} className={`container bg-black ${className}`}>
        {children}
      </div>
    </>
  );
}
