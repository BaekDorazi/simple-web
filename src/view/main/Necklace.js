import React from 'react';
import Button from "../../components/Button";

/**
 *  @component    Necklace
 *  @param        none
 *  @description  최상위 컴포넌트
 */
const Necklace = () => {
    return (
        <div>
            <div>
                <Button size='small' color="blue">Button</Button>
                <Button size='medium' color="blue">Button2</Button>
                <Button size='large' color="blue">Button3</Button>
            </div>
            <div>
                <Button size='small' color="green">Button</Button>
                <Button size='medium' color="green">Button2</Button>
                <Button size='large' color="green">Button3</Button>
            </div>
            <div>
                <Button size='small' color="pink">Button</Button>
                <Button size='medium' color="pink">Button2</Button>
                <Button size='large' color="pink">Button3</Button>
            </div>
        </div>
    );
}

export default Necklace;
