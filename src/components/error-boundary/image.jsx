import React, {useState, useEffect} from 'react';
import defaultImage from '@/assets/img/default.jpg';

export const Image = ({path, title}) => {
    const [imagePath, setImagePath] = useState(path);
    const isBrowser = process.browser;
    useEffect(() => {
        setImagePath(path)
    }, [path, isBrowser])
    const changeToDefaultImage = () => {
        console.log(defaultImage)
        setImagePath(defaultImage);
    }
    return(
        <img src={imagePath} onError={changeToDefaultImage} alt={title}/>
    )
}