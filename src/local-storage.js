export const loadCredentials = () => {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    if (username && password) {
        return {username, password};
    }

    return null;
};

export const saveCredentials = (username, password) => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
};

export const clearCredentials = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
};
