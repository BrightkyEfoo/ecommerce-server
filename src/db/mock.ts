import { Users } from '../components/Users/users.model';
import { IProduct, Products } from '../components/Products/products.model';
import { Categories, ICategory } from '../components/categories/categories.model';

const products: ({
    discountPercentage: number;
    thumbnail: string;
    images: string[];
    price: number;
    rating: number;
    description: string;
    title: string;
    stock: number;
    category: string;
    brand: string
})[] = [
    {
        'title': 'Sony WH-1000XM4 Noise Cancelling Headphones',
        'description': 'Immerse yourself in your music and block out the world with these exceptional noise-canceling headphones from Sony. Featuring plush ear cushions for a comfortable fit, a long-lasting battery to keep you entertained for hours, and advanced noise-canceling technology that eliminates distractions, these headphones are perfect for long listening sessions, whether you\'re traveling, working, or simply relaxing at home.',
        'price': 199.99,
        'discountPercentage': 5.0,
        'rating': 4.8,
        'stock': 215,
        'brand': 'Sony',
        'category': 'Audio',
        'thumbnail': 'https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/3:2/w_2400,h_1600,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg',
        'images': [
            'https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/3:2/w_2400,h_1600,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg',
            'https://media.cnn.com/api/v1/images/stellar/prod/200821121551-underscored-best-anc-headphones-lead.jpg',
        ],
    },
    {
        'title': 'Samsung Odyssey G9 49-Inch Curved Gaming Monitor',
        'description': 'Elevate your gaming experience with the Samsung Odyssey G9, a stunning 49-inch curved gaming monitor that delivers unparalleled visuals and immersive gameplay. With its ultra-wide curved display, high refresh rate, and HDR support, the Odyssey G9 brings your games to life like never before. Whether you\'re a competitive gamer or a casual enthusiast, the Odyssey G9 will take your gaming experience to the next level.',
        'price': 499.00,
        'discountPercentage': 0.0,
        'rating': 4.3,
        'stock': 32,
        'brand': 'Samsung',
        'category': 'Monitor',
        'thumbnail': 'https://images.samsung.com/is/image/samsung/p6pim/au/lc49g95tssexxy/gallery/au-odyssey-g9-c49g95t-lc49g95tssexxy-532120977?$650_519_PNG',
        'images': [
            'https://images.samsung.com/is/image/samsung/p6pim/au/lc49g95tssexxy/gallery/au-odyssey-g9-c49g95t-lc49g95tssexxy-532120977?$650_519_PNG',
            'https://images.samsung.com/is/image/samsung/p6pim/au/lc49g95tssexxy/gallery/au-odyssey-g9-c49g95t-lc49g95tssexxy-532120977?$650_519_PNG$',
        ],
    },
    {
        'title': 'Google Nest Wifi Router',
        'description': 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire home in strong, reliable Wi-Fi, eliminating dead zones and buffering. It\'s easy to set up and manage using the Google Home app.',
        'price': 169.99,
        'discountPercentage': 10.0,
        'rating': 4.5,
        'stock': 142,
        'brand': 'Google',
        'category': 'Networking',
        'thumbnail': 'https://crdms.images.consumerreports.org/prod/products/cr/models/400063-mesh-wifi-google-nest-wifi-3-pack-10009019.png',
        'images': [
            'https://crdms.images.consumerreports.org/prod/products/cr/models/400063-mesh-wifi-google-nest-wifi-3-pack-10009019.png',
            'https://fscl01.fonpit.de/userfiles/7446224/image/google-nest-wifi/AndroidPIT-google-nest-wifi-router-repeater.jpg',
        ],
    },
    {
        'title': 'Apple Iphone 9',
        'description': 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire home in strong, reliable Wi-Fi, eliminating dead zones and buffering. It\'s easy to set up and manage using the Google Home app.',
        'price': 169.99,
        'discountPercentage': 10.0,
        'rating': 4.5,
        'stock': 142,
        'brand': 'Google',
        'category': 'Phone',
        'thumbnail': 'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-15-pro-max-256gb-natural-titanium-mu683ll-a-b?wid=465&hei=465&fmt=webp',
        'images': [
            'https://www.cnet.com/a/img/resize/0f37c88c746b755a97f770500419522be6f1da43/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&fit=crop&height=900&width=1200',
            'https://img.phonandroid.com/2023/01/iphone-15-pro-max-concept.jpg',
        ],
    },
    {
        'title': 'Asus Rog',
        'description': 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire home in strong, reliable Wi-Fi, eliminating dead zones and buffering. It\'s easy to set up and manage using the Google Home app.',
        'price': 169.99,
        'discountPercentage': 10.0,
        'rating': 4.5,
        'stock': 142,
        'brand': 'Google',
        'category': 'Computer',
        'thumbnail': 'https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg',
        'images': [
            'https://images.indianexpress.com/2022/07/Asus-ROG-Strix-Scar-17-review-9-1.jpg',
            'https://www.notebookcheck.biz/uploads/tx_nbc2/oasahxv162owufac_setting_000_1_90_end_1000.jpg',
        ],
    },
    {
        'title': 'Mac Book 2045',
        'description': 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire home in strong, reliable Wi-Fi, eliminating dead zones and buffering. It\'s easy to set up and manage using the Google Home app.',
        'price': 1698.99,
        'discountPercentage': 10.0,
        'rating': 4.5,
        'stock': 142,
        'brand': 'Apple',
        'category': 'Computer',
        'thumbnail': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788574000',
        'images': [
            'https://imageio.forbes.com/specials-images/imageserve/5fd00ea644cd62376ce2b6c1/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds',
            'https://www.01net.com/app/uploads/2021/04/Apple-MacBook-Air-M1-face-1024x577.jpg',
        ],
    },
    {
        'title': 'Samsung S21 Ultra',
        'description': 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire home in strong, reliable Wi-Fi, eliminating dead zones and buffering. It\'s easy to set up and manage using the Google Home app.',
        'price': 2698.99,
        'discountPercentage': 10.0,
        'rating': 4.5,
        'stock': 142,
        'brand': 'Samsung',
        'category': 'Phone',
        'thumbnail': 'https://img-19.commentcamarche.net/KWGtZu6XwEiw-Hk8aOFn7V1BVWg=/480x335/smart/25728a9ea07b427d9871c9f1a6be0fa5/ccmcms-commentcamarche/39489444.jpg',
        'images': [
            'https://imageio.forbes.com/specials-images/imageserve/65aed5b43d58713217a6961e/IMG-1504/0x0.jpg?crop=2180,1453,x0,y0,safe&height=473&width=711&fit=bounds',
            'https://www.livemint.com/lm-img/img/2024/01/17/600x338/sa_sung_galaxy_s24_ultra_1705519671976_1705519676738.jpg',
        ],
    },
];


