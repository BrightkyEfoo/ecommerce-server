import { app } from './appInit';
import { dbInit } from './db/connect';

const port = process.env.PORT;
if (!port) throw new Error('A key in environement is not defined : PORT');

app.listen(port, async () => {
    console.log('1. Our server started successfully ✅');

    //   do all initializations stuff here
    const dbInitRes = await dbInit();
    if (!dbInitRes) {
        console.error('2. Db initialisation failed ❌');
    } else {
        console.log('2. Db initialized succesfully ✅');
//        await mock(3);
    }
});
