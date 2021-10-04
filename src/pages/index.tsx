import SEO from '@components/Seo';
import Header from '@/src/shared/components/Header';
import Footer from '@components/Footer';

const Home = (): JSX.Element => {
  return (
    <>
      <SEO title="Página Inicial" description="Seja bem vindo a página Rodrigo Godoy Dev, aqui você encontra todo tipo de conteúdo dentro do REACT" />
      <Header />
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-primary">Sejam bem vindos</h1>
      </div>
      <Footer />
    </>
  )
};

export default Home;
