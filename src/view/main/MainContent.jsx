import React, {useCallback} from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-slideshow-image/dist/styles.css';
import sample1 from "../../assets/sample1.jpg";
import sample2 from "../../assets/sample2.jpg";
import sample3 from "../../assets/sample3.jpg";
import sample4 from "../../assets/sample4.jpg";

const MainContent = () => {
    const images = [
        {
            original: sample1,
            thumbnail: sample1
        },
        {
            original: sample2,
            thumbnail: sample2
        },
        {
            original: sample3,
            thumbnail: sample3
        },
        {
            original: sample4,
            thumbnail: sample4
        }
    ];

    const getProductComp = useCallback(() => {
        const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        const productList = sampleData.map((data, idx) => {
            return (
                <div
                    key={idx}
                    className="grid-item">
                    {data}
                </div>
            )
        });

        return productList;
    }, []);

    return (
        <div className="main-content-container">
            <ImageGallery
                items={images}
                onSlide={true}
                infinite={true}
                showBullets={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                slideDuration={1000}/>

            <div className="grid-container">
                {getProductComp()}
            </div>
        </div>
    );
}

export default MainContent;
