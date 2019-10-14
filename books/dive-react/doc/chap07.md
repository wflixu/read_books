## React组件和服务器交互

polyfill指的是“用于实现浏览器不支持原生功能的代码”，比如，现代浏览器应该支持fetch函数，对于不支持的浏览器，网页中引入对应fetch的polyfill后，这个polyfill就给全局的window对象上增加一个fetch函数，让这个网页中的JavaScript可以直接使用fetch函数了，就好像浏览器本来就支持fetch一样。在这个链接上

fetch 的使用方法：
```javascript
componentDidMount() {
  const apiUrl = `/data/cityinfo/${cityCode}.html`;
  fetch(apiUrl).then((response) => {
    if (response.status !== 200) {
      throw new Error('Fail to get response with status ' + response.status);
    }
    response.json().then((responseJson) => {
      this.setState({ weather: responseJson.weatherinfo });
    }).catch((error) => {
      this.setState({ weather: null });
    });
  }).catch(error=>{
      this.setState({weather:null});
  });
  
}

```

代理功能访问API
在package.json 中
"proxy": "http://www.weather.com.cn/",


组件访问服务器的优缺点

优点式简单 清晰，缺点是项目变大后， 维护困难

**通常我们在组件的componentDidMount函数中做请求服务器的事情**


## Redux 访问服务器

redux 单向数据流，通过thunk 来 解决异步请求的问题


### redux-thunk中间件

- 怎么使用

```

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk'

import {reducer as weatherReducer} from './weather/';

import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

const reducer = combineReducers({
  weather: weatherReducer
});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);

//actions


export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;

    dispatch(fetchWeatherStarted())

    return fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
        dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch((error) => {
        dispatch(fetchWeatherFailure(error));
      });
    }).catch((error) => {
      dispatch(fetchWeatherFailure(error));
    })
  };
}


```

少要涉及三个action类型：
表示异步操作已经开始的action类型，在这个例子里，表示一个请求天气信息的API请求已经发送给服务器的状态；
表示异步操作成功的action类型，请求天气信息的API调用获得了正确结果，就会引发这种类型的action；
表示异步操作失败的action类型，请求天气信息的API调用任何一个环节出了错误，无论是网络错误、本地代理服务器错误或者是远程服务器返回的结果错误，都会引发这个类型的action。



**异步actions的套路**
```
export const sampleAsyncAction = () => {
return (dispatch, getState) => {
//在这个函数里可以调用异步函数，自行决定在合适的时机通过dispatch参数
//派发出新的action对象。
}}
```

异步的终止，因为fetch 的原因，无法终止请求
一个规避的办法是使用reqid

## redux 异步操作的其他方法

- redux-saga
- redux-promise
- redux-observable


如何挑选异步操作方式

- 在Redux的单向数据流中，什么时机插入异步操作？

    redux-thunk 异步操作切入的实际实在中间件中，

    redux-effects ，通过定制化 storeEnhencer ,在action派发路径的任何一个位置插入异步操作
- 库的大小

- 学习曲线





