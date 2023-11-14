/**
 * L (Liskov Substitution Principle)
 * Subtypes must be substitutable for their base types without altering the correctness of the program.
 */

type Props = {
  submitLabel: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const BadSearch = ({ submitLabel, ...inputProps }: Props) => {
  return (
    <form>
      <input type="text" {...inputProps} />
      <button type="submit">{submitLabel}</button>
    </form>
  );
};
