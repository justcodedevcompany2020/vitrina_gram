import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/setnewsletter.css';
import Header from "./includes/Header";
import DropzoneForImage from "./includes/DropzoneForImage";
import Select from 'react-select'
import { Switch } from "react-switch-input";
import textarea_icon from  '../../assets/svg/textarea_icon.svg'



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
    const [selectedNewsletter3, setSelectedNewsletter3] = useState('');



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

    const [name_newsletter, setNameNewsletter] = useState('');
    const [event_name, setEventName] = useState('');

    const setNewsletter = (event) => {
        setNameNewsletter(event.target.value);
        console.log(name_newsletter)

    };
    const setEventName2 = (event) => {
        setEventName(event.target.value);
        console.log(event_name)

    };

    const handleOptionChange3 = (changeEvent) => {
        setSelectedNewsletter3(changeEvent.target.value);

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
                                        to={'/newsletter'}
                                        className="constructor_item_link"
                                    >
                                        Запланированные
                                    </Link>
                                    <Link
                                        style={{
                                            color: '#00C5F2'
                                        }}
                                        className="constructor_item_link"
                                    >
                                        Отправленные
                                    </Link>
                                    <Link className="constructor_item_link">
                                        Черновики
                                    </Link>

                                </div>
                                <div className='setNewsletter_wrapper'>
                                    <div className='setNewsletter_items_wrapper'>
                                        <div className="setNewsletter_item">
                                            <div className='setNewsletter_item_input_title_wrapper'>
                                                <p className='setNewsletter_item_input_title'>Название рассылки</p>
                                                <input
                                                    type='text'
                                                    name='name_newsletter'
                                                    className='setNewsletter_item_input_field'
                                                    placeholder='Ввести название рассылки'
                                                    value={name_newsletter}
                                                    onChange={setNewsletter}
                                                />
                                            </div>
                                            <div className='setNewsletter_item_input_title_wrapper'>
                                                <p className='setNewsletter_item_input_title'>Название события</p>
                                                <input
                                                    type='text'
                                                    name='event_name'
                                                    className='setNewsletter_item_input_field'
                                                    placeholder='Ввести название события'
                                                    value={event_name}
                                                    onChange={setEventName2}
                                                />
                                            </div>
                                            <div className='setNewsletter_item_textarea_img_title_wrapper'>
                                                <p className='setNewsletter_item_textarea_title'>Введите текст сообщения</p>
                                                <div className='setNewsletter_item_textarea_img_field_wrapper'>
                                                    <div className='setNewsletter_item_textarea_img'>
                                                        <img src={textarea_icon}/>
                                                    </div>
                                                    <textarea name="message" className='setNewsletter_item_textarea_field'>Текст сообщения</textarea>
                                                </div>
                                            </div>
                                            <DropzoneForImage/>
                                        </div>
                                        <div className="setNewsletter_item">
                                            <div className="setNewsletter_item_select">
                                                <p className='setNewsletter_item_select_title'>Дополнительные настройки</p>
                                                <Select placeholder="" id='setNewsletter_select' options={options1} />
                                            </div>
                                            <div className='setNewsletter_item_check_input_wrapper'>
                                                <label className='container3'>
                                                    <input
                                                        type='radio'
                                                        name='newsletter'
                                                        value='newsletter'
                                                        checked={selectedNewsletter3 === 'newsletter'}
                                                        onChange={handleOptionChange3}
                                                    />


                                                    <span className='checkmark3'></span>
                                                    <p className='setNewsletter_item_check_input_title'>Отключить уведомления без звука</p>
                                                </label>
                                            </div>
                                            <div className='setNewsletter_item_calendar_wrapper'>
                                                <div className='setNewsletter_item_calendar_title_btn_wrapper'>
                                                    <p className='setNewsletter_item_calendar_title'>Дата отправки рассылки</p>
                                                    <button className='setNewsletter_item_calendar_delete_btn'>Очистить</button>
                                                </div>
                                                <div className='setNewsletter_item_calendar_box'></div>
                                            </div>
                                            <div className='setNewsletter_item_hour_wrapper'>
                                                <div className='setNewsletter_item_hour_title_btn_wrapper'>
                                                    <p className='setNewsletter_item_hour_title'>Время отправки рассылки</p>
                                                    <button className='setNewsletter_item_hour_delete_btn'>Очистить</button>
                                                </div>
                                                <div className='setNewsletter_item_our_box'></div>
                                            </div>
                                            <div className='setNewsletter_item_buttons_wrapper'>
                                                <button className='setNewsletter_item_save_button'>Сохранить в черновик</button>
                                                <button className='setNewsletter_item_send_button'>Отправить</button>
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



