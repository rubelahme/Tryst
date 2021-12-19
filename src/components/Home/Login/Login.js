import React from "react";
import { useForm } from "react-hook-form";
import img1 from "../../Img/Capture1.PNG";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <>
      <span className="sing">Log</span>
      <span className="up"> in</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pe-3 Email">
          {" "}
          <label htmlFor="kka" className="fw-bold">
            * Email
          </label>
          <input className="form-control" {...register("example")} />
        </div>
        <div className="pe-3 Email">
          <label htmlFor="jaa" className="fw-bold">
            * Password
          </label>
          <input
            className="form-control"
            {...register("exampleRequired", { required: true })}
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="pe-3 Email">
          <label htmlFor="jaa" className="fw-bold">
            * Please enter the characters shown inside the blue box
          </label>
          <div>
            {" "}
            <img className="imgPic mb-1" src={img1} alt="" />
          </div>
          <input
            className="form-control"
            {...register("exampleRequired", { required: true })}
          />
        </div>
        <div class="form-check Email">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label fw-bold" for="flexCheckDefault">
            Remember me for 14 days
          </label>
        </div>

        <div className="text-center Email">
          {" "}
          <input className="Provider1" type="submit" value="Log in" />
        </div>
      </form>
      <div className="mt-5 text-center ">
        <button className="btn btn-outline-danger">
          {" "}
          Forgot your password?{" "}
        </button>
      </div>
      <div className="mt-2 mb-5 text-center ">
        <button className="btn btn-outline-danger">
          {" "}
          Didn't receive confirmation instructions?
        </button>
      </div>
    </>
  );
};

export default Login;
