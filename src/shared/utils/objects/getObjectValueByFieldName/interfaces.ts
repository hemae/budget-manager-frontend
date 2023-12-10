export interface Options {
    /** Target Object*/
    object: Record<string, any>;
    /** Object field name, for ex. 'value', 'value1.value2.value3'*/
    fieldName: string | number | symbol | undefined;
    /** Default: '.', for example 'value1.value2.value3'*/
    fieldNameSeparator?: string;
}
