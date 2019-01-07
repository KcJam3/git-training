function getInitials(name) {
    return name.split(' ')
        .map(word => word.charAt(1).toUpperCase())
        .join('');
}