import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="bg-[#f8f5f0] text-[#2c2c2c] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Na Prize Hotéis, somos mais do que uma administradora de hotéis;
                somos parceiros estratégicos comprometidos com a excelência e o
                sucesso de cada empreendimento que gerimos.
              </p>
              <p className="text-lg leading-relaxed">
                Com uma abordagem personalizada e soluções inovadoras, ajudamos
                hotéis independentes a se destacarem em um mercado competitivo,
                melhorando a experiência do hóspede e maximizando a
                rentabilidade.
              </p>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/hotel1.jpg"
                alt="Luxurious hotel lobby"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="border-t border-b border-[#d3cec7] py-12 my-12">
            <h2 className="text-3xl font-light text-center mb-8">
              Nossa Cultura
            </h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Cultivamos uma cultura de respeito e integridade para que nossos
              parceiros e colaboradores se sintam confiantes e à vontade em
              projetos inovadores e promissores. Valorizamos um ambiente
              colaborativo que fortalece a marca dos nossos parceiros e promove
              crescimento inovador.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg leading-relaxed mb-8">
              Nosso time é formado por profissionais com ampla expertise em
              hospitalidade, gestão e marketing, que unem conhecimento e paixão
              para oferecer serviços de alta qualidade.
            </p>
            <p className="text-lg leading-relaxed italic">
              &quot;Acreditamos que cada hotel tem sua própria essência e
              potencial. Nossa missão é revelar essa singularidade,
              transformando-a em uma vantagem competitiva.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
