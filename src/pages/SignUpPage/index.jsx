import styles from "./SignUpPage.module.scss";
import { AnimatedFadeInPage, LoadingScreen, routePaths } from "../../utils/";
import logo from "./image/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/features/signUp/signUpApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("artiste");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || routePaths.LANDINGPAGE;
  const [accountLoginLoading, setAccountLoginLoading] = useState(false);

  const [register] = useRegisterMutation();

  const validateFirstName = (firstName) => {
    return firstName.length < 1;
  };
  const validateLastName = (lastName) => {
    return lastName.length < 1;
  };
  const validateUserName = (userName) => {
    return userName.length < 1;
  };

  const validateEmailIsNotEmpty = (email) => {
    return email.length < 1;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePasswordIsNotEmpty = (password) => {
    return password.length < 1;
  };
  const validatePassword = (password) => {
    return password.length < 8;
  };
  const validateConfirmPasswordIsEmpty = (confirmPassword) => {
    return confirmPassword.length < 1;
  };
  const validateConfirmPassword = (password, confirmPassword) => {
    return password !== confirmPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFirstName(firstName)) {
      setErrMsg("First Name cannot be empty.");
    } else if (validateLastName(lastName)) {
      setErrMsg("Last Name cannot be empty.");
    } else if (validateUserName(userName)) {
      setErrMsg("User Name cannot be empty.");
    } else if (validateEmailIsNotEmpty(email)) {
      setErrMsg("Email Field Cannot be empty.");
    } else if (!validateEmail(email)) {
      setErrMsg("Please enter a valid email address. joedoes@example.com");
    } else if (validatePasswordIsNotEmpty(password)) {
      setErrMsg("Password Field Cannot be empty.");
    } else if (validatePassword(password)) {
      setErrMsg("Password must be more than 8 charaters.");
    } else if (validateConfirmPasswordIsEmpty(confirmPassword)) {
      setErrMsg("Confirm Password Field Cannot be empty");
    } else if (validateConfirmPassword(password, confirmPassword)) {
      setErrMsg("Confirm Password not the same");
    } else {
      setAccountLoginLoading(true);
      try {
        const response = await register({
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          username: userName.trim(),
          email: email.trim(),
          password: password.trim(),
          confirm_password: confirmPassword.trim(),
          user_type: userType,
        }).unwrap();

        if (response.data) {
          console.log("siggned");
          toast.success(`Sign Up Successful. Routing to Dashboard.`, {
            autoClose: 2400,
          });

          setAccountLoginLoading(false);

          setTimeout(() => {
            navigate(from, { replace: true });
          }, 3000);
        }
      } catch (err) {
        if (err.status === "FETCH_ERROR") {
          toast.error("INTERNET DISCONNECTED", {
            autoClose: 3000,
          });
          setAccountLoginLoading(false);
        }
        else if(err.status === "PARSING_ERROR"){
          toast.error("Email already exist", {
            autoClose: 3000,
          });
          setAccountLoginLoading(false);
        }
        else{
          toast.error("Sign Up successful", {
            autoClose: 3000,
          });
          setAccountLoginLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, password, email, confirmPassword, userType]);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SignUpPage}>
          <div className={styles.postion}>
            <div className={styles.background_image}></div>
            <div className={styles.logoContainer}>
              <img src={logo} />
              <h1>Kindly provide the details below to get started</h1>
            </div>
          </div>
          <div className={styles.signUpPage_content}>
            <div className={styles.container}>
              <form onSubmit={handleSubmit}>
                <h6 className={styles.errorText} id="errorText">
                  {errMsg}
                </h6>
                <div className={styles.dflex}>
                  <div>
                    <div className={styles.label}>
                      <label>First Name</label>
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className={styles.label}>
                      <label>Last Name</label>
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.dflex}>
                  <div>
                    <div className={styles.label}>
                      <label>User Name</label>
                    </div>
                    <input
                      type="text"
                      name="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className={styles.label}>
                      <label>Email</label>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
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
                <div>
                  <div className={styles.label}>
                    <label>Confirm Password</label>
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className={styles.userType}>
                  <div
                    className={
                      userType === "artiste" ? styles.active : styles.inactive
                    }
                    onClick={() => {
                      setUserType("artiste");
                    }}>
                    Artiste
                  </div>
                  <div
                    className={
                      userType === "producer" ? styles.active : styles.inactive
                    }
                    onClick={() => {
                      setUserType("producer");
                    }}>
                    Producer
                  </div>
                </div>

                <div className={styles.checkbox_container}>
                  <input type="checkbox" />
                  <label>
                    By checking the box, you accept Kulture’s
                    <Link className={styles.link}> Terms and Conditions</Link>
                  </label>
                </div>
                <button className={styles.signUp_btn}>Sign Up</button>
              </form>
            </div>
          </div>
        </main>
        {accountLoginLoading ? (
          <>
            <LoadingScreen loading={accountLoginLoading} />
          </>
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
      <ToastContainer />
    </>
  );
};

export default SignUpPage;
