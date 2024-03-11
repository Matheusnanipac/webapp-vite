import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <h1>Lista de restaurantes:</h1>
      <div className="flex flex-col gap-10 mt-10">
        <Link to="/bardofranca">Bar do França</Link>
        <Link to="/bardojuca">Bar do Juca</Link>
      </div>
      <Outlet />
    </div>
  );
}
