export function getType(type:string):string {
    switch (type) {
        case 'disabled':
            return 'disabled';
        case 'primary':
            return 'primary';
        default:
            return 'default';
    }
}
