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
    <div>
      <p>Lets get you started</p>
      <p>
        Already have account?{' '}
        <span
          className="text-4xl"
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
          <HookTextField control={control} name="username" label="Username" />
          <HookTextField
            control={control}
            type="date"
            name="bDate"
            label="date of birth"
          />
          <HookTextField
            control={control}
            type="email"
            name="email"
            label="Email address"
          />
          <HookTextField
            control={control}
            type="password"
            name="password"
            label="Enter password"
          />
          <p>
            Password should contain at least 8 characters, 1 special symbol
            character, 1 number, 1 uppercase letter
          </p>
          <HookTextField
            control={control}
            type="password"
            name="confirmPassword"
            label="Confirm password"
          />
        </div>

        <p>
          I agree to the{' '}
          <span onClick={() => navigate('/toc')}>Terms and Conditions</span> and{' '}
          <span onClick={() => navigate('/privacy-policy')}>
            Privacy Policy
          </span>{' '}
          of this app.
        </p>
        <ButtonWithLoading type="submit" title={'Create Account'} />
      </form>
    </div>
  );
}
