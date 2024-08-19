import emailUtils from '../utils/emailUtils';

describe('emailUtils', () => {
    describe('detectEmailFormat', () => {
        const users = [
            { fullName: 'Jane Doe', email: 'jdoe@babbel.com' },
            { fullName: 'Jay Arun', email: 'jayarun@linkedin.com' },
            { fullName: 'David Stein', email: 'davidstein@google.com' },
            { fullName: 'Marta Dahl', email: 'mdahl@babbel.com' },
        ];

        test('should detect first_name_last_name format', () => {
            const format = emailUtils.detectEmailFormat(users, 'google.com');
            expect(format).toBe('first_name_last_name');
        });

        test('should detect first_name_initial_last_name format', () => {
            const format = emailUtils.detectEmailFormat(users, 'babbel.com');
            expect(format).toBe('first_name_initial_last_name');
        });

        test('should return null if format cannot be determined', () => {
            const format = emailUtils.detectEmailFormat(users, 'slideshare.net');
            expect(format).toBeNull();
        });
    });

    describe('generateEmail', () => {
        test('should generate email using first_name_last_name format', () => {
            const email = emailUtils.generateEmail('John Doe', 'babbel.com', 'first_name_last_name');
            expect(email).toBe('johndoe@babbel.com');
        });

        test('should generate email using first_name_initial_last_name format', () => {
            const email = emailUtils.generateEmail('John Doe', 'google.com', 'first_name_initial_last_name');
            expect(email).toBe('jdoe@google.com');
        });

        test('should return null for unsupported format', () => {
            const email = emailUtils.generateEmail('John Doe', 'babbel.com', 'unsupported_format');
            expect(email).toBeNull();
        });

        test('should handle case where last name is undefined', () => {
            const email = emailUtils.generateEmail('John', 'linkedin.com', 'first_name_last_name');
            expect(email).toBe('john@linkedin.com');
        });
    });
});

