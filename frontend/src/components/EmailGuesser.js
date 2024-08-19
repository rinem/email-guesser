import React, { useState } from 'react';
import emailService from '../services/emailService';
import EmailResult from './EmailResult';
import './EmailGuesser.css';

function EmailGuesser() {
    const [fullName, setFullName] = useState('');
    const [domain, setDomain] = useState('');
    const [email, setEmail] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await emailService.deriveEmail(fullName, domain);

        if (result?.email) {
            setEmail(result.email);
            setErrorMessage('');
        } else {
            setEmail(null);
            setErrorMessage('Unable to derive email, no data present');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Email Guesser</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="mb-3">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="domain">Company Domain</label>
                    <input
                        id="domain"
                        type="text"
                        className="form-control"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Guess Email</button>
            </form>

            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

            {email && <EmailResult email={email} />}
        </div>
    );
}

export default EmailGuesser;

