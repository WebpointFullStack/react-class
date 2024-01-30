import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;
