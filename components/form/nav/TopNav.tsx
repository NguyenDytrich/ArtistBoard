import Link from "next/link";
import { Button, Nav, Navbar } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";

const TopNav: React.FC = () => {
  const auth = getAuth();
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Navbar className="px-3 d-flex justify-content-between">
      <Nav>
        <Link href="/" passHref>
          <Navbar.Brand style={{ cursor: "pointer" }}>ArtistBoard</Navbar.Brand>
        </Link>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/">
          <a className="nav-link">Marketplace</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
      </Nav>
      <Nav>
        <Button size="sm" onClick={logout}>
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
