// index.tsx
import { FC } from 'react';
import HelloWorld from '@src/components/helloWorld';

const Home: FC = () => {
  return (
    <div className="bg-green-200">
      <HelloWorld />
    </div>
  );
};

export default Home;
