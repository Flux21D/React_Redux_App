import React  from "react";
import ReactDOMServer from 'react-dom/server'
import {connect} from "react-redux";
import {Link} from "react-router";
import {login, removeAuthErrors} from "../../actions/auth";
import setAuthToken from "../../utils/set-auth-token";
import setCurrentUser from "../../actions/auth";
import $ from "jquery"

let HtmlToReactParser = require('html-to-react').Parser;
let htmlToReactParser = new HtmlToReactParser();

function loggedIn(state){
    if(state != null)
      loggedIn.state = state;
    return function(){
      return loggedIn.state;
    };
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                traditionalSignIn_emailAddress: '',
                traditionalSignIn_password: ''
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.forgotPasswordClick = this.forgotPasswordClick.bind(this);
        this.loadPage=this.loadPage.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.regclosePopup = this.regclosePopup.bind(this);
        this.backBtnFunc = this.backBtnFunc.bind(this);
    }

    handleFormChange(event) {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;

        this.setState({
            formData
        });
    }

    dp(f){
      this.props.dispatch(f);
    }

    onSubmit() {
        // event.preventDefault();

        const formData = this.state.formData;
        this.context.router.push("?resume=1");

        /* this.props.login(formData).then(
            res => {
                if (res.data.stat === "ok") {
                    this.context.router.push("?resume=1");
                }
            }
        ).catch(err => {
            console.log("error", err);
        }); */
    }

    componentWillUnmount() {
    }

  componentDidMount () {
    var that = this;
    that.loadJS('scripts/jquery-2.2.4.min.js',function(){console.log('callback1');}).then(function(){
        that.loadJS('scripts/janrain-init.js',function(){console.log('callback2');}).then(function(){
            setTimeout(function(){
                janrain.settings.capture.screenToRender = 'signIn';
                janrain.settings.capture.flowName = 'lilly_pro_uk';
                that.janrainCaptureWidgetOnLoad();
                let logged = loggedIn(null);
                console.log('logged :'+logged());
                let flag = logged();
                setTimeout(function(){
                  if(flag == undefined){
                    that.openLoginPopup();
                    loggedIn(true);
                    console.log('set logged :'+loggedIn.state);
                  }
                },1000);
            },2000);
        });
    });
  }

  loadJS(src, callback) {
        let promise = new Promise(function(resolve,reject){
            var script = document.createElement('script');
            let loaded;
            script.setAttribute('src', src);
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('async', true);
            script.onerror = function() {
                callback()
                script.onerror = null;
            };
            script.onload = script.onreadystatechange = function() {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                  callback();
                  resolve({});
                  script.onload = script.onreadystatechange = null;
                }
            };
            document.getElementsByTagName('head')[0].appendChild(script);
            
        });
       return promise;
  }


  janrainCaptureWidgetOnLoad() {
        let that = this;
        
        janrain.events.onCaptureLoginSuccess.addHandler(function(res) {
            console.log('Response got is :'+JSON.stringify(res));
            //if (res.stat === "ok") {
                const accessToken = res.accessToken;
                const capture_user = res.userData;

                $.ajax({url: "/api/getuserinfo?AccessToken="+accessToken, 
                            method: "GET",
                            success: function(result){
                              console.log(result);
                              var obj = JSON.parse(result);
                              console.dir(obj);
                              const user = {
                                            uuid: capture_user.uuid,
                                             personalData_title: obj.result.personalData.title,
                                             personalData_firstName: obj.result.personalData.firstName,
                                             personalData_lastName: obj.result.personalData.lastName,
                                             professionalContactData_emailAddress: capture_user.professionalContactData.emailAddress,
                                             professionalContactData_phone: obj.result.professionalContactData.phone,
                                             professionalData_professionalGroup: obj.result.professionalData.professionalGroup,
                                             professionalData_specialty: obj.result.professionalData.specialty,
                                             professionalData_postalCode: obj.result.professionalData.postalCode,
                                             termsAndConditions_contactConsent: obj.result.termsAndCondition.contactConsent
                                        };


                                        const authData = {
                                            accessToken: accessToken,
                                            user: user
                                        };

                                        setAuthToken(accessToken);

                                        console.log(authData);

                                        localStorage.setItem('auth', JSON.stringify(authData));
                                        that.dp(setCurrentUser(authData));
                                        that.onSubmit();
                                }
                  });
          //}
        });

        janrain.events.onCaptureSessionFound.addHandler(function(result) {
            console.log('session Found');
            that.onSubmit();
        });

        janrain.events.onCaptureScreenShow.addHandler(function(result) {
                // Swap out the default text for the terms and conditions label
                // such that the links can be defined in the JTL/markup.
                console.log(JSON.stringify(result));
                if (result.screen == 'traditionalRegistration') {
                    var optInText = document.getElementById('registration_termsAndConditionsLabel');
                    var wrapper = document.getElementById('capture_traditionalRegistration_form_item_inner_termsAndCondition_termsAndConditions');
                    var label = wrapper.firstChild;

                    if (optInText && wrapper && label) {
                        for (var i=0; i < label.childNodes.length; i++) {
                            var child = label.childNodes[i]
                            if (child.nodeType === 3) {
                                label.removeChild(child);
                            }
                        }
                        wrapper.appendChild(optInText);
                    }
                }
        });
  
        // register custom client-side valididators
        janrain.capture.ui.registerFunction('passwordValidation', janrainCustomPasswordValidation);
        janrain.capture.ui.registerFunction('postalCodeValidation', janrainCustomPostalCodeValidation);
        // janrain.settings.capture.screenToRender = 'traditionalRegistration';
        // should be the last line in janrainCaptureWidgetOnLoad()
        janrain.capture.ui.start();
    }

    openLoginPopup(){
      var divClasses3 = document.getElementById("returnTraditional").classList;
      divClasses3.remove("show");
      document.getElementById('signIn').className += " show";
      document.getElementById('login-overlay').className += "show";
    }

    loadPage(){
      janrain.settings.capture.screenToRender = 'traditionalRegistration';
      var divClasses1 = document.getElementById("signIn").classList;
      divClasses1.remove("show");
      console.log('asdfghj');
      document.getElementById("register-panel").innerHTML='<a href="#" class="janrain_modal_closebutton" id="reg-close-btn" onclick="{this.regclosePopup.bind(this)}"><span class="janrain-icon-16 janrain-icon-ex2"></span>    </a><div class="object-container"><div style="display:none;" id="registrationNewVerification"><div class="capture_header"><h1>{* page_register_verification_header *}</h1></div><p>{* page_register_verification_message *}</p><div class="capture_footer"><a href="#" onclick="" class="capture_btn capture_primary">Close</a></div></div><div style="display:block;" id="traditionalRegistration"><div class="capture_header"><h1>{* page_register_traditional_header *}</h1></div><p>{* page_register_traditional_message *} <a href="sign-in.html">{* page_register_signin *}</a></p>{* #registrationForm *}<div class="col-2 form-control-row"><div class="col">{* personalData_title *}</div><div class="col">{* professionalData_position *}</div></div><div class="col-2 form-control-row"><div class="col">{* personalData_firstName *}</div><div class="col">{* professionalData_specialty *}</div></div><div class="col-2 form-control-row"><div class="col">{* personalData_lastName *}</div><div class="col">{* professionalData_postalCode *}</div></div><div class="col-2 form-control-row"><div class="col">{* registration_emailAddress *}</div><div class="col">{* registration_password *}</div></div><div class="col-2 form-control-row"><div class="col">{* registration_emailAddressConfirm *}</div><div class="col">{* registration_passwordConfirm *}</div></div><div class="col-2 form-control-row"><div class="col">{* professionalContactData_phone *}</div><div class="col">{* termsAndCondition_termsAndConditions *}<span id="registration_termsAndConditionsLabel">{* page_register_terms_label_1 *} <a href="#">{* page_register_terms_link *}</a> {* page_register_terms_label_2 *} <a href="#">{* page_register_privacy_link *}</a>.</span></div></div><div class="contact-text">{* page_register_contactConsent_message *}</div>{* termsAndCondition_contactConsent *}<div class="capture_footer"><div class="capture_right">{* createAccountButton *}</div></div>{* /registrationForm *}</div><div style="display:none;" id="userStatusPostLogin">{* page_access_not_active *}</div><div style="display:none;" id="countryPostLogin">{* page_access_wrong_country *}</div><div style="display:none;" id="professionalGroupPostLogin">{* page_access_wrong_group *}</div></div>';
      document.getElementById("register-panel").className = 'show';
      document.getElementById("reg-close-btn").className += ' show';
      
    }

    forgotPasswordClick(){
      //Forgot pwd click function
      var divClasses1 = document.getElementById("signIn").classList;
      var divClasses2 = document.getElementById("login-overlay").classList;
        divClasses1.remove("show");
        divClasses2.remove("show");
    }

    

    closePopup(){    
      var divClasses1 = document.getElementById("signIn").classList;
    var divClasses2 = document.getElementById("login-overlay").classList;
    var divClasses3 = document.getElementById("register-panel").classList;
      divClasses1.remove("show");
      divClasses2.remove("show");
      divClasses3.remove("show");
    }

    regclosePopup(){
      var regcloseclasses = document.getElementById("reg-close-btn").classList;
      var divClasses3 = document.getElementById("register-panel").classList;
      var divClasses2 = document.getElementById("login-overlay").classList;
      regcloseclasses.remove("show");
      divClasses3.remove("show");
      divClasses2.remove("show");
    }

    backBtnFunc(){
      var divClasses1 = document.getElementById("signIn").classList;
      var divClasses2 = document.getElementById("login-overlay").classList;
      divClasses1.remove("show");
      divClasses2.remove("show");   
    }
    render () {
      let htmlInput = '<div style="display:none;" id="signIn"><div class="capture_header signin-title"><h1>{* page_signin_signin_header *}</h1></div><div class="capture_signin">{* #userInformationForm *}{* traditionalSignIn_emailAddress *}{* traditionalSignIn_password *}<div class="capture_form_item forgotpwd"><a href="#" data-capturescreen="forgotPassword" id="forgotpwd-link" onclick="{this.forgotPasswordClick.bind(this)}">{* page_signin_signin_forgot *}</a></div><div class="capture_footer"><div class="capture_left"><a href="#" id="back-btn" onclick="{this.backBtnFunc.bind(this)}"> Cancel </a></div><div class="capture_right">{* traditionalSignIn_signInButton *}</div></div>{* /userInformationForm *}</div><p class="register">Not a member yet? <a class="text-orange" href="/register" id="reg-btn" onClick="{this.loadPage}">Register now</a></p><a href="#" class="janrain_modal_closebutton" id="close-btn" onclick="{this.closePopup.bind(this)}"><span class="janrain-icon-16 janrain-icon-ex2"></span></a></div></div><div id="login-overlay"> </div><div style="display:none;" id="returnSocial"><div class="capture_header"><h1>{* page_signin_returnSocial_header *}</h1></div><div class="capture_signin"><h2>{* page_signin_returnSocial_header2 *} {* welcomeName *}!</h2>{* loginWidget *}<div class="capture_centerText switchLink"><a href="#" data-cancelcapturereturnexperience="true">{* page_signin_returnSocial_useAnother *}</a></div></div></div><div style="display:none;" id="returnTraditional"><div class="capture_header"><h1>{* page_signin_returnTraditional_header *}</h1></div><h2 class="capture_centerText"><span id="traditionalWelcomeName">{* page_signin_returnTraditional_header2 *}</span></h2><div class="capture_backgroundColor">{* #userInformationForm *}{* traditionalSignIn_emailAddress *}{* traditionalSignIn_password *}<div class="capture_form_item capture_rightText">{* traditionalSignIn_signInButton *}</div>{* /userInformationForm *}</div><a href="#" class="janrain_modal_closebutton" id="return_close-btn" onclick="{this.closePopup.bind(this)}"><span class="janrain-icon-16 janrain-icon-ex2"></span></a></div><div style="display:none;" id="socialRegistration"><div class="capture_header"><h1>{* page_signin_socialRegistration_header *}</h1></div><h2>{* page_signin_socialRegistration_header2 *}</h2>{* #socialRegistrationForm *}{* socialRegistration_firstName *}{* socialRegistration_lastName *}{* socialRegistration_emailAddress *}{* page_signin_socialRegistration_terms_label_1 *} <a href="#">{* page_signin_socialRegistration_terms_link *}</a> {* page_signin_socialRegistration_terms_label_2 *} <a href="#">{* page_signin_socialRegistration_privacy_link *}</a>.<div class="capture_footer"><div class="capture_left">{* backButton *}</div><div class="capture_right">{* socialRegistration_signInButton *}</div></div>{* /socialRegistrationForm *}</div><div style="display:none;" id="forgotPassword"><div class="capture_header"><h1>{* page_signin_forgotPassword_header *}</h1></div><h2>{* page_signin_forgotPassword_header2 *}</h2>{* #forgotPasswordForm *}{* traditionalSignIn_emailAddress *}<div class="capture_footer"><div class="capture_right">{* forgotPassword_sendButton *}</div></div>{* /forgotPasswordForm *}</div><div style="display:none;" id="forgotPasswordSuccess"><div class="capture_header"><h1>{* page_signin_forgotPasswordSuccess_header *}</h1></div><p>{* page_signin_forgotPasswordSuccess_message *}</p><div class="capture_footer"><a href="#" data-capturescreen="signIn" class="capture_btn capture_primary">{* page_signin_forgotPasswordSuccess_signin *}</a></div></div><div style="display:none;" id="mergeAccounts">{* mergeAccounts *}</div><div style="display:none;" id="traditionalAuthenticateMerge"><div class="capture_header"><h1>{* page_signin_traditionalAuthenticateMerge_header *}</h1></div><div class="capture_signin">{* #tradAuthenticateMergeForm *}{* traditionalSignIn_emailAddress *}{* mergePassword *}<div class="capture_footer"><div class="capture_left">{* backButton *}</div><div class="capture_right">{* traditionalSignIn_signInButton *}</div></div>{* /tradAuthenticateMergeForm *}</div></div><div style="display:none;" id="userStatusPostLogin">{* page_access_not_active *}</div><div style="display:none;" id="countryPostLogin">{* page_access_wrong_country *}</div><div style="display:none;" id="professionalGroupPostLogin">{* page_access_wrong_group *}</div><div id="register-panel"><a href="#" class="janrain_modal_closebutton" id="reg-close-btn" onclick="{this.regclosePopup.bind(this)}"><span class="janrain-icon-16 janrain-icon-ex2"></span>    </a><div class="object-container"><div style="display:none;" id="registrationNewVerification"><div class="capture_header"><h1>{* page_register_verification_header *}</h1></div><p>{* page_register_verification_message *}</p><div class="capture_footer"><a href="#" onclick="" class="capture_btn capture_primary">Close</a></div></div><div style="display:block;" id="traditionalRegistration"><div class="capture_header"><h1>{* page_register_traditional_header *}</h1></div><p>{* page_register_traditional_message *} <a href="sign-in.html">{* page_register_signin *}</a></p>{* #registrationForm *}<div class="col-2 form-control-row"><div class="col">{* personalData_title *}</div><div class="col">{* professionalData_position *}</div></div><div class="col-2 form-control-row"><div class="col">{* personalData_firstName *}</div><div class="col">{* professionalData_specialty *}</div></div><div class="col-2 form-control-row"><div class="col">{* personalData_lastName *}</div><div class="col">{* professionalData_postalCode *}</div></div><div class="col-2 form-control-row"><div class="col">{* registration_emailAddress *}</div><div class="col">{* registration_password *}</div></div><div class="col-2 form-control-row"><div class="col">{* registration_emailAddressConfirm *}</div><div class="col">{* registration_passwordConfirm *}</div></div><div class="col-2 form-control-row"><div class="col">{* professionalContactData_phone *}</div><div class="col">{* termsAndCondition_termsAndConditions *}<span id="registration_termsAndConditionsLabel">{* page_register_terms_label_1 *} <a href="#">{* page_register_terms_link *}</a> {* page_register_terms_label_2 *} <a href="#">{* page_register_privacy_link *}</a>.</span></div></div><div class="contact-text">{* page_register_contactConsent_message *}</div>{* termsAndCondition_contactConsent *}<div class="capture_footer"><div class="capture_right">{* createAccountButton *}</div></div>{* /registrationForm *}</div><div style="display:none;" id="userStatusPostLogin">{* page_access_not_active *}</div><div style="display:none;" id="countryPostLogin">{* page_access_wrong_country *}</div><div style="display:none;" id="professionalGroupPostLogin">{* page_access_wrong_group *}</div></div></div>';
      let reactElement = htmlToReactParser.parse(htmlInput);
      return (
        <div >
          {reactElement}
        </div>
      );
    }
}

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const actionCreators = {
    login,
    removeAuthErrors
};

export default connect(mapStateToProps)(LoginForm);