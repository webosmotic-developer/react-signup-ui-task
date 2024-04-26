import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonWithLoading from '../../components/common/ButtonWithLoading';
import { RHFCheckbox } from '../../components/hook-form-fields/HookCheckBoxField';
import { HookTextField } from '../../components/hook-form-fields/HookTextField';
import validationSchemas from '../../utils/validationSchemas';
const validationSchema = yup.object({
  email: validationSchemas.email,
  username: validationSchemas.username,
  password: validationSchemas.password,
  confirmPassword: validationSchemas.confirmPassword,
  bDate: validationSchemas.bDate,
  tnc: validationSchemas.tnc,
});

export default function SignUp() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      bDate: '',
      password: '',
      confirmPassword: '',
      tnc: false,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div className="px-4 py-2 flex justify-center">
      <div className="max-w-xs">
        <p className="text-28 font-semibold leading-8 mt-11 mb-4">
          Lets get you started
        </p>
        <p className="text-base mb-6">
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
              placeholder="Enter username"
            />
            <HookTextField
              control={control}
              type="date"
              name="bDate"
              label="Date of birth"
              max={new Date().toISOString().split('T')[0]}
              placeholder="DD / MM / YYYY"
            />
            <HookTextField
              control={control}
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter email address"
            />
            <HookTextField
              control={control}
              type="password"
              name="password"
              label="Password"
              placeholder="Enter password"
            />
            <HookTextField
              control={control}
              type="password"
              name="confirmPassword"
              label="Confirm password"
              placeholder="Confirm password"
            />
          </div>

          <div className="flex align-middle mb-91 gap-4">
            {' '}
            <div className="flex items-center">
              {' '}
              <RHFCheckbox name={'tnc'} control={control} />
            </div>{' '}
            <p className="text-base">
              {' '}
              I agree to the{' '}
              <a className="font-base text-linkColor underline" href="/toc">
                {' '}
                Terms and Conditions{' '}
              </a>{' '}
              and{' '}
              <a
                className="font-base text-linkColor underline"
                href="/privacy-policy"
              >
                {' '}
                Privacy Policy{' '}
              </a>{' '}
              of this app.{' '}
            </p>{' '}
          </div>
          <ButtonWithLoading
            disabled={!isValid || !!Object.keys(errors).length}
            type="submit"
            title={'Create Account'}
          />
        </form>
      </div>
    </div>
  );
}
