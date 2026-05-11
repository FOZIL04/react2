import { useTranslation } from "react-i18next"
import quti from "..//..//assets/Frame.svg"
import home2 from "..//..//assets/IMAGE (7).svg"
import cs from "..//Footer/Footer.module.css"
import { useState } from "react"
const Footer = ()=> {
  const [lang, setLang] = useState(null)
    const {t, i18n} = useTranslation()
    const changeLang =(e)=>{
      setLang(e.target.value)
      i18n.changeLanguage(e.target.value)
      console.log(i18n)
    }
  
    return(
        <section className="section">
        <div className="container">
          <div className="Hours">
            <div className={cs.Hour}>
              <div className="bir">
              <h1 className={cs.h1}>
               {t("Quality")}
              </h1>
              <p className={cs.p}>
                Lorem ipsum dolor sit amet cteturdo <br />
                 adipiscing elit, sed do eiusmo.
              </p>
              <img src={quti} alt="" />
              </div>
              <div className="bir">
                <h3 className={cs.h3}>
                 {t("Contact")}
                </h3>
                <p className={cs.pbir}>
                  1827 Nickel Road, Los Angeles, <br />
                   CA, 90017, United States
                </p>
                <p className={cs.pbir}>
                  (414) 567 - 2109
                </p>
                <p className={cs.pbir}>contact@cleaning.com</p>
              </div>
              <div className="bir">
                <h3 className={cs.h3}>
                  {t("Hours  ")}
                </h3>
                <h3 className={cs.h2}>
                  {t("Monday to Friday")}
                </h3>
                <p className={cs.pbir}>
                 6:00 AM - 9:00 PM
                </p>
                <h3 className={cs.h2}>
                 {t(" Saturday & Sunday")}
                </h3>
                <p className={cs.pbir}>
                  8:00 AM - 8:00 PM
                </p>
                
              </div>
              <div className="bir">
                <h3 className={cs.h3}>
                 {t(" Get a free estimate")}
                </h3>
                <h3 className={cs.h11}>
                  (414) 567 - 2109
                </h3>
                <p className={cs.pbir}>
                Lorem ipsum dolor sit amet ectetur <br />
                 adipiscing elit, sed do eiusmod.
                </p>
                <button className={cs.btn333}> {t("Request a free quote")}</button>
                
              </div>
            </div>
            <div className={cs.j}></div>
            <div className={cs.hour2}>
              <img src={home2} alt="" />
              <div className={cs.df}>
                <p>Copyright © Cleaning X | Designed by</p>
                <a href="#">BRIX Templates</a>
                <p>- Powered by</p>
                <a href="#">Webflow</a>
                <a href="#">Licenses</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Footer;