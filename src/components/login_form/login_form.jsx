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
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="text-danger">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="text-danger">Email is not valid.</p>
                    )}
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
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.password && errors.password.type === "required" && (
                        <p className="text-danger">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="text-danger">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" name="" id="" class="btn btn-primary">Login</button>
                </div>

            </div>

        </form>
    )
}

export default LoginForm