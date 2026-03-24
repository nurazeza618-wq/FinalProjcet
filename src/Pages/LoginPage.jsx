import LoginForm from "../components/LoginForm";
import background from "../assets/background.png";

const LoginPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", 
        backgroundPosition: "center top", 
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff", 
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "120px"
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
