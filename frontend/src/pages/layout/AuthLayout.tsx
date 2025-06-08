import { Navigate, Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { logoApeAndTitleFaded } from "../../assets/image-icons-barrel";
import { useNavHook } from "../../hooks/utility.hooks";
import CopyrightFooter from "./CopyRightFooter";

//Auth layout, will handle if user is authenticated or not
const AuthLayout = () => {
  const isAuthenticated = false; // manually simulate logged-in state
  const location = useLocation();
  const { toLanding } = useNavHook();

  //redirect authenticated users away from login/register
  if (
    isAuthenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        padding: "1rem",
      }}
    >
      <div onClick={toLanding} style={{ cursor: "pointer" }}>
        <img
          src={logoApeAndTitleFaded}
          alt="SilverBack Kitchen Logo"
          loading="lazy"
          style={{
            width: "300px",
            height: "auto",
            objectFit: "contain",
          }}
          className="auth-logo"
        />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <Outlet />
      </div>
      <div style={{ marginTop: 70 }}>
        <CopyrightFooter />
      </div>
    </div>
  );
};
export default AuthLayout;
