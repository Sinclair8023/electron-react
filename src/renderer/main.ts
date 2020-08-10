import dva from 'dva';
import messageModel from './models/message'
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(messageModel)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
