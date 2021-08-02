import React, {useCallback, useState, useEffect} from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

//초기 값 설명 객체
//입력 필드의 이름 값과 일치
const initialValues = {
    email: "",
    password: "",
    password2: ""
}

const ValidationTest = () => {
    //사용자가 입력 필드에 입력 한 데이터 보유
    const [formValues, setFormValues] = useState(initialValues);

    //각 입력 필드에 대한 오류 보유
    const [formErrors, setFormErrors] = useState({});

    //양식이 제출 중인지 여부 추적적
    const [isSubmitting, setIsSubmitting] = useState(false);

    //////////////////////////////////////////////////////////////////////////////////

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    //데이터 폼 유효성 검사 처리하는 함수
    /**
     * @memberOf asd
     * @param {number}
     * @type {function(*): {}}
     */
    const validate = useCallback((values) => {
        let errors = {};

        //이메일 정규식
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        //이메일 값 없는 경우
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) { //정규식에 어긋나는 경우
            errors.email = "Invalid email format";
        }

        //비밀번호 값 없는 경우
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) { //비밀번호 길이 4자 보다 작은 경우
            errors.password = "Password must be more than 4 characters";
        }

        return errors;
    }, []);

    const submitForm = useCallback(() => {
        console.log("사용자 제출 : ", formValues)
    }, [formValues]);

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars minimum"),
    });

    const schema = Yup.object().shape({
        email: Yup.string().email().required("이메일 입력해주세요."),
        password: Yup.string().required("비밀번호 입력해주세요.").max(12, "비밀번호는 12자리 이하여야 합니다.").min(8, "비밀번호는 8자리 이상이여야 합니다."),
        password2: Yup.string().required("비밀번호 확인 해주세요").oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    })

    //////////////////////////////////////////////////////////////////////////////////

    // 폼태그에 값이 0 이거나, isSubmitting 이 false 상태일 때,
    //submitForm을 누르면 [formErrors]가 마운트 되도록!
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors, isSubmitting, submitForm]);


    //////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <h1>Formit</h1>

            {Object.keys(formErrors).length === 0 && isSubmitting && (
                <span className="success-msg">Signed in successfully</span>
            )}

            {/*버튼을 누르면 이 폼에 데이터들이 제출되도록 handleSubmit*/}
            <form onSubmit={handleSubmit} noValidate>
                {/*이메일 검사*/}
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={formErrors.email && "input-error"}
                    />

                    {/*에러시*/}
                    {formErrors.email && (
                        <span className="error">{formErrors.email}</span>
                    )}
                </div>

                {/*비밀번호 검사*/}
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                        className={formErrors.password && "input-error"}/>

                    {/*에러시*/}
                    {formErrors.password && (
                        <span className="error">{formErrors.password}</span>
                    )}
                </div>
                <button type="submit">Sign In</button>
            </form>

            <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}>

                {(formik) => {
                    const {errors, touched, isValid, dirty} = formik;
                    return (
                        <div className="container">
                            <h1>Formik + Yup</h1>
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={errors.email && touched.email ? "input-error" : null}/>

                                    <ErrorMessage name="email" component="span" className="error"/>
                                </div>

                                <div className="form-row">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        className={errors.password && touched.password ? "input-error" : null}/>

                                    <ErrorMessage name="password" component="span" className="error"/>
                                </div>

                                <button
                                    type="submit"
                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                    disabled={!(dirty && isValid)}>
                                    Sign In
                                </button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>

            <h1>Yup</h1>

            <div>
                {/*이메일 검사*/}
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                        signInSchemzz ={schema.email}
                        type="email"
                        name="email"
                        id="email"
                        // value={formValues.email}
                        // onChange={handleChange}
                        className={formErrors.email && "input-error"}/>

                    {/*에러시*/}
                    {formErrors.email && (
                        <span className="error">{formErrors.email}</span>
                    )}
                </div>

                {/*비밀번호 검사*/}
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        // value={formValues.password}
                        // onChange={handleChange}
                        className={formErrors.password && "input-error"}/>
                </div>

                {/*비밀번호2 검사*/}
                <div className="form-row">
                    <label htmlFor="password">Password2</label>
                    <input
                        type="password"
                        name="password2"
                        id="password2"
                        // value={formValues.password}
                        // onChange={handleChange}
                        className={formErrors.password2 && "input-error"}/>
                </div>
            </div>
        </>
    );
}

export default ValidationTest;