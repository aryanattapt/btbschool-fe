export const convertPhoneNumberToInternational = (phoneNumber) => {
    phoneNumber = phoneNumber.toString();
    if (phoneNumber.startsWith('0')) {
        return '+62' + phoneNumber.slice(1);
    }
    return phoneNumber;
}