const categories: ICategory[] = [
    {
        title: 'Phone',
        description: 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire hom',
        image: 'https://www.zdnet.com/a/img/resize/76312f7f9e63dc1af788ced3ad22469b91f4e314/2023/08/22/71f6e0b9-3405-43ea-972c-202a7c8bf615/best-phones-zdnet-thumb-image.jpg?auto=webp&fit=crop&height=900&width=1200',
    },
    {
        title: 'Computer',
        description: 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire hom',
        image: 'https://i.ebayimg.com/thumbs/images/g/y7UAAOSw8RdlZa7F/s-l1200.jpg',
    },
    {
        title: 'Networking',
        description: 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire hom',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWnv_lV8Ecj876I8ecgutG19L72-FqRx8R_9rfDVD&s',
    },
    {
        title: 'Monitor',
        description: 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire hom',
        image: 'https://image.benq.com/is/image/benqco/monitor-all-series-kv-3-m?$ResponsivePreset$&fmt=png-alpha',
    },
    {
        title: 'Audio',
        description: 'Upgrade your home Wi-Fi with the Google Nest Wifi Router. This mesh networking system blankets your entire hom',
        image: 'https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/ezu7nroj7ucmx78qe3su.jpg',
    },
];


const mock = async (index: number) => {
    await Users.findOneAndDelete({ email: 'brightefoo@gmail.com' });

    const categories = [];

    const catPromises = categories.map(async (category) => {
        return await Categories.create(category);
    });

    await Promise.all(catPromises);

    const prodPromises = products.map(async el => await Products.create(el));

    await Promise.all(prodPromises);

    await Users.create({
        email: 'brightefoo@gmail.com',
        password: 'brightkyefoo',
        firstName: 'bright',
        lastName: 'efoo',
        profilePicture: 'http://localhost:9000/public/images/bright.jpeg',
        roles: [1, 2, 3],
    });


    console.log(`${index}. Succesfully mocked db ✅`);
};

export { mock };
