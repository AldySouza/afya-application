class Validator {
    isEmpty([...args]) {
        return args.includes(null) || args.includes('') || args.includes(undefined);
    }

    isString(args: string) {
        return typeof args[0] === 'string';
    }

    isNumber(args: number) {
        return typeof args === 'number';
    }
} 

export default new Validator();