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

export default function Login() {
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
    <div>
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

        <div
        //  my={4} spacing={2} alignItems="flex-end"
        >
          <ButtonWithLoading type="submit" title={'Sign Up'} />
        </div>
      </form>
      <div
        // gap={2}
        // flexDirection={'row'}
        // justifyContent={'center'}
        // alignItems={'center'}
        width={'100%'}
      >
        <div
        // sx={{
        //   borderTopWidth: 1,
        //   borderTopStyle: 'solid',
        //   width: '100%',
        //   height: '1px',
        //   borderColor: (theme) => theme.palette.text.disabled,
        // }}
        ></div>
        <p color={(theme) => theme.palette.text.secondary}>Or</p>
        <div
        // sx={{
        //   borderTopWidth: 1,
        //   borderTopStyle: 'solid',
        //   width: '100%',
        //   height: '1px',
        //   borderColor: (theme) => theme.palette.text.disabled,
        // }}
        ></div>
      </div>

      <p className="text-sm font-medium text-gray-900">Hello</p>
      <p>
        Already have an account?{' '}
        <p
          onClick={() => {
            navigate('/login');
          }}
        >
          Sign In
        </p>
      </p>
    </div>
  );
}
