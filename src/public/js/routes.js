import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppComponent from './app.component';
import IndexComponent from './components/index/index.component';
import LoginComponent from './components/login/login.component';

import ForgotPassword from './components/forgot-password/forgot-password';
import ResetPassword from './components/forgot-password/reset-password';

import RegisterComponent from './components/register/register.component';
import HomeComponent from "./components/home/home.component";
import CongratsComponent from "./components/register/congrats.component";
import ThanksComponent from "./components/register/thanks.component";
import IntroSlide from "./components/intro/intro-slide";
import IntroMenu from "./components/intro/intro-menu";
import SliderContainer from "./components/slider/slider-container";
import CountryComponent from "./components/country/country.component";
import SettingsComponent from "./components/settings/settings.component";
import Error404 from "./components/errors/404";
import Error500 from "./components/errors/500";
import Copyright from "./components/copyright/copyright";
import PrivacyComponent from "./components/privacy-policy/privacy.component";
import TermsComponent from "./components/terms-and-conditions/terms.component";
import DownloadCenter from "./components/download-center/download-center";
import Glossary from "./components/glossary/glossary";
import Pi from "./components/pi/pi";
import End from "./components/end/end";
import ContactUs from "./components/contact-us/contact-us";

import requireAuth from "./utils/require-auth";

export default (
    <Route path="/" component={AppComponent}>
        <IndexRoute component={IndexComponent}/>

        <Route path="login" component={IndexComponent}>
            <IndexRoute component={LoginComponent}/>
        </Route>

        <Route path="home" component={HomeComponent} onEnter={requireAuth}/>

        <Route path="intro" component={IndexComponent} onEnter={requireAuth}>
            <IndexRoute component={IntroMenu}/>
        </Route>

        <Route path="intro(/:screen)" component={IntroSlide} onEnter={requireAuth}/>

        <Route path="country" component={CountryComponent}/>

        <Route path="glossary" component={Glossary}/>

        <Route path="slide/:version/:slug" component={SliderContainer} onEnter={requireAuth}/>

        <Route path="end" component={End} onEnter={requireAuth}/>

        <Route path="forgot-password" component={IndexComponent}>
            <IndexRoute component={ForgotPassword}/>
        </Route>

        <Route path="reset-password" component={IndexComponent}>
            <IndexRoute component={ResetPassword}/>
        </Route>

        <Route path="register" component={IndexComponent}>
            <IndexRoute component={RegisterComponent}/>
            <Route path="thanks" component={ThanksComponent}/>
        </Route>

        <Route path="verify-email" component={IndexComponent}>
            <IndexRoute component={CongratsComponent}/>
        </Route>

        <Route path="settings" component={SettingsComponent} onEnter={requireAuth}/>
        <Route path="download-center" component={DownloadCenter}/>
        <Route path="privacy-policy" component={PrivacyComponent}/>
        <Route path="terms-and-conditions" component={TermsComponent}/>
        <Route path="copyright" component={Copyright}/>
        <Route path="pi" component={Pi}/>
        <Route path="contact-us" component={ContactUs}/>

        <Route path="404" component={Error404}/>
        <Route path="500" component={Error500}/>

        <Route path="*" component={Error404}/>
    </Route>
)