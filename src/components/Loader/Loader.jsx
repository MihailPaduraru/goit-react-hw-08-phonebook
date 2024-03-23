import { ThreeDots } from 'react-loader-spinner';

import { LoaderWrapp } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapp>
      <ThreeDots
        height="90"
        width="90"
        radius="5"
        color="#0080ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapp>
  );
};

export default Loader;
