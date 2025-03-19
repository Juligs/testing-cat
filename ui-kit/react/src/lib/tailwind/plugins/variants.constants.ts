import plugin from 'tailwindcss/plugin';

export const addNotPlaceholderShown = plugin(({ addVariant }) => {
    addVariant('not-placeholder-shown', '&:not(:placeholder-shown)');
    addVariant('group-not-placeholder-shown', ':merge(.group):not(:placeholder-shown) &');
    addVariant('peer-not-placeholder-shown', ':merge(.peer):not(:placeholder-shown) ~ &');
});
