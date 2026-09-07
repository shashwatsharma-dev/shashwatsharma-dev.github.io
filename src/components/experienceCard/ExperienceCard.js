import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner">
  {cardInfo.companylogo && (
    <img
      className="experience-roundedimg"
      src={cardInfo.companylogo}
      alt={cardInfo.company}
    />
  )}
  <div className="experience-div-company">
    <h5 className={isDark ? "experience-text-company dark-mode-text" : "experience-text-company"}>{cardInfo.company}</h5>
    {cardInfo.totalDuration && (
      <p className="experience-total-duration">
        {cardInfo.totalDuration}
      </p>
    )}
  </div>
</div>
      <div className="experience-roles-list">
        {cardInfo.roles.map((roleItem, i) => (
          <div className="experience-role-item" key={i}>
            <h5
              className={
                isDark
                  ? "experience-text-role dark-mode-text"
                  : "experience-text-role"
              }
            >
              {roleItem.role}
            </h5>
            <h5
              className={
                isDark
                  ? "experience-text-date dark-mode-text"
                  : "experience-text-date"
              }
            >
              {roleItem.date}
            </h5>
            <p
              className={
                isDark
                  ? "subTitle experience-text-desc dark-mode-text"
                  : "subTitle experience-text-desc"
              }
            >
              {roleItem.desc}
            </p>
            <ul>
              <GetDescBullets
                descBullets={roleItem.descBullets}
                isDark={isDark}
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}