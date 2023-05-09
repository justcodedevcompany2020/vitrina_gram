import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import '../../../assets/css/dropzone.css'
import Dropdown from '../../../assets/svg/dropdown.svg'
const Dropzone = () => {
    const [image, setImage] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        // Обрабатываем загруженный файл
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ border: '1px dashed #0165E1',  borderRadius: 10, padding: 20 }}>
            <div className='dropdown_icon'>
                <img src={Dropdown}/>
            </div>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Отпустите файлы здесь ...</p>
            ) : (
                <p className='dropzone_title'>Вставте ссылку  или загрузите баннер</p>
            )}
            <input className='dropzone_input_field' placeholder='Введите URL или загрузите файл формата PNG, JPG, SVG'/>
            {image && <img src={image} alt="Загруженное изображение" style={{ width: 200 }} />}
        </div>
    );
};

export default Dropzone;

