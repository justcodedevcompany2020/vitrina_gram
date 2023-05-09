import React from 'react'
import { Link } from 'react-router-dom'
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


let sl_set = {};

let myMap;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }



    componentDidMount() {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }


        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', this.handleScroll);


    }


    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentWillMount() {
        sl_set = {
            infinite: true,
            dots: false,
            arrows: false,
            fade: true,
            waitForAnimate: false,
            /*autoplaySpeed: 3000,
            autoplay: true,*/
            pauseOnHover: false,
            beforeChange: (oldIndex, newIndex) => {
                this.setState({
                    cur_pr: (newIndex + 1),
                    sliding: true
                })
            },
            afterChange: (newIndex) => {
                this.setState({
                    sliding: false
                })
            }
        }
    }

    handleScroll = (ev) => {
        let scrollTop = window.scrollY;

        if (scrollTop > 0) {
            this.setState({
                headerScroll: true
            })
        } else {
            this.setState({
                headerScroll: false
            })
        }

    }




    render() {
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
                                          <img src={constructor}/>
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
                            </div>

                        </div>
                    </div>

            </>

        )
    }
}
