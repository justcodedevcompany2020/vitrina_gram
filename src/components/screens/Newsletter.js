import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/newsletter.css';
import Header from "./includes/Header";
import DropzoneForLogo from "./includes/DropzoneForLogo";
import DropzoneForBanner from "./includes/DropzoneForBanner";
import Select from 'react-select'
import { Switch } from "react-switch-input";
import add_btn_icon from  '../../assets/svg/add_btn_icon.svg'
import make_newsletter from '../../assets/svg/make_newsletter_icon.svg'
import newsletter from "../../assets/svg/newsletter.svg";
import trash from "../../assets/svg/trash_icon.svg";


let sl_set = {};

export default function Newsletter () {
    const [options1] = useState([
        { value: 'Arial', label: 'Arial' },
        { value: 'Verdana', label: 'Verdana' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Courier New', label: 'Courier New' },
    ]);
    const [value, setValue] = useState(undefined);
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_creating_new_feature, setShowCreatingNewFeature] = useState(false);
    const [show_edit_icon, setShowEditIcon] = useState(false);
    const [new_feature, setNewFeature] = useState('');
    const [selectedAllTypes, setSelectedAllTypes] = useState('');
    const [selectedNewsletter1, setSelectedNewsletter1] = useState('');
    const [selectedNewsletter2, setSelectedNewsletter2] = useState('');


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

    useEffect(() => {
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
                setSliding(true);
                setCurPr(newIndex + 1);
            },
            afterChange: (newIndex) => {
                setSliding(false);
            }
        };
    }, []);

    const handleLoad = () => {
    };

    const handleScroll = (ev) => {
        let scrollTop = window.scrollY;

        if (scrollTop > 0) {
            setHeaderScroll(true);
        } else {
            setHeaderScroll(false);
        }
    };


    const disableBodyScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = "auto";
    };

    const handleOptionChange = () => {
        setSelectedAllTypes(!selectedAllTypes);

    };


    const handleOptionChange2 = () => {
        setSelectedNewsletter1(!selectedNewsletter1);

    };

    const handleOptionChange3 = () => {
        setSelectedNewsletter2(!selectedNewsletter2);

    };

    return (
        <>

            <div className='main_wrapper'>
                <Header disableBodyScroll={disableBodyScroll} enableBodyScroll={enableBodyScroll}/>
                <div className='main'>
                    <section className='constructor'>
                        <div className="constructor_wrapper">
                            <div className='constructor_items_wrapper'>
                                <div className='constructor_item1'>
                                    <Link
                                        className="constructor_item_link"
                                        style={{
                                            color: '#00C5F2'
                                        }}
                                    >
                                        Запланированные
                                    </Link>
                                    <Link
                                        to={'/sent_newsletter'}
                                        className="constructor_item_link"
                                    >
                                        Отправленные
                                    </Link>
                                    <Link className="constructor_item_link">
                                        Черновики
                                    </Link>

                                </div>
                                <div className="newsletter_main_wrapper">
                                    <div className='newsletter_wrapper'>
                                        <div className="newsletter_items_wrapper">
                                            <div className='newsletter_item_names_wrapper'>
                                                <div
                                                    className="newsletter_item_name_box newsletter_item_name_box10"
                                                    // style={{flex: 1.6}}
                                                >
                                                    <label className='container2'>
                                                        <input
                                                            type='checkbox'
                                                            value={selectedAllTypes}
                                                            checked={selectedAllTypes}
                                                            onChange={handleOptionChange}
                                                        />


                                                        <span className='checkmark2'></span>
                                                        <p className='newsletter_item_name'
                                                           style={{
                                                               textAlign: 'unset'
                                                           }}
                                                        >Название рассылки</p>
                                                    </label>
                                                </div>
                                                <div className="newsletter_item_name_box">
                                                    <p className='newsletter_item_name'>Дата отправки</p>

                                                </div>
                                                <div className="newsletter_item_name_box">
                                                    <p className='newsletter_item_name'>Время отправки</p>

                                                </div>
                                                <div className="newsletter_item_name_box">
                                                    <p className='newsletter_item_name'>Отправлено</p>

                                                </div>
                                                <div className="newsletter_item_name_box">
                                                    <p className='newsletter_item_name'>Получено</p>
                                                </div>
                                                <div className="newsletter_item_name_box">
                                                    <p className='newsletter_item_name'>Статус выполнения</p>
                                                </div>
                                                <button className='make_newsletter_btn'>
                                                    <span className='make_newsletter_btn_icon'>
                                                        <img src={make_newsletter}/>
                                                    </span>
                                                    <span className='make_newsletter_btn_title'>Создать рассылку</span>
                                                </button>
                                            </div>
                                            <div className="newsletter_item">
                                                <div
                                                    className="newsletter_item_child newsletter_item_name_box10"
                                                    // style={{flex: 1.6}}
                                                >
                                                    <label className='container2'>
                                                        <input
                                                            type='checkbox'
                                                            value={selectedNewsletter1}
                                                            checked={selectedNewsletter1}
                                                            onChange={handleOptionChange2}
                                                        />


                                                        <span className='checkmark2'></span>
                                                        <p className='newsletter_item_child_name'   style={{
                                                            textAlign: 'unset'
                                                        }}>Рекламная рассылка к 8 марта</p>
                                                    </label>
                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>February. 20. 2023</p>
                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>20:49</p>
                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>154</p>

                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>64</p>

                                                </div>
                                                <div className="newsletter_item_child2">
                                                    {/*<p className='newsletter_item_child_select_title'>Отменена</p>*/}
                                                    <Select placeholder="Отменена" id='newsletter_select2' options={options1} />
                                                </div>
                                                <div
                                                    className="newsletter_item_child"
                                                    style={{display: 'flex', justifyContent: 'flex-end'}}
                                                >
                                                    <button className='newsletter_item_child_delete_btn'>
                                                        <img src={trash}/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="newsletter_item">
                                                <div
                                                    className="newsletter_item_child newsletter_item_name_box10"
                                                    // style={{flex: 1.6}}
                                                >
                                                    <label className='container2'>
                                                        <input
                                                            type='checkbox'
                                                            value={selectedNewsletter2}
                                                            checked={selectedNewsletter2}
                                                            onChange={handleOptionChange3}
                                                        />


                                                        <span className='checkmark2'></span>
                                                        <p className='newsletter_item_child_name'   style={{
                                                            textAlign: 'unset'
                                                        }}>Рекламная рассылка к 23 февраля</p>
                                                    </label>
                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>November. 14. 2022</p>
                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>12:49</p>
                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>5</p>

                                                </div>
                                                <div className="newsletter_item_child">
                                                    <p className='newsletter_item_child_name2'>2</p>

                                                </div>
                                                <div className="newsletter_item_child2">
                                                    {/*<p className='newsletter_item_child_select_title2'>Завершена</p>*/}

                                                    <Select placeholder="Завершена" id='newsletter_select3' options={options1} />
                                                </div>
                                                <div
                                                    className="newsletter_item_child"
                                                    style={{display: 'flex', justifyContent: 'flex-end'}}
                                                >
                                                    <button className='newsletter_item_child_delete_btn'>
                                                        <img src={trash}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </>

    )


}



