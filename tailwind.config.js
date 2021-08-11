module.exports = {
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "cognito-primary": "#00b3ab",
                "cognito-secondary": "#d85427",
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};