import { Users } from '../components/Users/users.model';

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
