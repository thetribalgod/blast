import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
const AuthPage = () => {
  const authScreenState = useRecoilState(authScreenAtom);
  // const [value, setValue] = useState("login");
  // useSetRecoilState(authScreenAtom);
  console.log(authScreenAtom);
  return ( 
      <>
        {authScreenState === "login" ? <loginCard/> : <SignupCard />}
    </>
  );
};

export default AuthPage;