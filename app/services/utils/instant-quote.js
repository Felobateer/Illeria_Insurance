import { receiveEmails } from "./email-manager";

export async function lifeEmail(info) {
    try {
        const {name, email, state, dob, gender, smoke, health, term, amount} = info;
        const message = `
            <h1>Life Insurance Quote Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <br />
            <p><strong>Email:</strong> ${email}</p>
            <br />
            <p><strong>State:</strong> ${state}</p>
            <br />
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <br />
            <p><strong>Gender:</strong> ${gender}</p>
            <br />
            <p><strong>Smoker:</strong> ${smoke}</p>
            <br />
            <p><strong>Health:</strong> ${health}</p>
            <br />
            <p><strong>Term:</strong> ${term}</p>
            <br />
            <p><strong>Amount:</strong> ${amount}</p>
            <br />
            `
        const status = "Life Insurance Quote Request";
        receiveEmails(status, message, email);
        return {
            status: 'success',
            message: 'Email sent successfully',
            info,
        };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function healthEmail(info) {
    try {
        const {name, email, state, dob, phone, zip, householdSize, householdIncome, comment} = info;
        const message = `
            <h1>Health Insurance Quote Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <br />
            <p><strong>Email:</strong> ${email}</p>
            <br />
            <p><strong>State:</strong> ${state}</p>
            <br />
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <br />
            <p><strong>Phone Number:</strong> ${phone}</p>
            <br />
            <p><strong>Zip Code:</strong> ${zip}</p>
            <br />
            <p><strong>Household Size:</strong> ${householdSize}</p>
            <br />
            <p><strong>Household Income:</strong> ${householdIncome}</p>
            ${comment ? `<br /><p><strong>Comments:</strong> ${comment}</p>` : ''}
            <br />
            `
        const status = "Health Insurance Quote Request";
        receiveEmails(status, message, email);
        return {
            status: 'success',
            message: 'Email sent successfully',
            info,
        };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function finalExpenseEmail(info) {
    try {
        const {name, email, state, dob, phone, zip, gender, smoker, comment} = info;
        const message = `
            <h1>Final Expense Insurance Quote Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <br />
            <p><strong>Email:</strong> ${email}</p>
            <br />
            <p><strong>State:</strong> ${state}</p>
            <br />
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <br />
            <p><strong>Phone Number:</strong> ${phone}</p>
            <br />
            <p><strong>Zip Code:</strong> ${zip}</p>
            <br />
            <p><strong>Household Size:</strong> ${gender}</p>
            <br />
            <p><strong>Household Income:</strong> ${smoker}</p>
            ${comment ? `<br /><p><strong>Comments:</strong> ${comment}</p>` : ''}
            <br />
            `
        const status = "Final Expense Insurance Quote Request";
        receiveEmails(status, message, email);
        return {
            status: 'success',
            message: 'Email sent successfully',
            info,
        };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function medicareEmail(info) {
    try {
        const {name, email, state, dob, phone, zip} = info;
        const message = `
            <h1>Medicare Supplement Insurance Quote Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <br />
            <p><strong>Email:</strong> ${email}</p>
            <br />
            <p><strong>State:</strong> ${state}</p>
            <br />
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <br />
            <p><strong>Phone Number:</strong> ${phone}</p>
            <br />
            <p><strong>Zip Code:</strong> ${zip}</p>
            <br />
            `
        const status = "Medicare Supplement Insurance Quote Request";
        receiveEmails(status, message, email);
        return {
            status: 'success',
            message: 'Email sent successfully',
            info,
        };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function autoEmail(info) {
    try{
        const {name, email, zip, inquiry} = info;
        const message = `
            <h1>Fast Auto Insurance Quote Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <br />
            <p><strong>Email:</strong> ${email}</p>
            <br />
            <p><strong>Zip Code:</strong> ${zip}</p>
            <br />
            <p><strong>Inquiry:</strong> ${inquiry}</p>
            <br />
            `
        const status = "Fast Auto Insurance Quote Request";
        receiveEmails(status, message, email);
        return {
            status: 'success',
            message: 'Email sent successfully',
            info,
        };
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}