import SEO from '@components/Seo';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

const Home = (): JSX.Element => {
  return (
    <>
      <SEO title="Home" description="Seja bem vindo a página Rodrigo Godoy Dev, aqui você encontra todo tipo de conteúdo dentro do REACT" />
      <Nav />
      <div className="container mx-auto flex">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/rodrigogodoy.png" alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Home;