import LoginForm from "./Components/LoginForm.jsx";
import ImageCom from "./Components/ImageCom.jsx"
export default function Home() {
  return (
    <>
    <section className="h-dvh grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <LoginForm/>
          </div>
          <div>
            <ImageCom />
          </div>
        </section>
    </>
  );
}
