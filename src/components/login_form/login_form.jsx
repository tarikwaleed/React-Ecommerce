import { useForm } from 'react-hook-form';
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onLoginButtonPressed = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onLoginButtonPressed)}>
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
                    <label htmlFor="email-input" className="form-label">
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
                <div class="d-grid gap-2">
                    <button type="submit" name="" id="" class="btn btn-primary">Login</button>
                </div>

            </div>

        </form>
    )
}

export default LoginForm