import "./our-team-section.css";
import { teamData } from "../../data/teamData";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function OurTeamSection() {
  return (
    <div className="our-team-section">
      <div className="our-team-container">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-subtitle">
          Passionate professionals dedicated to delivering excellence.
        </p>
        <div className="team-grid">
          {teamData.map((member) => (
            <div className="member-wrapper" key={member.id}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-icons">
                  <span>
                    <EmailOutlinedIcon />
                  </span>
                  <span>
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
