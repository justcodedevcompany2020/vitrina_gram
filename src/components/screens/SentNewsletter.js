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

    const handleOptionChange = (changeEvent) => {
        setSelectedAllTypes(changeEvent.target.value);

    };


    const handleOptionChange2 = (changeEvent) => {
        setSelectedNewsletter1(changeEvent.target.value);

    };

    const handleOptionChange3 = (changeEvent) => {
        setSelectedNewsletter2(changeEvent.target.value);

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

                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </>

    )


}



