export const transformJsonLanguage = (input) => {
    const output = {};
    const processObject = (obj) => {
        const categories = {};
        for (const key in obj) {
            if (!key.includes('[')) {
                output[key] = obj[key];
            }
        }
        
        for (const key in obj) {
            const match = key.match(/^(.+?)\[(.+?)\]$/);
            if (match) {
                const [_, header, lang] = match;
                if (!categories[lang]) {
                    categories[lang] = {};
                }
                categories[lang][header] = obj[key];
            }
        }
        for (const lang in categories) {
            output[lang] = categories[lang];
        }
    }
    
    const processArray = (arr) => {
        return arr.map(item => {
            if (typeof item === 'object' && !Array.isArray(item)) {
                return transformJsonLanguage(item);
            }
            return item;
        });
    }
    
    if (Array.isArray(input)) {
        return processArray(input);
    } else if (typeof input === 'object' && input !== null) {
        processObject(input);
        return output;
    } else {
        throw new Error("Input must be an array or an object.");
    }
};

export const detransformJsonLanguage = (input) => {
    const processObject = (obj, prefix = '') => {
        if (obj == null) {
            return {};
        }

        const result = {};
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            const newKey = prefix ? `${key}[${prefix}]` : key;

            if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    result[newKey] = value;
                } else {
                    const nestedResult = processObject(value, key);
                    Object.assign(result, nestedResult);
                }
            } else {
                result[newKey] = value;
            }
        });
        return result;
    };

    if (Array.isArray(input)) {
        return input.map(item => processObject(item));
    } else if (typeof input === 'object') {
        return processObject(input);
    } else {
        return input;
    }
}