import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <span className="contact-tag">Open to opportunities</span>
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            {contactInfo.availabilityLine && (
              <p
                className={
                  isDark
                    ? "dark-mode contact-subtitle"
                    : "subTitle contact-subtitle"
                }
              >
                {contactInfo.availabilityLine}
              </p>
            )}

            <div className="contact-buttons-row">
              {contactInfo.resumeLink && (
                <a
                  className="contact-action-button"
                  href={contactInfo.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download resume
                </a>
              )}
              {contactInfo.scheduleLink && (
                <a
                  className="contact-action-button"
                  href={contactInfo.scheduleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a call
                </a>
              )}
              <a
                className="contact-action-button"
                href={"mailto:" + contactInfo.email_address}
              >
                Email me
              </a>
            </div>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <SocialMedia />
            </div>
          </div>
<div className="contact-image-div">
  <div className="contact-photo-wrapper">
    <img
      alt="Shashwat Sharma"
      src={require("../../assets/images/shash.jpg")}
      className="contact-profile-photo"
    />
  </div>
</div>
        </div>
      </div>
    </Fade>
  );
}