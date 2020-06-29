import * as express from 'express';
import api from './api';

const app = express();

app.use('/api/v1',api);

const {
    PORT = 3000
} = process.env;



if(require.main === module){
    app.listen(PORT,()=> {
        console.log('server started at http://localhost:'+PORT)
    })
}


export default app;