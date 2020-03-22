import React ,{Component} from 'react';
import './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';
import {Redirect,Link} from 'react-router-dom'; 
class Login extends Component{
       state = {
        controls: {
          email: {
            elementType: "input",
            elementConfig: {
              type: "email",
              placeholder: "Mail Address"
            },
            value: "",
            validation: {
              required: true,
              isEmail: true
            },
            valid: false,
            touched: false
          },
          password: {
            elementType: "input",
            elementConfig: {
              type: "password",
              placeholder: "Password"
            },
            value: "",
            validation: {
              required: true,
              minLength: 6
            },
            valid: false,
            touched: false
          },
          passwordre: {
            elementType: "input",
            elementConfig: {
              type: "password",
              placeholder: "Password"
            },
            value: "",
            validation: {
              required: true,
              minLength: 6
            },
            valid: false,
            touched: false
          }
        },
        redirectToReferrer:false
      };

    SignIn = (event) => {
        const urlsign = 'https://teachapi.herokuapp.com/sign_in';
        event.preventDefault();
        alert("loh")
        let data = {
            "sign_in_user_params": {
              "email": this.state.controls.email.value,
              "password":this.state.controls.password.value,
              "password_confirmation":this.state.controls.passwordre.value
            }
        }
          fetch(urlsign, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        .then(response => response.json())
        .then(json => {
        //ユーザ生成時に以下の情報をローカルストレージに入れる。
        console.log(json)
         window.localStorage.setItem('token', json.token)
         window.localStorage.setItem('id', json.id)
         window.localStorage.setItem('token', json.token)
        }).then(responseData => {
            console.log(responseData);
          })
          .catch(err => {
            console.log(err, err.data);
          })
          if(localStorage.token){
            this.setState({redirectToReferrer: true});
          }
      };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  onChange=(event, controlName)=>{
    const updatedControls = {
        ...this.state.controls,
        [controlName]: {
          ...this.state.controls[controlName],
          value: event.target.value,
          valid: this.checkValidity(
            event.target.value,
            this.state.controls[controlName].validation
          ),
          touched: true
        }
      };
      this.setState({ controls: updatedControls });
   }

    render(){
        if(this.state.redirectToReferrer){
            return(<Redirect to={'/home/'} />)
        }
        const formElementsArray = [];
        for (let key in this.state.controls) {
          formElementsArray.push({
            id: key,
            config: this.state.controls[key]
          });
        }
        const form = formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event=>this.onChange(event,formElement.id)}
          />
        ));
        return(
          <div>
            <p>お帰りなさい！</p>
            <div className={classes.Auth}>
              <form>
                {form}
                <Button clicked={this.SignIn} btnType="Success"> ログイン</Button>
              </form>
              <div className={classes.NavigationItem}>
                <Link to="/signin">新規登録</Link>
              </div>
            </div>
          </div>
        )
    }
}
export default Login;