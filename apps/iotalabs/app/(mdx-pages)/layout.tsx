export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="flex flex-col w-full justify-center items-center py-30">
            <div className="flex container flex-col">{children}</div>
        </div>
    );
}
