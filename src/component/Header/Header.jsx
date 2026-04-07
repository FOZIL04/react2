import home from "..//..//assets/IMAGE (2).svg"
import tel from "..//..//assets/IMAGE (3).svg"
import home2 from "..//..//assets/Group.png"
import css from "..//Header/Header.module.css"
const Header = () => {
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
                                <a href="#" className={css.link}>Home</a>
                                <a href="#" className={css.link}>About</a>
                                <a href="#" className={css.link}>Services</a>
                                <a href="#" className={css.link}>Articles</a>
                                <a href="#" className={css.link}>Contact</a>
                            </div>
                        </div>
                            <div className={css.btnlar}>
                                <span>Cart (0)</span>
                                <button className={css.btn}>Get a free quote</button>
                            </div>
                    </div>
                    <div className={css.q}>
                        <div className="card_left">
                            <h1 className={css.aaa}>Quality cleaning <br />
                             for your home</h1>
                            <p className={css.p}>Condimentum mauris sit cursus amet id non neque pharetra <br />
                             nulla ornare sed facilisis senectus dapibus nibh ultrices eget <br />
                              suscipit aliquet et nulla magna lacus penatibus.</p>
                              <div className={css.ppp}>
                                <button className={css.btn1}>Get a free quote</button>
                                <div className={css.pp}>
                                    <img src={tel} alt="Phone" />
                                    <div className={css.clo1}>
                                        <p className={css.clo1}>Call us now</p>
                                        <h4 className={css.clo1}>(414) 567 - 2109</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card_rayt">
                            <img src={home2} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;