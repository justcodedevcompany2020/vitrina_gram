import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/new_client_card.css';
import Header from "./includes/Header";
import DropzoneForImage from "./includes/DropzoneForImage";
import Select from 'react-select'
import { Switch } from "react-switch-input";
import trash from '../../assets/svg/trash_svg.svg'


let sl_set = {};

export default function Newsletter () {

    const [headerScroll, setHeaderScroll] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [check_card_detail1, setCheckCardDetail1] = useState('');
    const [check_card_detail2, setCheckCardDetail2] = useState('');
    const [check_card_detail3, setCheckCardDetail3] = useState('');
    const [clients_status] = useState([
        { value: 'Arial', label: 'Arial' },
        { value: 'Verdana', label: 'Verdana' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Courier New', label: 'Courier New' },
    ]);
    const [clients_types] = useState([
        { value: 'Arial', label: 'Arial' },
        { value: 'Verdana', label: 'Verdana' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Courier New', label: 'Courier New' },
    ]);


    const imageBodyTemplate = (product) => {
        return (
            <div>
                <span>{product.address}</span>
                <img src={product.delete_icon} alt={product.delete_icon} className="w-6rem shadow-2 border-round"/>
            </div>
        )
    };

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


    const handleOptionChange1 = () => {
        setCheckCardDetail1(!check_card_detail1);

    };

    const handleOptionChange2 = () => {
        setCheckCardDetail2(!check_card_detail2);

    };

    const handleOptionChange3 = () => {
        setCheckCardDetail3(!check_card_detail3);

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
                                        to={'/client_users'}
                                        className="constructor_item_link"
                                    >
                                        Пользователи
                                    </Link>
                                    <Link
                                        className="constructor_item_link"
                                    >
                                        Группы
                                    </Link>
                                    <Link
                                        className="constructor_item_link"
                                        style={{
                                            color: '#00C5F2'
                                        }}
                                    >
                                        Карточка клиента
                                    </Link>

                                </div>

                                <div className='client_card_main_wrapper'>
                                    <div className='client_card_wrapper'>
                                        <div className='client_card_item1'>
                                            <div className='client_card_item1_box'>
                                                <div className='client_card_item1_child1'>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Имя</p>
                                                        <input type="text" className='client_card_item_input_field' placeholder='Введите имя'/>
                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Фамилия</p>
                                                        <input type="text" className='client_card_item_input_field' placeholder='Введите фамилия'/>
                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Дата рождения</p>
                                                        <input type="text" className='client_card_item_input_field' placeholder='Введите Дата рождения'/>

                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Телефон</p>
                                                        <input type="number" className='client_card_item_input_field' placeholder='+7'/>
                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>E-mail</p>
                                                        <input type="email" className='client_card_item_input_field' placeholder='xxxx@mail.ru'/>
                                                    </div>
                                                </div>
                                                <div className='client_card_item1_child1'>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Статус клиента</p>
                                                        <Select id='client_status' placeholder='Выберите канал' options={clients_status} />
                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Тип клиента</p>
                                                        <Select id='client_type' placeholder='Выберите канал' options={clients_types} />
                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>Реферальная ссылка</p>
                                                        <input type="text" className='client_card_item_input_field' placeholder='sfjjs478'/>
                                                    </div>
                                                    <div className='client_card_item_input_title_wrapper'>
                                                        <p className='client_card_item_input_title'>ID пользователя</p>
                                                        <input type="text" className='client_card_item_input_field' placeholder='@456738622'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='client_card_checkboxes_wrapper'>
                                                <label className='client_card_checkbox1'>
                                                    <p className='client_card_checkbox_title'>Подписка на новости</p>
                                                    <input
                                                        type='checkbox'
                                                        value={check_card_detail1}
                                                        checked={check_card_detail1}
                                                        onChange={handleOptionChange1}
                                                    />


                                                    <span className='client_card_checkmark1'></span>
                                                </label>
                                                <label className='client_card_checkbox2'>
                                                    <p className='client_card_checkbox_title'>Согласие на обработку персональных данных</p>
                                                    <input
                                                        type='checkbox'
                                                        value={check_card_detail2}
                                                        checked={check_card_detail2}
                                                        onChange={handleOptionChange2}
                                                    />


                                                    <span className='client_card_checkmark2'></span>
                                                </label>
                                                <label className='client_card_checkbox3'>
                                                    <p className='client_card_checkbox_title'>Получать уведомления о новых заказах</p>
                                                    <input
                                                        type='checkbox'
                                                        value={check_card_detail3}
                                                        checked={check_card_detail3}
                                                        onChange={handleOptionChange3}
                                                    />


                                                    <span className='client_card_checkmark3'></span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className='client_card_item2'>
                                            <p className='client_card_item2_title'>Информация о доставке</p>
                                            <div className='client_card_item_input_title_wrapper'>
                                                <p className='client_card_item_input_title'>Населенный пункт</p>
                                                <input type="text" className='client_card_item_input_field' placeholder='Москва'/>
                                            </div>
                                            <div className='client_card_item_input_title_wrapper'>
                                                <p className='client_card_item_input_title'>Почтовый индекс</p>
                                                <input type="text" className='client_card_item_input_field' placeholder='488422'/>
                                            </div>
                                            <div className='client_card_item_input_title_wrapper'>
                                                <p className='client_card_item_input_title'>Улица</p>
                                                <input type="text" className='client_card_item_input_field' placeholder='Заморная'/>
                                            </div>
                                            <div className='client_card_item_input_title_wrapper'>
                                                <p className='client_card_item_input_title'>Дом</p>
                                                <input type="text" className='client_card_item_input_field' placeholder='133'/>
                                            </div>
                                            <div className='client_card_item_input_title_wrapper'>
                                                <p className='client_card_item_input_title'>Квартира</p>
                                                <input type="text" className='client_card_item_input_field' placeholder='Заморная'/>
                                            </div>
                                            <div className='client_card_item_input_title_wrapper'>
                                                <p className='client_card_item_input_title'>Коментарий к адресу</p>
                                                <textarea placeholder='Введите коментарий' className='client_card_item_textarea'></textarea>
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



