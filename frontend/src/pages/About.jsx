import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Swiftcr'}
      subTitle={translate('Contact us for more information')}
      extra={
        <>
          <p>
            Website : <a href="https://www.dataradar.agency">https://www.dataradar.agency/</a>{' '}
          </p>
          {/* <p>
            GitHub :{' '}
            <a href="">
              https://github.com/idurar/idurar-erp-crm
            </a>
          </p> */}
          <Button
            type="primary"
            onClick={() => {
              window.open(``);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
