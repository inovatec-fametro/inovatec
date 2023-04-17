import Link from "next/link";
import { useEffect, useState } from "react";
import { userState } from "context/User/UserState";
import { NavDropdown, Spinner } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

export default function User() {
  const signOut = userState((state) => state.signOut);
  const user = userState((state) => state.user);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return <Spinner animation="grow" />;
  }

  try {
    if (Object.keys(user).length !== 0) {
      const first_name =
        user.user_metadata.first_name[0].toUpperCase() +
        user.user_metadata.first_name.slice(1).toLowerCase();
      const delta = (
        <div className="d-inline">
          <BsPersonCircle className="me-1" />
          {first_name}
        </div>
      );

      return (
        <div>
          <NavDropdown title={delta}>
            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
            {/* <NavDropdown.Item href="/">Something else here</NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item href="" onClick={() => signOut()}>
              {"Encerrar sessão"}
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      );
    }
  } catch (error) {}

  return (
    <div>
      <Link href="/form/singin" className=" nav-link text-primary ms-1">
        <BsPersonCircle /> Entrar
      </Link>
    </div>
  );
}
