import styles from "./UserProfileNavigation.module.scss";
import { NavLink } from "react-router-dom";
import { routePaths } from "../../../utils";
import { useSelector } from "react-redux";
import { selectCurrentUserType } from "../../../redux/features/auth/authSlice";

const UserProfileNavigation = () => {
  const producerNavElements = [
    {
      link: routePaths.USERPROFILEPAGEROUTES.PRODUCER.OVERVIEW,
      name: "Stats/Overview",
    },
    {
      link: routePaths.USERPROFILEPAGEROUTES.PRODUCER.ALL_BEATS_PRODUCED,
      name: "All beats produced",
    },
    {
      link: routePaths.USERPROFILEPAGEROUTES.PRODUCER.TOP_BEATS,
      name: "Top beats",
    },
  ];

  const artistNavElements = [
    {
      link: routePaths.USERPROFILEPAGEROUTES.ARTISTE.OVERVIEW,
      name: "Stats/Overview",
    },
    {
      link: routePaths.USERPROFILEPAGEROUTES.ARTISTE.PURCHASED_BEATS,
      name: "Purchased beats",
    },
    {
      link: routePaths.USERPROFILEPAGEROUTES.ARTISTE.FAVORITES,
      name: "Favorites",
    },
  ];

  const currentUserType = useSelector(selectCurrentUserType);

  return (
    <>
      <section className={styles.UserProfileNavigation}>
        {currentUserType === "producer" ? (
          <>
            {producerNavElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  key={elem.name}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? styles.single_NavLink
                      : isActive
                      ? styles.single_NavLinkActive
                      : styles.single_NavLink
                  }
                >
                  {elem.name}
                </NavLink>
              );
            })}
          </>
        ) : (
          <>
            {artistNavElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  key={elem.name}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? styles.single_NavLink
                      : isActive
                      ? styles.single_NavLinkActive
                      : styles.single_NavLink
                  }
                >
                  {elem.name}
                </NavLink>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default UserProfileNavigation;
