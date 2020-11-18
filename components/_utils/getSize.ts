export function getSize(size:string): string {
    switch (size) {
        case 'large':
            return 'lg';
        case 'small':
            return 'sm';
        default:
            return 'md';
    }
}
