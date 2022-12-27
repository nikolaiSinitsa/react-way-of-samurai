import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";

let DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
let ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
let Login = lazy(() => import('./components/Login/Login'));
let UsersContainer = lazy(() => import('./components/Users/UsersContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/Profile" element={<ProfileContainer isMain={true}/>}/>
                            <Route path="/Profile/:userId" element={<ProfileContainer/>}/>
                            <Route path='/Dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/Users' element={<UsersContainer/>}/>
                            <Route path='/Music' element={<Music/>}/>
                            <Route path='/Settings' element={<Settings/>}/>
                            <Route path='/News' element={<News/>}/>
                            <Route path='/Login' element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
    (App));

let SamuraiJSApp = (props) => {
    return <BrowserRouter basename ="/">
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;