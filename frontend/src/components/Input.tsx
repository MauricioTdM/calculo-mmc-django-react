import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

export function Input({ label, id, ...rest }: InputProps) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </div>
    );
}