import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authenticationSlice";
import authService from "../../freeAPI/authentication";
import { Button } from "../index";

export default function LogOutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    console.log("Logout Called!");
    authService.logoutUser().then(() => {
      dispatch(logout());
    });
  };
  return (
    <Button
      className="inline-block duration-200 hover:bg-[#890620]"
      onClick={logoutHandler}
    >
      Logout
    </Button>
  );
}
