const detectEmailFormat = (users, domain) => {
    for (let user of users) {
        if (user.email.includes(domain)) {
            const [firstName, lastName] = user.fullName.toLowerCase().split(' ');
            const emailLocalPart = user.email.split('@')[0];

            if (emailLocalPart === `${firstName}${lastName}`) {
                return 'first_name_last_name';
            }
            if (emailLocalPart === `${firstName.charAt(0)}${lastName}`) {
                return 'first_name_initial_last_name';
            }
        }
    }
    return null;
};

const generateEmail = (fullName, domain, format) => {
    if (!fullName || !domain) return null;

    const nameParts = fullName.toLowerCase().split(' ');

    const firstName = nameParts[0];
    const lastName = nameParts[1] || '';

    switch (format) {
        case 'first_name_last_name':
            return `${firstName}${lastName}@${domain}`;

        case 'first_name_initial_last_name':
            return `${firstName.charAt(0)}${lastName}@${domain}`;

        // Returning null if we cannot generate the email or format not in our data
        default:
            return null;
    }
};

const emailUtils = { detectEmailFormat, generateEmail };

export default emailUtils;
