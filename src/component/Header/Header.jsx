import home from "..//..//assets/IMAGE (2).svg"
import tel from "..//..//assets/IMAGE (3).svg"
import home2 from "..//..//assets/Group.png"
import css from "..//Header/Header.module.css"
import { changeLanguage, t } from "i18next"
import { useState } from "react"
import { useTranslation } from "react-i18next"
const Header = () => {
    
const [lang, setLang] = useState(null)
  const {t, i18n} = useTranslation()
  const changeLang =(e)=>{
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    console.log(i18n)
  }

    return (
        <>
            <header>
                <div className={css.container}>
                    <div className={css.a}>
                        <div className={css.aa}>
                            <div className="box_img">
                                <img src={home} alt="" />
                            </div>
                            <div className={css.box_efekt}>
                                <a href="#" className={css.link}>{t("home")}</a>
                                <a href="#" className={css.link}>{t("About")}</a>
                                <a href="#" className={css.link}>{t("Services")}</a>
                                <a href="#" className={css.link}>{t("Articles")}</a>
                                <a href="#" className={css.link}>{t("Contact")}</a>
                            </div>
                        </div>
                        <div className={css.btnlar}>
                            <span>{t("cart (0)")}</span>
                            <button className={css.btn}>{t("Get a free quote")}</button>
                        </div>
                        <select onChange={changeLanguage} className='bg-white py-1 px-2 rounded-[5px]'  >
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select>
                    </div>
                    
                </div>
            </header>
            <div className={css.q}>
                <div className="card_left">
                    <h1 className={css.aaa}>{t("Quality")}</h1>
                    <p className={css.p}>Condimentum mauris sit cursus amet id non neque pharetra
                        nulla ornare sed facilisis senectus dapibus nibh ultrices eget
                        suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className={css.ppp}>
                        <button className={css.btn1}>{t("Get a free quote")}</button>
                        <div className={css.pp}>
                            <img src={tel} alt="Phone" />
                            <div className={css.clo1}>
                                <p className={css.clo1}>{t("Call us now")}</p>
                                <h4 className={css.clo1}>(414) 567 - 2109</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_rayt">
                    <img src={home2} alt="" />
                </div>
            </div>
        </>
    )
}
export default Header;