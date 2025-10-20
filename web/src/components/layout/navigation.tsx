import { Link } from "react-router";
import { Button } from "../ui/button";

function Navigation() {
  return (
    <nav className="p-4 flex gap-2 justify-between">
      <Button asChild>
        <Link to="/" className="W-11">
          Logo
        </Link>
      </Button>
      <Link to="/">Logo</Link>
    </nav>
  );
}

export default Navigation;
