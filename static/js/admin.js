function ar_IsValidUrl(a) {
    return a.match(/^[a-z0-9=_&\.\/\-]{2,64}$/i) != null;
}

function ar_ValidateUrl(a) {
    if (ar_IsValidUrl(a)) {
        return null;
    }

    if (a.length < 2) {
        return "Длина URL-адреса должна составлять не менее 2 символов.";
    }
    else if (a.length > 64) {
        return "Длина URL-адреса должна составлять не более 64 символов.";
    }
    else {
        return "Вы использовали недопустимые символы в своем URL-адресе.\n\nВы можете использовать только следующие:\n a to z\n 0 to 9\n = _ & . / -"
    }
};
