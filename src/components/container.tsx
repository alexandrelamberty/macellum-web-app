const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>;
};

type ContainerHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

Container.Header = ({ title, children }: ContainerHeaderProps) => {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex items-center space-x-2">{children}</div>
    </div>
  );
};

export default Container;
