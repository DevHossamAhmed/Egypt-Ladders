import Container from "../Container";
import Logo from "../Logo";
import Links from "./Links";

const Navbar = () => {
  return (
    <div
      className="
            fixed
            w-full
            z-10
            px-4
            bg-navcolor
        "
    >
      <div
        className="
                py-2
                border-b-[1px]
                border-navcolor
            "
      >
        <Container>
          <div
            className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
          >
            <Logo />
            <Links />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
