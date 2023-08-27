import React, { useRef, useState, useEffect } from "react";
import { Button, Form } from "antd";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import AboutMeImg from "../../assets/images/AboutMeImg.png";
import HomePageImg from "../../assets/images/HomePageImg.PNG";
import cv from "../../assets/pdf/Aadarsh-Ghodasara-CV.pdf";
import { Link } from "react-scroll";
import AOS from "aos";
import { BackTop, Tooltip } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";
import "./Portfolio.css";

const Portfolio = () => {
  const [contactUsForm] = Form?.useForm();
  const [loading, setLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      delay: 25,
    });
  }, []);

  const handleDarkModeChange = () => {
    let darkmode = document.querySelector("#darkmode");
    if (darkmode.classList.contains("bx-moon")) {
      darkmode.classList.replace("bx-moon", "bx-sun");
      document.body.classList.add("active");
    } else {
      darkmode.classList.replace("bx-sun", "bx-moon");
      document.body.classList.remove("active");
    }
  };

  const handleMenuEvent = () => {
    let header = document.querySelector("header");
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
    });
    menu.onclick = () => {
      navbar.classList.toggle("active");
    };
    window.onscroll = () => {
      navbar.classList.remove("active");
    };
  };

  const handleSendEmail = async (e) => {
    setLoading(true);
    await emailjs
      .send(
        "service_h1ntnh2",
        "template_m3jmfof",
        { ...contactUsForm?.getFieldsValue(), toName: "Aadarsh Ghodasara" },
        "rDSprDuV9cOFrfORP"
      )
      .then(
        (result) => {
          toast.success("Email send successfully.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error("Something went wrong, please try again!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      )
      .finally(() => {
        contactUsForm.resetFields();
        setLoading(false);
      });
  };

  const navbarConst = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Skills", key: "skills" },
    { label: "Experience", key: "experience" },
    { label: "Achievement", key: "achievement" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <div>
      {/* Header Section */}
      <header id="header">
        <div className="logo"></div>
        <div
          className="bx bx-menu"
          id="menu-icon"
          onClick={handleMenuEvent}
        ></div>
        <ul className="navbar">
          {navbarConst?.map((item) => (
            <Link
              to={item?.key}
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              {item?.label}
            </Link>
          ))}

          <div
            className="bx bx-moon darkModeBtn"
            id="darkmode"
            onClick={handleDarkModeChange}
          ></div>
        </ul>
      </header>

      {/* Website landing Section */}
      <section className="home" id="home">
        <div className="social">
          <a href="https://github.com/AadarshGhodasara" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aadarsh-ghodasara/"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://twitter.com/aadarsh_king/" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.facebook.com/patel.adarsh.904" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/aadarsh_king_/" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <div className="home-img" data-aos="fade-left">
          <img src={HomePageImg} alt="Home Page Image" />
        </div>
        <div className="home-text" data-aos="fade-right">
          <span>Hello, I'm</span>
          <h1>Aadarsh Ghodasara</h1>
          <h2>Web Developer</h2>
          <a href={cv} target="_blank" className="btn">
            Download CV
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="heading">
          <h2>About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-img" data-aos="fade-right">
            <img src={AboutMeImg} alt="About Me Image" />
          </div>
          <div className="about-text" data-aos="fade-left">
            <p>
              I am Aadarsh Ghodasara, a graduate of a B.TECH degree from
              CHARUSAT University, Changa. My hometown is Morbi, which is also
              renowned as the "Ceramic City Of India." My aspiration is to work
              as a Software Developer, building amazing websites and taking on
              challenges. Presently, I am employed as a Software Engineer at
              Simform Solutions Pvt. Ltd. in Ahmedabad.
            </p>
            <div className="information">
              <div className="info-box">
                <i className="bx bxs-user"></i>
                <span>Aadarsh Ghodasara</span>
              </div>
              <div className="info-box">
                <i className="bx bxs-phone"></i>
                <a href="tel:+917435820724">+91 74358 20724</a>
              </div>
              <div className="info-box">
                <i className="bx bxs-envelope"></i>
                <a href="mailto:someone@example.com">aadarshgh2000@gmail.com</a>
              </div>
            </div>
            <a href={cv} target="_blank" class="btn">
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section id="skills" className="skills">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container" data-aos="fade-up">
          <div className="bars">
            <div className="bars-box">
              <h3>C</h3>
              <span>80%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-80"></div>
            </div>
            <div className="bars-box">
              <h3>C++</h3>
              <span>60%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-60"></div>
            </div>
            <div className="bars-box">
              <h3>HTML</h3>
              <span>80%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-80"></div>
            </div>
            <div className="bars-box">
              <h3>CSS</h3>
              <span>70%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-70"></div>
            </div>
            <div className="bars-box">
              <h3>Javascript</h3>
              <span>60%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-60"></div>
            </div>
          </div>
          <div className="bars">
            <div className="bars-box">
              <h3>JAVA</h3>
              <span>50%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-50"></div>
            </div>
            <div className="bars-box">
              <h3>PYTHON</h3>
              <span>60%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-60"></div>
            </div>
            <div className="bars-box">
              <h3>REACT NATIVE</h3>
              <span>70%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-70"></div>
            </div>
            <div className="bars-box">
              <h3>REACT JS</h3>
              <span>90%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bar-90"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="skills">
        <div className="heading">
          <h2>Experience</h2>
        </div>
        <div className="professionalExperience" data-aos="fade-up">
          <ul className="ul">
            <li className="li">
              <div className="date">Mar 2021 To Present</div>
              <div className="title">SOFTWARE ENGINEER</div>
              <div className="descr">
                <ul className="experienceList">
                  <li className="point">At Simform Solutions Pvt. Ltd.</li>
                  <li className="point">Working as a React JS Developer</li>
                </ul>
              </div>
            </li>
            <li className="li">
              <div className="date">Jan 2021 To Mar 2021</div>
              <div className="title">REACT JS DEVELOPER - TRAINEE</div>
              <div className="descr">
                <ul className="experienceList">
                  <li className="point">At Simform Solutions Pvt. Ltd.</li>
                  <li className="point">Virtual Internship</li>
                  <li className="point">Working On React JS</li>
                </ul>
              </div>
            </li>
            <li className="li">
              <div className="date">May 2020 To Jun 2020</div>
              <div className="title">REACT NATIVE DEVELOPER</div>
              <div className="descr">
                <ul className="experienceList">
                  <li className="point">At Charusat university, Changa.</li>
                  <li className="point">Virtual Internship</li>
                  <li className="point">Built GUI in React Native</li>
                  <li className="point">
                    store all grocery store details like address, owner number,
                    and owner name within the specific city in database.
                  </li>
                  <li className="point">
                    Make it Full working model of application ( Grocine )
                  </li>
                </ul>
              </div>
            </li>
            <li className="li">
              <div className="date">May 2019 To Jun 2019</div>
              <div className="title">JAVA DEVELOPER</div>
              <div className="descr">
                <ul className="experienceList">
                  <li className="point">At Aaryavart Technology Pvt. Ltd.</li>
                  <li className="point">Offline Internship</li>
                  <li className="point">Work On client-server architecture.</li>
                  <li className="point">
                    Make One Small app two user send message through server.
                  </li>
                  <li className="point">
                    After Understand proper architecture then make Tic Tac Toe
                    with some different specifications like time and layout.
                  </li>
                </ul>
              </div>
            </li>
            <li className="li">
              <div className="date">Dec 2018 To Feb 2019</div>
              <div className="title">INTENRSHALA STUDENT PARTNER</div>
              <div className="descr">
                <ul className="experienceList">
                  <li className="point">At Internshala.</li>
                  <li className="point">Virtual Internship</li>
                  <li className="point">
                    Explain company's terminology to students and help them to
                    reach platform provided by company
                  </li>
                  <li className="point">Host a seminar and Won “Gold Award”</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievement" className="skills">
        <div className="heading">
          <h2>Achievement</h2>
        </div>
        <div className="achievementList">
          <div className="card" data-aos="fade-right">
            <h4>ORGANIZED EVENT UNDER CSI</h4>
            <p>
              I had the opportunity to organize a national-level event under the
              Computer Society of India at CHARUSAT, Changa.
            </p>
          </div>
          <div className="card" data-aos="fade-left">
            <h4>ORGANIZED EVENT UNDER COGNIZANCE</h4>
            <p>
              I had the opportunity to organize a national-level event under the
              aegis of Cognizance Techfest at CHARUSAT, Changa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="heading">
          <h2>Contact</h2>
        </div>
        <div className="contact-form" data-aos="zoom-in">
          <Form form={contactUsForm} onFinish={handleSendEmail}>
            <Form.Item
              name={"userName"}
              rules={[
                {
                  required: true,
                  message: "Name is required.",
                },
                {
                  whitespace: true,
                  message: "Name is invalid.",
                },
              ]}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="contactFormField"
              />
            </Form.Item>
            <Form.Item
              name={"userEmail"}
              rules={[
                {
                  required: true,
                  message: "Email is required.",
                },
                {
                  whitespace: true,
                  message: "Email is invalid.",
                },
                {
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email is invalid.",
                },
              ]}
            >
              <input
                type="email"
                name=""
                id="email"
                placeholder="Your Email"
                className="contactFormField"
              />
            </Form.Item>
            <Form.Item
              name={"message"}
              rules={[
                {
                  required: true,
                  message: "Message is required.",
                },
                {
                  whitespace: true,
                  message: "Message is invalid.",
                },
              ]}
            >
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Message Here..."
                className="contactFormField"
              ></textarea>
            </Form.Item>
            <div className="sendBtnContainer">
              <Button className="sendBtn" htmlType="submit" loading={loading}>
                Send
              </Button>
            </div>
          </Form>
        </div>
      </section>

      {/* Footer Section */}
      <div class="footer">
        <h2>Follow Us</h2>
        <div class="footer-social">
          <a href="https://github.com/AadarshGhodasara" target="_blank">
            <i class="bx bxl-github github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aadarsh-ghodasara/"
            target="_blank"
          >
            <i class="bx bxl-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/aadarsh_king/" target="_blank">
            <i class="bx bxl-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/patel.adarsh.904" target="_blank">
            <i class="bx bxl-facebook facebook"></i>
          </a>
          <a href="https://www.instagram.com/aadarsh_king_/" target="_blank">
            <i class="bx bxl-instagram instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div class="copyright">
        <p>© Aadarsh Ghodasara | All Right Reserved.</p>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

      <BackTop>
        <Tooltip title="Back To Top">
          <div className="BackToTopScroll">
            <ArrowUpOutlined />
          </div>
        </Tooltip>
      </BackTop>
    </div>
  );
};
export default Portfolio;
