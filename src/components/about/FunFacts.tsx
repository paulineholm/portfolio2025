const FunFacts = () => {
  const paragraphStyles = "max-md:pb-3 max-md:font-extralight max-md:text-sm";

  return (
    <section className="w-screen text-center tracking-wider leading-[2.3] my-[5dvh] max-md:px-10">
      <h2 className="text-2xl mb-2 text-[var(--color-thina)]">fun facts</h2>
      <article>
        <p className={paragraphStyles}>
          👩🏻‍🍳 Huge foodie, passionate amateur chef; can sable a champagne
        </p>
        <p className={paragraphStyles}>
          🧠 Linguistic mind who can read from right to left in a different
          alphabet
        </p>
        <p className={paragraphStyles}>
          🎨 Interested in UI/UX and product development
        </p>
        <p className={paragraphStyles}>
          🔐 A diploma & master thesis in Cyber Security
        </p>
        <p className={paragraphStyles}>
          ✈️ I never flew Business Class, but I flew Hercules
        </p>
      </article>
    </section>
  );
};

export default FunFacts;
