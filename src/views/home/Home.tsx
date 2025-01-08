import { Button, Container } from "react-bootstrap"
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent"
import axios from "axios"
import { useEffect, useState } from "react"
import CountryList from "../../components/home/CountryList"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from "../../components/Header/Header"
import SocialMediaIcons from "../../components/SocialMediaIcon/SocialMediaIcons"

const Home = () => {
  const [countries, setcountries] = useState([])
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const countryContinent = useSelector((state: RootState) => state.filter.countryContinent);
  console.log('countryContinent: ', countryContinent);


  const fetchCountries = async () => {
    try {
      let endpoint = "/all"
      if (countryContinent !== "" && countryContinent !== "All") {
        endpoint = `/region/${countryContinent}`
      }
      const response = await axios({
        method: "GET",
        url: `https://restcountries.com/v3.1${endpoint}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response.data, "responseresponse");
      setcountries(response.data)
      setVisibleCountries(response.data.slice(0, ITEMS_PER_PAGE));
    } catch (error) {
      console.log(error);
    }
  }

  const loadMore = () => {
    const nextPage = page + 1;
    const newVisibleCountries = countries.slice(0, nextPage * ITEMS_PER_PAGE);
    setVisibleCountries(newVisibleCountries);
    setPage(nextPage);
  };

  useEffect(() => {
    fetchCountries()
  }, [countryContinent])

  return (
    <Container>
      <Header />
      <div style={{ gap: "55px", height: "34px", alignItems: "center" }} className="mt-3 d-flex justify-content-center gap-10 custom-stack">
        <div className="line mb-auto"></div>
        <span style={{ fontSize: "50px", fontWeight: 800 }} >WELCOME</span>
        <div className="line mt-auto"></div>
      </div>
      <CarouselComponent />
      <CountryList countries={visibleCountries} />
      <div className="w-100 d-flex justify-content-center">
        <Button
          onClick={() => loadMore()}
          variant="dark"
          type="submit"
          style={{ width: "146px" }}
          className="mb-3 rounded-0 custom-btn"
        >
          Load more
        </Button>
      </div>
      <div className="mt-5 mb-5  d-flex m-auto flex-column align-items-center">
        <div className="w-25 mb-4">
        <SocialMediaIcons />
        </div>
        <span style={{fontSize:"13px"}} className="fw-semibold">Example@email.com </span>
        <span style={{fontSize:"13px"}} className=" fw-semibold" >Copyright © 2020 Name. All rights reserved.</span>
      </div>

    </Container>
  )
}

export default Home
