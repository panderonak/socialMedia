import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.authentication.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/log-in");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/profile");
    }
    setLoader(false);
  });

  return loader ? <div>AuthLayout</div> : <>{children}</>;
}
