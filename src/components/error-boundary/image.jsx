import React, {useState, useEffect} from 'react';
import defaultImage from '@/assets/img/default.jpg';

export const Image = ({path, title}) => {
    const [imagePath, setImagePath] = useState(path);
    useEffect(() => {
        setImagePath(path)
    }, [path])
    const changeToDefaultImage = () => {
        setImagePath(defaultImage);
    }
    return(
        <img src={imagePath} onError={changeToDefaultImage} alt={title}/>
    )
}