import Contract from './contract/Contract';
import s from './Footer.module.scss'
import InfoMenu from './infoMenu/InfoMenu';
import Mailing from './mailing/Mailing';
import ShopMenu from './shopMenu/ShopMenu';
import Social from './social/Social';

function Footer() {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <Mailing/>
                    <InfoMenu/>
                    <ShopMenu/>
                    <Social/>
                </div>
                <Contract/>
            </div>
        </div>
    );
}

export default Footer;