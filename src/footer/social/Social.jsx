import s from './Social.module.scss'
import instagram from "../../assets/img/instagram.svg";
import vk from "../../assets/img/vk.svg";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";

function Social() {
    return (
        <div className={s.social}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={instagram}
                                    alt=""/>
                    </a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={vk}
                                    alt=""/></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={facebook}
                                    alt=""/></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={youtube}
                                    alt=""/></a></li>
        </ul>
        </div>
    );
}

export default Social;