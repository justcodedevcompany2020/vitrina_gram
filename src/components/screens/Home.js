 // import React from 'react'
 // import ReactDOM from 'react-dom'
 // import { Link } from 'react-router-dom'
 // import { Link as LinkScroll } from 'react-scroll';
 // // import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
 // import '../../assets/css/home_style.css';
 // import Header from "./includes/Header";
 // import DropzoneForLogo from "./includes/DropzoneForLogo";
 // import DropzoneForBanner from "./includes/DropzoneForBanner";
 // import Select from 'react-select'
 // import {Switch} from "react-switch-input";
 //
 // let sl_set = {};
 //
 // let myMap;
 //
 // export default class Home extends React.Component {
 //     constructor(props) {
 //         super(props);
 //         this.state = {
 //             options: [
 //                 { value: 'chocolate', label: 'Chocolate' },
 //                 { value: 'strawberry', label: 'Strawberry' },
 //                 { value: 'vanilla', label: 'Vanilla' }
 //             ],
 //             colors: [
 //                 { value: 'Жёлтый', label: 'Жёлтый' },
 //                 { value: 'Оранжевый', label: 'Оранжевый' },
 //                 { value: 'Фиолетовый', label: 'Фиолетовый' }
 //             ],
 //             colors_button: [
 //                 { value: 'Жёлтый', label: 'Жёлтый' },
 //                 { value: 'Оранжевый', label: 'Оранжевый' },
 //                 { value: 'Фиолетовый', label: 'Фиолетовый' }
 //             ],
 //
 //             selectedType: 'type_logo1',
 //             selectedDisplayMode: 'mode1',
 //
 //             value: undefined,
 //         }
 //
 //
 //     }
 //
 //
 //
 //
 //     handleChangeSwitch = e => {
 //         const value = e.target.checked;
 //         this.setState({value});
 //     }
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
 //     handleOptionChange = (changeEvent) => {
 //         this.setState({
 //             selectedType: changeEvent.target.value,
 //         });
 //         console.log(this.state.selectedType, 'hhhhh')
 //     };
 //     handleOptionChange2 = (changeEvent) => {
 //         this.setState({
 //             selectedDisplayMode: changeEvent.target.value,
 //         });
 //         console.log(this.state.selectedDisplayMode, 'hhhhh')
 //     };
 //
 //
 //
 //     render() {
 //         return (
 //             <>
 //
 //                 <div className='main_wrapper'>
 //                     <Header/>
 //                     <div className='main'>
 //                         <section className='constructor'>
 //                             <div className="constructor_wrapper">
 //                                 <div className='constructor_items_wrapper'>
 //                                     <div className='constructor_item1'>
 //                                         <Link className="constructor_item_link">
 //                                             Основное
 //                                         </Link>
 //                                         <Link className="constructor_item_link">
 //                                             Карточка товара
 //                                         </Link>
 //                                         <Link className="constructor_item_link">
 //                                             Настройки баннера
 //                                         </Link>
 //                                     </div>
 //                                     <div className='constructor_item2'>
 //                                         <div className='constructor_item2_child1_wrapper'>
 //                                             <div className='constructor_item2_child_box1'>
 //                                                 <div className='constructor_item2_child_box1_input_wrapper'>
 //                                                     <p className='constructor_item2_child_box1_input_title'>Название магазина</p>
 //                                                     <input type="text" name="name" className='constructor_item2_child_box1_input_field' placeholder='Ввести название магазина' />
 //                                                 </div>
 //                                                 <div className='constructor_item2_child_box1_select_wrapper'>
 //                                                     <p className='constructor_item2_child_box1_select_title'>Шрифт текста</p>
 //                                                     <Select id='constructor_select' options={this.state.options} />
 //
 //                                                 </div>
 //                                             </div>
 //                                             <div className='constructor_item2_child_box2'>
 //                                                 <div className='constructor_item2_child_box2_switch_box'>
 //                                                     <p className='constructor_item2_child_box2_switch_box_title'>Логотип магазина</p>
 //                                                     <Switch id='constructor_item2_child_box2_switch'/>
 //
 //                                                 </div>
 //                                                 <div style={{width: '100%', marginBottom: 20}}>
 //                                                     <DropzoneForLogo/>
 //                                                 </div>
 //
 //                                                 <div className='constructor_item2_child_box2_radio_inputs_wrapper'>
 //                                                     <p className='constructor_item2_child_box2_radio_inputs_title'>Расположение логотипа</p>
 //                                                     <div className='constructor_item2_child_box2_radio_inputs_fields_wrapper'>
 //                                                         <label className="container">
 //                                                             <input
 //                                                                 type="radio"
 //                                                                 name="types"
 //                                                                 value="type_logo1"
 //                                                                 checked={this.state.selectedType === "type_logo1"}
 //                                                                 onChange={this.handleOptionChange}
 //                                                                 className='constructor_item2_child_box2_radio_inputs_field'
 //                                                             />
 //                                                             <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                                 <img src={require('../../assets/img/logo_type1.png')}/>
 //                                                             </div>
 //
 //                                                             <span className="checkmark"></span>
 //
 //                                                         </label>
 //
 //                                                         <label className="container">
 //                                                             <input
 //                                                                 type="radio"
 //                                                                 name="types"
 //                                                                 value="type_logo2"
 //                                                                 checked={this.state.selectedType === "type_logo2"}
 //                                                                 onChange={this.handleOptionChange}
 //                                                                 className='constructor_item2_child_box2_radio_inputs_field'
 //                                                             />
 //                                                             <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                                 <img src={require('../../assets/img/logo_type2.png')}/>
 //                                                             </div>
 //
 //                                                             <span className="checkmark"></span>
 //
 //                                                         </label>
 //
 //
 //                                                         <label className="container">
 //                                                             <input
 //                                                                 type="radio"
 //                                                                 name="types"
 //                                                                 value="type_logo3"
 //                                                                 checked={this.state.selectedType === "type_logo3"}
 //                                                                 onChange={this.handleOptionChange}
 //                                                                 className='constructor_item2_child_box2_radio_inputs_field'
 //                                                             />
 //                                                             <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                                 <img src={require('../../assets/img/logo_type3.png')}/>
 //                                                             </div>
 //
 //                                                             <span className="checkmark"></span>
 //
 //                                                         </label>
 //
 //
 //                                                     </div>
 //                                                 </div>
 //                                             </div>
 //                                         </div>
 //
 //
 //                                         <div className='constructor_item2_child_box3'>
 //                                             <div className='constructor_item2_child_box3_switch_box'>
 //                                                 <p className='constructor_item2_child_box2_switch_box_title'>Рекламный баннер</p>
 //
 //                                                 <Switch
 //                                                     id='constructor_item2_child_box2_switch2'
 //                                                     onChange={this.handleChangeSwitch}
 //                                                 />
 //                                             </div>
 //
 //                                             <div style={{width: '100%', marginBottom: 76}}>
 //                                                 <DropzoneForLogo/>
 //                                             </div>
 //
 //
 //                                             <div className='constructor_item2_child_box3_select_wrapper_main'>
 //                                                <div className='constructor_item2_child_box3_select_wrapper'>
 //                                                    <p className='constructor_item2_child_box3_select_title'>Цвет фона</p>
 //                                                    <Select id='constructor_select2' options={this.state.colors}  styles={{
 //                                                        control: (baseStyles, state) => ({
 //                                                            ...baseStyles,
 //                                                            backgroundColor: state.isFocused ? '#19194A' : '#19194A',
 //                                                             borderRadius: state.isFocused ? '10' : '10',
 //                                                            borderColor: state.isFocused ? '#BCBCBC' : '#BCBCBC',
 //                                                        }),
 //                                                    }} />
 //
 //                                                </div>
 //
 //                                                <div className='constructor_item2_child_box3_select_wrapper'>
 //                                                    <p className='constructor_item2_child_box3_select_title'>Цвет кнопок</p>
 //                                                    <Select id='constructor_select3' options={this.state.colors_button}   styles={{
 //                                                        control: (baseStyles, state) => ({
 //                                                            ...baseStyles,
 //                                                            backgroundColor: state.isFocused ? '#00C5F2' : '#00C5F2',
 //                                                            borderColor: state.isFocused ? '#BCBCBC' : '#BCBCBC',
 //                                                        }),
 //                                                    }}/>
 //
 //                                                </div>
 //                                            </div>
 //                                             <div className='constructor_item2_child_box2_radio_inputs_wrapper'>
 //                                                 <p className='constructor_item2_child_box2_radio_inputs_title'>Режим отображения страницы</p>
 //                                                 <div className='constructor_item2_child_box2_radio_inputs_fields_wrapper'>
 //                                                     <label className="container">
 //                                                         <input
 //                                                             type="radio"
 //                                                             name="modes"
 //                                                             value="mode1"
 //                                                             checked={this.state.selectedDisplayMode === "mode1"}
 //                                                             onChange={this.handleOptionChange2}
 //                                                             className='constructor_item2_child_box2_radio_inputs_field'
 //                                                         />
 //                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                             <img src={require('../../assets/img/mode_img1.png')}/>
 //                                                         </div>
 //
 //                                                         <span className="checkmark"></span>
 //
 //                                                     </label>
 //
 //                                                     <label className="container">
 //                                                         <input
 //                                                             type="radio"
 //                                                             name="modes"
 //                                                             value="mode2"
 //                                                             checked={this.state.selectedDisplayMode === "mode2"}
 //                                                             onChange={this.handleOptionChange2}
 //                                                             className='constructor_item2_child_box2_radio_inputs_field'
 //                                                         />
 //                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                             <img src={require('../../assets/img/mode_img2.png')}/>
 //                                                         </div>
 //
 //                                                         <span className="checkmark"></span>
 //
 //
 //                                                     </label>
 //
 //
 //                                                     <label className="container">
 //                                                         <input
 //                                                             type="radio"
 //                                                             name="modes"
 //                                                             value="mode3"
 //                                                             checked={this.state.selectedDisplayMode === "mode3"}
 //                                                             onChange={this.handleOptionChange2}
 //                                                             className='constructor_item2_child_box2_radio_inputs_field'
 //                                                         />
 //                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                             <img src={require('../../assets/img/mode_img3.png')}/>
 //                                                         </div>
 //
 //                                                         <span className="checkmark"></span>
 //
 //
 //                                                     </label>
 //                                                     <label className="container">
 //                                                         <input
 //                                                             type="radio"
 //                                                             name="modes"
 //                                                             value="mode4"
 //                                                             checked={this.state.selectedDisplayMode === "mode4"}
 //                                                             onChange={this.handleOptionChange2}
 //                                                             className='constructor_item2_child_box2_radio_inputs_field'
 //                                                         />
 //                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
 //                                                             <img src={require('../../assets/img/mode_img4.png')}/>
 //                                                         </div>
 //
 //                                                         <span className="checkmark"></span>
 //
 //
 //                                                     </label>
 //
 //
 //                                                 </div>
 //                                             </div>
 //                                         </div>
 //                                         <div className='constructor_item2_child_box3_img'>
 //                                             <img src={require('../../assets/img/mobile.png')}/>
 //                                         </div>
 //                                     </div>
 //                                 </div>
 //
 //                             </div>
 //                         </section>
 //                     </div>
 //                 </div>
 //
 //             </>
 //
 //         )
 //     }
 // }



 import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import { Link as LinkScroll } from 'react-scroll';
 import '../../assets/css/home_style.css';
 import Header from "./includes/Header";
 import DropzoneForLogo from "./includes/DropzoneForLogo";
 import DropzoneForBanner from "./includes/DropzoneForBanner";
 import Select from 'react-select'
 import { Switch } from "react-switch-input";
 // import {Events} from "react-dropzone/typings/tests/events";

 let sl_set = {};

 export default function Home () {
     const [options] = useState([
         { value: 'Arial', label: 'Arial' },
         { value: 'Verdana', label: 'Verdana' },
         { value: 'Helvetica', label: 'Helvetica' },
         { value: 'Times New Roman', label: 'Times New Roman' },
         { value: 'Courier New', label: 'Courier New' },
     ]);

     const [colors, setColors] = useState([
         {label: 'Зеленый', value:'#00C900'},
         {label: 'Светло-синий', value: '#00C5F2'},
         {label: 'Темно-синий', value: '#19194A'},
         {label: 'Красный', value: '#FE3B30'},
         {label: 'Жёлтый', value: '#FFFF00'},


     ]);
     const [colors_button, setColorsButton] = useState([
         {label: 'Жёлтый', value: '#FFFF00'},
         {label: 'Темно-синий', value: '#19194A'},
         {label: 'Красный', value: '#FE3B30'},
         {label: 'Зеленый', value:'#00C900'},

     ]);
     const [selectedType, setSelectedType] = useState('type_logo1');
     const [selectedDisplayMode, setSelectedDisplayMode] = useState('mode1');
     const [value, setValue] = useState(undefined);
     const [headerScroll, setHeaderScroll] = useState(false);
     const [sliding, setSliding] = useState(false);
     const [isChecked, setIsChecked] = useState(false);


     const mobile_items = [
         {
             id: 1,
             img: require('../../assets/img/mobile_screen1.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 2,
             img: require('../../assets/img/mobile_screen2.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 3,
             img: require('../../assets/img/mobile_screen3.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 4,
             img: require('../../assets/img/mobile_screen4.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 5,
             img: require('../../assets/img/mobile_screen5.png'),
             title: 'Product',
             price: '220₽',
         },
         {
             id: 6,
             img: require('../../assets/img/mobile_screen6.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 7,
             img: require('../../assets/img/mobile_screen7.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 8,
             img: require('../../assets/img/mobile_screen8.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 9,
             img: require('../../assets/img/mobile_screen9.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 10,
             img: require('../../assets/img/mobile_screen10.png'),
             title: 'Product',
             price: '220₽',
         },

         {
             id: 11,
             img: require('../../assets/img/mobile_screen8.png'),
             title: 'Product',
             price: '220₽',
         },
         {
             id: 12,
             img: require('../../assets/img/mobile_screen11.png'),
             title: 'Product',
             price: '220₽',
         },


     ]

     const handleOptionChange2 = (e) => {
         setSelectedDisplayMode(e.target.value);
     };


     const handleChangeLogo = (event) => {
         setIsChecked(event.target.checked);
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

     const handleOptionChange = (changeEvent) => {
         setSelectedType(changeEvent.target.value);
         console.log(selectedType, 'hhhhh');
     };

     // const handleOptionChange2 = (changeEvent) => {
     //     setSelectedDisplayMode(changeEvent.target.value);
     //     console.log(selectedDisplayMode, 'hhhhh');
     // };

     const disableBodyScroll = () => {
         document.body.style.overflow = "hidden";
     };

     const enableBodyScroll = () => {
         document.body.style.overflow = "auto";
     };
     const [selectedOption, setSelectedOption] = useState(null);
     const [selectedColorButtonOption, setSelectedColorButtonOption] = useState(null);

     const handleChange = (selectedOption) => {
         setSelectedOption(selectedOption);
     };
     const handleChange2 = (selectedColorButtonOption) => {
         setSelectedColorButtonOption(selectedColorButtonOption);
     };


     const customStyles = {
         control: (provided, state) => ({
             ...provided,
             backgroundColor: selectedOption?.value,
             // Add any other styles you want to customize the control
         })
     };
     const customStyles2 = {
         control: (provided, state) => ({
             ...provided,
             backgroundColor: selectedColorButtonOption?.value,
             // Add any other styles you want to customize the control
         })
     };


     const [name_input_value, setNameInputValue] = useState('');

     const setProductName = (event) => {
         setNameInputValue(event.target.value);
         console.log(name_input_value)

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
                                         Основное
                                     </Link>
                                     <Link className="constructor_item_link">
                                         Карточка товара
                                     </Link>
                                     <Link className="constructor_item_link">
                                         Настройки баннера
                                     </Link>
                                 </div>
                                 <div className='constructor_item2'>
                                     <div className='constructor_item2_child1_wrapper'>
                                         <div className='constructor_item2_child_box1'>
                                             <div className='constructor_item2_child_box1_input_wrapper'>
                                                 <p className='constructor_item2_child_box1_input_title'>Название магазина</p>
                                                 <input
                                                        type='text'
                                                        name='name'
                                                        className='constructor_item2_child_box1_input_field'
                                                        placeholder='Ввести название магазина'
                                                        value={name_input_value}
                                                        onChange={setProductName}
                                                 />
                                             </div>
                                             <div className='constructor_item2_child_box1_select_wrapper'>
                                                 <p className='constructor_item2_child_box1_select_title'>Шрифт текста</p>
                                                 <Select id='constructor_select' options={options} />
                                             </div>
                                         </div>
                                         <div className='constructor_item2_child_box2'>
                                             <div className='constructor_item2_child_box2_switch_box'>
                                                 <p className='constructor_item2_child_box2_switch_box_title'>Логотип магазина</p>
                                                 <Switch
                                                     id='constructor_item2_child_box2_switch'
                                                     checked={isChecked}
                                                     onChange={handleChangeLogo}

                                                 />
                                             </div>
                                             <div style={{ width: '100%', marginBottom: 20 }}>
                                                 <DropzoneForLogo />
                                             </div>
                                             <div className='constructor_item2_child_box2_radio_inputs_wrapper'>
                                                 <p className='constructor_item2_child_box2_radio_inputs_title'>Расположение логотипа</p>
                                                 <div className='constructor_item2_child_box2_radio_inputs_fields_wrapper'>
                                                     <label className='container'>
                                                         <input
                                                             type='radio'
                                                             name='types'
                                                             value='type_logo1'
                                                             checked={selectedType === 'type_logo1'}
                                                             onChange={handleOptionChange}
                                                             className='constructor_item2_child_box2_radio_inputs_field'
                                                         />
                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                             <img src={require('../../assets/img/logo_type1.png')} alt='logo type 1' />
                                                         </div>

                                                         <span className='checkmark'></span>
                                                     </label>

                                                     <label className='container'>
                                                         <input
                                                             type='radio'
                                                             name='types'
                                                             value='type_logo2'
                                                             checked={selectedType === 'type_logo2'}
                                                             onChange={handleOptionChange}
                                                             className='constructor_item2_child_box2_radio_inputs_field'
                                                         />
                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                             <img src={require('../../assets/img/logo_type2.png')} alt='logo type 2' />
                                                         </div>

                                                         <span className='checkmark'></span>
                                                     </label>

                                                     <label className='container'>
                                                         <input
                                                             type='radio'
                                                             name='types'
                                                             value='type_logo3'
                                                             checked={selectedType === 'type_logo3'}
                                                             onChange={handleOptionChange}
                                                         />

                                                         <div className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                             <img src={require('../../assets/img/logo_type3.png')} alt='logo type2' />
                                                         </div>

                                                         <span className='checkmark'></span>
                                                     </label>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className='constructor_item2_child_box3'>
                                         <div className='constructor_item2_child_box3_switch_box'>
                                             <p className='constructor_item2_child_box2_switch_box_title'>Рекламный
                                                 баннер</p>

                                             <Switch
                                                 id='constructor_item2_child_box2_switch2'
                                             />
                                         </div>

                                         <div style={{width: '100%', marginBottom: 76}}>
                                             <DropzoneForLogo/>
                                         </div>


                                         <div className='constructor_item2_child_box3_select_wrapper_main'>
                                             <div className='constructor_item2_child_box3_select_wrapper'>
                                                 <p className='constructor_item2_child_box3_select_title'>Цвет
                                                     фона</p>
                                                 <Select id='constructor_select2'
                                                         value={selectedOption}
                                                         onChange={handleChange}
                                                         options={colors}
                                                         styles={customStyles}
                                                 />

                                             </div>

                                             <div className='constructor_item2_child_box3_select_wrapper'>
                                                 <p className='constructor_item2_child_box3_select_title'>Цвет
                                                     кнопок</p>
                                                 <Select id='constructor_select3'
                                                         options={colors_button}
                                                         value={selectedColorButtonOption}
                                                         onChange={handleChange2}
                                                         styles={customStyles2}
                                                 />

                                             </div>
                                         </div>
                                         <div className='constructor_item2_child_box2_radio_inputs_wrapper'>
                                             <p className='constructor_item2_child_box2_radio_inputs_title'>Режим
                                                 отображения страницы</p>
                                             <div
                                                 className='constructor_item2_child_box2_radio_inputs_fields_wrapper'>
                                                 <label className="container">
                                                     <input
                                                         type="radio"
                                                         name="modes"
                                                         value="mode1"
                                                         checked={selectedDisplayMode === "mode1"}
                                                         onChange={handleOptionChange2}
                                                         className='constructor_item2_child_box2_radio_inputs_field'
                                                     />
                                                     <div
                                                         className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                         <img src={require('../../assets/img/mode_img1.png')}/>
                                                     </div>

                                                     <span className="checkmark"></span>

                                                 </label>

                                                 <label className="container">
                                                     <input
                                                         type="radio"
                                                         name="modes"
                                                         value="mode2"
                                                         checked={selectedDisplayMode === "mode2"}
                                                         onChange={handleOptionChange2}
                                                         className='constructor_item2_child_box2_radio_inputs_field'
                                                     />
                                                     <div
                                                         className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                         <img src={require('../../assets/img/mode_img2.png')}/>
                                                     </div>

                                                     <span className="checkmark"></span>


                                                 </label>


                                                 <label className="container">
                                                     <input
                                                         type="radio"
                                                         name="modes"
                                                         value="mode3"
                                                         checked={selectedDisplayMode === "mode3"}
                                                         onChange={handleOptionChange2}
                                                         className='constructor_item2_child_box2_radio_inputs_field'
                                                     />
                                                     <div
                                                         className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                         <img src={require('../../assets/img/mode_img3.png')}/>
                                                     </div>

                                                     <span className="checkmark"></span>


                                                 </label>
                                                 <label className="container">
                                                     <input
                                                         type="radio"
                                                         name="modes"
                                                         value="mode4"
                                                         checked={selectedDisplayMode === "mode4"}
                                                         onChange={handleOptionChange2}
                                                         className='constructor_item2_child_box2_radio_inputs_field'
                                                     />
                                                     <div
                                                         className='constructor_item2_child_box2_radio_inputs_field_label'>
                                                         <img src={require('../../assets/img/mode_img4.png')}/>
                                                     </div>

                                                     <span className="checkmark"></span>


                                                 </label>


                                             </div>
                                         </div>
                                     </div>

                                     <div className='constructor_item2_mobile_design'>
                                         <div className='constructor_item2_mobile_design_img'>
                                             <img src={require('../../assets/img/mobile_border_img.png')}/>
                                         </div>
                                         <div
                                             className='constructor_item2_mobile_design_wrapper'
                                             style={{
                                                 backgroundColor: selectedOption?.value
                                             }}
                                         >

                                             {isChecked &&
                                                 <div
                                                     className='constructor_item2_mobile_design_wrapper_logo'
                                                     style={{
                                                         justifyContent: selectedType == 'type_logo1' ? 'flex-start' : selectedType == 'type_logo2' ? 'center' : selectedType == 'type_logo3' ? 'flex-end' : 'flex-start'
                                                     }}
                                                 >
                                                     <img src={require('../../assets/img/main_logo.png')}/>
                                                 </div>
                                             }

                                             <div className='constructor_item2_mobile_design_items_wrapper'>
                                                 {mobile_items.map((item, index) => {

                                                     return (

                                                         <div
                                                             className='constructor_item2_mobile_design_item'
                                                             style={{
                                                                 width: selectedDisplayMode == 'mode1' ? '100%' : selectedDisplayMode == 'mode2' ? '48%' : selectedDisplayMode == 'mode3' ? '33%' : selectedDisplayMode == 'mode4' ? '24%' : '33%'
                                                             }}
                                                         >
                                                             <div
                                                                 className='constructor_item2_mobile_design_item_img'
                                                                 style={{
                                                                     width: selectedDisplayMode == 'mode1' ? 226 : selectedDisplayMode == 'mode2' ? 130 : selectedDisplayMode == 'mode3' ? 70 : selectedDisplayMode == 'mode4' ? 56 : 226,
                                                                     height: selectedDisplayMode == 'mode1' ? 226 : selectedDisplayMode == 'mode2' ? 130 : selectedDisplayMode == 'mode3' ? 70 : selectedDisplayMode == 'mode4' ? 56 : 226,
                                                                     paddingTop: selectedDisplayMode == 'mode1' ? 25 : selectedDisplayMode == 'mode2' ? 15 : selectedDisplayMode == 'mode3' ? 10 : selectedDisplayMode == 'mode4' ? 5 : 5,
                                                                     paddingBottom: selectedDisplayMode == 'mode1' ? 25 : selectedDisplayMode == 'mode2' ? 15 : selectedDisplayMode == 'mode3' ? 10 : selectedDisplayMode == 'mode4' ? 5 : 5,

                                                                 }}
                                                             >
                                                                 <img src={item.img}/>
                                                             </div>
                                                             <div
                                                                 className='constructor_item2_mobile_design_item_title_price_info_box'
                                                                 style={{
                                                                     flexDirection: selectedDisplayMode == 'mode4' ? 'column' : 'row',

                                                                 }}
                                                             >
                                                                 <p
                                                                     className='constructor_item2_mobile_design_item_title'
                                                                     style={{
                                                                         fontSize: selectedDisplayMode == 'mode1' ? 12 : selectedDisplayMode == 'mode2' ? 12 : selectedDisplayMode == 'mode3' ? 12 : selectedDisplayMode == 'mode4' ? 10 : 12,

                                                                     }}
                                                                 >
                                                                     {item.title} -
                                                                 </p>
                                                                 <p
                                                                     className='constructor_item2_mobile_design_item_price_info'
                                                                     style={{
                                                                         fontSize: selectedDisplayMode == 'mode1' ? 12 : selectedDisplayMode == 'mode2' ? 12 : selectedDisplayMode == 'mode3' ? 12 : selectedDisplayMode == 'mode4' ? 10 : 12,

                                                                     }}
                                                                 >
                                                                     {item.price}
                                                                 </p>
                                                             </div>
                                                             <button
                                                                 className='constructor_item2_mobile_design_item_add_btn'
                                                                 style={{
                                                                     width: selectedDisplayMode == 'mode1' ? 102 : selectedDisplayMode == 'mode2' ? 80: selectedDisplayMode == 'mode3' ? 80 : selectedDisplayMode == 'mode4' ? 64 : 102,
                                                                     height: selectedDisplayMode == 'mode1' ? 32 : selectedDisplayMode == 'mode2' ? 30 : selectedDisplayMode == 'mode3' ? 30 : selectedDisplayMode == 'mode4' ? 24 : 32,
                                                                     fontSize: selectedDisplayMode == 'mode1' ? 12 : selectedDisplayMode == 'mode2' ? 12 : selectedDisplayMode == 'mode3' ? 12 : selectedDisplayMode == 'mode4' ? 10 : 12,
                                                                     backgroundColor: selectedColorButtonOption?.value,
                                                                 }}
                                                             >
                                                                 ADD
                                                             </button>
                                                         </div>

                                                     );
                                                 })}

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



