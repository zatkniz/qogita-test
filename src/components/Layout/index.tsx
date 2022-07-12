import Header from './components/header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className="container mx-auto px-4">
    <div className="mb-2 border-b border-gray-500">
      <Header />
    </div>
    {children}
  </div>
);

export default Layout;