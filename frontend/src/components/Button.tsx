import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button className="btn-primary" {...rest}>
            {children}
        </button>
    );
}