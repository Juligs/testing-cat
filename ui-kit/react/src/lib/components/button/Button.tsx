type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export function Button({ children, type = 'button', ...buttonProps }: ButtonProps) {
    return (
        <button type={type} className="border border-black/40" {...buttonProps}>
            {children}
        </button>
    );
}
