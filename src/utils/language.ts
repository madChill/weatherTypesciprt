const lang: string = 'en';

type langType<T> = {
    service404?: T,
    Celsius?: T,
    Humidity?: T,
    Wind?: T,
    AirQuality?: T,
    InputPlaceHolderSearch?: T,
    notFoundLocation?: T,
}

const rules: langType<{ en: string, vi: string, default: string }> = {
    service404: {
        en: 'service not found',
        vi: 'có lỗi xảy ra',
        default: 'service not found'
    },
    Celsius: {
        en: 'C',
        vi: 'độ C',
        default: 'service not found'
    },
    Humidity: {
        en: 'Humidity',
        vi: 'Độ ẩm',
        default: 'Humidity'
    },
    Wind: {
        en: 'Wind',
        vi: 'Gió',
        default: 'Wind'
    },
    AirQuality: {
        en: 'Air Quality',
        vi: 'Chất lượng không khí',
        default: 'Air Quality'
    },
    InputPlaceHolderSearch: {
        en: 'Please input search field',
        vi: 'nhập vào ô tìm kiếm',
        default: 'Please input search field'
    },
    notFoundLocation: {
        en: 'We could not find weather information for the location above',
        vi: '',
        default: 'We could not find weather information for the location above'
    },
};
const i18n: langType<string> = {};
Object.keys(rules).map((key) => {
    i18n[key] = rules[key][lang] || rules[key].default;
});

export default i18n;
