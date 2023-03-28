
export class ObjectUtil
{
    public static noValue(input): boolean
    {
        return !this.hasValue(input);
    }

    public static hasValue(input): boolean
    {
        if(input === undefined
            || input === 'undefined' || input === null || input === 'null' )
        {
            return false;
        }

        return true;
    }


    public static isValidNumber(value):boolean
    {
        // @ts-ignore
        if (ObjectUtil.noValue(value) || Number.isNaN(value)) {
            return false;
        }

        return true;
    }

    // public static isNullOrUndefined(value):boolean
    // {
    //   return !this.hasValue(value);
    // }

    public static isNullOrUndefined(value): boolean {
        console.log("isNullOrUndefined value = ",value);
        if (value === null || value === undefined || value === 'null' || value === 'undefined') {
            return true;
        }
        return false;
    }

    public static toValue(input): any
    {
        if(ObjectUtil.hasValue(input))
        {
            return input;
        }
        return null;
    }


    public static nullToZero(input): any
    {
        if(ObjectUtil.hasValue(input))
        {
            return input;
        }
        return 0;
    }

}
