// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Link as LinkScroll } from 'react-scroll';
// // import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
// import '../../../assets/css/header_style.css';
// import logo from '../../../assets/svg/logo.svg';
// import catalog from '../../../assets/svg/catalog.svg';
// import client from '../../../assets/svg/client.svg';
// import constructor from '../../../assets/svg/constructor.svg';
// import dialogs from '../../../assets/svg/dialogs.svg';
// import integration from '../../../assets/svg/integration.svg';
// import newsletter from '../../../assets/svg/newsletter.svg';
// import order from '../../../assets/svg/order.svg';
// import settings from '../../../assets/svg/settings.svg';
// import statistic from '../../../assets/svg/statistic.svg';
// import notification from '../../../assets/svg/notification.svg';
// import { Switch } from 'react-switch-input';
// import hamburger_icon from '../../../assets/svg/hamburger_icon.svg'
//
//
//
// let sl_set = {};
//
// let myMap;
//
// export default class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         }
//
//
//     }
//
//
//
//     componentDidMount() {
//         if ('scrollRestoration' in window.history) {
//             window.history.scrollRestoration = 'manual';
//         }
//
//
//         window.addEventListener('load', this.handleLoad);
//         window.addEventListener('scroll', this.handleScroll);
//
//
//     }
//
//
//     componentWillUnmount() {
//         window.removeEventListener('load', this.handleLoad);
//         window.removeEventListener('scroll', this.handleScroll);
//     }
//
//     componentWillMount() {
//         sl_set = {
//             infinite: true,
//             dots: false,
//             arrows: false,
//             fade: true,
//             waitForAnimate: false,
//             /*autoplaySpeed: 3000,
//             autoplay: true,*/
//             pauseOnHover: false,
//             beforeChange: (oldIndex, newIndex) => {
//                 this.setState({
//                     cur_pr: (newIndex + 1),
//                     sliding: true
//                 })
//             },
//             afterChange: (newIndex) => {
//                 this.setState({
//                     sliding: false
//                 })
//             }
//         }
//     }
//
//     handleScroll = (ev) => {
//         let scrollTop = window.scrollY;
//
//         if (scrollTop > 0) {
//             this.setState({
//                 headerScroll: true
//             })
//         } else {
//             this.setState({
//                 headerScroll: false
//             })
//         }
//
//     }
//
//
//
//
//     render() {
//         return (
//
//
//         )
//     }
// }




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
// import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
import '../../../assets/css/header_style.css';
import logo from '../../../assets/svg/logo.svg';
import catalog from '../../../assets/svg/catalog.svg';
import client from '../../../assets/svg/client.svg';
import constructor from '../../../assets/svg/constructor.svg';
import dialogs from '../../../assets/svg/dialogs.svg';
import integration from '../../../assets/svg/integration.svg';
import newsletter from '../../../assets/svg/newsletter.svg';
import order from '../../../assets/svg/order.svg';
import settings from '../../../assets/svg/settings.svg';
import statistic from '../../../assets/svg/statistic.svg';
import notification from '../../../assets/svg/notification.svg';
import { Switch } from 'react-switch-input';
import hamburger_icon from '../../../assets/svg/hamburger_icon.svg';
import close_icon from '../../../assets/svg/close.svg';


const sl_set = {
    infinite: true,
    dots: false,
    arrows: false,
    fade: true,
    waitForAnimate: false,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => {
        this.setState({
            cur_pr: newIndex + 1,
            sliding: true,
        });
    },
    afterChange: (newIndex) => {
        this.setState({
            sliding: false,
        });
    },
};

