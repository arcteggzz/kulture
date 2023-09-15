import styles from "./SearchPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import { useState } from "react";
import searchIcon from "../BeatsOffersPage/image/search-icon.png";
import { SingleBeatSearch } from "../../components/";
import { BASE_URL } from "../../utils/apiRoutePaths";
import axios from "axios";
import { LoadingIcon } from "../../utils/";

const SearchPage = () => {
  const fakeSearchArray = [
    {
      fake: "fake",
      id: 1,
    },
    {
      fake: "fake",
      id: 2,
    },
    {
      fake: "fake",
      id: 3,
    },
  ];

  const [stringToSearch, setStringToSearch] = useState("");
  const [beatsToDisplay, setBeatsToDisplay] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (queryString) => {
    setIsLoading(true);
    const apiSearchRoute = `${BASE_URL}/beats/search/${queryString}`;

    axios
      .get(apiSearchRoute)
      .then((response) => {
        console.log(response);

        if (response?.status) {
          setIsLoading(false);
          setIsSuccess(true);
          setBeatsToDisplay(response?.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  console.log(beatsToDisplay);

  let content;
  if (isLoading) {
    content = (
      <>
        <div className={styles.LoadingIcon_container}>
          <LoadingIcon loading={isLoading} loaderSize={80} />
        </div>
        <p>Searching for beat...</p>
      </>
    );
  } else if (isSuccess && beatsToDisplay.length < 1) {
    content = (
      <>
        <p>No beats match this criteria... Try another name</p>
      </>
    );
  } else if (isSuccess && beatsToDisplay.length > 0) {
    content = (
      <>
        <h2
          style={{ textAlign: "center" }}
        >{`Found ${beatsToDisplay.length} beat(s) that match the "${stringToSearch}" keyword`}</h2>
        <div className={styles.beats}>
          {beatsToDisplay.map((beats) => {
            return (
              <>
                <SingleBeatSearch key={beats.id} />
              </>
            );
          })}
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <p>Server Error.</p>
      </>
    );
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SearchPage}>
          <div className={styles.searchBtn}>
            <div>
              <input
                className={styles.find}
                type="text"
                name="search"
                placeholder="Search"
                value={stringToSearch}
                onChange={(e) => setStringToSearch(e.target.value)}
              />
              <button
                className={styles.searchIcon}
                onClick={() => handleSearch(stringToSearch)}
              >
                <img src={searchIcon} />
              </button>
            </div>
          </div>

          {/* this is a dummy to enable you build the component */}
          <div className={styles.beats}>
            {fakeSearchArray.map((fake) => {
              return (
                <>
                  <SingleBeatSearch key={fake.id} />
                </>
              );
            })}
          </div>

          {stringToSearch.length < 1 ? (
            <>
              <p style={{ textAlign: "center" }}>Type a word to search for </p>
            </>
          ) : (
            <></>
          )}
          {content}
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SearchPage;
