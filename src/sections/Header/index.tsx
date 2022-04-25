import { Basics } from "../../types";

import Avatar from "./Avatar";
import NameAndTitle from "./NameAndTitle";
import Contact from "./Contact";

interface HeaderProps {
  basics: Basics;
}

const Header = ({ basics }: HeaderProps) => {
  return (
    <div className="flex bg-primary px-3 py-3 justify-between">
      <div className="flex items-center">
        <Avatar />
        <NameAndTitle name={basics.name} title={basics.title} />
      </div>

      <Contact
        email={basics.email}
        location={basics.location}
        profiles={basics.profiles}
      />
    </div>
  );
};

export default Header;
