import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Location, Profile } from "../../types";

interface ContactItemProps {
  icon: IconDefinition;
  label: string;
}

const ContactItem = ({ icon, label }: ContactItemProps) => (
  <div className="flex items-center">
    <FontAwesomeIcon className="text-white w-3" icon={icon} />
    <div className="text-white text-xs ml-2">{label}</div>
  </div>
);

interface ContactProps {
  email: string;
  location: Location;
  profiles: Profile[];
}

const Contact = ({ email, location, profiles }: ContactProps) => {
  const githubProfile = useMemo(
    () => profiles.find((profile) => profile.network === "Github"),
    [profiles]
  );

  return (
    <div className="flex flex-col gap-y-1">
      <ContactItem icon={faEnvelope} label={email} />
      <ContactItem
        icon={faLocationDot}
        label={`${location.city}, ${location.state}`}
      />

      {!!githubProfile && (
        <ContactItem icon={faGithub} label={githubProfile.username} />
      )}
    </div>
  );
};

export default Contact;