export default function Header(props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [cur_pr, setCur_pr] = useState(null);
    const [sliding, setSliding] = useState(false);
    const [show_mobile_menu, setShowMobileMenu] = useState(false);
    const { disableBodyScroll } = props;
    const { enableBodyScroll } = props;

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.addEventListener('load', handleLoad);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLoad = () => {};

    const handleScroll = (ev) => {
        const scrollTop = window.scrollY;

        if (scrollTop > 0) {
            setHeaderScroll(true);
        } else {
            setHeaderScroll(false);
        }
    };

    return (
        <>

            <div className='header'>
                <div className='header_wrapper'>
                    <div className='header_logo'>
                        <Link to='/'  className='header_logo_link'>
                            <img src={logo}/>
                        </Link>
                    </div>
                    <div className='header_child'>
                        <div className="headers_navigation_links_wrapper">
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    {/*<img src={constructor}/>*/}
                                    <svg width="40" height="33" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35 5.41672V32.5032C35 32.5032 20 31.5345 20 35C20 35 20 16.5924 20 9.36518C20 3.45829 35 5.41672 35 5.41672Z" stroke="#323232" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5.41672V32.5032L6.24943 32.4288V32.4288L7.44454 32.3704V32.3704L8.58533 32.3281V32.3281L9.6718 32.3019C9.84835 32.2989 10.0226 32.2965 10.1947 32.2948L11.1996 32.2927V32.2927L12.1503 32.3066V32.3066L13.0466 32.3365V32.3365L13.8886 32.3826C14.1603 32.4006 14.4228 32.4213 14.6763 32.4447L15.4097 32.5228C18.3522 32.8819 19.88 33.6591 19.9932 34.8546L20 34.9436V34.9436V9.36518V9.36518C20 6.15055 16.6681 4.68303 10.0042 4.96264L8.97959 5.01768C8.80466 5.02904 8.62765 5.04149 8.44856 5.05503L7.34902 5.14939C6.97418 5.18521 6.591 5.22539 6.1995 5.26995L5 5.41672V5.41672Z" stroke="#323232" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </div>
                                <p className='headers_navigation_link_title'>Конструктор</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={catalog}/>
                                </div>
                                <p className='headers_navigation_link_title'>Каталог</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={client}/>
                                </div>
                                <p className='headers_navigation_link_title'>Клиенты</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={order}/>
                                </div>
                                <p className='headers_navigation_link_title'>Заказы</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={integration}/>
                                </div>
                                <p className='headers_navigation_link_title'>Интеграции</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={statistic}/>
                                </div>
                                <p className='headers_navigation_link_title'>Статистика</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={newsletter}/>
                                </div>
                                <p className='headers_navigation_link_title'>Рассылка</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={dialogs}/>
                                </div>
                                <p className='headers_navigation_link_title'>Диалоги</p>
                            </Link>
                            <Link className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    <img src={settings}/>
                                </div>
                                <p className='headers_navigation_link_title'>Настройки</p>
                            </Link>
                        </div>
                        <div className='header_switch_notification_profile_buttons_wrapper'>
                            <div className='header_switch_input_box'>
                                <Switch
                                    name="light"
                                    labelLeft="Тестовая версия"
                                    labelRight="Рабочая версия"
                                    style={{width: '100%'}}
                                    // checked={this.state.checked}
                                    // onChange={this.handleChangeSwitch}
                                />
                            </div>
                            <button className='header_volume_of_sales_btn'>
                                <span className='header_volume_of_sales_btn_span1'>Объем продаж </span>
                                <span className='header_volume_of_sales_btn_span2'>34500 ₽</span>
                            </button>
                            <div className='header_notification_icon_info_wrapper'>
                                <div className='header_notification_icon'>
                                    <img src={notification}/>
                                </div>
                                <p className='header_notification_icon_info'>
                                    <span className='header_notification_icon_info_span1'>Новые</span>
                                    <div className='header_notification_icon_info_span5'><span className='header_notification_icon_info_span2'>0</span> заказов</div>
                                    <span className='header_notification_icon_info_span3'>0 ₽</span>
                                </p>

                            </div>
                            <button className='header_profile_btn'>A</button>
                        </div>

                        <button className='hamburger_menu_btn' onClick={() => {
                            setShowMobileMenu(true)
                            disableBodyScroll()
                        }}>
                            <img src={hamburger_icon}/>
                        </button>
                    </div>

                </div>
                {show_mobile_menu &&
                    <div className='mobile_menu'>
                        <div className='mobile_menu_wrapper'>
                            <button className='mobile_menu_close_btn' onClick={() => {
                                setShowMobileMenu(false)
                                enableBodyScroll()
                            }}>
                                <img src={close_icon}/>
                            </button>
                            <div className='mobile_header_switch_notification_profile_buttons_wrapper'>
                                <div className='header_switch_input_box'>
                                    <Switch
                                        name="light"
                                        labelLeft="Тестовая версия"
                                        labelRight="Рабочая версия"
                                        style={{width: '100%'}}
                                        // checked={this.state.checked}
                                        // onChange={this.handleChangeSwitch}
                                    />
                                </div>
                                <button className='header_volume_of_sales_btn'>
                                    <span className='header_volume_of_sales_btn_span1'>Объем продаж </span>
                                    <span className='header_volume_of_sales_btn_span2'>34500 ₽</span>
                                </button>
                                <div className='header_notification_profile_btn_main_wrapper'>
                                    <div className='header_notification_icon_info_wrapper'>
                                        <div className='header_notification_icon'>
                                            <img src={notification}/>
                                        </div>
                                        <p className='header_notification_icon_info'>
                                            <span className='header_notification_icon_info_span1'>Новые</span>
                                            <div className='header_notification_icon_info_span5'><span className='header_notification_icon_info_span2'>0</span> заказов</div>
                                            <span className='header_notification_icon_info_span3'>0 ₽</span>
                                        </p>

                                    </div>
                                    <button className='header_profile_btn'>A</button>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>

        </>
    );
}
