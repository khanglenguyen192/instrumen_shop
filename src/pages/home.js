import React, { useState, useEffect } from "react";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import HomeAdvertisements from "../components/homeComponents/homeAdvertisements";
import axios from 'axios';

const ad1 =
  "https://carpentersmusic.com/wp-content/uploads/2021/06/Carpenters-Promo-June-2021.jpg";
const ad2 =
  "https://carpentersmusic.com/wp-content/uploads/2021/02/Carpenters-Peavey-Promo2-a.png";
const ad3 =
  "https://carpentersmusic.com/wp-content/uploads/2020/07/Showroom-with-Logo2.jpg";
const ad4 =
  "https://carpentersmusic.com/wp-content/uploads/2019/07/services.png?resize=1024%2C550&ssl=1";

export default function Home () {
  const [homePianoList, setHomePianoList] = useState([]);
  const [homeGuitarList, setHomeGuitarList] = useState([]);
  const [homeTrendingList, setHomeTrendingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [])

  const fetchData = () => {
    try{
    axios.get('http://localhost:5000/home/feature').then((resFeature) => {
      setHomeTrendingList(resFeature.data)

      axios.get('http://localhost:5000/home/guitar').then((resPiano) => {
        setHomePianoList(resPiano.data);

        axios.get('http://localhost:5000/home/feature').then((resGuitar) => {  
            setHomeGuitarList(resGuitar.data);

      });     
    })
  })
}
  catch (e) {
    console.log(e);
  }
}
    return loading ? (<h1 style={{minHeight: '100vh', textAlign:'center', marginTop:'30vh'}}>LOADING....</h1>) : (
      <>
        <div className="container">
          <HomeAdvertisements
            advertisement1={ad1}
            advertisement2={ad2}
            advertisement3={ad3}
            advertisement4={ad4}
          />
          <ProductListSlide
            title="Sản phẩm nổi bật"
            dataList={homeTrendingList}
          />
          <ProductListSlide title="Piano" dataList={homePianoList} />
          <ProductListSlide title="Guitar" dataList={homeGuitarList} />
        </div>
      </>
    );
}
