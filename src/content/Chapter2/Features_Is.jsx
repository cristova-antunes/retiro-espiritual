import img from "../../assets/prints/where.png";

export default function Features_Is() {
  return (
    <section data-chapter="2" id="features_is">
      <h1>Features</h1>
      <h2>:is() && :where()</h2>
      <div>
        <img src={img} alt="Imagem da pseudo class Where" width={500} />
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:is">:is()</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where">
          :where()
        </a>
      </div>
    </section>
  );
}
