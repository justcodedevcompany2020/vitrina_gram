import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/client_users.css';
import Header from "./includes/Header";
import DropzoneForImage from "./includes/DropzoneForImage";
import Select from 'react-select'
import { Switch } from "react-switch-input";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import trash from '../../assets/svg/trash_svg.svg'
import search_icon2 from '../../assets/svg/search_icon2.svg'
import plus_icon from '../../assets/svg/plus_icon.svg'
import client_icon from '../../assets/svg/client_icon.svg'
import client_icon2 from '../../assets/svg/client_icon2.svg'
import settings_icon1 from '../../assets/svg/settings_icon1.svg'
import settings_icon2 from '../../assets/svg/settings_icon2.svg'

let sl_set = {};

export default function Newsletter () {

    const [headerScroll, setHeaderScroll] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [show_settings_menu, setShowSettingsMenu] = useState(false);
    const [select_settings_item1, setSelectSettingsItem1] = useState('');
    const [select_settings_item2, setSelectSettingsItem2] = useState('');
    const [select_settings_item3, setSelectSettingsItem3] = useState('');
    const [select_settings_item4, setSelectSettingsItem4] = useState('');
    const [select_settings_item5, setSelectSettingsItem5] = useState('');
    const [select_settings_item6, setSelectSettingsItem6] = useState('');
    const [select_settings_item7, setSelectSettingsItem7] = useState('');
    const [select_settings_item8, setSelectSettingsItem8] = useState('');
    const [select_settings_item9, setSelectSettingsItem9] = useState('');
    const [select_settings_item10, setSelectSettingsItem10] = useState('');
    const [select_settings_item11, setSelectSettingsItem11] = useState('');
    const [select_settings_item12, setSelectSettingsItem12] = useState('');
    const [select_settings_item13, setSelectSettingsItem13] = useState('');
    const [select_settings_item14, setSelectSettingsItem14] = useState('');
    const [select_settings_item15, setSelectSettingsItem15] = useState('');
    const [select_settings_item16, setSelectSettingsItem16] = useState('');

    const data_table_info = [
        {
            id: 1,
            user_name: '@Lil',
            user_id: '278888333',
            name: 'Иван',
            surname: 'Пупкин',
            phone: '+79992227755',
            date: '27.03.1995',
            email: 'user3232323@gmail.com',
            address: 'Москва ул. Гагарина д. 3',
            delete_icon: trash
        },
       {
           id: 2,
           user_name: '@Loremipsun',
           user_id: '23212422222',
           name: 'Александра',
           surname: 'Рубенштерн',
           phone: '+79844686633',
           date: '04.07.2000',
           email: 'Loremipsum3@gmail.com',
           address: 'Москва ул. Дуки д. 45',
           delete_icon: trash
       },
       {
           id: 3,
           user_name: '@Lil',
           user_id: '278888333',
           name: 'Иван',
           surname: 'Пупкин',
           phone: '+79992227755',
           date: '27.03.1995',
           email: 'user3232323@gmail.com',
           address: 'Москва ул. Гагарина д. 3',
           delete_icon: trash
       },
       {
           id: 4,
           user_name: '@Loremipsun',
           user_id: '23212422222',
           name: 'Александра',
           surname: 'Рубенштерн',
           phone: '+79844686633',
           date: '04.07.2000',
           email: 'Loremipsum3@gmail.com',
           address: 'Москва ул. Дуки д. 45',
           delete_icon: trash
       },
       {
           id: 5,
           user_name: '@Lil',
           user_id: '278888333',
           name: 'Иван',
           surname: 'Пупкин',
           phone: '+79992227755',
           date: '27.03.1995',
           email: 'user3232323@gmail.com',
           address: 'Москва ул. Гагарина д. 3',
           delete_icon: trash
       },
       {
           id: 6,
           user_name: '@Loremipsun',
           user_id: '23212422222',
           name: 'Александра',
           surname: 'Рубенштерн',
           phone: '+79844686633',
           date: '04.07.2000',
           email: 'Loremipsum3@gmail.com',
           address: 'Москва ул. Дуки д. 45',
           delete_icon: trash
       },
       {
           id: 7,
           user_name: '@Lil',
           user_id: '278888333',
           name: 'Иван',
           surname: 'Пупкин',
           phone: '+79992227755',
           date: '27.03.1995',
           email: 'user3232323@gmail.com',
           address: 'Москва ул. Гагарина д. 3',
           delete_icon: trash
       },
       {
           id: 8,
           user_name: '@Loremipsun',
           user_id: '23212422222',
           name: 'Александра',
           surname: 'Рубенштерн',
           phone: '+79844686633',
           date: '04.07.2000',
           email: 'Loremipsum3@gmail.com',
           address: 'Москва ул. Дуки д. 45',
           delete_icon: trash
       },
       {
           id: 9,
           user_name: '@Lil',
           user_id: '278888333',
           name: 'Иван',
           surname: 'Пупкин',
           phone: '+79992227755',
           date: '27.03.1995',
           email: 'user3232323@gmail.com',
           address: 'Москва ул. Гагарина д. 3',
           delete_icon: trash
       },
       {
           id: 10,
           user_name: '@Loremipsun',
           user_id: '23212422222',
           name: 'Александра',
           surname: 'Рубенштерн',
           phone: '+79844686633',
           date: '04.07.2000',
           email: 'Loremipsum3@gmail.com',
           address: 'Москва ул. Дуки д. 45',
           delete_icon: trash
       },
       {
           id: 11,
           user_name: '@Lil',
           user_id: '278888333',
           name: 'Иван',
           surname: 'Пупкин',
           phone: '+79992227755',
           date: '27.03.1995',
           email: 'user3232323@gmail.com',
           address: 'Москва ул. Гагарина д. 3',
           delete_icon: trash
       },


    ]
    const [all_users] = useState([
        { value: 'Arial', label: 'Arial' },
        { value: 'Verdana', label: 'Verdana' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Courier New', label: 'Courier New' },
    ]);
    const [channels] = useState([
        { value: 'Arial', label: 'Arial' },
        { value: 'Verdana', label: 'Verdana' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Courier New', label: 'Courier New' },
    ]);

   const imageBodyTemplate = (product) => {
        return (
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <span>{product.address}</span>
                <img src={product.delete_icon} alt={product.delete_icon} className='table_img'/>
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

    const handleOptionChange = () => {
        setSelectSettingsItem1(!select_settings_item1);

    };


    const handleOptionChange2 = () => {
        setSelectSettingsItem2(!select_settings_item2);

    };

    const handleOptionChange3 = () => {
        setSelectSettingsItem3(!select_settings_item3);

    };


    const handleOptionChange4 = () => {
        setSelectSettingsItem4(!select_settings_item4);

    };

    const handleOptionChange5 = () => {
        setSelectSettingsItem5(!select_settings_item5);

    };

    const handleOptionChange6 = () => {
        setSelectSettingsItem6(!select_settings_item6);

    };
    const handleOptionChange7 = () => {
        setSelectSettingsItem7(!select_settings_item7);

    };


    const handleOptionChange8 = () => {
        setSelectSettingsItem8(!select_settings_item8);

    };

    const handleOptionChange9 = () => {
        setSelectSettingsItem9(!select_settings_item9);

    };


    const handleOptionChange10 = () => {
        setSelectSettingsItem10(!select_settings_item10);

    };

    const handleOptionChange11 = () => {
        setSelectSettingsItem11(!select_settings_item11);

    };

    const handleOptionChange12 = () => {
        setSelectSettingsItem12(!select_settings_item12);

    };

    const handleOptionChange13 = () => {
        setSelectSettingsItem13(!select_settings_item13);

    };


    const handleOptionChange14 = () => {
        setSelectSettingsItem14(!select_settings_item14);

    };

    const handleOptionChange15 = () => {
        setSelectSettingsItem15(!select_settings_item15);

    };


    const handleOptionChange16 = () => {
        setSelectSettingsItem16(!select_settings_item16);

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
                                        Пользователи
                                    </Link>
                                    <Link
                                        className="constructor_item_link"
                                    >
                                        Группы
                                    </Link>
                                    <Link
                                        to={'/new_client_card'}
                                        className="constructor_item_link">
                                        Карточка клиента
                                    </Link>

                                </div>
                                <div className='client_user_main_wrapper'>
                                    <div className='client_user_wrapper'>
                                        <div className='client_user_header_wrapper'>
                                            <div className='client_user_header_search_input_icon_wrapper'>
                                                <input type="text" placeholder='Имя пользователя или короткая ссылка' name='search' className='client_user_header_search_input_field'/>
                                                <button className='client_user_header_search_input_icon'>
                                                    <img src={search_icon2} alt=""/>
                                                </button>
                                            </div>
                                            <Select id='client_all_users_select' placeholder='Все пользователи' options={all_users} />
                                            <Select id='client_channel_select' placeholder='Выберите канал' options={channels} />
                                            <button className='client_user_header_add_user_btn'>
                                                <span className='client_user_header_add_user_btn_icon'>
                                                    <img src={plus_icon} />
                                                </span>
                                                <span className='client_user_header_add_user_btn_title'>Добавить пользователя</span>
                                            </button>
                                            <button className='client_user_header_btn'>
                                                <img src={client_icon} />
                                            </button>
                                            <button className='client_user_header_btn2'>
                                                <img src={client_icon2} />
                                            </button>
                                            <div className='settings_wrapper'>
                                                <button
                                                    className='client_user_header_settings_btn'
                                                    onClick={() => {
                                                        setShowSettingsMenu(!show_settings_menu)
                                                    }}
                                                >
                                                <span className='client_user_header_settings_btn_icon1'>
                                                    <img src={settings_icon1} alt=""/>
                                                </span>
                                                    <span className='client_user_header_settings_btn_icon2'>
                                                    <img src={settings_icon2} alt=""/>
                                                </span>
                                                </button>
                                                {show_settings_menu &&
                                                     <div className='show_settings_menu'>
                                                    <label className='container10'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item1}
                                                            checked={select_settings_item1}
                                                            onChange={handleOptionChange}
                                                        />


                                                        <span className='checkmark10'></span>
                                                        <p className='settings_menu_item'>Имя пользователя</p>
                                                    </label>
                                                    <label className='container11'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item2}
                                                            checked={select_settings_item2}
                                                            onChange={handleOptionChange2}
                                                        />


                                                        <span className='checkmark11'></span>
                                                        <p className='settings_menu_item'>ID пользователя</p>
                                                    </label>
                                                    <label className='container12'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item3}
                                                            checked={select_settings_item3}
                                                            onChange={handleOptionChange3}
                                                        />


                                                        <span className='checkmark12'></span>
                                                        <p className='settings_menu_item'>Имя</p>
                                                    </label>
                                                    <label className='container13'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item4}
                                                            checked={select_settings_item4}
                                                            onChange={handleOptionChange4}
                                                        />


                                                        <span className='checkmark13'></span>
                                                        <p className='settings_menu_item'>Фамилия</p>
                                                    </label>
                                                    <label className='container14'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item5}
                                                            checked={select_settings_item5}
                                                            onChange={handleOptionChange5}
                                                        />


                                                        <span className='checkmark14'></span>
                                                        <p className='settings_menu_item'>Телефон</p>
                                                    </label>
                                                    <label className='container15'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item6}
                                                            checked={select_settings_item6}
                                                            onChange={handleOptionChange6}
                                                        />


                                                        <span className='checkmark15'></span>
                                                        <p className='settings_menu_item'>Дата рождения</p>
                                                    </label>
                                                    <label className='container16'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item7}
                                                            checked={select_settings_item7}
                                                            onChange={handleOptionChange7}
                                                        />


                                                        <span className='checkmark16'></span>
                                                        <p className='settings_menu_item'>E-mail</p>
                                                    </label>
                                                    <label className='container17'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item8}
                                                            checked={select_settings_item8}
                                                            onChange={handleOptionChange8}
                                                        />


                                                        <span className='checkmark17'></span>
                                                        <p className='settings_menu_item'>Адрес доставки</p>
                                                    </label>
                                                    <label className='container18'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item9}
                                                            checked={select_settings_item9}
                                                            onChange={handleOptionChange9}
                                                        />


                                                        <span className='checkmark18'></span>
                                                        <p className='settings_menu_item'>День первого запуска бота</p>
                                                    </label>
                                                    <label className='container19'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item10}
                                                            checked={select_settings_item10}
                                                            onChange={handleOptionChange10}
                                                        />


                                                        <span className='checkmark19'></span>
                                                        <p className='settings_menu_item'>День первого визита в магазин</p>
                                                    </label>
                                                    <label className='container20'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item11}
                                                            checked={select_settings_item11}
                                                            onChange={handleOptionChange11}
                                                        />


                                                        <span className='checkmark20'></span>
                                                        <p className='settings_menu_item'>Дата последнего визита в магазин</p>
                                                    </label>
                                                    <label className='container21'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item12}
                                                            checked={select_settings_item12}
                                                            onChange={handleOptionChange12}
                                                        />


                                                        <span className='checkmark21'></span>
                                                        <p className='settings_menu_item'>Общее число покупок, раз</p>
                                                    </label>
                                                    <label className='container22'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item13}
                                                            checked={select_settings_item13}
                                                            onChange={handleOptionChange13}
                                                        />


                                                        <span className='checkmark22'></span>
                                                        <p className='settings_menu_item'>Общая сумма покупок</p>
                                                    </label>
                                                    <label className='container23'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item14}
                                                            checked={select_settings_item14}
                                                            onChange={handleOptionChange14}
                                                        />


                                                        <span className='checkmark23'></span>
                                                        <p className='settings_menu_item'>Кол-во обращений в тех. поддержку</p>
                                                    </label>
                                                    <label className='container24'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item15}
                                                            checked={select_settings_item15}
                                                            onChange={handleOptionChange15}
                                                        />


                                                        <span className='checkmark24'></span>
                                                        <p className='settings_menu_item'>Рефферал</p>
                                                    </label>
                                                    <label className='container25'>
                                                        <input
                                                            type='checkbox'
                                                            value={select_settings_item16}
                                                            checked={select_settings_item16}
                                                            onChange={handleOptionChange16}
                                                        />


                                                        <span className='checkmark25'></span>
                                                        <p className='settings_menu_item'>Посещаемость магазина</p>
                                                    </label>
                                                </div>
                                                }
                                            </div>

                                        </div>
                                        <DataTable value={data_table_info}  stripedRows paginator rows={11} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem'}} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                                            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                            <Column field="user_name" header="Имя пользователя"></Column>
                                            <Column field="user_id" header="ID пользователя"></Column>
                                            <Column field="name" header="Имя"></Column>
                                            <Column field="surname" header="Фамилия"></Column>
                                            <Column field="phone" header="Телефон"></Column>
                                            <Column field="date" header="Дата рождения"></Column>
                                            <Column field="email" header="E-mail"></Column>
                                            <Column field="address"  header="Адрес доставки" body={imageBodyTemplate} ></Column>

                                        </DataTable>

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



