import { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const FinishSignIn = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const completeSignIn = async () => {
      const storedEmail = window.localStorage.getItem("emailForSignIn") || window.prompt("Enter your email to confirm:");

      if (isSignInWithEmailLink(auth, window.location.href)) {
        try {
          const result = await signInWithEmailLink(auth, storedEmail, window.location.href);
          window.localStorage.removeItem("emailForSignIn");

          const user = result.user;
          setUserInfo({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
          });
        } catch (err) {
          console.error("Sign-in failed:", err);
          setError("Login failed: " + err.message);
        }
      }
    };

    completeSignIn();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userInfo) {
    return <div>Logging you in...</div>;
  }

  return (
    <div>
      <h2>Welcome!</h2>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Email Verified:</strong> {userInfo.emailVerified ? "Yes" : "No"}</p>
    </div>
  );
};

export default FinishSignIn;