const PrivacyText = ({ data }) => {
  return (
    <div className="auto-container">
      <div
        className="text-box"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
};

export default PrivacyText;
