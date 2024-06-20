const ContactUsBtn = ({ btnId }) => {
  return (
    <button
      id={btnId}
      onClick={() => {
        window.open("https://forms.gle/6ZLDGXRLou66p9QBA");
      }}
    >
      Contact Us
    </button>
  );
};

export default ContactUsBtn;
