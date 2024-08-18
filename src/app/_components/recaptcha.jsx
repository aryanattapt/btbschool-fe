import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaComponent = ({recaptchaRef, handleRecaptchaChange, handleRecaptchaExpired}) => {
    return (
        <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
            ref={recaptchaRef}
            onExpired={handleRecaptchaExpired}
        />
    );
};

export default ReCaptchaComponent;
