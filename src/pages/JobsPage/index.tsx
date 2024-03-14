import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JobContainer from "../../container/JobContainer";

const JobsPage = () => (
  <div className="flex h-full flex-col justify-between bg-aquaSpring">
    <Header />
    <main className="mx-auto -mt-10">
      <JobContainer />
    </main>
    <Footer />
  </div>
);

export default JobsPage;
