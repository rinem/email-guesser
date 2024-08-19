import User from '../models/userModel.js';
import emailUtils from '../utils/emailUtils.js';
import sampleData from '../sampleData.json' with { type: "json" };

class EmailService {
    constructor() {
        this.users = Object.keys(sampleData).map(name => new User(name, sampleData[name]));
    }

    deriveEmail(fullName, domain) {
        const emailFormat = emailUtils.detectEmailFormat(this.users, domain);
        return emailUtils.generateEmail(fullName, domain, emailFormat);
    }
}

export default EmailService;

