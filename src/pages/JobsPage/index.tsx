import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const JobsPage = () => (
  <div className="flex h-full flex-col justify-between bg-aquaSpring">
    <Header />
    <main className="mx-auto mt-16">
      <Card />
    </main>
    <Footer />
  </div>
);

export default JobsPage;
