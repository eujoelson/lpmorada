import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="card-depoimento">
                <div className="estrelas">★★★★★</div>
                <p className="depoimento-texto">
                  Ambiente acolhedor, com profissional super qualificados,
                  humanizado por gente que se coloca no lugar da gente, super
                  indico o plano morada da paz, satisfação em fazer parte.
                </p>
                <div className="depoimento-autor">
                  <img
                    src="../morada/Asset/Secao05/ja-removebg.png"
                    alt=""
                    className="autor-foto"
                  />
                  <span className="autor-nome">Jaqueline Monike</span>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="card-depoimento">
                <div className="estrelas">★★★★★</div>
                <p className="depoimento-texto">
                  Um local verdadeiramente acolhedor e respeitoso em todos os
                  detalhes. É realmente diferenciado dos demais, com um
                  atendimento humanizado e um espaço de despedida digno.
                </p>
                <div className="depoimento-autor">
                  <img
                    src="../morada/Asset/Secao05/da-removebg.png"
                    alt=""
                    className="autor-foto"
                  />
                  <span className="autor-nome">Daniel Moura</span>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="card-depoimento">
                <div className="estrelas">★★★★★</div>
                <p className="depoimento-texto">
                  A Morada da Paz Essencial se destacou de forma impressionante
                  em um dos momentos mais difíceis da minha vida. Eles
                  ofereceram uma experiência que foi além das minhas
                  expectativas, proporcionando uma despedida digna e serena para
                  meu ente querido. O cuidado e a atenção que recebi foram
                  excepcionais. Desde o primeiro contato, senti que estava em
                  boas mãos. Eles criaram um ambiente de paz e conforto, que
                  realmente fez diferença no momento da despedida. A segurança e
                  o respeito com que tudo foi conduzido me trouxeram uma
                  tranquilidade imensa, algo que é essencial em um momento tão
                  delicado. A Morada da Paz Essencial foi um verdadeiro apoio,
                  garantindo que cada detalhe fosse pensado e que o momento de
                  luto fosse respeitado com toda a dignidade possível. Sou
                  profundamente grata por todo o cuidado e profissionalismo com
                  que conduziram tudo.
                </p>
                <div className="depoimento-autor">
                  <img
                    src="../morada/Asset/Secao05/ju-removebg.png"
                    alt=""
                    className="autor-foto"
                  />
                  <span className="autor-nome">Julyanne Correia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
