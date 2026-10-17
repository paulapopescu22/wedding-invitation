export default function LocationCard() {
  return (
    <section className="location">
      <span className="location__icon" aria-hidden="true">
        ⚜
      </span>
      <h2 className="location__title">Locația Evenimentului</h2>
      <p className="location__text">
        Nunta noastră va avea loc la <strong>Castelul Bran</strong>, într-un cadru de poveste.
      </p>
      <a
        className="location__link"
        href="https://www.google.com/maps/search/?api=1&query=Castelul+Bran"
        target="_blank"
        rel="noreferrer"
      >
        Vezi pe hartă →
      </a>
    </section>
  );
}
