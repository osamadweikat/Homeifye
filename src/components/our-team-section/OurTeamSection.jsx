import "./our-team-section.css";
import { teamData } from "../../data/teamData";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useInViewObserver from "../../hooks/useInViewObserver";
import { useEffect } from "react";

export default function OurTeamSection() {
  useInViewObserver(
    ".team-title, .team-subtitle, .member-wrapper",
    {
      threshold: 0.2,
    },
    true
  );

  useEffect(() => {
    const members = document.querySelectorAll(".member-wrapper");
    members.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="our-team-section">
      <div className="our-team-container">
        <h2 className="team-title fade-target">Meet Our Team</h2>
        <p className="team-subtitle fade-target">
          Passionate professionals dedicated to delivering excellence.
        </p>
        <div className="team-grid">
          {teamData.map((member) => (
            <div className="member-wrapper fade-target" key={member.id}>
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
