import CarouselComponents from "./components/carousel";
import FooterComponent from "./components/footer";
import NavBar from "./components/navbar";

const HomePage = () => {
  return <>
    <div className="flex flex-col px-3 lg:h-screen lg:gap-y-3">
      <NavBar/>
      <CarouselComponents/>
      <FooterComponent/>
    </div>
  </>;
}

export default HomePage;