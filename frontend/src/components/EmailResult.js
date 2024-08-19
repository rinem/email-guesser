import React from 'react';
import './EmailResult.css';

function EmailResult({ email }) {
    return (
        <div className="email-result mt-4">
            <h2 className="text-center">Derived Email:</h2>
            <p className="text-center email-address">{email}</p>
        </div>
    );
}

export default EmailResult;

