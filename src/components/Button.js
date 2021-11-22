import React from 'react';
import cn from 'classnames';

const Button = ({children, size}) => {

    return (
        <button className={cn(`Button`, size)}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium'
}

export default Button;