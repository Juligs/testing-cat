const ALLIANCE_NO2_FONT_URL = 'https://webassets.iota.org/api/protected?face=alliance-no2';

export function FontLinks() {
    return <link rel="stylesheet" href={ALLIANCE_NO2_FONT_URL} precedence="first" />;
}
