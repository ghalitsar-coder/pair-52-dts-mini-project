import { TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { authSuccess } from "../redux/userRedux";

const Auth = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });
  const { authData } = useSelector((state) => state.persistedReducer.user);
  const dispatch = useDispatch();

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (authData !== null) {
        navigate("/");
      }
    });
  }, [navigate, authData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      if (isSignin) {
        try {
          const res = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const { accessToken, email, photoUrl, phoneNumber } = res.user;
          dispatch(
            authSuccess({
              accessToken,
              displayName: email.substring(0, email.indexOf("@")),
              email,
              photoUrl,
              phoneNumber,
            })
          );
        } catch (err) {
          alert(err);
          console.log(err);
        }
      } else {
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const { accessToken, displayName, email, photoURL, phoneNumber } =
            res.user;
          dispatch(
            authSuccess({
              accessToken,
              displayName,
              email,
              photoURL,
              phoneNumber,
            })
          );
        } catch (err) {
          alert(err);
          console.log(err);
        }
      }
    }

    setData({ email: "", password: "" });
  };

  const handleGoogle = async (e) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const credentials = GoogleAuthProvider.credentialFromResult(res);
      const token = credentials.accessToken;
      const { displayName, email, photoURL, phoneNumber, accessToken } =
        res.user;
      console.log(res.user);
      dispatch(
        authSuccess({
          token,
          displayName,
          email,
          photoURL,
          phoneNumber,
          accessToken,
        })
      );
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const handleGithub = async (e) => {
    try {
      const res = await signInWithPopup(auth, githubProvider);
      const credentials = GithubAuthProvider.credentialFromResult(res);
      const token = credentials.accessToken;
      const { displayName, email, photoURL, phoneNumber, accessToken } =
        res.user;
      console.log(res.user);

      dispatch(
        authSuccess({
          displayName,
          email,
          photoURL,
          phoneNumber,
          token,
          accessToken,
        })
      );
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div className="bg-hero-pattern h-screen grid place-items-center">
      <div className="__container gap-y-5 max-w-md  md:max-w-lg bg-blackMovie text-whiteSmoke">
        <div className=" text-center ">
          <h1 className="text-4xl font-semibold ">
            {isSignin ? " Hello Again!" : "Sign up"}
          </h1>
          <p className="text-sm text-slate-400 mt-3">
            {isSignin
              ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, illo."
              : "Aliquid deserunt excepturi aspernatur inventore minus eum voluptate, iste ullam quas velit."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <input
            type="text"
            fullWidth
            variant="outlined"
            label="Email"
            value={data.email}
            name="email"
            className="p-3 border rounded-md shadow-md bg-transparent"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            fullWidth
            variant="outlined"
            type="password"
            label="Password"
            value={data.password}
            name="password"
            className="p-3 border rounded-md shadow-md bg-transparent"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            type="submit "
            className=" rounded-md shadow-md font-semibold p-2 hover:bg-green-700 hover:text-white transition-all"
          >
            {isSignin ? "Sign in!" : "Sign up"}
          </button>
        </form>
        <div className="flex  gap-x-3 ">
          <button
            type="submit "
            onClick={handleGoogle}
            className="w-full rounded-md shadow-md font-semibold p-2 hover:bg-slate-700 hover:text-white transition-all"
          >
            Sign in with Google !
          </button>

          <button
            type="submit "
            onClick={handleGithub}
            className="w-full rounded-md shadow-md font-semibold p-2 text-white bg-slate-800 hover:bg-white hover:text-black transition-all"
          >
            Sign in with Github !
          </button>
        </div>
        <h1
          className="text-center text-lg hover:scale-105 transition font-semibold cursor-pointer "
          onClick={() => setIsSignin(!isSignin)}
        >
          {isSignin ? " Create an Account!" : "Already has account ? Sign in"}
        </h1>
      </div>
    </div>
  );
};

export default Auth;
