import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonWithLoading from '../../components/common/ButtonWithLoading';
import { HookTextField } from '../../components/hook-form-fields/HookTextField';
import validationSchemas from '../../utils/validationSchemas';
const validationSchema = yup.object({
  email: validationSchemas.usernameEmail,
  password: validationSchemas.password,
  confirmPassword: validationSchemas.confirmPassword,
});

export default function SignUp() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      date: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div className="px-4 py-2">
      <p className="text-28 font-semibold leading-8 mt-4 mb-2">
        Lets get you started
      </p>
      <p className="text-base mb-3">
        Already have account?{' '}
        <span
          className="font-medium text-linkColor ml-1"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </span>
      </p>

      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <div>
          <HookTextField
            control={control}
            name="username"
            label="Username"
            placeHolder="Enter username"
          />
          <HookTextField
            control={control}
            type="date"
            name="bDate"
            label="Date of birth"
            placeHolder="DD / MM / YYYY"
          />
          <HookTextField
            control={control}
            type="email"
            name="email"
            label="Email address"
            placeHolder="Enter email address"
          />
          <HookTextField
            control={control}
            type="password"
            name="password"
            label="Password"
            placeHolder="Enter password"
          />
          <p className="text-14 leading-5 text-helperGray mb-3">
            Password should contain at least 8 characters, 1 special symbol
            character, 1 number, 1 uppercase letter
          </p>
          <HookTextField
            control={control}
            type="password"
            name="confirmPassword"
            label="Confirm password"
            placeHolder="Confirm password"
          />
        </div>

        <p className="text-base mb-11">
          I agree to the{' '}
          <a className="font-base text-linkColor underline" href="/toc">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a
            className="font-base text-linkColor underline"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>{' '}
          of this app.
        </p>
        <ButtonWithLoading type="submit" title={'Create Account'} />
      </form>
    </div>
  );
}
