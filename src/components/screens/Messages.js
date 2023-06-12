import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import '../../assets/css/home_style.css';
import '../../assets/css/messages.css';
import Header from "./includes/Header";
import search_icon from "../../assets/svg/search_icon_chat.svg"
import pin_icon from "../../assets/svg/pin_icon.svg"
import messages_icon1 from "../../assets/svg/messages_img4.svg"
import messages_icon2 from "../../assets/svg/messages_img7.svg"
import messages_icon3 from "../../assets/svg/messages_img9.svg"
import messages_icon4 from "../../assets/svg/messages_img11.svg"
import messages_icon5 from "../../assets/svg/messages_img15.svg"
import search_icon_chat from "../../assets/svg/search_icon_chat.svg"
import more_info_icon from "../../assets/svg/more_info_icon.svg"
import icons from "../../assets/svg/icons.svg"
import file from "../../assets/svg/file_icon.svg"
import voice_icon from "../../assets/svg/voice_icon.svg"



let sl_set = {};

export default function Newsletter () {

    const [headerScroll, setHeaderScroll] = useState(false);
    const [all_chats, setAllChats] = useState(true);
    const [waiting_for_an_answer, setWaitingForAnAnswer] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const messages = [
        {
            id: 1,
            img: require('../../assets/img/messages_img1.png'),
            name: 'Jane Cooper',
            icon: require('../../assets/img/messages_img2.png'),
            message: 'Photo',
            date: '3:27 PM',
            pinned: true,
            messages_count: 0,
            online: true,

        },
        {
            id: 2,
            img: require('../../assets/img/messages_img3.png'),
            name: 'Design Review Chat',
            icon: messages_icon1,
            message: 'Document',
            date: '2:49 AM',
            pinned: true,
            messages_count: 34,
            online: false,

        },
        {
            id: 3,
            img: require('../../assets/img/messages_img4.png'),
            name: 'R4IN80W',
            icon: '',
            message: 'That is how you do it!',
            date: '7:21 PM',
            pinned: false,
            messages_count: 0,
            online: false,

        },
        {
            id: 4,
            img: require('../../assets/img/messages_img5.png'),
            name: 'ртес',
            icon: '',
            message: 'You: lets do this quick',
            date: '6:18 PM',
            pinned: false,
            messages_count: 0,
            online: true,

        },
        {
            id: 5,
            img: require('../../assets/img/messages_img6.png'),
            name: '480 Design',
            icon: messages_icon2,
            message: 'Check out this new claymorphism design!',
            date: '1:58 PM',
            pinned: false,
            messages_count: 0,
            online: false,

        },
        {
            id: 6,
            img: require('../../assets/img/messages_img8.png'),
            name: 'help! I\'m in the hole',
            icon: messages_icon3,
            message: '',
            date: '10:54 AM',
            pinned: false,
            messages_count: 0,
            online: false,

        },
        {
            id: 7,
            img: require('../../assets/img/messages_img10.png'),
            name: 'kiguk',
            icon: messages_icon4,
            message: 'Photo',
            date: '3:36 AM',
            pinned: false,
            messages_count: 0,
            online: true,

        },
        {
            id: 8,
            img: require('../../assets/img/messages_img12.png'),
            name: 'iceChat',
            icon: '',
            message: 'I reeeaally love this animation! It is рmot...',
            date: 'Thu',
            pinned: false,
            messages_count: 57,
            online: false,

        },
        {
            id: 9,
            img: require('../../assets/img/messages_img13.png'),
            name: 'iceDSGN',
            icon: '',
            message: 'Happy New Year! 🎉',
            date: 'Thu',
            pinned: false,
            messages_count: 0,
            online: false,

        },
        {
            id: 10,
            img: require('../../assets/img/messages_img14.png'),
            name: 'About The Dot',
            icon: messages_icon5,
            message: 'Bugs and Suggestions Dark As some of you are ...',
            date: 'Mon',
            pinned: false,
            messages_count: 0,
            online: false,

        },

    ]
    const chats = [
        {
            id: 1,
            user_img: require('../../assets/img/chat_user_img.png'),
            message1: 'but it\'s not as pretty as the keyboard I\'m making now 😎',
            message2: 'i love figma! There is sooooo many features and its uuiatie!',
            date: '10:03 AM',
            received: true,
            send: false,
        },

        {
            id: 2,
            user_img: require('../../assets/img/chat_user_img.png'),
            chat_img1: require('../../assets/img/chat_img2.png'),
            chat_img1_name: 'Claymorphism.png',
            chat_img1_size: '1.7MB',
            name: 'Оксана',
            date: '10:03 AM',
            received: true,
            send: false,
        },
        {
            id: 3,
            user_img2: require('../../assets/img/chat_user_img2.png'),
            name: 'kiguk',
            message1: 'True. Btw, how about to hop up in figma in 5ssss ',
            date: '10:03 AM',
            received: false,
            send: true,
        },
        {
            id: 4,
            user_img: require('../../assets/img/chat_user_img.png'),
            chat_img2: require('../../assets/img/chat_img3.png'),
            message2: 'but it\'s not as pretty as the keyboard I\'m nssow 😎',
            message3: 'Look at the beauty this picture...',
            name: 'Оксана',
            date: '10:03 AM',
            received: true,
            send: false,
        },
        {
            id: 5,
            user_img2: require('../../assets/img/chat_user_img2.png'),
            message1: 'but it\'s not as pretty as the keyboard I\'m makin 😎',
            date: '10:03 AM',
            received: false,
            send: true,
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

    const [event_name, setEventName] = useState('');

    const setEventName2 = (event) => {
        setEventName(event.target.value);
        console.log(event_name)

    };



    return (
        <>

            <div className='main_wrapper'>
                <Header disableBodyScroll={disableBodyScroll} enableBodyScroll={enableBodyScroll}/>
                <div className='main'>
                    <section className='constructor'>
                        <div className="constructor_wrapper">
                            <div className='constructor_items_wrapper'>
                                    <div className="messages_item1">
                                        <div className='messages_search_input_icon_wrapper'>
                                            <input type="text" placeholder='Search' className='messages_search_input'/>
                                            <button className='messages_search_input_icon'>
                                                <img src={search_icon} />
                                            </button>
                                        </div>
                                        <div className='messages_dialogs_tabs_main_wrapper'>
                                            <div className='messages_dialogs_tabs_wrapper'>
                                                <button
                                                    className={all_chats ? 'messages_dialogs_tab_active' : 'messages_dialogs_tab'}
                                                    onClick={() => {
                                                        setAllChats(true)
                                                        setWaitingForAnAnswer(false)
                                                    }}
                                                >
                                                    Все чаты
                                                </button>
                                                <button
                                                    className={waiting_for_an_answer ? 'messages_dialogs_tab_active' : 'messages_dialogs_tab'}
                                                    onClick={() => {
                                                        setAllChats(false)
                                                        setWaitingForAnAnswer(true)
                                                    }}
                                                >
                                                    Ждут ответа
                                                </button>
                                            </div>
                                            <div className='messages_dialogs_wrapper'>
                                                {all_chats &&
                                                    <div>
                                                        {messages.map((item, index) => {
                                                            return (
                                                                <div className='messages_dialog'>
                                                                    <div className='messages_dialog_img_name_message_wrapper'>
                                                                        <div className='messages_dialog_img_online_icon_box'>
                                                                            <div className='messages_dialog_img'>
                                                                                <img src={item.img} alt=""/>
                                                                            </div>
                                                                            {item.online &&
                                                                            <div className='messages_dialog_online_icon'>
                                                                            </div>
                                                                            }

                                                                        </div>

                                                                        <div className='messages_dialog_info_box'>
                                                                            <p className='messages_dialog_name'>{item.name}</p>
                                                                            <div className='messages_dialog_text_img_wrapper'>
                                                                                {item.icon != '' &&
                                                                                <div className='messages_dialog_text_img'>
                                                                                    <img src={item.icon} alt=""/>
                                                                                </div>
                                                                                }

                                                                                <p className='messages_dialog_text'>{item.message}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='messages_dialog_date_quantity_pin_icon_wrapper'>
                                                                        <p className='messages_dialog_date_info'>{item.date}</p>
                                                                        <div className='messages_dialog_quantity_info_pin_icon_box'>
                                                                            {item.messages_count != '' &&
                                                                            <div
                                                                                className='messages_dialog_quantity_info_box'
                                                                                style={{
                                                                                    backgroundColor: item.pinned ? '#0078D4' : '#8A8A8A'
                                                                                }}
                                                                            >
                                                                                <p className='messages_dialog_quantity_info'>{item.messages_count}</p>

                                                                            </div>
                                                                            }
                                                                            {item.pinned &&
                                                                            <div className='messages_dialog_pin_icon'>
                                                                                <img src={pin_icon} alt=""/>
                                                                            </div>
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                }

                                                {waiting_for_an_answer &&
                                                    <div>
                                                        {messages.map((item, index) => {

                                                            return (
                                                                <div className='messages_dialog'>
                                                                    <div className='messages_dialog_img_name_message_wrapper'>
                                                                        <div className='messages_dialog_img_online_icon_box'>
                                                                            <div className='messages_dialog_img'>
                                                                                <img src={item.img} alt=""/>
                                                                            </div>
                                                                            {item.online &&
                                                                            <div className='messages_dialog_online_icon'>
                                                                            </div>
                                                                            }

                                                                        </div>

                                                                        <div className='messages_dialog_info_box'>
                                                                            <p className='messages_dialog_name'>{item.name}</p>
                                                                            <div className='messages_dialog_text_img_wrapper'>
                                                                                {item.icon != '' &&
                                                                                <div className='messages_dialog_text_img'>
                                                                                    <img src={item.icon} alt=""/>
                                                                                </div>
                                                                                }

                                                                                <p className='messages_dialog_text'>{item.message}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='messages_dialog_date_quantity_pin_icon_wrapper'>
                                                                        <p className='messages_dialog_date_info'>{item.date}</p>
                                                                        <div className='messages_dialog_quantity_info_pin_icon_box'>
                                                                            {item.messages_count != '' &&
                                                                            <div
                                                                                className='messages_dialog_quantity_info_box'
                                                                                style={{
                                                                                    backgroundColor: item.pinned ? '#0078D4' : '#8A8A8A'
                                                                                }}
                                                                            >
                                                                                <p className='messages_dialog_quantity_info'>{item.messages_count}</p>

                                                                            </div>
                                                                            }
                                                                            {item.pinned &&
                                                                            <div className='messages_dialog_pin_icon'>
                                                                                <img src={pin_icon} alt=""/>
                                                                            </div>
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className='messages_items_main_wrapper_parent'>
                                        <div className='messages_items_main_wrapper'>
                                            <div className='messages_items_main_wrapper_header'>
                                                <div className='messages_items_main_wrapper_user_img_info_wrapper'>
                                                    <div className='messages_items_main_wrapper_user_img'>
                                                        <img src={require('../../assets/img/chat_user_img.png')} alt=""/>
                                                    </div>
                                                    <div className='messages_items_main_wrapper_user_info'>
                                                        <p className='messages_items_main_wrapper_user_info_name'>Оксана Чебаткова</p>
                                                        <div className='messages_items_main_wrapper_user_status_info'>
                                                            <div className='messages_items_main_wrapper_user_status_icon'></div>
                                                            <p className='messages_items_main_wrapper_user_status_info_text'>online</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='messages_items_main_buttons_wrapper'>
                                                    <button className='messages_items_main_search_button'>
                                                        <img src={search_icon_chat} alt=""/>
                                                    </button>
                                                    <button className='messages_items_main_more_info_button'>
                                                        <img src={more_info_icon} alt=""/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='messages_items_main_wrapper_body'>
                                                {chats.map((item, index) => {
                                                    return (
                                                        <div className='chat_item_parent'>
                                                            {item.received === true &&
                                                                <div className='chat_item_child'>
                                                                    <div className='chat_item_child_img'>
                                                                        <img src={item.user_img}/>
                                                                    </div>
                                                                    <div className='chat_item_child_info_box'>
                                                                        {item.chat_img2 && item.message3 &&
                                                                        <div className='chat_item_child_message_date_img_main_wrapper'>
                                                                            <p className='chat_item_child_user_name' style={{paddingLeft: 10, paddingRight: 10}}>{item.name}</p>
                                                                            <div className='chat_item_child_img2'>
                                                                                <img src={item.chat_img2} />
                                                                            </div>
                                                                            <div className='chat_item_child_message_date_wrapper3'>
                                                                                <p className='chat_item_child_message'>{item.message3}</p>
                                                                                <p className='chat_item_child_message_date'>{item.date}</p>
                                                                            </div>

                                                                        </div>
                                                                        }
                                                                        {item.message1  &&
                                                                            <div className='chat_item_child_message_date_wrapper'>
                                                                                <p className='chat_item_child_message'>{item.message1}</p>
                                                                                <p className='chat_item_child_message_date'>{item.date}</p>
                                                                            </div>
                                                                        }

                                                                        {item.message2  &&
                                                                        <div className='chat_item_child_message_date_wrapper'>
                                                                            <p className='chat_item_child_message'>{item.message2}</p>
                                                                            <p className='chat_item_child_message_date'>{item.date}</p>
                                                                        </div>
                                                                        }
                                                                        {item.chat_img1 && item.chat_img1_name && item.chat_img1_size &&
                                                                        <div className='chat_item_child_message_date_wrapper2'>
                                                                            <p className='chat_item_child_user_name'>{item.name}</p>
                                                                            <div className='chat_item_child_message_send_img_info_wrapper'>
                                                                                <div className='chat_item_child_message_send_img'>
                                                                                    <img src={item.chat_img1}/>
                                                                                </div>
                                                                                <div className='chat_item_child_message_send_img_info_date_wrapper'>
                                                                                    <p className='chat_item_child_message_send_img_info'>{item.chat_img1_name}</p>
                                                                                    <div className='chat_item_child_message_send_img_size_info_date_wrapper'>
                                                                                        <p className='chat_item_child_message_send_img_info2'>{item.chat_img1_size}</p>
                                                                                        <p className='chat_item_child_message_date'>{item.date}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        }

                                                                    </div>

                                                                </div>
                                                            }
                                                            {item.send === true &&
                                                                <div className='chat_item_child2'>
                                                                    <div className='chat_item_child2_name_info_wrapper'>
                                                                        <p className='chat_item_child2_name'>
                                                                            {item.name}
                                                                        </p>
                                                                        <div className='chat_item_child_message_date_wrapper_send'>
                                                                            <p className='chat_item_child_message'>{item.message1}</p>
                                                                            <p className='chat_item_child_message_date'>{item.date}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='chat_item_child2_img'>
                                                                        <img src={item.user_img2} />
                                                                    </div>

                                                                </div>
                                                            }
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className='messages_items_main_wrapper_footer'>
                                                    <div className='messages_items_main_wrapper_footer_input_files_upload_box'>
                                                            <button className='messages_items_main_wrapper_footer_input_files_upload'>
                                                                <img src={file} />
                                                            </button>
                                                        <input type="text" placeholder='Write a message...' className='message_input_field'/>
                                                    </div>
                                                   <div className='messages_items_main_wrapper_footer_icons_voice_buttons_wrapper'>
                                                       <button className='messages_items_main_wrapper_footer_icons'>
                                                           <img src={icons} alt=""/>
                                                       </button>
                                                       <button className='messages_items_main_wrapper_footer_voice_icon'>
                                                           <img src={voice_icon} alt=""/>
                                                       </button>
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



