import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/new_catalog.css';
import Header from "./includes/Header";
import DropzoneForLogo from "./includes/DropzoneForLogo";
import DropzoneForBanner from "./includes/DropzoneForBanner";
import Select from 'react-select'
import { Switch } from "react-switch-input";
// import {Events} from "react-dropzone/typings/tests/events";
import add_btn_icon from  '../../assets/svg/add_btn_icon.svg'
import close_icon from '../../assets/svg/close.1dde956c7d01ed3104ed86048bc3618b.svg'


let sl_set = {};

export default function NewCatalog () {
    const [value, setValue] = useState(undefined);
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_creating_new_feature, setShowCreatingNewFeature] = useState(false);
    const [show_edit_icon, setShowEditIcon] = useState(false);
    const [new_feature, setNewFeature] = useState('');

    const product_detail_items = [
        {
            id: 1,
            active: true,
            text: 'Категория'
        },
        {
            id: 2,
            active: true,
            text: 'Артикул'
        },
        {
            id: 3,
            active: true,
            text: 'Штрих-код'
        },
        {
            id: 4,
            active: true,
            text: 'Ед. измерения'
        },
        {
            id: 5,
            active: true,
            text: 'Страна производства'
        },
        {
            id: 6,
            active: true,
            text: 'Производитель'
        },

        {
            id: 7,
            active: false,
            text: 'Состав'
        },
        {
            id: 8,
            active: false,
            text: 'Размер'
        },
        {
            id: 9,
            active: false,
            text: 'Цвет'
        },

        {
            id: 10,
            active: false,
            text: 'Цена закупки, руб.'
        },
        {
            id: 11,
            active: false,
            text: 'Наценка, %'
        },
        {
            id: 12,
            active: false,
            text: 'Дата поставки'
        },

        {
            id: 13,
            active: false,
            text: 'Скидка, %'
        },
        {
            id: 14,
            active: false,
            text: 'Популярность'
        },

    ]

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
                                        Характеристика товара
                                    </Link>
                                    <Link
                                        to={'/product_categories'}
                                        className="constructor_item_link"
                                    >
                                        Категории товара
                                    </Link>
                                    <Link className="constructor_item_link">
                                        Все товары
                                    </Link>
                                    <Link className="constructor_item_link">
                                        Карточка товара
                                    </Link>
                                </div>
                                <div className='product_detail_wrapper_main'>
                                    <div className='product_detail_wrapper'>
                                        <div className='product_detail_title_buttons_wrapper'>
                                            <p className='product_detail_title'>
                                                Выберите или добавте характеристику
                                            </p>

                                            <div className='product_detail_add_edit_buttons_wrapper'>
                                                <button
                                                    className='product_detail_add_btn'
                                                    onClick={() => {
                                                        setShowCreatingNewFeature(true)
                                                        // disableBodyScroll()

                                                    }}
                                                >
                                                    <span className='product_detail_add_btn_title'>Добавить</span>
                                                    <span className='product_detail_add_btn_icon'>
                                                    <img src={add_btn_icon}/>
                                                </span>
                                                </button>

                                                {show_edit_icon ?
                                                    <button
                                                        className='product_detail_edit_btn'
                                                        onClick={() => {
                                                            setShowEditIcon(false)
                                                        }}
                                                    >
                                                        Сохранить
                                                    </button>


                                                    :
                                                    <button
                                                        className='product_detail_edit_btn'
                                                        onClick={() => {
                                                            setShowEditIcon(true)
                                                        }}
                                                    >
                                                        Редактировать
                                                    </button>

                                                }

                                            </div>

                                        </div>
                                        <div className='product_detail_items_wrapper'>
                                            {product_detail_items.map((item, index) => {

                                                return (

                                                    <div
                                                        key={index}
                                                        className='product_detail_item'
                                                        style={{
                                                            backgroundColor: item.active ? '#0165E1' : '#ffffff',
                                                            border: item.active ? '1px solid #0165E1' : '1px solid #BCBCBC',
                                                            boxShadow: item.active ? ' 0px 4px 4px rgba(0, 0, 0, 0.25)' : '',
                                                        }}
                                                    >
                                                        {show_edit_icon &&
                                                        <button
                                                            className='product_detail_item_delete_btn'
                                                            style={{
                                                                background: item.active ? '#00C5F295' : '#bcbcbc54',
                                                                // opacity: 0.32
                                                            }}
                                                        >
                                                            {item.active ?
                                                                <svg width="8" height="8" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 1L1 5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path d="M1 1L5 5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                                :
                                                                <svg width="8" height="8" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 1L1 5" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path d="M1 1L5 5" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            }


                                                        </button>
                                                        }

                                                        <span
                                                            className='product_detail_item_title'
                                                            style={{
                                                                color: item.active ? '#ffffff' : '#323232',
                                                                fontWeight: item.active ? '500' : '400',
                                                            }}
                                                        >
                                                       {item.text}
                                                   </span>
                                                    </div>

                                                );
                                            })}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {show_creating_new_feature &&
                        <div className='creating_new_feature_popup'>
                            <div className='creating_new_feature_popup_wrapper'>
                                <h1 className='creating_new_feature_popup_title'>Создание новой характеристики</h1>
                                {/*<button */}
                                {/*    className='creating_new_feature_popup_close_btn' */}
                                {/*    onClick={() => {*/}
                                {/*       setShowCreatingNewFeature(false)*/}
                                {/*       enableBodyScroll()*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    <img src={close_icon}/>*/}
                                {/*</button>*/}
                                <div className='creating_new_feature_popup_input_wrapper'>
                                    <input type="text" name="feature" value={new_feature}
                                           onChange={(e) => this.setState({
                                               new_feature: e.target.value
                                           })}
                                           placeholder='Ввести характеристику'

                                           className='creating_new_feature_popup_input_field' />
                                </div>
                                <div className='creating_new_feature_popup_buttons_wrapper'>
                                    <button
                                        className='creating_new_feature_popup_cancel_button'
                                        onClick={() => {
                                            setShowCreatingNewFeature(false)
                                            // enableBodyScroll()
                                        }}
                                    >
                                        Отмена
                                    </button>
                                    <button className='creating_new_feature_popup_add_button'>Добавить</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </>

    )


}



