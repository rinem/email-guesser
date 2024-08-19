import EmailService from '../services/emailService.js';

const getEmail = (req, res) => {
    const { fullName, domain } = req.body;
    const emailService = new EmailService();
    const email = emailService.deriveEmail(fullName, domain);
    if (email) {
        res.json({ email });
    } else {
        res.status(404).json({ email: null, message: 'Email format not found' });
    }
};

const emailController = { getEmail };

export default emailController;

