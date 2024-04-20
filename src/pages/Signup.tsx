import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@leecheuk/react-google-login";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { zodResolver } from "@hookform/resolvers/zod";
import images from "../constants";
import { z, ZodType } from "zod";
import { createUser } from "../api/apiService";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password: string;
  confirmPassword: string;
};
interface User {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      phone: z.number(),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // function onError(errors: any) {
  //   console.log(errors);
  // }

  const onSubmit = async (data: FormData) => {
    const newUser: Partial<User> = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone:  data.phone,
      email: data.email,
      password: data.password,
    };

    try {
      const createdUser: User = await createUser(newUser);
      console.log(createdUser);
      navigate(`/home`)
    } catch (error) {
      console.log("error");
    }
  };

  const googleSuccess = () => {
    // const result =  res?.profileObj;
    // const token = res?.tokenId;
    // console.log(token)
    // console.log(result)
    // try{
    //   dispatch({type:'AUTH', data: {result, token}});
    //   navigate('/dashboard');
    // }catch(err){
    //   console.log(err)
    // }
  };

  const googleFailure = () => {
    // console.log(error);
    // console.log('Google Sign In was unsuccessful. Try Again Later');
  };
  return (
    <Flex className="justify-center items-center space-y-6 flex-col mt-12">
      <img src={images.Today} className="sm:w-[70px] w-[50px]" alt="logo" />
      <Flex className="border border-[#D0D0D0] rounded-lg">
        <Flex className=" space-y-5 flex-col py-5 ">
          <h2 className="font-semibold text-[#2BA0AF] text-center text-3xl">
            Signup
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex className="flex-col px-10  space-y-3 w-[130%]">
              <Flex className="md:space-x-3 justify-start md:flex-row flex-col space-y- w-[74%]">
                <Flex className="flex-col">
                  <input
                    type="text"
                    placeholder="FirstName"
                    className="my-1.5"
                    {...register("firstName", {
                      required: "This field is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </Flex>
                <Flex className="flex-col">
                  <input
                    type="text"
                    placeholder="LastName"
                    className="my-1"
                    {...register("lastName", {
                      required: "This field is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </Flex>
              </Flex>
              <Flex className="flex-col">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-[74%]"
                  {...register("phone", { valueAsNumber: true })}
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}
              </Flex>
              <Flex className="flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[74%]"
                  {...register("email", {
                    required: "This field is required",
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </Flex>
              <Flex className="flex-col">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[74%]"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </Flex>
              <Flex className="flex-col">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-[74%]"
                  {...register("confirmPassword", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </Flex>
              <Flex className="flex-col ">
                <button
                  type="submit"
                  className=" bg-[#2BA0AF] text-white w-[30%] py-2 rounded-lg"
                >
                  Signup
                </button>
              </Flex>
            </Flex>
          </form>
          <Flex className="flex-col items-center space-y-2">
            <p className="text-[#909090]">or Signup with</p>
            <Flex className="flex-col space-y-2  md:w-[50%] w-[70%]">
              <GoogleLogin
                clientId="164349303431-baknj25ut3na4gtkjcglupc0ib01i75p.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    size="large"
                    color="primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <Flex className="items-center space-x-16 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                      <p className="text-[#707070] text-[1rem]">Google</p>
                    </Flex>
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
              <FacebookLogin
                appId="1088597931155576"
                onSuccess={(response) => {
                  console.log("Login Success!", response);
                }}
                render={(renderProps) => (
                  <Button
                    size="large"
                    color="primary"
                    onClick={renderProps.onClick}
                    // disabled={renderProps.disabled}
                    className="text-center py-2 rounded-lg border text-[#707070]  border-[#c8bbbb]"
                  >
                    <Flex className="items-center space-x-16 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="#476fd6"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                        >
                          <g transform="scale(8,8)">
                            <path d="M19.25391,2c-3.942,0 -6.25391,2.08217 -6.25391,6.82617v4.17383h-5v5h5v12h5v-12h4l1,-5h-5v-3.32812c0,-1.787 0.58277,-2.67187 2.25977,-2.67187h2.74023v-4.79492c-0.474,-0.064 -1.85509,-0.20508 -3.74609,-0.20508z"></path>
                          </g>
                        </g>
                      </svg>
                      <p className="text-[#707070] text-[1rem]">Facebook</p>
                    </Flex>
                  </Button>
                )}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Signup;
