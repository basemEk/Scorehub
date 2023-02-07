/* Form Validator */

class Form {
    static validator(obj) {
        let keys = Object.entries(obj);
        let results = [];
        let validations = null;

        keys.map((key) => {
            if ('isRequired' in key[1] && key[1].isRequired) {
                if (key[1].value.length === 0) {
                    results.push({
                        [key[0]]: [`The ${key[0]} is required.`]
                    });
                } 
              }  
            return results
        })

        results = Object.assign({}, ...results.map((result) => result))

        if (Object.keys(results).length > 0) {
            validations = {
                errors: results
            }
        } else {
            validations = null
        }

        return validations;
    }
}

export default Form