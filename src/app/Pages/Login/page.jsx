import LoginForm from "@/app/Components/LoginForm.jsx";
import Image from "../../Components/Image.jsx";

export default function Login() {
  return (
    <section className="h-dvh grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <LoginForm/>
      </div>
      <div>
        <Image />
      </div>
    </section>
  );
}
