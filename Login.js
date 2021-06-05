import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    login()
    {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp", resp)
                if(resp.length>0){
                    console.warn(this.props.history.push('list'))
                }
                else{
                    alert("pelase check username and password")
                }
            })  
        })
    }
    render(){
        return(
            <div className="container">
            <div className="screen">
                <div className="screen__content">
               <div className="mt-5 size_h1">
               <h1>Login </h1>
               </div>
                <div className="login_box">
               
                <div className="login__field">
                <input type="text" placeholder="Enter Name" name="user" className="login__input" onChange={(event)=>this.setState({name:event.target.value})} /> <br/><br/>
                </div>
                <div className="login__field">
                <input type="password"  placeholder="Enter Password" className="login__input" name="password" onChange={(event)=>this.setState({password:event.target.value})} /><br/><br/>

                </div>
                <div className="button login__submit">
                <button className="button__icon fas fa-chevron-right" onClick={()=>{this.login()}}>Login</button>
                </div>
            </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;