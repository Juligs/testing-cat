export function Hero({ children }: React.PropsWithChildren) {
    return (
        <div className="w-full flex-1 flex flex-col h-full min-h-full relative z-0">
            <div className="container flex-1 h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}
