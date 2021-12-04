import React, {useCallback} from 'react';
import ImageGallery from 'react-image-gallery';

import sample1 from "../../assets/sample1.jpg";
import sample2 from "../../assets/sample2.jpg";
import sample3 from "../../assets/sample3.jpg";
import sample4 from "../../assets/sample4.jpg";
import test from "../../assets/logo_sample.png";

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
        const sampleData = [1, 2, 3, 4, 5, 6];

        const productList = sampleData.map((data, idx) => {
            return (
                <div className="product-item">
                    <span></span><span></span><span></span><span></span>
                    <img src={test}/>
                </div>
            );
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
                slideDuration={1000}
                autoPlay={true}/>

            <div className="grid-container">
                {getProductComp()}
            </div>
        </div>
    );
}

export default MainContent;
