export const PI = 3.14159; // to be accessible in a import, we need to declare "export" before the variable or function

export function getCircumference(radius){ 
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * Math.pow(radius, 2);
}

export function getVolume(radius){
    return 4 * PI * Math.pow(radius, 2);
}