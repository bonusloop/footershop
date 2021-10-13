import s from './Footer.module.scss'
import InfoMenu from './infoMenu/InfoMenu';
import Mailing from './mailing/Mailing';

function Footer() {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <Mailing/>
                    <InfoMenu/>
                    Secondmenu
                    Social
                </div>
                Contract 
            </div>
        </div>
    );
}

export default Footer;