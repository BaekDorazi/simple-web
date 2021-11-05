import React, {useCallback} from 'react';

/**
 *  @component    Ring
 *  @param        none
 *  @description  최상위 컴포넌트
 */
const Ring = () => {
    const getProductComp = useCallback(() => {
        const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        const productList = sampleData.map((data, idx) => {
            return (
                <div
                    key={idx}
                    className={"grid-item"}>
                    {data}
                </div>
            )
        });

        return productList;
    }, []);

    return (
        <div className="ring-container">
            <div className="grid-container">
                {getProductComp()}
            </div>
        </div>
    );
}

export default Ring;
