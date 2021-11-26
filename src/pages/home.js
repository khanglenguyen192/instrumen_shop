import React, { useState, useEffect } from "react";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import HomeAdvertisements from "../components/homeComponents/homeAdvertisements";
import axios from "axios";

const ad1 =
  "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/146089134_10158580671044667_6992079591609901109_n.png?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=2J0gHtqoRvwAX8bTHmS&_nc_ht=scontent.fsgn5-10.fna&oh=8292bbf2d1485c8717ddb37276117d91&oe=61C5C31A";
const ad2 =
  "https://scontent.fsgn5-10.fna.fbcdn.net/v/t31.18172-8/1490817_10152638974409667_3957851212462008241_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=1-BTFagdlFEAX8WVIAS&_nc_oc=AQnPqX84xyJ2VlhuVuN0n7Zbm7ncpA6bbbbGY9VYKZ36hjNVbZDjxUCdgoIc7oc9P_4&_nc_ht=scontent.fsgn5-10.fna&oh=afe2e1e697b5c8167979e18cd71a18b5&oe=61C59902";
const ad3 =
  "https://scontent.fsgn5-10.fna.fbcdn.net/v/t31.18172-8/1052418_10151560680804667_1785929808_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=9267fe&_nc_ohc=z1npMvpWytsAX83jrLG&_nc_ht=scontent.fsgn5-10.fna&oh=ba325c598899b7390ccdb51d6a0e4a14&oe=61C4EC53";
const ad4 =
  "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/196407134_10158864677484667_3584537288409816384_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=w3H1sh51GMoAX9cPkBc&_nc_oc=AQkWSdFiqlALyUfiC4jUqyTibQJYaw9hETvC4Z7RSX8gLaj74-mS1JldN5BdkpAvQQk&tn=N52mDAkXIl27mLcA&_nc_ht=scontent.fsgn5-5.fna&oh=a9b53fa2c1d79a20bdd0691ee0c7fb53&oe=61C4A1C0";

export default function Home() {
  const [homePianoList, setHomePianoList] = useState([]);
  const [homeGuitarList, setHomeGuitarList] = useState([]);
  const [homeTrendingList, setHomeTrendingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = () => {
    try {
      axios.get("http://localhost:5000/home/feature").then((resFeature) => {
        setHomeTrendingList(resFeature.data);

        axios.get("http://localhost:5000/home/piano").then((resPiano) => {
          setHomePianoList(resPiano.data);

          axios.get("http://localhost:5000/home/guitar").then((resGuitar) => {
            setHomeGuitarList(resGuitar.data);
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  return loading ? (
    <h1 style={{ minHeight: "100vh", textAlign: "center", marginTop: "30vh" }}>
      LOADING....
    </h1>
  ) : (
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
