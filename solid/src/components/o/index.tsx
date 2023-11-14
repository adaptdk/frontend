/**
 * O (Open Closed Principle)
 * Software entities should be open for extension, but closed for modification.
 */

type Props = {
  children: React.ReactNode;
  emoji: React.ReactNode;
};

export function GoodButton({ children, emoji }: Props) {
  return (
    <button>
      {children}
      <span>{emoji}</span>
    </button>
  );
}

<GoodButton emoji="👍">Like</GoodButton>;
