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
                        href="/"><img className={s.instagram}
                                    src={instagram}
                                    alt=""/>
                    </a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.vk}
                                    src={vk}
                                    alt=""/></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.facebook}
                                    src={facebook}
                                    alt=""/></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.youtube}
                                    src={youtube}
                                    alt=""/></a></li>
        </ul>
        </div>
    );
}

export default Social;