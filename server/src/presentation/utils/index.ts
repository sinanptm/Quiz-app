export const ParseInt = (str: string|number): number =>{
    if(typeof str ==='number'){
        return str;
    }else{
        return parseInt(str, 10)
    }
};
