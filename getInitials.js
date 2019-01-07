function getInitials(name) {
    return name.split(' ')
        .map(word => word.charAt(2).toUpperCase())
        .join('');
}
