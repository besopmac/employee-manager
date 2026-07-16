import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../hooks/useAuth';

const loginSchema = z.object({
  email: z.email('Email inválido').min(1, 'Informe o email'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setFormError(null);

    try {
      await login(data);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : 'Não foi possível entrar.'
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-semibold text-gray-900">
          Employee Manager
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Entre com suas credenciais para continuar
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            label="Senha"
            type="password"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register('password')}
          />

          {formError && <p className="text-sm text-red-600">{formError}</p>}

          <Button type="submit" isLoading={isSubmitting} className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
