import { Link } from "react-router-dom";

function MainNavbar() {
  const componentLinks = ["button", "checkbox", "radio", "rangeSlider"];
  let id = 0;
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
          fontSize: "18px"
        }}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {componentLinks.map((linkName) => {
          const capitalizedName =
            linkName.charAt(0).toUpperCase() + linkName.slice(1);
          return (
            <li key={id++}>
              <Link to={`/${linkName}`}>{`${capitalizedName}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainNavbar;
