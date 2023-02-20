const TermsText = ({ data }) => {
  return (
    <div class="auto-container">
      <div
        className="text-box"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
};

export default TermsText;
