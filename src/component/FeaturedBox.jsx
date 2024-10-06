import React from "react";
import avatar from "../assets/images/avatar.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Natsuda Rongthong</span>
        </div>
        <div className="featured-name">
          I'm <span className="TypedText"></span>
        </div>
        <p className="featured-description">
        
ฉันรักการเรียนรู้และสนใจเทคโนโลยี โดยเฉพาะการเขียนโปรแกรม ฉันเชื่อในความสำคัญของการทำงานร่วมกันและการสื่อสารที่ดี เพื่อให้ทีมประสบความสำเร็จ ฉันมองหาความท้าทายใหม่ๆ อยู่เสมอ เพราะเห็นว่าทุกอุปสรรคคือโอกาสในการเติบโต ในเวลาว่างฉันเพลิดเพลินกับการอ่านหนังสือ ฟังเพลง และใช้เวลาร่วมกับเพื่อนและครอบครัว
        </p>

        {/* ปุ่มดาวน์โหลด CV */}
        <div className="featured-text-btn">
          <a href="#" className="btn download-cv-btn">
            <i className="uil uil-file-alt"></i> Download CV
          </a>
        </div>

        {/* ปุ่มโซเชียลมีเดีย */}
        <ul className="social_icons">
          <li>
            <a href="#" className="icon social-icon">
              <i className="uil uil-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon social-icon">
              <i className="uil uil-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon social-icon">
              <i className="uil uil-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      {/* ปุ่ม Scroll Down */}
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
