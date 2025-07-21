import { cn } from '../../../../libs/utils';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  name: string;
  error: string | undefined;
}
export const Input = ({
  value,
  handleChange,
  required = false,
  type,
  placeholder,
  name,
  error,
}: Props) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        className={cn(
          'w-full px-4 py-2 border-2  bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-green-500 placeholder:text-green-500',
          error
            ? 'border-red-500 placeholder:text-red-500'
            : ' border-green-400/70 placeholder:text-green-400/70',
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </>
  );
};
