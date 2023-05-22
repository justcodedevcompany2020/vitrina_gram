import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/product_categories.css';
import Header from "./includes/Header";
import DropzoneForLogo from "./includes/DropzoneForLogo";
import DropzoneForBanner from "./includes/DropzoneForBanner";
import Select from 'react-select'
import { Switch } from "react-switch-input";
// import {Events} from "react-dropzone/typings/tests/events";
import add_btn_icon from  '../../assets/svg/add_btn_icon.svg'
import add_icon from '../../assets/svg/add_icon.svg'


let sl_set = {};

export default function NewCatalog () {
    const [value, setValue] = useState(undefined);
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_creating_new_feature, setShowCreatingNewFeature] = useState(false);
    const [show_edit_icon, setShowEditIcon] = useState(false);
    const [new_feature, setNewFeature] = useState('');

    const main_categories = {
        categories: [
            {id:1, name: 'Авто, мото', active: true},
            {id:2, name: 'Детские товары', active: false},
            {id:3, name: 'Дом и дача', active: false},
            {id:4, name: 'Досуг, развлечения, хобби', active: false},
            {id:5, name: 'Еда и продукты', active: false},
            {id:6, name: 'Здоровье и медицина', active: false},
            {id:7, name: 'Товары для взрослых 18+', active: false},
            {id:8, name: 'Оборудование для бизнеса', active: false},
            {id:9, name: 'Треннинги, виртуальные товары', active: false},
            {id:10, name: 'Подарки, украшения, цветы', active: false},
            {id:11, name: 'Спорт, туризм, охота, рыбалка', active: false},
            {id:12, name: 'Строительство и ремонт', active: false},
            {id:13, name: 'Косметика, парфюмерия', active: false},
            {id:14, name: 'Зоотовары', active: false},
            {id:15, name: 'Одежда, обувь и аксессуары', active: false},
            {id:16, name: 'Электроника и бытовая техника', active: false},
            {id:17, name: 'Товары для офиса, канцелярия', active: false},
            {id:18, name: 'Услуги', active: false},
        ],
        subs_cats: [
            [
                {id:1, name: 'Автохимия и автокосметика', active: true},
                {id:2, name: 'Автомобильные инструменты', active: false},
                {id:3, name: 'Аксессуары и оборудование', active: false},
                {id:4, name: 'Аудио- и видеотехника', active: false},
                {id:5, name: 'Запчасти', active: false},
            ],
            [
                {id:1, name: 'Ароматизаторы салона', active: true},
                {id:2, name: 'Для малярных работ', active: false},
                {id:3, name: 'Клеи, герметики и фиксаторы', active: false},
                {id:4, name: 'Технические очистители', active: false},
                {id:5, name: 'Уход за кузовом', active: false},
                {id:6, name: 'Уход за салоном', active: false},
                {id:7, name: 'Уход за стеклами и фарами', active: false},
                {id:8, name: 'Уход за шинами и дисками', active: false},
            ],
        ]
    }

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
                                        to={'/new_catalog'}
                                        className="constructor_item_link"
                                    >
                                        Характеристика товара
                                    </Link>
                                    <Link
                                        className="constructor_item_link"
                                        style={{
                                            color: '#00C5F2'
                                        }}
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
                                <div className='product_categories_items_main_wrapper_parent'>
                                    <div className='product_categories_items_main_wrapper'>
                                        <div className='product_categories_items_title_edit_btn_wrapper'>
                                            <h1 className='product_categories_item_main_title'>Категории товара</h1>
                                            {show_edit_icon ?
                                                <button
                                                    className='product_categories_edit_btn'
                                                    onClick={() => {
                                                        setShowEditIcon(false)
                                                    }}
                                                    style={{
                                                        width: 130
                                                    }}
                                                >
                                                    Сохранить
                                                </button>

                                                :
                                                <button
                                                    className='product_categories_edit_btn'
                                                    onClick={() => {
                                                        setShowEditIcon(true)
                                                    }}
                                                >
                                                    Редактировать
                                                </button>
                                            }




                                        </div>
                                        <div className='product_categories_items_wrapper'>
                                            <div className='product_categories_category_items'>
                                                {main_categories.categories.map((category_item, index) => {

                                                    return (

                                                        <div
                                                            key={index}
                                                            className='product_categories_category_item'
                                                            style={{
                                                                backgroundColor: category_item.active ? '#0165E1' : '#ffffff',
                                                                border: category_item.active ? '1px solid #0165E1' : '1px solid #BCBCBC',
                                                                boxShadow: category_item.active ? ' 0px 4px 4px rgba(0, 0, 0, 0.25)' : '',
                                                            }}
                                                        >
                                                            {show_edit_icon &&
                                                            <button
                                                                className='product_detail_item_delete_btn'
                                                                style={{
                                                                    background: category_item.active ? '#00C5F295' : '#bcbcbc54',
                                                                    // opacity: 0.32
                                                                }}
                                                            >
                                                                {category_item.active ?
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
                                                                className='product_categories_category_item_name'
                                                                style={{
                                                                    color: category_item.active ? '#ffffff' : '#323232',
                                                                    fontWeight: category_item.active ? '500' : '400',
                                                                }}
                                                            >
                                                           {category_item.name}
                                                       </span>

                                                        </div>

                                                    );
                                                })}

                                            </div>
                                            <div className='product_categories_subs_items'>
                                                {main_categories.subs_cats.map((general_item, index) => {

                                                    return (

                                                        <div
                                                            key={index}
                                                            className='product_categories_subs_item'
                                                        >

                                                            <div
                                                                className='product_categories_subs_item_child_wrapper'
                                                            >
                                                                {general_item.map((child_item, index) => {

                                                                    return (

                                                                        <div
                                                                            key={index}
                                                                            className='product_categories_subs_item_child'
                                                                            style={{
                                                                                backgroundColor: child_item.active ? '#0165E1' : '#ffffff',
                                                                                border: child_item.active ? '1px solid #0165E1' : '1px solid #BCBCBC',
                                                                                boxShadow: child_item.active ? ' 0px 4px 4px rgba(0, 0, 0, 0.25)' : '',
                                                                            }}
                                                                        >

                                                                            {show_edit_icon &&
                                                                            <button
                                                                                className='product_detail_item_delete_btn'
                                                                                style={{
                                                                                    background: child_item.active ? '#00C5F295' : '#bcbcbc54',
                                                                                    // opacity: 0.32
                                                                                }}
                                                                            >
                                                                                {child_item.active ?
                                                                                    <svg width="8" height="8"
                                                                                         viewBox="0 0 6 6" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M5 1L1 5" stroke="#ffffff"
                                                                                              stroke-linecap="round"
                                                                                              stroke-linejoin="round"/>
                                                                                        <path d="M1 1L5 5" stroke="#ffffff"
                                                                                              stroke-linecap="round"
                                                                                              stroke-linejoin="round"/>
                                                                                    </svg>
                                                                                    :
                                                                                    <svg width="8" height="8"
                                                                                         viewBox="0 0 6 6" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M5 1L1 5" stroke="#323232"
                                                                                              stroke-linecap="round"
                                                                                              stroke-linejoin="round"/>
                                                                                        <path d="M1 1L5 5" stroke="#323232"
                                                                                              stroke-linecap="round"
                                                                                              stroke-linejoin="round"/>
                                                                                    </svg>
                                                                                }


                                                                            </button>
                                                                            }
                                                                            <span
                                                                                className='product_categories_subs_item_child_title'
                                                                                style={{
                                                                                    color: child_item.active ? '#ffffff' : '#323232',
                                                                                    fontWeight: child_item.active ? '500' : '400',
                                                                                }}
                                                                            >
                                                                           {child_item.name}
                                                                       </span>
                                                                        </div>

                                                                    );
                                                                })}


                                                                <button
                                                                    className='product_categories_add_btn'
                                                                    onClick={() => {
                                                                        setShowCreatingNewFeature(true)
                                                                        disableBodyScroll()

                                                                    }}
                                                                >
                                                                    <img src={add_icon}/>
                                                                </button>

                                                            </div>


                                                        </div>

                                                    );
                                                })}
                                            </div>
                                            <button
                                                className='product_categories_add_btn'
                                                style={{
                                                    marginTop: 30
                                                }}
                                                onClick={() => {
                                                    setShowCreatingNewFeature(true)
                                                    disableBodyScroll()

                                                }}
                                            >
                                                <img src={add_icon}/>
                                            </button>
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
                                        enableBodyScroll()
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



