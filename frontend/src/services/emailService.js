const deriveEmail = async (fullName, domain) => {
    const response = await fetch('http://localhost:8000/api/email/derive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, domain })
    });
    return response.json();
};

const emailService = { deriveEmail };

export default emailService;
