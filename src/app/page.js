import CarouselComponents from "./_components/carousel";
import FooterComponent from "./_components/footer";
import NavBar from "./_components/navbar";

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