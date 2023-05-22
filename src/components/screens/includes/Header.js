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
import { useLocation, Link } from 'react-router-dom';


import { Link as LinkScroll } from 'react-scroll';
// import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
import '../../../assets/css/header_style.css';
import logo from '../../../assets/svg/logo.svg';
import catalog from '../../../assets/svg/catalog.svg';
import catalog_active from '../../../assets/svg/catalog_active.svg';
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
import constructor_no_active from '../../../assets/svg/constructor_no_active.svg';


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

    const  pathName = () => {
        let name = window.location.pathname;
        console.log(name, 'nameee')
        return name
    }



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
                            <Link to={'/'} className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    {pathName() == '/' ?
                                        <svg width="40" height="33" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.2" x="2" y="12" width="28" height="17" fill="#0165E1"/>
                                            <circle cx="8" cy="17" r="2.25" stroke="#0165E1" stroke-width="1.5"/>
                                            <circle cx="16" cy="17" r="2.25" stroke="#0165E1" stroke-width="1.5"/>
                                            <circle cx="24" cy="17" r="2.25" stroke="#0165E1" stroke-width="1.5"/>
                                            <circle cx="8" cy="24" r="2.25" stroke="#0165E1" stroke-width="1.5"/>
                                            <circle cx="16" cy="24" r="2.25" stroke="#0165E1" stroke-width="1.5"/>
                                            <circle cx="24" cy="24" r="2.25" stroke="#0165E1" stroke-width="1.5"/>
                                            <mask id="path-8-inside-1_1615_7179" fill="white">
                                                <rect x="32.3027" width="32" height="6" rx="1" transform="rotate(62.0943 32.3027 0)"/>
                                            </mask>
                                            <rect x="32.3027" width="45" height="6" rx="1" transform="rotate(62.0943 32.3027 0)" fill="#0165E1" stroke="#0165E1" stroke-width="6" mask="url(#path-8-inside-1_1615_7179)"/>
                                            <path d="M35.7604 4.3923C36.0045 4.26306 36.3071 4.35612 36.4363 4.60015L38.3084 8.13503C38.4376 8.37906 38.3446 8.68166 38.1005 8.8109L37.6587 9.0449L35.3186 4.62631L35.7604 4.3923Z" fill="#0165E1" stroke="#0165E1"/>
                                            <path d="M39.5046 11.4616C39.7486 11.3324 40.0512 11.4255 40.1805 11.6695L42.0525 15.2044C42.1818 15.4484 42.0887 15.751 41.8447 15.8802L41.4028 16.1142L39.0627 11.6956L39.5046 11.4616Z" fill="#0165E1" stroke="#0165E1"/>
                                            <path d="M43.2478 18.5315C43.4918 18.4022 43.7944 18.4953 43.9236 18.7393L45.7957 22.2742C45.9249 22.5182 45.8319 22.8208 45.5878 22.9501L45.146 23.1841L42.8059 18.7655L43.2478 18.5315Z" fill="#0165E1" stroke="#0165E1"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 13H3V14V27V28H4H28H29V27V14V13H28H4ZM0 14C0 11.7909 1.79086 10 4 10H28C30.2091 10 32 11.7909 32 14V27C32 29.2091 30.2091 31 28 31H4C1.79086 31 0 29.2091 0 27V14Z" fill="#0165E1"/>
                                        </svg>

                                        :
                                        <img src={constructor_no_active}/>
                                    }



                                </div>
                                <p className='headers_navigation_link_title'>Конструктор</p>
                            </Link>
                            <Link to={'/new_catalog'} className="headers_navigation_link">
                                <div className='headers_navigation_link_img'>
                                    {pathName() == '/new_catalog' ?
                                        <img src={catalog_active}/>
                                        :
                                        <img src={catalog}/>
                                    }


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
                            // setShowMobileMenu(true)
                            // disableBodyScroll()
                            home()
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
