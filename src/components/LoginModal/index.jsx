import styles from "./LoginModal.module.scss";
import cancel from "./image/cancel.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/features/loginModal/loginModalSlice";
import { openForgotPasswordModal } from "../../redux/features/forgotPasswordModal/forgotPasswordModalSlice";
import { LoadingScreen, routePaths } from "../../utils";
import { useEffect, useState } from "react";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from =
    location.state?.from?.pathname || routePaths.USERPROFILEPAGE;
  const [accountLoginLoading, setAccountLoginLoading] = useState(false);

  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const closeLoginModalHandler = () => {
    dispatch(closeLoginModal());
  };

  const openForgotPasswordModalHandler = () => {
    dispatch(closeLoginModal());
    dispatch(openForgotPasswordModal());
  };

  const validateEmail = (_email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(_email);
  };

  const validateEmailIsNotEmpty = (name) => {
    return name.length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmailIsNotEmpty(email)) {
      setErrMsg("Email Field Cannot be empty.");
    } else if (!validateEmail(email)) {
      setErrMsg("Please enter a valid email address. joedoes@example.com");
    } else if (validateEmailIsNotEmpty(password)) {
      setErrMsg("Password Field Cannot be empty.");
    } else {
      setAccountLoginLoading(true);
      try {
        const response = await login({
          email: email.trim(),
          password: password.trim(),
        }).unwrap();

        if (response.data.token) {
          toast.success(`Sign in Successful. Routing to Dashboard.`, {
            autoClose: 2400,
          });
          dispatch(
            setCredentials({
              userName: response?.data?.user?.attributes?.username,
              accessToken: response?.data?.token,
              userImage: response?.data?.user?.attributes?.profile_picture,
              userId: response?.data?.user.id,
              userEmail: response?.data?.user?.attributes?.email,
              firstName: response?.data?.user?.attributes?.first_name,
              lastName: response?.data?.user?.attributes?.last_name,
              userType: response?.data?.user?.attributes?.user_type,
            })
          );
          setAccountLoginLoading(false);

          setTimeout(() => {
            navigate(from, { replace: true });
            dispatch(closeLoginModal());
          }, 3000);
        }
      } catch (err) {
        console.log(err);
        setErrMsg(err?.data?.message);
        toast.error("Sign in Failed", {
          autoClose: 3000,
        });
        setAccountLoginLoading(false);
      }
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [password, email]);

  return (
    <>
      <div className={styles.LoginModal}>
        <div className={styles.dflex}>
          <h3>Signin</h3>
          <button onClick={() => closeLoginModalHandler()}>
            <img src={cancel} />
          </button>
        </div>
        <p>
          Enter details to signin, dont have an accoount
          <Link className={styles.link} to={routePaths.SIGNUPPAGE}>
            {" "}
            signup
          </Link>
        </p>
        <form onSubmit={handleSubmit} className={styles.signIn_form}>
          <h6 className={styles.errorText}>{errMsg}</h6>
          <div>
            <div className={styles.label}>
              <label>Email address</label>
            </div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.label}>
              <label>Password</label>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={() => openForgotPasswordModalHandler()}
            className={styles.forgotLink}
            type="button"
          >
            Forgot password
          </button>

          <div>
            <button className={styles.signIn_btn}>Signin</button>
          </div>
        </form>
      </div>
      {accountLoginLoading ? (
        <>
          <LoadingScreen loading={accountLoginLoading} />
        </>
      ) : (
        <></>
      )}
      <ToastContainer />
    </>
  );
}
