import { useContext } from 'react';
import LanguageContext from '../context/language.context';

const useLanguage = () => {
    return useContext(LanguageContext);
};

export default useLanguage;