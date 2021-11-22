import React from 'react';
import cn from 'classnames';

const Button = ({children, size, color}) => {

    return (
        <button className={cn(`Button`, size, color)}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;