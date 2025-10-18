import ErrorImg from "../assets/img/error.png";

const Error = () => {
  return (
    <main className="flex p-[5vh] px-[10vw]">
      <img
        src={ErrorImg}
        alt="Error, wrong path"
        className="w-[30vw] justify-center rounded border-2 border-[var(--color-thina)]"
      />
      <p className="w-[50vw] py-[30vh] px-[2vw] text-center leading-[2.3]">
        Oops, it is a wrong path!
        <br />
        Come back{" "}
        <a href="/" className="text-[var(--color-thina)] hover:underline">
          <b>home</b>
        </a>
      </p>
    </main>
  );
};

export default Error;
