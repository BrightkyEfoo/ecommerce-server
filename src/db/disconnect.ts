import mongoose from 'mongoose';

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('db disconnected sucesfully');
  } catch (error) {
    console.error(`Error when try to disconnect db \n Reason : ${error}`);
  }
};

export { disconnect };
