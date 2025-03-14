export default function BackgroundImage() {
  return (
    <div
      className="h-full rounded-ss-[50px]  hidden md:block"
      style={{
        backgroundImage: "url('/Assets/chris-lee-70l1tDAI6rM-unsplash.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
