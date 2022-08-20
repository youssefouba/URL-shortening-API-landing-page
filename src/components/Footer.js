import React from "react";

const Footer = () => {
  return (
    <div className="footeR">
      <div className="container">
        <div className="logo">
          <img src="images/logo.svg" alt="logo Shortly" />
        </div>
        <footer  className="footerMenu">
          <table>
            <thead>
            <tr>
              <th>Features</th>
              <th>Resources</th>
              <th>Company</th>
            </tr></thead>
            <tbody>
            <tr>
              <td>
                <a href="#">Link Shortening</a>
              </td>
              <td>
                <a href="#">Blog</a>
              </td>
              <td>
                <a href="#">About</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Branded Links</a>
              </td>
              <td>
                <a href="#">Developers</a>
              </td>
              <td>
                <a href="#">Our Team</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Analytics</a>
              </td>
              <td>
                <a href="#">Support</a>
              </td>
              <td>
                <a href="#">Careers</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <a href="#">Contact</a>
              </td>
            </tr>
            </tbody>
          </table>
          <div className="SocialMedia">
            <a href="#">
              <img src="../images/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="../images/icon-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="../images/icon-pinterest.svg" alt="pinterest" />
            </a>
            <a href="#">
              <img src="../images/icon-instagram.svg" alt="instagram" />
            </a>
          </div>
        </footer>

        <div className="mobileFooter">
        <p>Features</p>
        <a href="#">Link Shortening</a>
        <a href="#">Branded Links</a>
        <a href="#">Analytics</a>
        <p>Resources</p>
        <a href="#">Blog</a>
        <a href="#">Developers</a>
        <a href="#">Support</a>
        <p>Company</p>
        <a href="#">About</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
        <div className="SocialMedia">
            <a href="#">
              <img src="../images/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="../images/icon-twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="../images/icon-pinterest.svg" alt="" />
            </a>
            <a href="#">
              <img src="../images/icon-instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
