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
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>Lets get you started</p>
      <p>
        Already have an account?{' '}
        <span
          onClick={() => {
            navigate('/login');
          }}
        >
          Sign In
        </span>
      </p>

      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <div
        // sgap={3}
        >
          <HookTextField control={control} name="email" label="Email" />
          <HookTextField
            control={control}
            type="password"
            name="password"
            label="Password"
          />
          <HookTextField
            control={control}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
        </div>

        <div>
          <ButtonWithLoading type="submit" title={'Sign Up'} />
        </div>
      </form>
      <div width={'100%'}>
        <div></div>
        <p color={(theme) => theme.palette.text.secondary}>Or</p>
        <div></div>
      </div>

      <p className="text-sm font-medium text-gray-900">Hello</p>

      <p>
        I agree to the <span>Terms and Conditions</span> and{' '}
        <span>Privacy Policy</span> of this app.
      </p>
    </div>
  );
}
