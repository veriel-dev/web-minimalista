import { memo } from 'react';
import { NotFoundContent } from '../components/notFoundOutline';
import { HeadSEO } from '../components';

const NotFoundPageOutline = memo(() => {
  return (
    <>
      <HeadSEO
        title="404 - Página no encontrada | Veriel Dev"
        description="La página que buscas no existe o ha sido movida."
        keywords="404, error, página no encontrada"
      />
      <NotFoundContent />
    </>
  );
});

export default NotFoundPageOutline;
