import { Form } from "react-router-dom"

const LoginForm = () => {
    return (
        <form action="">
            <div className="col-5 container-fluid my-5">
                <div className="mb-3 ">
                    <label htmlFor="user-name-input" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="user-name-input"
                        id=""
                        aria-describedby="helpId"
                        placeholder="Enter user name"
                    />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="user-name-input" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="user-name-input"
                        id=""
                        aria-describedby="helpId"
                        placeholder="Enter password"
                    />
                </div>
                <div class="d-grid gap-2">
                    <button type="button" name="" id="" class="btn btn-primary">Login</button>
                </div>

            </div>

        </form>
    )
}

export default LoginForm