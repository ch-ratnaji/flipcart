import { Outlet } from "react-router-dom";

function MobilesRootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MobilesRootLayout;
