import { useForm } from 'react-hook-form';
const RegistrationForm = () => {
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onRegisterButtonPressed = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <form onSubmit={handleSubmit(onRegisterButtonPressed)}>
            <div className="col-5 container-fluid my-5">
                <div className="mb-3 ">
                    <label htmlFor="email-input" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="email-input"
                        id=""
                        aria-describedby="helpId"
                        placeholder="Enter email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" }
                        })}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}

                </div>
                <div className="mb-3 ">
                    <label htmlFor="password-input" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="email-input"
                        id=""
                        aria-describedby="helpId"
                        placeholder="Enter password"
                        {...register("password", {
                            required: "Password is required",
                            minLength:
                            {
                                value: 6,
                                message: "Password should be at least 6 characters"
                            }
                        })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <div className="mb-3 ">
                    <label htmlFor="confirm-password-input" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="email-input"
                        id=""
                        aria-describedby="helpId"
                        placeholder="Confirm Password"
                        {...register("confirm_password", {
                            required: "Password is required",
                            validate: (value) => {
                                if (watch('password') !== value) {
                                    return "Your passwords do no match";
                                }

                            },
                        })}
                    />
                    {errors.confirm_password && <p className="text-danger">{errors.confirm_password.message}</p>}
                </div>

                <>
                    <div className="form-check">
                        <input
                            {...register("gender-check")}
                            className="form-check-input"
                            type="radio"
                            value="male"
                            name="gender-check"
                            id="male" />
                        <label className="form-check-label" htmlFor="">Male</label>
                    </div>
                    <div className="form-check">
                        <input
                            {...register("gender-check")}
                            className="form-check-input"
                            type="radio"
                            name="gender-check"
                            id="female"
                            defaultChecked=""
                            disabled=""
                            value="female"
                        />
                        <label className="form-check-label" htmlFor="">Female</label>
                    </div>
                </>


                <div class="d-grid gap-2">
                    <button type="submit" name="" id="" class="btn btn-primary">Login</button>
                </div>

            </div>

        </form>
    )
}

export default RegistrationForm