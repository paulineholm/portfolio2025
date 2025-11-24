const BubbaPrivacy = () => {
  return (
    <div>
      <h2 className="text-center font-[Melodrama] py-[3dvh] ">
        BubbaBot Privacy Policy 🤖
      </h2>
      <p className="text-start">
        <strong>BubbaBot - Pauline's friendly portfolio assistant</strong> -{" "}
        <em>
          is designed with your privacy in mind. To improve the chatbot’s
          reliability, performance measuring, safety, and overall user
          experience, your messages may be processed by third-party services
          like <ins>HuggingFace</ins> or <ins>Langfuse</ins>. No personal data
          is stored or shared beyond this scope.
          <br />
          <br />
          By using BubbaBot, you consent to this processing. Conversation logs
          may be stored for short periods to support troubleshooting and quality
          improvement.
          <br />
          <br />
          Please avoid entering personal, sensitive, or confidential information
          while using the chatbot. If you have questions or concerns about how
          your data is handled, feel free to reach out via the contact page.
        </em>
      </p>
    </div>
  );
};

export default BubbaPrivacy;
