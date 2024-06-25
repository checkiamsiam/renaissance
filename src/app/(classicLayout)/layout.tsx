import Footer from "@/layouts/classic/footer/Footer";
import Header from "@/layouts/classic/header/Header";

export default function ClassicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
