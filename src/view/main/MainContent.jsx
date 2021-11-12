import React, {useCallback} from 'react';

const MainContent = () => {
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
            <div className="grid-container">
                {getProductComp()}
            </div>
        </div>
    );
}

export default MainContent;
