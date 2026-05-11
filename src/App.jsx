import Header from "./component/Header/Header";
import tozalash from "././assets/IMAGE.png"
import kalendar from "././assets/IMAGE (4).svg"
import plastik from "././assets/IMAGE (5).svg"
import pilsos from "././assets/IMAGE (6).svg"
import zavod from "././assets/zavod.svg"
import uy from "././assets/uy.svg"
import bino from "././assets/bino.svg"
import uzun from "././assets/IMAGE (1).png"
import odam from "././assets/IMAGE (2).png"
import tel from "././assets/IMAGE (3).svg"
import Footer from "./component/Footer/Footer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n"

const App = () => {
  const [lang, setLang] = useState(null)
  const {t, i18n} = useTranslation()
  const changeLang =(e)=>{
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    console.log(i18n)
  }
  return (
    <>
      <Header />
      <section id="abaut" className="section">
        <div className="container">
          <div className="boxs">
            <div className="box_top">
              <h1 className="box_text">{t("About Us")}</h1>
              <p className="box_text_p">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            </div>
            <div className="box_bottom">
              <div className="kalendar">
                <img src={kalendar} alt="" />
                <h4 className="kalendar_text">{t("1. Schedule online")}</h4>
                <p className="kalendar_p">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
              </div>
              <div className="plastik">
                <img src={plastik} alt="" />
                <h4 className="kalendar_text">{t("2. Pay online easily")}</h4>
                <p className="kalendar_p">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc..</p>
              </div>
              <div className="pilsos">
                <img src={pilsos} alt="" />
                <h4 className="kalendar_text">{t("3. Get your house cleaned")}</h4>
                <p className="kalendar_p">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
              </div>
            </div>
            <div className="btnlarr">
              <button className="btn1" >{t("Get a free quote")}</button>
              <button className="btn2" >{t("Explore services")}</button>
            </div>
          </div>
        </div>
      </section>
      <section id="server" >
        <div className="container">
          <div className="cards">
            <div className="card">
              <h2 className="card_text">{t("Our Services")}</h2>
              <button className="btn3" >{t("Explore services")}</button>
            </div>
            <div className="card_bottom">
              <div className="uy">
                <img src={uy} alt="" />
                <h5 className="uy_h5">{t("House cleaning")}</h5>
                <p className="uy_p">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
              </div>
              <div className="bino">
                <img src={bino} alt="" />
                <h5 className="uy_h5">{t("Office cleaning")}</h5>
                <p className="uy_p">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
              </div>
              <div className="zavod">
                <img src={zavod} alt="" />
                <h5 className="uy_h5">{t("Industrial cleaning")}</h5>
                <p className="uy_p">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="obshi">
            <div className="rayt">
              <img src={tozalash} alt="" />
            </div>
            <div className="left">
              <p className="left_p">{t("Covid-19 sanitization")}</p>
              <h2 className="left_text">{t("We follow")}
                </h2>
              <p className="p_p">Lobortis mattis odio leo eget mauris met aliquet <br />
                semper molestie sollicitudin congue massa <br />
                mauris lectus.</p>
              <div className="card_rayt_btnlari">
                <button className="btn111">{t("Get a free quote")}</button>
                <div className="tel">
                  <img src={tel} alt="" />
                  <div className="clo">
                    <p className="a">{t("Call us now")}</p>
                    <h4 className="clo11">(414) 567 - 2109</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uzun"></div>
        </div>
      </section>
      <section id="Articles" className="section">
        <div className="container">
          <div className="reactes">
            <div className="react_top">
              <h1 className="react_text">{t("Articles 1 ")}</h1>
              <div className="asdf">
                <button className="btn1" >{t("Get a free quote")}</button>
                <button className="btn2222" >{t("Browse articles")}</button>
              </div>
            </div>
            <div className="react_bottom">
              <div className="react_bottom_rayt">
                <div className="wqe">
                  <img className="rasim1111" src={uzun} alt="" />
                </div>
                <div className="react_rayt1">
                  <h1 className="react_rayt1_text">{t("8 best")}</h1>
                  <p className="pp">Lorem ipsum dolor sit amet conse ctetur adip <br />
                    iscing elit justo quis odio sit sit ac port titor sit <br />
                    males.</p>
                  <div className="sd">
                    {t("Jan 28, 2022")}
                    <div className="q">

                    </div>
                  </div>
                </div>
              </div>
              <div className="react_bottom_rayt">
                <div className="wqe">
                  <img className="rasim1111" src={odam} alt="" />
                </div>
                <div className="react_rayt1">
                  <h1 className="react_rayt1_text">{t("How")}</h1>
                  <p className="pp">Lorem ipsum dolor sit amet conse ctetur adip <br />
                    iscing elit justo quis odio sit sit ac port titor sit <br />
                    males.</p>
                  <div className="sd">
                    {t("Feb 1, 2022")}
                    <div className="q">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" className="sectionn">
        <div className="container">
          <div className="Contact">
            <div className="Contact_left">
              <h1 className="contact_text">{t("Contact Us")}</h1>
              <p className="contact_p">In dignissim euismod pretium amet enim a eu nam <br />
                ut urna accumsan pellentesque lacus duis pharetra <br />
                eutortor.</p>
              <div className="tel">
                <img src={tel} alt="" />
                <div className="clo">
                  <p className="a">{t("Call us now")}</p>
                  <h4 className="clo111">(414) 567 - 2109</h4>
                </div>
              </div>
              <div className="z"></div>
              <h2 className="contact_h2">{t("Not convinced yet?")}</h2>
              <p className="contact_ppp">Massa bibendum consectetur maurisid gravida <br />
                purus, dolor dui amet morbi non nunc urna <br />
                purus diam.</p>
              <button className="btn2222" >{t("Browse our packages")}</button>
            </div>
            <div className="contact_rayt">
              <div className="ll">
                <div class="input-group">
                  <label>{t("Full name")}</label>
                  <input type="text" />
                </div>
                <div class="input-group">
                  <label>{t("Phone number")}</label>
                  <input type="tel" />
                </div>
              </div>
              <div className="l">
                <div class="input-group">
                  <label>{t("Address")}</label>
                  <input type="text" />
                </div>
                <div class="input-group">
                  <label>{t("Email")}</label>
                  <input type="email" />
                </div>
              </div>
              <div className="l">
                <div class="input-group">
                  <label>{t("Requested service")}</label>
                  <input type="text" />
                </div>
                <div class="input-group">
                  <label>{t("Day of service")}</label>
                  <input type="text" />
                </div>
              </div>
              <div className="lll">
                <div class="input-groupr">
                  <label>{t("Add a noteF")}</label>
                  <input type="text" />
                </div>
                <button className="btn1112">{t("Submit message")}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default App;