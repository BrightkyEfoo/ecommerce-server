import { Users } from '../components/Users/users.model';
import { IProduct } from '../components/Products/products.model';

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
} | {
    discountPercentage: string;
    thumbnail: string;
    images: string[];
    price: string;
    rating: string;
    description: string;
    title: string;
    stock: string;
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
        'category': 'audio',
        'thumbnail': 'https://m.media-amazon.com/images/I/819z2z5bLPL._AC_UF1000,1000_QL80_.jpg',
        'images': [
            'https://m.media-amazon.com/images/I/819z2z5bLPL._AC_UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/7113H27z7zL._AC_UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/71-14zF8y1L._AC_UF1000,1000_QL80_.jpg',
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
        'category': 'monitors',
        'thumbnail': 'https://images.samsung.com/is/image/samsung/p5img/se/odyssey/G9/odyssey-g9-lc49g95tssn-lr-front-silver.jpg',
        'images': [
            'https://images.samsung.com/is/image/samsung/p5img/se/odyssey/G9/odyssey-g9-lc49g95tssn-lr-side-silver.jpg',
            'https://images.samsung.com/is/image/samsung/p5img/se/odyssey/G9/odyssey-g9-lc49g95tssn-lr-back-silver.jpg',
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
        'category': 'networking',
        'thumbnail': '(https://store.google.com/museum/product/nest-wifi',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'Computer',
        'description': 'Example description for a computer.',
        'price': '1000',
        'discountPercentage': '10.5',
        'rating': '4.5',
        'brand': 'Example Brand',
        'stock': '50',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/computer-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'Earphone',
        'description': 'Example description for an earphone.',
        'price': '50',
        'discountPercentage': '0',
        'rating': '3.8',
        'brand': 'Example Brand',
        'stock': '100',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/earphone-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'RAM',
        'description': 'Example description for a RAM.',
        'price': '80',
        'discountPercentage': '5',
        'rating': '4.2',
        'brand': 'Example Brand',
        'stock': '20',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/ram-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'GPU',
        'description': 'Example description for a GPU.',
        'price': '500',
        'discountPercentage': '15.3',
        'rating': '4.9',
        'brand': 'Example Brand',
        'stock': '10',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/gpu-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'Computer',
        'description': 'Example description for a computer.',
        'price': '1000',
        'discountPercentage': '10.5',
        'rating': '4.5',
        'brand': 'Example Brand',
        'stock': '50',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/computer-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'Earphone',
        'description': 'Example description for an earphone.',
        'price': '50',
        'discountPercentage': '0',
        'rating': '3.8',
        'brand': 'Example Brand',
        'stock': '100',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/earphone-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'RAM',
        'description': 'Example description for a RAM.',
        'price': '80',
        'discountPercentage': '5',
        'rating': '4.2',
        'brand': 'Example Brand',
        'stock': '20',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/ram-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'GPU',
        'description': 'Example description for a GPU.',
        'price': '500',
        'discountPercentage': '15.3',
        'rating': '4.9',
        'brand': 'Example Brand',
        'stock': '10',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/gpu-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'Computer',
        'description': 'Example description for a computer.',
        'price': '1000',
        'discountPercentage': '10.5',
        'rating': '4.5',
        'brand': 'Example Brand',
        'stock': '50',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/computer-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
    {
        'title': 'Earphone',
        'description': 'Example description for an earphone.',
        'price': '50',
        'discountPercentage': '0',
        'rating': '3.8',
        'brand': 'Example Brand',
        'stock': '100',
        'category': 'Electronics',
        'thumbnail': 'http://example.com/earphone-thumbnail.jpg',
        'images': [
            'https://store.google.com/museum/product/nest-wifi',
        ],
    },
];

const mock = async (index: number) => {
    await Users.findOneAndDelete({ email: 'brightefoo@gmail.com' });

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
