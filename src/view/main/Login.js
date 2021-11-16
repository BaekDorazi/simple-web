import React from "react";

const Login = () => {
    return (
        <div className="login-container">
            <h3>Login</h3>

            <div className="login-area">
                <div className="input-area">
                    <div>
                        <input
                            type="text"
                            value=""/>
                    </div>

                    <div>
                        <input
                            type="password"
                            value=""/>
                    </div>
                </div>

                <div className="button-area">
                    <button>로그인</button>
                </div>
            </div>

            <hr/>

            <div>
                <span>아이디찾기</span>
                <span>비밀번호찾기</span>
                <span>회원가입</span>
            </div>
        </div>
    );
}

export default Login;