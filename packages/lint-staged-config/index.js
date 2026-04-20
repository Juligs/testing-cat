module.exports = {
    '*.{ts,tsx,js,jsx,mjs}': 'eslint --fix --max-warnings=0 --no-warn-ignored',
    '*.{ts,tsx,js,jsx,mjs,scss,css,md,mdx,json}': 'prettier --write',
};
